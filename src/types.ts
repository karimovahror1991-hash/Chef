export interface Ingredient {
  name: string;
  amount: number;
  unit: string;
  coldWastePercent?: number; // % отхода при холодной обработке (чистка, обрезка)
  heatLossPercent?: number; // % потерь при тепловой обработке (уварка, ужарка)
  estimatedCostPerKg?: number; // ориентировочная стоимость за 1 кг/л/шт
  category?: string;
}

export interface InstructionStep {
  stepNumber: number;
  instruction: string;
  timerSeconds?: number;
  tip?: string;
}

export interface TechCardData {
  dishYield: string; // например "400 г"
  kzhbu: {
    calories: number; // ккал на 100г
    proteins: number; // белки на 100г
    fats: number;     // жиры на 100г
    carbs: number;    // углеводы на 100г
  };
  semiFinishedProducts?: string[];
  technologicalProcess?: string;
  servingTemperature?: string;
  storageConditions?: string;
}

export type RecipeCategory = 'dishes' | 'drinks' | 'pastry' | 'salads' | 'marinades' | 'sauces';

export const CATEGORY_LABELS: Record<RecipeCategory, string> = {
  dishes: 'Блюда',
  drinks: 'Напитки',
  pastry: 'Выпечка',
  salads: 'Салаты',
  marinades: 'Маринады',
  sauces: 'Соусы',
};

export interface Recipe {
  id: string;
  title: string;
  category: RecipeCategory;
  description: string;
  prepTime: number; // мин
  cookTime: number; // мин
  difficulty: 'Легко' | 'Средне' | 'Профи';
  servings: number;
  image?: string;
  tags: string[];
  ingredients: Ingredient[];
  instructions: InstructionStep[];
  chefSecrets: string[];
  techCard: TechCardData;
  isAiGenerated?: boolean;
}

export interface PantryItem {
  id: string;
  name: string;
  category: 'Мясо и птица' | 'Овощи и зелень' | 'Крупы и мука' | 'Молочные и яйца' | 'Рыба и морепродукты' | 'Специи и соусы' | 'Прочее';
}

export interface RecipeMatch {
  recipe: Recipe;
  matchedIngredients: string[];
  missingIngredients: string[];
  matchScore: number; // 0 - 100
}

export interface TechCardItem {
  id: string;
  name: string;
  grossWeight: number; // Брутто (г)
  coldWastePercent: number; // % холодной обработки
  netWeight: number; // Нетто (г)
  heatLossPercent: number; // % тепловой обработки
  outputWeight: number; // Выход (г)
  pricePerKg: number; // Цена за 1 кг (руб)
}

export interface FullTechCard {
  id: string;
  title: string;
  servings: number;
  portionYieldGrams: number;
  ingredients: TechCardItem[];
  kbju100g: {
    calories: number;
    proteins: number;
    fats: number;
    carbs: number;
  };
  technologyNotes?: string;
  servingTemp?: string;
  storageLife?: string;
}

export type MenuSlotType = 'breakfast' | 'lunch' | 'dinner' | 'snack' | 'soup' | 'main' | 'salad';

export interface ReadyMenuItem {
  slot: MenuSlotType;
  slotLabel: string;
  recipe: Recipe;
  usedUserIngredients: string[];
  missingIngredients: string[];
  cookingTimeMinutes: number;
}

export interface ReadyMenuPlan {
  id: string;
  type: 'day' | 'combo' | 'express' | 'zero_waste';
  title: string;
  description: string;
  items: ReadyMenuItem[];
  totalCookTime: number; // общие минуты готовки
  usedUserIngredients: string[]; // уникальные продукты пользователя, задействованные в меню
  wasteReductionPercent: number; // % использования остатков (до 100%)
  totalCalories: number;
  totalProteins: number;
  totalFats: number;
  totalCarbs: number;
  shoppingList: string[]; // недостающие ингредиенты по всему меню
}

