import React, { useState, useMemo } from 'react';
import { Recipe, CATEGORY_LABELS } from '../types';
import { 
  Search, 
  Clock, 
  Users, 
  ChefHat, 
  Sparkles, 
  BookOpen, 
  ArrowRight,
  Filter,
  Loader2
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
      if (selectedCategory !== 'all' && recipe.category !== selectedCategory) {
        return false;
      }
      if (selectedDifficulty !== 'all' && recipe.difficulty !== selectedDifficulty) {
        return false;
      }
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
            База рецептов
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            Выберите блюдо из списка, чтобы увидеть полный рецепт
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
          <div className="relative flex-1">
            <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Поиск по названию блюда..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-300 text-xs sm:text-sm focus:outline-hidden focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
            />
          </div>

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
              <option value="Профи">Профи</option>
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

      {/* Simple Recipe List */}
      {filteredRecipes.length === 0 ? (
        <div className="p-12 text-center rounded-2xl bg-white border border-stone-200 space-y-3">
          <BookOpen className="w-10 h-10 text-stone-300 mx-auto" />
          <h3 className="font-serif text-lg font-bold text-stone-900">
            Ничего не найдено
          </h3>
          <p className="text-xs text-stone-500 max-w-sm mx-auto">
            Попробуйте изменить поисковые слова или создайте новое блюдо с помощью AI.
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
        <div className="space-y-2">
          {filteredRecipes.map((recipe) => (
            <button
              key={recipe.id}
              onClick={() => onSelectRecipe(recipe)}
              className="w-full bg-white border border-stone-200 rounded-2xl p-4 flex items-center justify-between hover:border-amber-400 hover:shadow-md transition-all text-left group"
            >
              <div className="flex-1 min-w-0">
                <div className="flex items-center space-x-2 mb-1">
                  <span className="px-2 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-stone-100 text-stone-600">
                    {CATEGORY_LABELS[recipe.category] || recipe.category}
                  </span>
                  <span className={`text-[10px] font-semibold px-2 py-0.5 rounded ${
                    recipe.difficulty === 'Профи' ? 'bg-rose-50 text-rose-700' :
                    recipe.difficulty === 'Средне' ? 'bg-amber-50 text-amber-800' : 'bg-emerald-50 text-emerald-700'
                  }`}>
                    {recipe.difficulty}
                  </span>
                </div>
                <h3 className="font-serif text-base sm:text-lg font-bold text-stone-900 group-hover:text-amber-700 transition-colors truncate">
                  {recipe.title}
                </h3>
                <div className="flex items-center space-x-3 text-[11px] text-stone-500 mt-1">
                  <span className="flex items-center space-x-1">
                    <Clock className="w-3 h-3" />
                    <span>{recipe.prepTime + recipe.cookTime} мин</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <Users className="w-3 h-3" />
                    <span>{recipe.servings} порц.</span>
                  </span>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-stone-300 group-hover:text-amber-600 transition-colors shrink-0 ml-3" />
            </button>
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
              Введите любое блюдо, и AI составит профессиональный рецепт.
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
                  placeholder="Например: Самаркандская самса"
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
                      <span>Составление...</span>
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