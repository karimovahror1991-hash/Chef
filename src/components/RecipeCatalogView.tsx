import React, { useState, useMemo } from 'react';
import { Recipe, CATEGORY_LABELS } from '../types';
import { 
  Search, 
  Clock, 
  Users, 
  ChefHat, 
  Sparkles, 
  BookOpen, 
  Flame, 
  ArrowRight,
  Filter,
  Loader2,
  Plus
} from 'lucide-react';
import { apiUrl } from '../utils/api';

interface RecipeCatalogViewProps {
  recipes: Recipe[];
  onSelectRecipe: (recipe: Recipe) => void;
  onAddCustomRecipe: (recipe: Recipe) => void;
}

export const RecipeCatalogView: React.FC<RecipeCatalogViewProps> = ({
  recipes,
  onSelectRecipe,
  onAddCustomRecipe,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');

  // Request new classic recipe with AI
  const [customDishName, setCustomDishName] = useState('');
  const [isGeneratingDish, setIsGeneratingDish] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [addError, setAddError] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'Все разделы' },
    { id: 'dishes', label: 'Блюда' },
    { id: 'drinks', label: 'Напитки' },
    { id: 'pastry', label: 'Выпечка' },
    { id: 'salads', label: 'Салаты' },
    { id: 'marinades', label: 'Маринады' },
    { id: 'sauces', label: 'Соусы' },
  ];

  const filteredRecipes = useMemo(() => {
    return recipes.filter((recipe) => {
      // Category filter
      if (selectedCategory !== 'all' && recipe.category !== selectedCategory) {
        return false;
      }
      // Difficulty filter
      if (selectedDifficulty !== 'all' && recipe.difficulty !== selectedDifficulty) {
        return false;
      }
      // Search query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const inTitle = recipe.title.toLowerCase().includes(q);
        const inDesc = recipe.description.toLowerCase().includes(q);
        const inTags = recipe.tags.some(t => t.toLowerCase().includes(q));
        const inIngredients = recipe.ingredients.some(i => i.name.toLowerCase().includes(q));
        return inTitle || inDesc || inTags || inIngredients;
      }
      return true;
    });
  }, [recipes, selectedCategory, selectedDifficulty, searchQuery]);

  const handleGenerateCustomClassic = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customDishName.trim()) return;

    setIsGeneratingDish(true);
    setAddError(null);

    try {
      const response = await fetch(apiUrl('/api/gemini/generate-recipe'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ingredients: [customDishName.trim()],
          preferences: `Приготовь классический, аутентичный рецепт традиционного блюда "${customDishName.trim()}". Включи все традиционные ингредиенты, ресторанные секреты шеф-повара и технологические параметры.`,
          servings: 4,
        }),
      });

      const data = await response.json();
      if (!response.ok || data.error) {
        throw new Error(data.error || 'Не удалось сгенерировать рецепт');
      }

      if (!data.recipe || typeof data.recipe.title !== 'string' || !Array.isArray(data.recipe.ingredients) || !Array.isArray(data.recipe.instructions)) {
        throw new Error('AI вернул некорректный формат рецепта. Попробуйте еще раз.');
      }

      onAddCustomRecipe(data.recipe);
      onSelectRecipe(data.recipe);
      setCustomDishName('');
      setShowAddModal(false);
    } catch (err: any) {
      console.error(err);
      setAddError(err.message || 'Ошибка генерации блюда');
    } finally {
      setIsGeneratingDish(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
            База рецептов и кулинарная классика
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            Пошаговые проверенные технологии, точные граммовки и тонкие секреты шефа
          </p>
        </div>

        <button
          onClick={() => setShowAddModal(true)}
          className="px-4 py-2.5 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs sm:text-sm font-semibold flex items-center space-x-2 transition-all shadow-xs shrink-0 self-start md:self-auto"
        >
          <Sparkles className="w-4 h-4" />
          <span>Запросить любое блюдо у AI</span>
        </button>
      </div>

      {/* Search and Filters Bar */}
      <div className="bg-white p-4 rounded-2xl border border-stone-200 shadow-2xs space-y-3">
        <div className="flex flex-col sm:flex-row gap-3">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Поиск по названию блюда, продуктам или тегу (например: плов, говядина, рис, сыр)..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-300 text-xs sm:text-sm focus:outline-hidden focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
            />
          </div>

          {/* Difficulty filter */}
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-stone-400 shrink-0" />
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="px-3 py-2.5 rounded-xl border border-stone-300 text-xs sm:text-sm bg-white text-stone-700 focus:outline-hidden focus:border-amber-500"
            >
              <option value="all">Все сложности</option>
              <option value="Легко">Легко</option>
              <option value="Средне">Средне</option>
              <option value="Профи">Профи (мастер-класс)</option>
            </select>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex overflow-x-auto gap-1.5 no-scrollbar pt-1">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
                selectedCategory === cat.id
                  ? 'bg-amber-600 text-white font-semibold shadow-2xs'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Recipe Grid */}
      {filteredRecipes.length === 0 ? (
        <div className="p-12 text-center rounded-2xl bg-white border border-stone-200 space-y-3">
          <BookOpen className="w-10 h-10 text-stone-300 mx-auto" />
          <h3 className="font-serif text-lg font-bold text-stone-900">
            Ничего не найдено по вашему запросу
          </h3>
          <p className="text-xs text-stone-500 max-w-sm mx-auto">
            Попробуйте изменить поисковые слова или создайте новое блюдо с помощью умного шеф-повара.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedCategory('all');
              setSelectedDifficulty('all');
            }}
            className="text-xs text-amber-700 font-semibold underline"
          >
            Сбросить фильтры
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredRecipes.map((recipe) => (
            <div
              key={recipe.id}
              className="bg-white rounded-2xl border border-stone-200 hover:border-amber-400/80 hover:shadow-lg transition-all duration-200 overflow-hidden flex flex-col group"
            >
              {/* Card Body */}
              <div className="p-5 flex-1 space-y-3">
                {/* Meta Header */}
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold uppercase tracking-wider bg-stone-100 text-stone-700">
                    {CATEGORY_LABELS[recipe.category] || recipe.category}
                  </span>

                  <span className={`text-[11px] font-semibold px-2 py-0.5 rounded ${
                    recipe.difficulty === 'Профи' ? 'bg-rose-50 text-rose-700' :
                    recipe.difficulty === 'Средне' ? 'bg-amber-50 text-amber-800' : 'bg-emerald-50 text-emerald-700'
                  }`}>
                    {recipe.difficulty}
                  </span>
                </div>

                {/* Title */}
                <h3 
                  onClick={() => onSelectRecipe(recipe)}
                  className="font-serif text-lg sm:text-xl font-bold text-stone-900 group-hover:text-amber-700 transition-colors cursor-pointer leading-snug"
                >
                  {recipe.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-stone-600 line-clamp-2 leading-relaxed">
                  {recipe.description}
                </p>

                {/* Chef Secret Teaser */}
                {recipe.chefSecrets && recipe.chefSecrets.length > 0 && (
                  <div className="p-2.5 rounded-xl bg-amber-50/60 border border-amber-200/60 text-xs text-stone-700 space-y-1">
                    <div className="flex items-center space-x-1.5 text-amber-900 font-semibold text-[11px]">
                      <Sparkles className="w-3.5 h-3.5 text-amber-600" />
                      <span>Секрет от шефа:</span>
                    </div>
                    <p className="line-clamp-2 text-stone-600 italic">
                      &laquo;{recipe.chefSecrets[0]}&raquo;
                    </p>
                  </div>
                )}

                {/* Key ingredients count */}
                <div className="flex flex-wrap gap-1 text-[11px] text-stone-500 pt-1">
                  {recipe.ingredients.slice(0, 4).map((ing, i) => (
                    <span key={i} className="bg-stone-50 border border-stone-100 px-1.5 py-0.5 rounded">
                      {ing.name.split('(')[0]}
                    </span>
                  ))}
                  {recipe.ingredients.length > 4 && (
                    <span className="text-stone-400 py-0.5">+{recipe.ingredients.length - 4} продуктов</span>
                  )}
                </div>
              </div>

              {/* Card Footer with Quick Action Buttons */}
              <div className="px-5 py-3 bg-stone-50/90 border-t border-stone-100 flex items-center justify-between text-xs">
                <div className="flex items-center space-x-3 text-stone-500">
                  <span className="flex items-center space-x-1 font-medium">
                    <Clock className="w-3.5 h-3.5 text-amber-600" />
                    <span>{recipe.prepTime + recipe.cookTime} мин</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Users className="w-3.5 h-3.5 text-stone-400" />
                    <span>{recipe.servings} порц.</span>
                  </span>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => onSelectRecipe(recipe)}
                    className="px-3 py-1.5 bg-stone-900 group-hover:bg-amber-700 text-white rounded-lg font-semibold flex items-center space-x-1 transition-colors shadow-2xs"
                  >
                    <span>Рецепт</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal to Request Any Dish from AI */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl border border-stone-200 p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <div className="flex items-center space-x-2">
                <ChefHat className="w-5 h-5 text-amber-600" />
                <h3 className="font-serif text-lg font-bold text-stone-900">
                  Запрос рецепта у Шефа (AI)
                </h3>
              </div>
              <button
                onClick={() => setShowAddModal(false)}
                className="text-stone-400 hover:text-stone-700"
              >
                &times;
              </button>
            </div>

            <p className="text-xs text-stone-600">
              Введите любое традиционное или ресторанное блюдо (например: <em>«Хашлама из баранины», «Шурпа», «Хинкали», «Сливочный крем-суп из тыквы», «Тирамису»</em>).
              AI составит профессиональный рецепт, точные граммовки и секреты приготовления.
            </p>

            <form onSubmit={handleGenerateCustomClassic} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-stone-700 mb-1">
                  Название блюда:
                </label>
                <input
                  type="text"
                  required
                  value={customDishName}
                  onChange={(e) => setCustomDishName(e.target.value)}
                  placeholder="Например: Самаркандская самса с мясом"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-stone-300 text-xs sm:text-sm focus:outline-hidden focus:border-amber-500"
                />
              </div>

              {addError && (
                <div className="p-3 bg-rose-50 border border-rose-200 text-rose-800 text-xs rounded-xl">
                  {addError}
                </div>
              )}

              <div className="flex items-center justify-end space-x-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  disabled={isGeneratingDish}
                  className="px-4 py-2 text-xs font-medium text-stone-600 hover:bg-stone-100 rounded-xl"
                >
                  Отмена
                </button>
                <button
                  type="submit"
                  disabled={isGeneratingDish || !customDishName.trim()}
                  className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white text-xs sm:text-sm font-semibold rounded-xl flex items-center space-x-1.5 disabled:opacity-50"
                >
                  {isGeneratingDish ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Составление рецептуры...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      <span>Создать рецепт</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
