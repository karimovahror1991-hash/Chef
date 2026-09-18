import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import { GoogleGenAI, Type } from '@google/genai';
import { createServer as createViteServer } from 'vite';

dotenv.config();

const app = express();
const PORT = 3000;
const env = process.env as Record<string, string | undefined>;

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

    const response = await Promise.race([
      ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: prompt,
        config: {
          responseMimeType: 'application/json',
        },
      }),
      new Promise<never>((_, reject) => {
        setTimeout(() => reject(new Error('AI не ответил за 90 секунд')), 90000);
      }),
    ]);

    const text = response.text;
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

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    const answer = response.text?.trim();
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

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: { responseMimeType: 'application/json' },
    });
    const text = response.text?.trim();
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

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
      },
    });

    const data = JSON.parse(response.text || '{}');
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

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Кулинарный помощник server running on port ${PORT}`);
  });
}

startServer();
