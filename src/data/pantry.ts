import { PantryItem, Recipe, RecipeMatch } from '../types';

export const PANTRY_PRESETS: PantryItem[] = [
  // Мясо и птица
  { id: 'beef', name: 'Говядина', category: 'Мясо и птица' },
  { id: 'lamb', name: 'Баранина', category: 'Мясо и птица' },
  { id: 'chicken', name: 'Курица / Филе', category: 'Мясо и птица' },
  { id: 'pork', name: 'Свинина / Грудинка', category: 'Мясо и птица' },
  { id: 'minced_meat', name: 'Фарш', category: 'Мясо и птица' },
  { id: 'bacon', name: 'Бекон / Гуанчале', category: 'Мясо и птица' },
  { id: 'shrimp', name: 'Креветки', category: 'Рыба и морепродукты' },
  { id: 'fish_fillet', name: 'Рыба (филе)', category: 'Рыба и морепродукты' },

  // Овощи и зелень
  { id: 'onion', name: 'Лук репчатый', category: 'Овощи и зелень' },
  { id: 'carrot', name: 'Морковь', category: 'Овощи и зелень' },
  { id: 'potato', name: 'Картофель', category: 'Овощи и зелень' },
  { id: 'garlic', name: 'Чеснок', category: 'Овощи и зелень' },
  { id: 'bell_pepper', name: 'Болгарский перец', category: 'Овощи и зелень' },
  { id: 'cabbage', name: 'Капуста', category: 'Овощи и зелень' },
  { id: 'beetroot', name: 'Свекла', category: 'Овощи и зелень' },
  { id: 'tomatoes', name: 'Помидоры', category: 'Овощи и зелень' },
  { id: 'mushrooms', name: 'Шампиньоны / Грибы', category: 'Овощи и зелень' },
  { id: 'celery', name: 'Сельдерей', category: 'Овощи и зелень' },
  { id: 'cucumber', name: 'Огурцы (свежие / соленые)', category: 'Овощи и зелень' },
  { id: 'herbs', name: 'Свежая зелень (укроп/петрушка/кинза/базилик)', category: 'Овощи и зелень' },

  // Крупы, макароны, мука
  { id: 'rice', name: 'Рис', category: 'Крупы и мука' },
  { id: 'flour', name: 'Мука пшеничная', category: 'Крупы и мука' },
  { id: 'pasta', name: 'Паста / Лапша', category: 'Крупы и мука' },
  { id: 'buckwheat', name: 'Гречка', category: 'Крупы и мука' },
  { id: 'oats', name: 'Овсянка', category: 'Крупы и мука' },
  { id: 'chickpeas', name: 'Нут / Горох', category: 'Крупы и мука' },
  { id: 'walnuts', name: 'Грецкие орехи / Кешью', category: 'Крупы и мука' },

  // Молочные продукты и яйца
  { id: 'eggs', name: 'Яйца куриные', category: 'Молочные и яйца' },
  { id: 'cottage_cheese', name: 'Творог', category: 'Молочные и яйца' },
  { id: 'cheese', name: 'Сыр (пармезан / сулугуни / моцарелла)', category: 'Молочные и яйца' },
  { id: 'cream_cheese', name: 'Сливочный сыр / Маскарпоне', category: 'Молочные и яйца' },
  { id: 'butter', name: 'Сливочное масло', category: 'Молочные и яйца' },
  { id: 'sour_cream', name: 'Сметана', category: 'Молочные и яйца' },
  { id: 'milk', name: 'Молоко', category: 'Молочные и яйца' },
  { id: 'cream', name: 'Сливки', category: 'Молочные и яйца' },

  // Специи, соусы и бакалея
  { id: 'tomato_paste', name: 'Томатная паста / Протертые томаты', category: 'Специи и соусы' },
  { id: 'soy_sauce', name: 'Соевый соус', category: 'Специи и соусы' },
  { id: 'zira', name: 'Зира (кумин)', category: 'Специи и соусы' },
  { id: 'oil', name: 'Растительное / Оливковое масло', category: 'Специи и соусы' },
  { id: 'mustard', name: 'Горчица', category: 'Специи и соусы' },
  { id: 'lemon', name: 'Лимон / Лайм', category: 'Специи и соусы' },
  { id: 'vinegar', name: 'Уксус', category: 'Специи и соусы' },
  { id: 'olives', name: 'Оливки / Маслины / Каперсы', category: 'Специи и соусы' },
  { id: 'sugar', name: 'Сахар / Сахарная пудра / Мед', category: 'Специи и соусы' },
  { id: 'chocolate', name: 'Шоколад / Какао', category: 'Специи и соусы' }
];

// Helper to normalize and match ingredients
export function matchRecipesByIngredients(recipes: Recipe[], userIngredients: string[]): RecipeMatch[] {
  if (!userIngredients || userIngredients.length === 0) {
    return [];
  }

  const normalizedUser = userIngredients.map(i => i.trim().toLowerCase());

  const results: RecipeMatch[] = recipes.map(recipe => {
    const recipeIngNames = recipe.ingredients.map(i => i.name.toLowerCase());
    const matched: string[] = [];
    const missing: string[] = [];

    recipe.ingredients.forEach(ing => {
      const ingLower = ing.name.toLowerCase();
      // Check if any user ingredient is substring or matches keyword
      const isMatched = normalizedUser.some(userIng => {
        const words = userIng.split(' ').filter(w => w.length > 2);
        return ingLower.includes(userIng) || userIng.includes(ingLower) || words.some(w => ingLower.includes(w));
      });

      if (isMatched) {
        matched.push(ing.name);
      } else {
        // Skip purely trivial spices from missing penalties (like salt, water, pepper)
        const isTrivial = ['соль', 'вода', 'перец черный', 'масло растительное'].some(t => ingLower.includes(t));
        if (!isTrivial) {
          missing.push(ing.name);
        }
      }
    });

    // Score based on significant ingredients
    const totalSignificant = matched.length + missing.length;
    const score = totalSignificant > 0 ? Math.round((matched.length / totalSignificant) * 100) : 0;

    return {
      recipe,
      matchedIngredients: matched,
      missingIngredients: missing,
      matchScore: score,
    };
  });

  // Filter out completely unmatched, sort by score descending
  return results
    .filter(r => r.matchedIngredients.length > 0)
    .sort((a, b) => b.matchScore - a.matchScore);
}
