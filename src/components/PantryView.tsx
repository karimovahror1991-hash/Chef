import React, { useState } from 'react';
import { PANTRY_PRESETS, matchRecipesByIngredients } from '../data/pantry';
import { Recipe, RecipeMatch, CATEGORY_LABELS } from '../types';
import { 
  Sparkles, 
  Search, 
  Plus, 
  X, 
  Utensils, 
  Clock, 
  CheckCircle, 
  ChefHat, 
  AlertCircle,
  ArrowRight,
  Loader2,
  SlidersHorizontal
} from 'lucide-react';
import { apiUrl } from '../utils/api';

interface PantryViewProps {
  allRecipes: Recipe[];
  onSelectRecipe: (recipe: Recipe) => void;
  onAddCustomRecipe: (recipe: Recipe) => void;
}

export const PantryView: React.FC<PantryViewProps> = ({
  allRecipes,
  onSelectRecipe,
  onAddCustomRecipe,
}) => {
  const [selectedIngredients, setSelectedIngredients] = useState<string[]>([
    'Говядина',
    'Лук репчатый',
    'Морковь',
  ]);
  const [customInput, setCustomInput] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Все');

  // AI Generator state
  const [isGenerating, setIsGenerating] = useState(false);
  const [generateError, setGenerateError] = useState<string | null>(null);
  const [timeLimit, setTimeLimit] = useState<number | undefined>(undefined);
  const [specialWish, setSpecialWish] = useState('');
  const [showAiModal, setShowAiModal] = useState(false);

  // Filter presets
  const categories = ['Все', 'Мясо и птица', 'Овощи и зелень', 'Крупы и мука', 'Молочные и яйца', 'Специи и соусы'];
  const filteredPresets = selectedCategory === 'Все'
    ? PANTRY_PRESETS
    : PANTRY_PRESETS.filter(p => p.category === selectedCategory);

  const toggleIngredient = (name: string) => {
    if (selectedIngredients.includes(name)) {
      setSelectedIngredients(selectedIngredients.filter(i => i !== name));
    } else {
      setSelectedIngredients([...selectedIngredients, name]);
    }
  };

  const handleAddCustom = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = customInput.trim();
    if (trimmed && !selectedIngredients.includes(trimmed)) {
      setSelectedIngredients([...selectedIngredients, trimmed]);
      setCustomInput('');
    }
  };

  // Matched recipes from catalog
  const matches: RecipeMatch[] = matchRecipesByIngredients(allRecipes, selectedIngredients);

  // Generate recipe via Gemini API
  const handleGenerateAiRecipe = async () => {
    if (selectedIngredients.length === 0) return;
    setIsGenerating(true);
    setGenerateError(null);

    try {
      const response = await fetch(apiUrl('/api/gemini/generate-recipe'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ingredients: selectedIngredients,
          cookingTime: timeLimit,
          preferences: specialWish,
          servings: 4,
        }),
      });

      const data = await response.json();
      if (!response.ok || data.error) {
        throw new Error(data.error || 'Не удалось сгенерировать рецепт');
      }

      onAddCustomRecipe(data.recipe);
      onSelectRecipe(data.recipe);
      setShowAiModal(false);
    } catch (err: any) {
      console.error(err);
      setGenerateError(err.message || 'Ошибка связи с кулинарным AI-сервером');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* Intro Hero Section */}
      <div className="bg-gradient-to-br from-amber-50/90 via-stone-50 to-orange-50/50 border border-amber-100 rounded-3xl p-6 sm:p-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-100/80 text-amber-900 text-xs font-semibold mb-3">
            <Utensils className="w-3.5 h-3.5 text-amber-700" />
            <span>Умный кулинарный помощник &bull; Подбор по наличию</span>
          </div>
          <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 leading-tight mb-2">
            Что приготовить из того, что есть под рукой?
          </h1>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
            Отметьте продукты из списка или введите любые остатки из холодильника.
            Система найдет проверенные совпадения в базе или создаст уникальный технологичный рецепт с помощью AI.
          </p>
        </div>

        {/* Selected Ingredients Bar */}
        <div className="mt-6 pt-6 border-t border-amber-200/60">
          <div className="flex items-center justify-between mb-3">
            <div className="text-xs sm:text-sm font-bold text-stone-900 flex items-center space-x-2">
              <span>Выбранные продукты ({selectedIngredients.length}):</span>
              {selectedIngredients.length > 0 && (
                <button
                  onClick={() => setSelectedIngredients([])}
                  className="text-xs text-stone-400 hover:text-stone-700 font-normal underline ml-2"
                >
                  Очистить всё
                </button>
              )}
            </div>

            {/* AI Generation Trigger */}
            <button
              onClick={() => setShowAiModal(true)}
              disabled={selectedIngredients.length === 0}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold flex items-center space-x-2 transition-all ${
                selectedIngredients.length > 0
                  ? 'bg-amber-600 hover:bg-amber-700 text-white shadow-md shadow-amber-600/20'
                  : 'bg-stone-200 text-stone-400 cursor-not-allowed'
              }`}
            >
              <Sparkles className="w-4 h-4" />
              <span>Создать авторский AI-рецепт</span>
            </button>
          </div>

          {/* Chips of chosen products */}
          {selectedIngredients.length === 0 ? (
            <div className="text-xs text-stone-500 italic p-3 bg-white/70 rounded-xl border border-stone-200/60">
              Пока ничего не выбрано. Выберите ингредиенты ниже или введите свои.
            </div>
          ) : (
            <div className="flex flex-wrap gap-2">
              {selectedIngredients.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white border border-amber-300 text-stone-900 shadow-2xs"
                >
                  <span>{item}</span>
                  <button
                    onClick={() => toggleIngredient(item)}
                    className="p-0.5 text-stone-400 hover:text-rose-600 rounded-full transition-colors"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </span>
              ))}
            </div>
          )}

          {/* Custom Ingredient Input Form */}
          <form onSubmit={handleAddCustom} className="mt-4 flex gap-2">
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
              <input
                type="text"
                value={customInput}
                onChange={(e) => setCustomInput(e.target.value)}
                placeholder="Добавить свой продукт (например, тыква, сливки, кабачок, фарш)..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-300 bg-white text-xs sm:text-sm focus:outline-hidden focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
              />
            </div>
            <button
              type="submit"
              disabled={!customInput.trim()}
              className="px-4 py-2.5 bg-stone-900 text-white rounded-xl text-xs sm:text-sm font-semibold hover:bg-stone-800 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-1.5"
            >
              <Plus className="w-4 h-4" />
              <span>Добавить</span>
            </button>
          </form>
        </div>
      </div>

      {/* Preset Categories Selector */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="font-serif text-lg sm:text-xl font-bold text-stone-900">
            Быстрый выбор продуктов
          </h2>
          <div className="flex overflow-x-auto gap-1.5 no-scrollbar py-1">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                  selectedCategory === cat
                    ? 'bg-stone-900 text-white'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Preset Chips Grid */}
        <div className="flex flex-wrap gap-2">
          {filteredPresets.map((item) => {
            const isSelected = selectedIngredients.includes(item.name);
            return (
              <button
                key={item.id}
                onClick={() => toggleIngredient(item.name)}
                className={`px-3 py-2 rounded-xl text-xs font-medium border transition-all select-none flex items-center space-x-1.5 ${
                  isSelected
                    ? 'bg-amber-600 text-white border-amber-600 shadow-xs'
                    : 'bg-white text-stone-700 border-stone-200 hover:border-stone-400'
                }`}
              >
                {isSelected ? <CheckCircle className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5 text-stone-400" />}
                <span>{item.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Results Section: Matched Recipes */}
      <div className="space-y-4 pt-4">
        <div className="flex items-center justify-between border-b border-stone-200 pb-3">
          <div>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
              Подходящие рецепты из базы
            </h2>
            <p className="text-xs text-stone-500">
              Найдено совпадений: {matches.length}
            </p>
          </div>
          {matches.length > 0 && (
            <span className="text-xs font-medium text-amber-900 bg-amber-50 px-2.5 py-1 rounded-md border border-amber-200">
              Сортировка по % совпадения
            </span>
          )}
        </div>

        {matches.length === 0 ? (
          <div className="p-8 sm:p-12 text-center rounded-2xl bg-white border border-stone-200 space-y-4">
            <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 mx-auto">
              <Utensils className="w-6 h-6" />
            </div>
            <div className="max-w-md mx-auto space-y-1">
              <h3 className="font-serif text-lg font-bold text-stone-900">
                Точных совпадений в классической базе не найдено
              </h3>
              <p className="text-xs sm:text-sm text-stone-500">
                У вас уникальный набор продуктов! Шеф-повар готов сгенерировать авторское блюдо специально под имеющиеся ингредиенты.
              </p>
            </div>
            <button
              onClick={() => setShowAiModal(true)}
              disabled={selectedIngredients.length === 0}
              className="px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white text-xs sm:text-sm font-semibold rounded-xl inline-flex items-center space-x-2 transition-all shadow-md shadow-amber-600/20"
            >
              <Sparkles className="w-4 h-4" />
              <span>Сгенерировать рецепт под этот набор</span>
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {matches.map(({ recipe, matchedIngredients, missingIngredients, matchScore }) => (
              <div
                key={recipe.id}
                onClick={() => onSelectRecipe(recipe)}
                className="group bg-white rounded-2xl border border-stone-200 hover:border-amber-400 hover:shadow-lg transition-all duration-200 overflow-hidden cursor-pointer flex flex-col"
              >
                {/* Header card info */}
                <div className="p-5 flex-1 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500">
                      {CATEGORY_LABELS[recipe.category] || recipe.category}
                    </span>

                    {/* Match Score Badge */}
                    <div className={`px-2.5 py-1 rounded-full text-xs font-bold flex items-center space-x-1 ${
                      matchScore >= 70
                        ? 'bg-emerald-100 text-emerald-800'
                        : matchScore >= 40
                        ? 'bg-amber-100 text-amber-800'
                        : 'bg-stone-100 text-stone-700'
                    }`}>
                      <span>{matchScore}% совпадение</span>
                    </div>
                  </div>

                  <h3 className="font-serif text-lg font-bold text-stone-900 group-hover:text-amber-700 transition-colors leading-snug">
                    {recipe.title}
                  </h3>

                  <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                    {recipe.description}
                  </p>

                  {/* Matched vs Missing Tags */}
                  <div className="space-y-2 pt-2 border-t border-stone-100 text-xs">
                    <div>
                      <span className="text-[11px] text-emerald-700 font-semibold block mb-1">
                        Есть в наличии ({matchedIngredients.length}):
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {matchedIngredients.slice(0, 4).map((m) => (
                          <span key={m} className="px-1.5 py-0.5 bg-emerald-50 text-emerald-800 rounded text-[11px]">
                            {m}
                          </span>
                        ))}
                        {matchedIngredients.length > 4 && (
                          <span className="text-[11px] text-stone-400">+{matchedIngredients.length - 4}</span>
                        )}
                      </div>
                    </div>

                    {missingIngredients.length > 0 && (
                      <div>
                        <span className="text-[11px] text-stone-500 font-medium block mb-1">
                          Не хватает ({missingIngredients.length}):
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {missingIngredients.slice(0, 3).map((m) => (
                            <span key={m} className="px-1.5 py-0.5 bg-stone-100 text-stone-600 rounded text-[11px]">
                              {m}
                            </span>
                          ))}
                          {missingIngredients.length > 3 && (
                            <span className="text-[11px] text-stone-400">+{missingIngredients.length - 3}</span>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Footer specs */}
                <div className="px-5 py-3 bg-stone-50/80 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                  <div className="flex items-center space-x-3">
                    <span className="flex items-center space-x-1">
                      <Clock className="w-3.5 h-3.5 text-stone-400" />
                      <span>{recipe.prepTime + recipe.cookTime} мин</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <ChefHat className="w-3.5 h-3.5 text-stone-400" />
                      <span>{recipe.difficulty}</span>
                    </span>
                  </div>

                  <span className="text-amber-700 font-semibold group-hover:translate-x-0.5 transition-transform flex items-center space-x-1">
                    <span>Готовить</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* AI Recipe Generator Modal */}
      {showAiModal && (
        <div className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-stone-200 p-6 space-y-5">
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <div className="flex items-center space-x-2.5">
                <div className="w-8 h-8 rounded-lg bg-amber-600 text-white flex items-center justify-center">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-stone-900">
                    Генератор шеф-рецепта (AI)
                  </h3>
                  <p className="text-xs text-stone-500">
                    Подбор блюда под точный набор ваших продуктов
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowAiModal(false)}
                className="p-1 rounded-lg text-stone-400 hover:text-stone-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Chosen products recap */}
            <div className="p-3 bg-amber-50/70 border border-amber-200/80 rounded-xl space-y-1">
              <span className="text-xs font-bold text-amber-900 block">
                Используемые продукты ({selectedIngredients.length}):
              </span>
              <p className="text-xs text-stone-700 leading-snug">
                {selectedIngredients.join(', ')}
              </p>
            </div>

            {/* Options */}
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                  Ограничение по времени:
                </label>
                <div className="grid grid-cols-3 gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => setTimeLimit(25)}
                    className={`py-2 rounded-lg border font-medium ${
                      timeLimit === 25 ? 'bg-amber-600 text-white border-amber-600' : 'border-stone-200 text-stone-700 hover:bg-stone-50'
                    }`}
                  >
                    Быстро (до 25 мин)
                  </button>
                  <button
                    type="button"
                    onClick={() => setTimeLimit(45)}
                    className={`py-2 rounded-lg border font-medium ${
                      timeLimit === 45 ? 'bg-amber-600 text-white border-amber-600' : 'border-stone-200 text-stone-700 hover:bg-stone-50'
                    }`}
                  >
                    Средне (до 45 мин)
                  </button>
                  <button
                    type="button"
                    onClick={() => setTimeLimit(undefined)}
                    className={`py-2 rounded-lg border font-medium ${
                      timeLimit === undefined ? 'bg-amber-600 text-white border-amber-600' : 'border-stone-200 text-stone-700 hover:bg-stone-50'
                    }`}
                  >
                    Любое время
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1.5">
                  Особые пожелания или инвентарь (необязательно):
                </label>
                <input
                  type="text"
                  value={specialWish}
                  onChange={(e) => setSpecialWish(e.target.value)}
                  placeholder="Например: в духовке, без глютена, сытный ужин, в одной сковороде..."
                  className="w-full px-3.5 py-2 text-xs sm:text-sm rounded-xl border border-stone-300 focus:outline-hidden focus:border-amber-500"
                />
              </div>
            </div>

            {generateError && (
              <div className="p-3 bg-rose-50 border border-rose-200 text-rose-800 text-xs rounded-xl flex items-start space-x-2">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>{generateError}</span>
              </div>
            )}

            <div className="flex items-center justify-end space-x-2 pt-2 border-t border-stone-100">
              <button
                type="button"
                onClick={() => setShowAiModal(false)}
                disabled={isGenerating}
                className="px-4 py-2 text-xs font-medium text-stone-600 hover:bg-stone-100 rounded-xl"
              >
                Отмена
              </button>
              <button
                type="button"
                onClick={handleGenerateAiRecipe}
                disabled={isGenerating}
                className="px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white text-xs sm:text-sm font-semibold rounded-xl flex items-center space-x-2 disabled:opacity-75 shadow-md shadow-amber-600/20"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Шеф рассчитывает рецептуру...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Сгенерировать рецепт</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
