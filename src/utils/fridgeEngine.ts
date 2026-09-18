import { Recipe, RecipeMatch, ReadyMenuPlan, ReadyMenuItem, MenuSlotType } from '../types';

// Canonical product definitions with regex patterns and stems
export interface FridgeProductDef {
  canonicalName: string;
  category: 'Молочные и яйца' | 'Мясо и птица' | 'Овощи и зелень' | 'Крупы и мука' | 'Рыба и морепродукты' | 'Бакалея и специи' | 'Прочее';
  stems: string[];
  iconText?: string;
}

export const FRIDGE_COMMON_PRODUCTS: FridgeProductDef[] = [
  // Молочные и яйца
  { canonicalName: 'Яйца куриные', category: 'Молочные и яйца', stems: ['яйц', 'яиц', 'яичн', 'яичк', 'желток', 'белок'], iconText: '🥚' },
  { canonicalName: 'Сыр', category: 'Молочные и яйца', stems: ['сыр ', 'сыра', 'сыром', 'сырн', 'пармезан', 'моцарелл', 'сулугуни', 'гауд', 'чеддер', 'брынз', 'фета', 'рикотт', 'маскарпоне', 'творожн сыр'], iconText: '🧀' },
  { canonicalName: 'Творог', category: 'Молочные и яйца', stems: ['творог', 'творожн'], iconText: '🥣' },
  { canonicalName: 'Сметана', category: 'Молочные и яйца', stems: ['сметан'], iconText: '🥛' },
  { canonicalName: 'Молоко', category: 'Молочные и яйца', stems: ['молок'], iconText: '🥛' },
  { canonicalName: 'Сливки', category: 'Молочные и яйца', stems: ['сливк', 'сливочн'], iconText: '🍶' },
  { canonicalName: 'Сливочное масло', category: 'Молочные и яйца', stems: ['сливочн масл', 'масло сливочн'], iconText: '🧈' },

  // Мясо и птица
  { canonicalName: 'Курица / Филе', category: 'Мясо и птица', stems: ['куриц', 'курин', 'цыплен', 'грудк', 'филе кур', 'бедр кур', 'голен кур', 'мясо птицы'], iconText: '🍗' },
  { canonicalName: 'Говядина', category: 'Мясо и птица', stems: ['говядин', 'телятин'], iconText: '🥩' },
  { canonicalName: 'Фарш', category: 'Мясо и птица', stems: ['фарш'], iconText: '🥩' },
  { canonicalName: 'Колбаса / Сосиски', category: 'Мясо и птица', stems: ['колбас', 'сосиск', 'ветчин', 'сардельк', 'сервелат', 'бекон', 'грудинк'], iconText: '🥓' },
  { canonicalName: 'Свинина', category: 'Мясо и птица', stems: ['свинин', 'карбонад', 'корейк свиная'], iconText: '🍖' },
  { canonicalName: 'Баранина', category: 'Мясо и птица', stems: ['баранин', 'курдюк'], iconText: '🥩' },

  // Овощи и зелень
  { canonicalName: 'Свежая зелень', category: 'Овощи и зелень', stems: ['зелен', 'укроп', 'петрушк', 'кинз', 'базилик', 'шпинат', 'зеленый лук', 'зелёный лук', 'мята', 'салат листовой', 'руккол'], iconText: '🌿' },
  { canonicalName: 'Помидоры', category: 'Овощи и зелень', stems: ['помидор', 'томат', 'черри'], iconText: '🍅' },
  { canonicalName: 'Картофель', category: 'Овощи и зелень', stems: ['картоф', 'картошк'], iconText: '🥔' },
  { canonicalName: 'Лук репчатый', category: 'Овощи и зелень', stems: ['лук репчат', 'лук репка', 'луковиц', 'лук'], iconText: '🧅' },
  { canonicalName: 'Чеснок', category: 'Овощи и зелень', stems: ['чеснок', 'чесночн'], iconText: '🧄' },
  { canonicalName: 'Морковь', category: 'Овощи и зелень', stems: ['морков', 'морковк'], iconText: '🥕' },
  { canonicalName: 'Огурцы', category: 'Овощи и зелень', stems: ['огурц', 'огурчик'], iconText: '🥒' },
  { canonicalName: 'Болгарский перец', category: 'Овощи и зелень', stems: ['болгарск перец', 'перец болгарск', 'паприк', 'сладкий перец'], iconText: '🫑' },
  { canonicalName: 'Капуста', category: 'Овощи и зелень', stems: ['капуст'], iconText: '🥬' },
  { canonicalName: 'Шампиньоны / Грибы', category: 'Овощи и зелень', stems: ['гриб', 'шампиньон', 'вешенк'], iconText: '🍄' },
  { canonicalName: 'Кабачок / Баклажан', category: 'Овощи и зелень', stems: ['кабачок', 'цукини', 'баклажан'], iconText: '🍆' },

  // Крупы, макароны и хлеб
  { canonicalName: 'Паста / Лапша', category: 'Крупы и мука', stems: ['паст', 'макарон', 'спагетт', 'лапш', 'вермишел', 'пенне', 'феттучин'], iconText: '🍝' },
  { canonicalName: 'Рис', category: 'Крупы и мука', stems: ['рис ', 'рис,', 'рисовая', 'рис круглозерный', 'рис басмати', 'рис жасмин', 'рис девзира', 'рис лазер'], iconText: '🍚' },
  { canonicalName: 'Хлеб / Батон', category: 'Крупы и мука', stems: ['хлеб', 'батон', 'багет', 'тост', 'сухарик', 'булочк', 'лаваш'], iconText: '🍞' },
  { canonicalName: 'Мука пшеничная', category: 'Крупы и мука', stems: ['мука пшеничн', 'мука высший'], iconText: '🌾' },
  { canonicalName: 'Гречка', category: 'Крупы и мука', stems: ['гречк', 'гречнев'], iconText: '🥣' },

  // Рыба
  { canonicalName: 'Рыба (филе)', category: 'Рыба и морепродукты', stems: ['рыбн', 'лосос', 'семг', 'форел', 'тунец', 'треск', 'минтай', 'судак', 'горбуш', 'креветк'], iconText: '🐟' },

  // Бакалея
  { canonicalName: 'Томатная паста', category: 'Бакалея и специи', stems: ['томатн паст', 'протертые томат', 'томатный соус'], iconText: '🥫' },
  { canonicalName: 'Майонез', category: 'Бакалея и специи', stems: ['майонез'], iconText: '🧴' },
  { canonicalName: 'Соевый соус', category: 'Бакалея и специи', stems: ['соев соус'], iconText: '🥢' },
];

// Filler words commonly typed by users when describing what they found on shelves
const FILLER_SET = new Set([
  'пара', 'пару', 'парочка', 'немного', 'немножко', 'чуть-чуть', 'чуть', 'остатки', 'остаток', 'вчерашняя', 'вчерашний',
  'вчерашнее', 'вчерашние', 'завалялось', 'завалялась', 'завалялся', 'завалялись', 'на', 'полке', 'полках', 'в', 'холодильнике',
  'кусок', 'кусочек', 'полпачки', 'пачка', 'пачки', 'банка', 'банки', 'полбанки', 'штука', 'штуки', 'штук', 'шт',
  'грамм', 'граммов', 'г', 'кг', 'килограмм', 'ложка', 'ложки', 'свежая', 'свежий', 'свежие', 'отварной', 'отварная',
  'вареный', 'вареная', 'жареный', 'жареная', 'сырой', 'сырая', 'кусочки', 'половинка', 'хвостик', 'и', 'да', 'с', 'со',
  'какой-то', 'какая-то', 'какие-то'
]);

/**
 * Parses free natural Russian text into recognized items.
 * Example: "пара яиц, немного сыра, вчерашняя курица и зелень"
 * -> ['Яйца куриные', 'Сыр', 'Курица / Филе', 'Свежая зелень']
 */
export function parseFridgeInput(input: string): string[] {
  if (!input || !input.trim()) return [];

  // Split on commas, semicolons, pluses, newlines, bullets, and separate by conjunctions
  const rawParts = input
    .toLowerCase()
    .replace(/[;\n•+]/g, ',')
    .replace(/\s+и\s+/g, ', ')
    .replace(/\s+да\s+/g, ', ')
    .split(',')
    .map(p => p.trim())
    .filter(p => p.length > 0);

  const recognized: string[] = [];

  for (const part of rawParts) {
    // Split into clean words and remove punctuation & filler words
    const cleanTokens = part
      .replace(/[\d().,!?:-]/g, ' ')
      .split(/\s+/)
      .map(w => w.trim())
      .filter(w => w.length > 0 && !FILLER_SET.has(w));

    if (cleanTokens.length === 0) continue;

    const cleanedText = cleanTokens.join(' ');

    // Match against known product stems
    let matchedCanonical: string | null = null;
    for (const prod of FRIDGE_COMMON_PRODUCTS) {
      const isMatch = prod.stems.some(stem => 
        cleanTokens.some(tok => tok.includes(stem)) || cleanedText.includes(stem)
      );
      if (isMatch) {
        matchedCanonical = prod.canonicalName;
        break;
      }
    }

    if (matchedCanonical) {
      if (!recognized.includes(matchedCanonical)) {
        recognized.push(matchedCanonical);
      }
    } else if (cleanedText.length >= 3) {
      // Capitalize first letter of arbitrary user product
      const formattedCustom = cleanedText.charAt(0).toUpperCase() + cleanedText.slice(1);
      if (!recognized.includes(formattedCustom)) {
        recognized.push(formattedCustom);
      }
    }
  }

  return recognized;
}

/**
 * Basic pantry staples that almost every kitchen has and shouldn't penalize recipe match.
 */
const PANTRY_STAPLES_STEMS = [
  'соль', 'вода', 'перец черн', 'перец молот', 'масло растительн', 'масло подсолнечн', 'лавровый лист', 'сахар'
];

function isPantryStaple(ingredientName: string): boolean {
  const lower = ingredientName.toLowerCase();
  return PANTRY_STAPLES_STEMS.some(stem => lower.includes(stem));
}

/**
 * Checks if a specific recipe ingredient matches any of the user's fridge items.
 */
function matchIngredientAgainstUserList(
  recipeIngredientName: string,
  userItems: string[]
): { isMatched: boolean; matchedUserItem?: string } {
  const ingLower = recipeIngredientName.toLowerCase();

  for (const userItem of userItems) {
    const userItemLower = userItem.toLowerCase();

    // Check against canonical product definition stems first
    const knownProduct = FRIDGE_COMMON_PRODUCTS.find(p => p.canonicalName.toLowerCase() === userItemLower);
    if (knownProduct) {
      if (knownProduct.stems.some(stem => ingLower.includes(stem))) {
        return { isMatched: true, matchedUserItem: userItem };
      }
      // If it's a known product and its stems didn't match, don't do loose substring matching
      continue;
    }

    // Direct exact or substring checks for custom user items
    if (ingLower.includes(userItemLower) || userItemLower.includes(ingLower)) {
      return { isMatched: true, matchedUserItem: userItem };
    }

    // Word stem matching for custom items (require at least 4 chars)
    const words = userItemLower.split(' ').filter(w => w.length >= 4);
    for (const w of words) {
      const stem = w.slice(0, Math.max(4, w.length - 1));
      if (ingLower.includes(stem)) {
        return { isMatched: true, matchedUserItem: userItem };
      }
    }
  }

  return { isMatched: false };
}

/**
 * Comprehensive match details for a recipe against user's fridge.
 */
export interface RecipeMatchDetail extends RecipeMatch {
  usedUserItems: string[]; // which user fridge items are used in this recipe
  missingCount: number;
  hasAllMainIngredients: boolean;
}

export function matchRecipesDetailed(recipes: Recipe[], userIngredients: string[]): RecipeMatchDetail[] {
  if (!userIngredients || userIngredients.length === 0) return [];

  const results: RecipeMatchDetail[] = [];

  for (const recipe of recipes) {
    const matched: string[] = [];
    const missing: string[] = [];
    const usedUserItemsSet = new Set<string>();

    for (const ing of recipe.ingredients) {
      const check = matchIngredientAgainstUserList(ing.name, userIngredients);
      if (check.isMatched) {
        matched.push(ing.name);
        if (check.matchedUserItem) {
          usedUserItemsSet.add(check.matchedUserItem);
        }
      } else {
        if (!isPantryStaple(ing.name)) {
          missing.push(ing.name);
        }
      }
    }

    if (matched.length === 0) continue;

    const totalSignificant = matched.length + missing.length;
    const score = totalSignificant > 0 ? Math.round((matched.length / totalSignificant) * 100) : 0;

    results.push({
      recipe,
      matchedIngredients: matched,
      missingIngredients: missing,
      matchScore: score,
      usedUserItems: Array.from(usedUserItemsSet),
      missingCount: missing.length,
      hasAllMainIngredients: missing.length === 0,
    });
  }

  // Sort primarily by matchScore descending, then by number of used fridge items descending
  return results.sort((a, b) => {
    if (b.matchScore !== a.matchScore) {
      return b.matchScore - a.matchScore;
    }
    return b.usedUserItems.length - a.usedUserItems.length;
  });
}

/**
 * Determines recipe role/slot in a menu
 */
function classifyRecipeSlot(recipe: Recipe): {
  isBreakfast: boolean;
  isSoup: boolean;
  isDinner: boolean;
  isSaladOrSnack: boolean;
} {
  const title = recipe.title.toLowerCase();
  const tags = recipe.tags.map(t => t.toLowerCase());
  const cat = recipe.category;

  const isSaladOrSnack = cat === 'salads' || tags.some(t => t.includes('салат') || t.includes('закуск'));
  const isSoup = cat === 'dishes' && (
    tags.some(t => t.includes('суп') || t.includes('шурпа') || t.includes('борщ') || t.includes('бульон')) ||
    title.includes('суп') || title.includes('бульон') || title.includes('шурпа') || title.includes('солянк') || title.includes('уха')
  );
  const isBreakfast = (
    cat === 'pastry' ||
    tags.some(t => t.includes('завтрак') || t.includes('яйца') || t.includes('омлет') || t.includes('сырник')) ||
    title.includes('омлет') || title.includes('яичниц') || title.includes('сырник') || title.includes('шакшук') ||
    title.includes('блин') || title.includes('тост') || title.includes('хачапури') || title.includes('бризоль') ||
    (recipe.prepTime + recipe.cookTime <= 25 && (title.includes('сыр') || title.includes('яйц')))
  );
  const isDinner = cat === 'dishes' && !isSoup;

  return { isBreakfast, isSoup, isDinner, isSaladOrSnack };
}

/**
 * Generates tailored Ready Menu Plans from user's fridge items.
 */
export function generateReadyMenus(
  allRecipes: Recipe[],
  userIngredients: string[],
  shuffleOffset: number = 0
): ReadyMenuPlan[] {
  if (!userIngredients || userIngredients.length === 0) return [];

  // A ready menu must be cookable from the selected products. Pantry staples
  // are allowed, but recipes requiring extra ingredients are excluded.
  const matched = matchRecipesDetailed(allRecipes, userIngredients)
    .filter((match) => match.missingCount === 0);
  if (matched.length === 0) return [];

  // Categorize matched candidates
  const breakfastCandidates: RecipeMatchDetail[] = [];
  const soupCandidates: RecipeMatchDetail[] = [];
  const dinnerCandidates: RecipeMatchDetail[] = [];
  const saladCandidates: RecipeMatchDetail[] = [];
  const quickCandidates: RecipeMatchDetail[] = [];

  for (const m of matched) {
    const { isBreakfast, isSoup, isDinner, isSaladOrSnack } = classifyRecipeSlot(m.recipe);
    if (isBreakfast) breakfastCandidates.push(m);
    if (isSoup) soupCandidates.push(m);
    if (isDinner) dinnerCandidates.push(m);
    if (isSaladOrSnack) saladCandidates.push(m);
    if ((m.recipe.prepTime + m.recipe.cookTime) <= 35 && m.recipe.category === 'dishes') {
      quickCandidates.push(m);
    }
  }

  // Fallbacks if some pool is empty
  const safeBreakfast = breakfastCandidates.length > 0 ? breakfastCandidates : matched;
  const safeSoup = soupCandidates.length > 0 ? soupCandidates : matched;
  const safeDinner = dinnerCandidates.length > 0 ? dinnerCandidates : matched;
  const safeSalad = saladCandidates.length > 0 ? saladCandidates : matched;
  const safeQuick = quickCandidates.length > 0 ? quickCandidates : matched;

  const pickCandidate = (pool: RecipeMatchDetail[], indexOffset: number, excludeIds: Set<string>): RecipeMatchDetail => {
    const available = pool.filter(p => !excludeIds.has(p.recipe.id));
    const targetPool = available.length > 0 ? available : pool;
    const idx = (shuffleOffset + indexOffset) % targetPool.length;
    return targetPool[idx];
  };

  const plans: ReadyMenuPlan[] = [];

  // ==========================================
  // PLAN 1: Рацион на день (Завтрак, Обед, Ужин, Перекус)
  // ==========================================
  {
    const usedIds = new Set<string>();
    const bMatch = pickCandidate(safeBreakfast, 0, usedIds);
    usedIds.add(bMatch.recipe.id);

    const lMatch = pickCandidate(safeSoup.length > 0 ? safeSoup : safeDinner, 1, usedIds);
    usedIds.add(lMatch.recipe.id);

    const dMatch = pickCandidate(safeDinner, 2, usedIds);
    usedIds.add(dMatch.recipe.id);

    const sMatch = pickCandidate(safeSalad, 3, usedIds);
    usedIds.add(sMatch.recipe.id);

    const items: ReadyMenuItem[] = [
      {
        slot: 'breakfast',
        slotLabel: '🌅 Завтрак',
        recipe: bMatch.recipe,
        usedUserIngredients: bMatch.usedUserItems,
        missingIngredients: bMatch.missingIngredients,
        cookingTimeMinutes: bMatch.recipe.prepTime + bMatch.recipe.cookTime,
      },
      {
        slot: 'lunch',
        slotLabel: '🍲 Обед',
        recipe: lMatch.recipe,
        usedUserIngredients: lMatch.usedUserItems,
        missingIngredients: lMatch.missingIngredients,
        cookingTimeMinutes: lMatch.recipe.prepTime + lMatch.recipe.cookTime,
      },
      {
        slot: 'dinner',
        slotLabel: '🍽️ Ужин',
        recipe: dMatch.recipe,
        usedUserIngredients: dMatch.usedUserItems,
        missingIngredients: dMatch.missingIngredients,
        cookingTimeMinutes: dMatch.recipe.prepTime + dMatch.recipe.cookTime,
      },
      {
        slot: 'snack',
        slotLabel: '🥗 Перекус / Салат',
        recipe: sMatch.recipe,
        usedUserIngredients: sMatch.usedUserItems,
        missingIngredients: sMatch.missingIngredients,
        cookingTimeMinutes: sMatch.recipe.prepTime + sMatch.recipe.cookTime,
      },
    ];

    plans.push(buildPlanObject('day', 'Рацион на день (Zero-Waste)', 'Сбалансированное меню на весь день, утилизирующее остатки продуктов без остатка', items, userIngredients));
  }

  // ==========================================
  // PLAN 2: Комплексный обед или ужин
  // ==========================================
  {
    const usedIds = new Set<string>();
    const mainDish = pickCandidate(safeDinner, 0 + shuffleOffset * 2, usedIds);
    usedIds.add(mainDish.recipe.id);

    const firstDish = pickCandidate(safeSoup.length > 0 ? safeSoup : safeBreakfast, 1, usedIds);
    usedIds.add(firstDish.recipe.id);

    const saladDish = pickCandidate(safeSalad, 2, usedIds);
    usedIds.add(saladDish.recipe.id);

    const items: ReadyMenuItem[] = [
      {
        slot: 'soup',
        slotLabel: '🥣 Первое блюдо',
        recipe: firstDish.recipe,
        usedUserIngredients: firstDish.usedUserItems,
        missingIngredients: firstDish.missingIngredients,
        cookingTimeMinutes: firstDish.recipe.prepTime + firstDish.recipe.cookTime,
      },
      {
        slot: 'main',
        slotLabel: '🥘 Основное горячее',
        recipe: mainDish.recipe,
        usedUserIngredients: mainDish.usedUserItems,
        missingIngredients: mainDish.missingIngredients,
        cookingTimeMinutes: mainDish.recipe.prepTime + mainDish.recipe.cookTime,
      },
      {
        slot: 'salad',
        slotLabel: '🥗 Салат к столу',
        recipe: saladDish.recipe,
        usedUserIngredients: saladDish.usedUserItems,
        missingIngredients: saladDish.missingIngredients,
        cookingTimeMinutes: saladDish.recipe.prepTime + saladDish.recipe.cookTime,
      },
    ];

    plans.push(buildPlanObject('combo', 'Комплексный семейный обед', 'Полноценный обеденный стол: горячее, суп и свежий салат из продуктов с полок', items, userIngredients));
  }

  // ==========================================
  // PLAN 3: Экспресс-меню за 20-25 минут
  // ==========================================
  {
    const usedIds = new Set<string>();
    const quickMain = pickCandidate(safeQuick, 0, usedIds);
    usedIds.add(quickMain.recipe.id);

    const quickSalad = pickCandidate(safeSalad.filter(s => (s.recipe.prepTime + s.recipe.cookTime) <= 20), 1, usedIds);
    usedIds.add(quickSalad.recipe.id);

    const items: ReadyMenuItem[] = [
      {
        slot: 'main',
        slotLabel: '⚡ Быстрое горячее',
        recipe: quickMain.recipe,
        usedUserIngredients: quickMain.usedUserItems,
        missingIngredients: quickMain.missingIngredients,
        cookingTimeMinutes: quickMain.recipe.prepTime + quickMain.recipe.cookTime,
      },
      {
        slot: 'salad',
        slotLabel: '🥗 Экспресс-салат',
        recipe: quickSalad.recipe,
        usedUserIngredients: quickSalad.usedUserItems,
        missingIngredients: quickSalad.missingIngredients,
        cookingTimeMinutes: quickSalad.recipe.prepTime + quickSalad.recipe.cookTime,
      },
    ];

    plans.push(buildPlanObject('express', 'Экспресс за 20 минут', 'Быстрый и вкусный ужин для тех, у кого мало времени после рабочего дня', items, userIngredients));
  }

  // ==========================================
  // PLAN 4: 100% Без похода в магазин (Максимум совпадений)
  // ==========================================
  const zeroWasteMatches = matched.filter(m => m.missingCount <= 1);
  if (zeroWasteMatches.length >= 2) {
    const usedIds = new Set<string>();
    const dish1 = pickCandidate(zeroWasteMatches, 0, usedIds);
    usedIds.add(dish1.recipe.id);

    const dish2 = pickCandidate(zeroWasteMatches, 1, usedIds);
    usedIds.add(dish2.recipe.id);

    const items: ReadyMenuItem[] = [
      {
        slot: 'main',
        slotLabel: '🎯 Главное блюдо без магазина',
        recipe: dish1.recipe,
        usedUserIngredients: dish1.usedUserItems,
        missingIngredients: dish1.missingIngredients,
        cookingTimeMinutes: dish1.recipe.prepTime + dish1.recipe.cookTime,
      },
      {
        slot: 'snack',
        slotLabel: '✨ Второе блюдо / Дополнение',
        recipe: dish2.recipe,
        usedUserIngredients: dish2.usedUserItems,
        missingIngredients: dish2.missingIngredients,
        cookingTimeMinutes: dish2.recipe.prepTime + dish2.recipe.cookTime,
      },
    ];

    plans.push(buildPlanObject('zero_waste', '100% Без похода в магазин', 'Блюда с минимальным количеством недостающих ингредиентов (все основные уже в холодильнике)', items, userIngredients));
  }

  return plans;
}

function buildPlanObject(
  type: ReadyMenuPlan['type'],
  title: string,
  description: string,
  items: ReadyMenuItem[],
  allUserIngredients: string[]
): ReadyMenuPlan {
  const allUsedUserItems = new Set<string>();
  let totalTime = 0;
  let totalCals = 0;
  let totalProteins = 0;
  let totalFats = 0;
  let totalCarbs = 0;
  const shoppingListSet = new Set<string>();

  for (const item of items) {
    item.usedUserIngredients.forEach(i => allUsedUserItems.add(i));
    totalTime += item.cookingTimeMinutes;

    const k = item.recipe.techCard?.kzhbu;
    if (k) {
      // Estimate portion calories approx (average 300g portion)
      totalCals += Math.round(k.calories * 2.5);
      totalProteins += Math.round(k.proteins * 2.5);
      totalFats += Math.round(k.fats * 2.5);
      totalCarbs += Math.round(k.carbs * 2.5);
    }

    item.missingIngredients.forEach(m => shoppingListSet.add(m));
  }

  const wastePercent = allUserIngredients.length > 0
    ? Math.min(100, Math.round((allUsedUserItems.size / allUserIngredients.length) * 100))
    : 0;

  return {
    id: `plan-${type}-${Date.now()}`,
    type,
    title,
    description,
    items,
    totalCookTime: totalTime,
    usedUserIngredients: Array.from(allUsedUserItems),
    wasteReductionPercent: wastePercent,
    totalCalories: totalCals,
    totalProteins: totalProteins,
    totalFats: totalFats,
    totalCarbs: totalCarbs,
    shoppingList: Array.from(shoppingListSet),
  };
}
