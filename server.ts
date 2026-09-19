import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { GoogleGenAI, Type } from '@google/genai';
import { createServer as createViteServer } from 'vite';
import { Pool } from 'pg';

dotenv.config();

const app = express();
const PORT = 3000;
const env = process.env as Record<string, string | undefined>;

// Подключение к PostgreSQL (Neon)
const pool = new Pool({
  connectionString: env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});
// Отправка сообщения в Telegram
async function sendTelegramMessage(chatId: number, text: string) {
  const botToken = env.TELEGRAM_BOT_TOKEN;
  if (!botToken) return;
  
  await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text, parse_mode: 'HTML' })
  });
}
// Создаём таблицы при старте
async function initDatabase() {
  try {
    // Таблица подписок
    await pool.query(`
      CREATE TABLE IF NOT EXISTS subscriptions (
        user_id BIGINT PRIMARY KEY,
        expires_at BIGINT NOT NULL,
        updated_at TIMESTAMP DEFAULT NOW()
      )
    `);
    
    // Таблица всех пользователей бота
    await pool.query(`
      CREATE TABLE IF NOT EXISTS bot_users (
        user_id BIGINT PRIMARY KEY,
        username TEXT,
        first_name TEXT,
        last_interaction TIMESTAMP DEFAULT NOW()
      )
    `);
        // Таблица конкурсов
    await pool.query(`
      CREATE TABLE IF NOT EXISTS battles (
        id SERIAL PRIMARY KEY,
        theme TEXT,
        started_at TIMESTAMP DEFAULT NOW(),
        ends_at TIMESTAMP,
        status TEXT DEFAULT 'active',
        winner_entry_id INTEGER,
        created_at TIMESTAMP DEFAULT NOW()
      )
    `);

    // Таблица блюд-участников
    await pool.query(`
      CREATE TABLE IF NOT EXISTS battle_entries (
        id SERIAL PRIMARY KEY,
        battle_id INTEGER REFERENCES battles(id),
        user_id BIGINT NOT NULL,
        title TEXT NOT NULL,
        description TEXT,
        photo_url TEXT,
        votes INTEGER DEFAULT 0,
        created_at TIMESTAMP DEFAULT NOW()
      )
    `);

    // Таблица голосов за блюда
    await pool.query(`
      CREATE TABLE IF NOT EXISTS battle_votes (
        id SERIAL PRIMARY KEY,
        entry_id INTEGER REFERENCES battle_entries(id),
        user_id BIGINT NOT NULL,
        created_at TIMESTAMP DEFAULT NOW(),
        UNIQUE(entry_id, user_id)
      )
    `);

    // Таблица голосов за дату окончания
    await pool.query(`
      CREATE TABLE IF NOT EXISTS battle_date_votes (
        id SERIAL PRIMARY KEY,
        battle_id INTEGER REFERENCES battles(id),
        user_id BIGINT NOT NULL,
        days INTEGER NOT NULL,
        created_at TIMESTAMP DEFAULT NOW(),
        UNIQUE(battle_id, user_id)
      )
    `);

    // Таблица рейтинга поваров
    await pool.query(`
      CREATE TABLE IF NOT EXISTS chef_ratings (
        user_id BIGINT PRIMARY KEY,
        username TEXT,
        first_name TEXT,
        points INTEGER DEFAULT 0,
        wins INTEGER DEFAULT 0,
        updated_at TIMESTAMP DEFAULT NOW()
      )
    `);
    console.log('✅ База данных готова');
  } catch (error) {
    console.error('❌ Ошибка инициализации БД:', error);
  }
}
app.use(express.json());
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  if (req.method === 'OPTIONS') return res.sendStatus(204);
  next();
});

// Initialize Gemini client lazily
function getGeminiClient() {
  const apiKey = env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error('GEMINI_API_KEY is not configured');
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

const recipeCategories = new Set(['dishes', 'drinks', 'pastry', 'salads', 'marinades', 'sauces']);

function normalizeGeneratedRecipe(rawText: string, requestedServings: number) {
  const jsonText = rawText.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/i, '').trim();
  const parsed = JSON.parse(jsonText);
  const ingredients = Array.isArray(parsed.ingredients)
    ? parsed.ingredients.filter((ingredient: any) => ingredient && typeof ingredient.name === 'string')
    : [];
  const instructions = Array.isArray(parsed.instructions)
    ? parsed.instructions.filter((step: any) => step && typeof step.instruction === 'string')
    : [];

  if (!parsed.title || !parsed.description || ingredients.length === 0 || instructions.length === 0) {
    throw new Error('AI вернул неполный рецепт. Попробуйте сформулировать запрос иначе.');
  }

  return {
    id: `ai-recipe-${Date.now()}`,
    title: String(parsed.title),
    category: recipeCategories.has(parsed.category) ? parsed.category : 'dishes',
    description: String(parsed.description),
    prepTime: Number(parsed.prepTime) || 15,
    cookTime: Number(parsed.cookTime) || 30,
    difficulty: ['Легко', 'Средне', 'Профи'].includes(parsed.difficulty) ? parsed.difficulty : 'Средне',
    servings: Number(parsed.servings) || requestedServings,
    tags: Array.isArray(parsed.tags) ? parsed.tags.map(String).slice(0, 8) : [],
    ingredients,
    instructions: instructions.map((step: any, index: number) => ({
      stepNumber: index + 1,
      instruction: String(step.instruction),
      timerSeconds: Number(step.timerSeconds) || undefined,
      tip: step.tip ? String(step.tip) : undefined,
    })),
    chefSecrets: Array.isArray(parsed.chefSecrets) ? parsed.chefSecrets.map(String).slice(0, 6) : [],
    techCard: parsed.techCard || {
      dishYield: `${requestedServings} порции`,
      kzhbu: { calories: 0, proteins: 0, fats: 0, carbs: 0 },
    },
    isAiGenerated: true,
  };
}

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    hasApiKey: Boolean(env.GEMINI_API_KEY),
  });
});

// Создание счёта на подписку через Telegram Stars
app.post('/api/create-subscription-invoice', async (req, res) => {
  try {
    const { userId } = req.body;
    
    if (!userId) {
      return res.status(400).json({ error: 'User ID не указан' });
    }

    const botToken = env.TELEGRAM_BOT_TOKEN;
    if (!botToken) {
      throw new Error('TELEGRAM_BOT_TOKEN не настроен');
    }

    const response = await fetch(`https://api.telegram.org/bot${botToken}/createInvoiceLink`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: 'Premium доступ на 30 дней',
        description: 'Все AI-функции без ограничений',
        payload: `sub_${userId}_${Date.now()}`,
        currency: 'XTR',
        prices: [{ label: 'Premium', amount: 100 }],
        subscription_period: 2592000
      })
    });

    const data = await response.json();
    
    if (!data.ok) {
      throw new Error(data.description || 'Ошибка создания счёта');
    }

    res.json({ invoiceLink: data.result });
  } catch (error: any) {
    console.error('Error creating invoice:', error);
    res.status(500).json({ error: error.message || 'Ошибка создания счёта' });
  }
});

// Проверка статуса подписки
app.get('/api/check-subscription', async (req, res) => {
  try {
    const userId = Number(req.query.userId);
    
    if (!userId) {
      return res.status(400).json({ error: 'User ID не указан' });
    }

    const result = await pool.query(
      'SELECT expires_at FROM subscriptions WHERE user_id = $1',
      [userId]
    );
    
    if (result.rows.length === 0) {
      return res.json({ isPremium: false, expiresAt: null });
    }
    
    const expiry = Number(result.rows[0].expires_at);
    const isPremium = expiry > Date.now();
    
    res.json({ 
      isPremium,
      expiresAt: new Date(expiry).toISOString()
    });
  } catch (error: any) {
    console.error('Error checking subscription:', error);
    res.status(500).json({ error: error.message });
  }
});

// Всего пользователей
app.get('/api/stats', async (req, res) => {
  try {
    const totalResult = await pool.query('SELECT COUNT(*) FROM bot_users');
    const total = Number(totalResult.rows[0].count);
    
    const premiumResult = await pool.query(
      'SELECT COUNT(*) FROM subscriptions WHERE expires_at > $1',
      [Date.now()]
    );
    const premium = Number(premiumResult.rows[0].count);
    
    res.json({ total, premium });
  } catch (error: any) {
    console.error('Stats error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Список всех пользователей (только для админа)
app.get('/api/users-list', async (req, res) => {
  try {
    const { adminId } = req.query;
    
    if (Number(adminId) !== 988368940) {
      return res.status(403).json({ error: 'Доступ запрещён' });
    }
    
    const result = await pool.query(
      'SELECT user_id, username, first_name, last_interaction FROM bot_users ORDER BY last_interaction DESC'
    );
    
// Текущий конкурс
app.get('/api/battle/current', async (req, res) => {
  try {
    const userId = Number(req.query.userId) || 0;
    
    // Находим активный конкурс
    let battleResult = await pool.query(
      "SELECT * FROM battles WHERE status = 'active' ORDER BY id DESC LIMIT 1"
    );
    
    // Если нет активного — создаём новый
    if (battleResult.rows.length === 0) {
      const newBattle = await pool.query(
        "INSERT INTO battles (theme, ends_at) VALUES ($1, $2) RETURNING *",
        ['Блюдо дня', new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)]
      );
      battleResult = { rows: newBattle.rows } as any;
    }
    
    const battle = battleResult.rows[0];
    
    // Получаем блюда-участники
    const entriesResult = await pool.query(
      `SELECT e.id, e.title, e.description, e.photo_url, 
              COUNT(v.id) as vote_count
       FROM battle_entries e
       LEFT JOIN battle_votes v ON v.entry_id = e.id
       WHERE e.battle_id = $1
       GROUP BY e.id
       ORDER BY vote_count DESC, e.created_at ASC`,
      [battle.id]
    );
    
    // Проверяем, голосовал ли уже пользователь
    let userVotes: number[] = [];
    if (userId) {
      const votesResult = await pool.query(
        'SELECT entry_id FROM battle_votes WHERE user_id = $1 AND entry_id IN (SELECT id FROM battle_entries WHERE battle_id = $2)',
        [userId, battle.id]
      );
      userVotes = votesResult.rows.map(r => r.entry_id);
    }
    
    // Голоса за дату окончания
    const dateVotesResult = await pool.query(
      `SELECT days, COUNT(*) as count FROM battle_date_votes 
       WHERE battle_id = $1 GROUP BY days ORDER BY count DESC`,
      [battle.id]
    );
    
    res.json({
      battle: {
        id: battle.id,
        theme: battle.theme,
        endsAt: battle.ends_at,
      },
      entries: entriesResult.rows,
      userVotes,
      dateVotes: dateVotesResult.rows,
    });
  } catch (error: any) {
    console.error('Battle error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Предложить блюдо
app.post('/api/battle/submit', async (req, res) => {
  try {
    const { userId, title, description } = req.body;
    
    if (!userId || !title) {
      return res.status(400).json({ error: 'Укажите название блюда' });
    }
    
    const battleResult = await pool.query(
      "SELECT id FROM battles WHERE status = 'active' ORDER BY id DESC LIMIT 1"
    );
    
    if (battleResult.rows.length === 0) {
      return res.status(400).json({ error: 'Нет активного конкурса' });
    }
    
    const battleId = battleResult.rows[0].id;
    
    await pool.query(
      'INSERT INTO battle_entries (battle_id, user_id, title, description) VALUES ($1, $2, $3, $4)',
      [battleId, userId, title, description || null]
    );
    
    res.json({ ok: true });
  } catch (error: any) {
    console.error('Submit error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Голосовать за блюдо
app.post('/api/battle/vote', async (req, res) => {
  try {
    const { userId, entryId } = req.body;
    
    if (!userId || !entryId) {
      return res.status(400).json({ error: 'Неверные данные' });
    }
    
    // Проверяем, что пользователь не голосует за своё блюдо
    const entryResult = await pool.query(
      'SELECT user_id FROM battle_entries WHERE id = $1',
      [entryId]
    );
    
    if (entryResult.rows.length === 0) {
      return res.status(404).json({ error: 'Блюдо не найдено' });
    }
    
    if (entryResult.rows[0].user_id === userId) {
      return res.status(400).json({ error: 'Нельзя голосовать за своё блюдо' });
    }
    
    // Голосуем (UNIQUE не даст проголосовать дважды)
    await pool.query(
      'INSERT INTO battle_votes (entry_id, user_id) VALUES ($1, $2) ON CONFLICT DO NOTHING',
      [entryId, userId]
    );
    
    res.json({ ok: true });
  } catch (error: any) {
    console.error('Vote error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Голосовать за дату окончания
app.post('/api/battle/vote-date', async (req, res) => {
  try {
    const { userId, days } = req.body;
    
    if (!userId || !days) {
      return res.status(400).json({ error: 'Неверные данные' });
    }
    
    const battleResult = await pool.query(
      "SELECT id FROM battles WHERE status = 'active' ORDER BY id DESC LIMIT 1"
    );
    
    if (battleResult.rows.length === 0) {
      return res.status(400).json({ error: 'Нет активного конкурса' });
    }
    
    const battleId = battleResult.rows[0].id;
    
    await pool.query(
      'INSERT INTO battle_date_votes (battle_id, user_id, days) VALUES ($1, $2, $3) ON CONFLICT (battle_id, user_id) DO UPDATE SET days = $3',
      [battleId, userId, days]
    );
    
    res.json({ ok: true });
  } catch (error: any) {
    console.error('Date vote error:', error);
    res.status(500).json({ error: error.message });
  }
});

// Рейтинг топ-10 поваров
app.get('/api/battle/rating', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT user_id, username, first_name, points, wins FROM chef_ratings ORDER BY points DESC LIMIT 10'
    );
    res.json({ rating: result.rows });
  } catch (error: any) {
    console.error('Rating error:', error);
    res.status(500).json({ error: error.message });
  }
});
    res.json({ users: result.rows });
  } catch (error: any) {
    console.error('Users list error:', error);
    res.status(500).json({ error: error.message });
  }
});
app.post('/api/telegram-webhook', async (req, res) => {
  try {
    const { message } = req.body;
    
    // Сохраняем каждого пользователя, который пишет боту
    if (message?.from) {
      await pool.query(
        `INSERT INTO bot_users (user_id, username, first_name, last_interaction) 
         VALUES ($1, $2, $3, NOW()) 
         ON CONFLICT (user_id) 
         DO UPDATE SET 
           username = EXCLUDED.username,
           first_name = EXCLUDED.first_name,
           last_interaction = NOW()`,
        [message.from.id, message.from.username || null, message.from.first_name || null]
      );
    }
        // Обработка команды /admin
    if (message?.text === '/admin' && message.from.id === 988368940) {
      const totalResult = await pool.query('SELECT COUNT(*) FROM bot_users');
      const premiumResult = await pool.query(
        'SELECT COUNT(*) FROM subscriptions WHERE expires_at > $1',
        [Date.now()]
      );
      const usersResult = await pool.query(
        'SELECT user_id, username, first_name, last_interaction FROM bot_users ORDER BY last_interaction DESC LIMIT 10'
      );
      
      const total = totalResult.rows[0].count;
      const premium = premiumResult.rows[0].count;
      
      let text = `📊 <b>Статистика</b>\n\n`;
      text += `👥 Всего пользователей: <b>${total}</b>\n`;
      text += `⭐ Premium: <b>${premium}</b>\n\n`;
      text += `<b>Последние 10:</b>\n`;
      
      usersResult.rows.forEach((u, i) => {
        const name = u.username ? `@${u.username}` : u.first_name || 'Без имени';
        const date = new Date(u.last_interaction).toLocaleString('ru-RU');
        text += `${i + 1}. ${name} (ID: <code>${u.user_id}</code>) — ${date}\n`;
      });
      
      await sendTelegramMessage(message.from.id, text);
    }
    // Обработка оплаты
    if (message?.successful_payment) {
      const payment = message.successful_payment;
      const userId = message.from.id;
      
      const expiry = Date.now() + 30 * 24 * 60 * 60 * 1000;
      
      await pool.query(
        `INSERT INTO subscriptions (user_id, expires_at) 
         VALUES ($1, $2) 
         ON CONFLICT (user_id) 
         DO UPDATE SET expires_at = $2, updated_at = NOW()`,
        [userId, expiry]
      );
      
      console.log('✅ Оплата сохранена:', { 
        userId, 
        amount: payment.total_amount 
      });
    }
    
    res.sendStatus(200);
  } catch (error: any) {
    console.error('Webhook error:', error);
    res.sendStatus(200);
  }
});

// AI Recipe generation based on available ingredients
app.post('/api/gemini/generate-recipe', async (req, res) => {
  try {
    const { ingredients, category, cookingTime, servings, preferences } = req.body;

    if (!ingredients || !Array.isArray(ingredients) || ingredients.length === 0) {
      return res.status(400).json({ error: 'Пожалуйста, укажите хотя бы один ингредиент' });
    }

    const ai = getGeminiClient();

    const prompt = `Ты — опытный шеф-повар и профессиональный технолог общественного питания.
Пользователь хочет приготовить блюдо из следующих доступных продуктов:
Ингредиенты в наличии: ${ingredients.join(', ')}
${category ? `Желаемая категория/тип блюда: ${category}` : ''}
${cookingTime ? `Ограничение по времени: до ${cookingTime} минут` : ''}
${servings ? `Количество порций: ${servings}` : 'Количество порций: 4'}
${preferences ? `Пожелания/ограничения: ${preferences}` : ''}

Создай превосходный, реалистичный и проверенный кулинарный рецепт строго из указанных продуктов. Не добавляй продукты, которых нет в списке. Разрешены только вода, соль, перец и растительное масло как базовые продукты, которые обычно есть на кухне. Если набор необычный, придумай любое съедобное блюдо, используя именно его.
Рецепт должен содержать точные граммовки для каждого ингредиента, профессиональные секреты приготовления (секреты шефа), подробные пошаговые шаги с таймером в секундах, а также технологические параметры (процент отходов, выход готового блюда и КБЖУ).

Верни ответ строго в формате JSON по следующей схеме:
{
  "title": "Название блюда",
  "category": "dishes | drinks | pastry | salads | marinades | sauces",
  "description": "Краткое аппетитное описание блюда (2-3 предложения)",
  "prepTime": 15,
  "cookTime": 35,
  "difficulty": "Легко | Средне | Профи",
  "servings": ${servings || 4},
  "tags": ["тег1", "тег2"],
  "ingredients": [
    {
      "name": "Наименование продукта",
      "amount": 400,
      "unit": "г | мл | шт | ст. л. | ч. л.",
      "coldWastePercent": 10,
      "heatLossPercent": 25,
      "estimatedCostPerKg": 250
    }
  ],
  "instructions": [
    {
      "stepNumber": 1,
      "instruction": "Подробное действие...",
      "timerSeconds": 300,
      "tip": "Секрет для этого шага (если есть)"
    }
  ],
  "chefSecrets": [
    "Секрет 1: тонкость обжарки или температура",
    "Секрет 2: баланс вкуса"
  ],
  "techCard": {
    "dishYield": "350г",
    "kzhbu": {
      "calories": 240,
      "proteins": 14.5,
      "fats": 10.2,
      "carbs": 22.1
    },
    "semiFinishedProducts": ["Заготовка соуса", "Бульон"],
    "technologicalProcess": "Краткая технологическая инструкция хранения и подачи"
  }
}`;

    const interaction = await Promise.race([
  ai.interactions.create({
    model: 'gemini-3.6-flash',
    input: prompt,
    response_format: {
      type: 'text',
      mime_type: 'application/json',
    },
  }),
  new Promise<never>((_, reject) => {
    setTimeout(() => reject(new Error('AI не ответил за 90 секунд')), 90000);
  }),
]);

const text = interaction.output_text;
    if (!text) {
      throw new Error('Пустой ответ от модели');
    }

    const recipeData = normalizeGeneratedRecipe(text, Number(servings) || 4);

    res.json({ recipe: recipeData });
  } catch (error: any) {
    console.error('Error generating recipe:', error);
    res.status(500).json({
      error: error.message || 'Ошибка генерации рецепта',
    });
  }
});

// Culinary Advice / Ask Chef endpoint
app.post('/api/gemini/ask-chef', async (req, res) => {
  try {
    const { question, contextRecipe } = req.body;
    const normalizedQuestion = typeof question === 'string' ? question.trim() : '';
    if (!normalizedQuestion) {
      return res.status(400).json({ error: 'Вопрос не указан' });
    }

    const ai = getGeminiClient();

    const prompt = `Ты — мудрый, дружелюбный и профессиональный шеф-повар, кулинарный технолог и консультант.
  Ответь на любой вопрос пользователя на русском языке. Не ограничивайся только списком заранее известных тем: разбери ситуацию, уточни важные допущения и дай полезный практический ответ. Для вопросов о еде используй профессиональные кулинарные знания, точные пропорции, температуры и время. Если вопрос не связан с кухней, коротко ответь по существу и предложи применимую кулинарную аналогию или уточни, чем можешь помочь как шеф-повар.
${contextRecipe ? `Контекст текущего блюда: "${contextRecipe.title}". Ингредиенты: ${contextRecipe.ingredients?.map((i: any) => `${i.name} (${i.amount} ${i.unit})`).join(', ')}` : ''}

Вопрос пользователя:
  "${normalizedQuestion}"

Дай структурированный ответ:
1. Краткий прямой ответ / быстрое решение (если блюдо под угрозой, например, пересолено или пригорает).
2. Профессиональное объяснение физико-химических процессов или кулинарных правил.
3. Точные пропорции, замены или температурные режимы при необходимости.
4. Совет шефа на будущее.`;

    const interaction = await ai.interactions.create({
  model: 'gemini-3.6-flash',
  input: prompt,
});

const answer = interaction.output_text?.trim();
    if (!answer) {
      throw new Error('Шеф не вернул ответ. Попробуйте повторить вопрос.');
    }

    res.json({ answer });
  } catch (error: any) {
    console.error('Error answering question:', error);
    res.status(500).json({
      error: error.message || 'Ошибка ответа шеф-повара',
    });
  }
});

// Generate a chef's title and description for the recipe laboratory.
app.post('/api/gemini/lab-copy', async (req, res) => {
  try {
    const { category, secretIngredients, proportions, spices, method } = req.body;
    if (![category, secretIngredients, proportions, spices, method].every((value) => typeof value === 'string' && value.trim())) {
      return res.status(400).json({ error: 'Заполните все поля рецептуры перед генерацией описания' });
    }

    const ai = getGeminiClient();
    const prompt = `Ты — шеф-повар и редактор международного кулинарного журнала.
Создай для авторского рецепта выразительное название и аппетитное описание на русском языке.
Категория: ${category}
Секретные ингредиенты: ${secretIngredients}
Пропорции: ${proportions}
Уникальные специи: ${spices}
Технология: ${method}

Название должно быть коротким (до 80 символов), а описание — 2-3 предложения без выдумывания ингредиентов, которых нет в исходных данных.
Верни только JSON без markdown:
{"title":"...","description":"..."}`;

    const interaction = await ai.interactions.create({
  model: 'gemini-3.6-flash',
  input: prompt,
  response_format: {
    type: 'text',
    mime_type: 'application/json',
  },
});
const text = interaction.output_text?.trim();
    if (!text) throw new Error('AI не вернул название и описание');
    const parsed = JSON.parse(text.replace(/^```(?:json)?\s*/i, '').replace(/\s*```$/i, '').trim());
    if (typeof parsed.title !== 'string' || typeof parsed.description !== 'string' || !parsed.title.trim() || !parsed.description.trim()) {
      throw new Error('AI вернул неполное описание рецепта');
    }
    res.json({ title: parsed.title.trim(), description: parsed.description.trim() });
  } catch (error: any) {
    console.error('Error generating laboratory copy:', error);
    res.status(500).json({ error: error.message || 'Ошибка генерации описания рецепта' });
  }
});

// Generate or enrich a Tech Card for a custom user recipe
app.post('/api/gemini/tech-card', async (req, res) => {
  try {
    const { title, ingredientsRaw, servings } = req.body;
    if (!title || !ingredientsRaw) {
      return res.status(400).json({ error: 'Укажите название и список ингредиентов' });
    }

    const ai = getGeminiClient();

    const prompt = `Как профессиональный технолог пищевого производства (шеф-технолог), рассчитай нормативную технологическую карту (ТТК) для блюда:
Название: "${title}"
Количество порций: ${servings || 4}
Исходные ингредиенты:
${ingredientsRaw}

Определи для каждого ингредиента:
- Точный вес брутто (г)
- Нормативный процент холодных отходов (очистка, обрезка, кости) по сборникам рецептур
- Вес нетто (г)
- Процент тепловых потерь при термической обработке (% уварки, ужарки, упека)
- Выход полуфабриката/готового компонента (г)
- Ориентировочную себестоимость за 1 кг сырья в рублях

Также рассчитай общий выход 1 порции в граммах, КБЖУ на 100 г готового блюда и технологические параметры (температура подачи, условия реализации).

Верни ответ в JSON:
{
  "title": "${title}",
  "servings": ${servings || 4},
  "portionYieldGrams": 350,
  "ingredients": [
    {
      "name": "Название",
      "grossWeight": 500,
      "coldWastePercent": 15,
      "netWeight": 425,
      "heatLossPercent": 32,
      "outputWeight": 289,
      "pricePerKg": 450
    }
  ],
  "kbju100g": {
    "calories": 210,
    "proteins": 12,
    "fats": 9,
    "carbs": 20
  },
  "technologyNotes": "Рекомендации по приготовлению, терморежимам и хранению"
}`;

    const interaction = await ai.interactions.create({
  model: 'gemini-3.6-flash',
  input: prompt,
  response_format: {
    type: 'text',
    mime_type: 'application/json',
  },
});

    const data = JSON.parse(interaction.output_text || '{}');
    res.json({ techCard: data });
  } catch (error: any) {
    console.error('Error generating tech card:', error);
    res.status(500).json({
      error: error.message || 'Ошибка расчета технологической карты',
    });
  }
});

// Vite / static server integration
async function startServer() {
  if (env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }
await initDatabase();
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Кулинарный помощник server running on port ${PORT}`);
  });
}

startServer();
