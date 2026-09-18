import React, { useState, useMemo } from 'react';
import { Recipe, ReadyMenuPlan, ReadyMenuItem, CATEGORY_LABELS } from '../types';
import { 
  FRIDGE_COMMON_PRODUCTS, 
  parseFridgeInput, 
  matchRecipesDetailed, 
  generateReadyMenus,
  RecipeMatchDetail
} from '../utils/fridgeEngine';
import { 
  Refrigerator, 
  Sparkles, 
  Search, 
  Plus, 
  X, 
  Utensils, 
  Clock, 
  CheckCircle2, 
  ChefHat, 
  ArrowRight, 
  RotateCw, 
  Copy, 
  Check, 
  ShoppingCart, 
  Layers, 
  Flame, 
  SlidersHorizontal,
  Lightbulb,
  AlertCircle
} from 'lucide-react';
import { apiUrl } from '../utils/api';

interface SmartFridgeViewProps {
  allRecipes: Recipe[];
  onSelectRecipe: (recipe: Recipe) => void;
  onAddCustomRecipe: (recipe: Recipe) => void;
}

export const SmartFridgeView: React.FC<SmartFridgeViewProps> = ({
  allRecipes,
  onSelectRecipe,
  onAddCustomRecipe,
}) => {
  // Products currently inside the fridge
  const [fridgeItems, setFridgeItems] = useState<string[]>([
    'Курица / Филе',
    'Яйца куриные',
    'Сыр',
    'Свежая зелень'
  ]);

  // Natural language free-text input
  const [textInput, setTextInput] = useState('');
  const [activeShelf, setActiveShelf] = useState<string>('Все');
  const [selectedPlanIndex, setSelectedPlanIndex] = useState<number>(0);
  const [shuffleSeed, setShuffleSeed] = useState<number>(0);
  const [viewMode, setViewMode] = useState<'menu' | 'catalog' | 'ai'>('menu');

  // Copy states
  const [copiedMenu, setCopiedMenu] = useState(false);
  const [copiedShopping, setCopiedShopping] = useState(false);

  // AI Generator state
  const [isGenerating, setIsGenerating] = useState(false);
  const [generateError, setGenerateError] = useState<string | null>(null);
  const [aiCustomDish, setAiCustomDish] = useState('');

  // Preset scenarios to test quickly
  const QUICK_SCENARIOS = [
    { label: '🍗 Как у вас: курица, яйца, сыр, зелень', items: ['Курица / Филе', 'Яйца куриные', 'Сыр', 'Свежая зелень'] },
    { label: '🥓 Завтрак: яйца, сыр, колбаса, хлеб', items: ['Яйца куриные', 'Сыр', 'Колбаса / Сосиски', 'Хлеб / Батон'] },
    { label: '🥔 Домашний ужин: картошка, грибы, сметана, лук', items: ['Картофель', 'Шампиньоны / Грибы', 'Сметана', 'Лук репчатый', 'Свежая зелень'] },
    { label: '🍝 Паста-вечер: фарш, макароны, помидоры, чеснок', items: ['Фарш', 'Паста / Лапша', 'Помидоры', 'Чеснок', 'Сыр'] },
  ];

  // Shelves for quick picking
  const SHELF_CATEGORIES = ['Все', 'Молочные и яйца', 'Мясо и птица', 'Овощи и зелень', 'Крупы и мука', 'Бакалея и специи'];

  const filteredShelfProducts = activeShelf === 'Все'
    ? FRIDGE_COMMON_PRODUCTS
    : FRIDGE_COMMON_PRODUCTS.filter(p => p.category === activeShelf);

  // Parse natural language submission
  const handleAddFreeText = (e: React.FormEvent) => {
    e.preventDefault();
    if (!textInput.trim()) return;

    const parsed = parseFridgeInput(textInput);
    if (parsed.length > 0) {
      const combined = Array.from(new Set([...fridgeItems, ...parsed]));
      setFridgeItems(combined);
      setTextInput('');
      setSelectedPlanIndex(0);
      setShuffleSeed(0);
    } else {
      // Fallback: add literal capitalized item
      const item = textInput.trim();
      const cap = item.charAt(0).toUpperCase() + item.slice(1);
      if (!fridgeItems.includes(cap)) {
        setFridgeItems([...fridgeItems, cap]);
      }
      setTextInput('');
    }
  };

  const handleApplyScenario = (items: string[]) => {
    setFridgeItems(items);
    setSelectedPlanIndex(0);
    setShuffleSeed(0);
  };

  const toggleItem = (name: string) => {
    if (fridgeItems.includes(name)) {
      setFridgeItems(fridgeItems.filter(i => i !== name));
    } else {
      setFridgeItems([...fridgeItems, name]);
    }
    setSelectedPlanIndex(0);
    setShuffleSeed(0);
  };

  const removeItem = (name: string) => {
    setFridgeItems(fridgeItems.filter(i => i !== name));
  };

  const clearAll = () => {
    setFridgeItems([]);
  };

  // Generate ready menus from fridge
  const readyPlans: ReadyMenuPlan[] = useMemo(() => {
    if (fridgeItems.length === 0) return [];
    return generateReadyMenus(allRecipes, fridgeItems, shuffleSeed);
  }, [allRecipes, fridgeItems, shuffleSeed]);

  const currentPlan = readyPlans[selectedPlanIndex] || readyPlans[0];

  // All matched recipes for catalog view
  const allMatches: RecipeMatchDetail[] = useMemo(() => {
    if (fridgeItems.length === 0) return [];
    return matchRecipesDetailed(allRecipes, fridgeItems);
  }, [allRecipes, fridgeItems]);

  // Copy full menu to clipboard
  const handleCopyMenu = () => {
    if (!currentPlan) return;
    const text = `🍽️ ${currentPlan.title}\n` +
      `${currentPlan.description}\n\n` +
      currentPlan.items.map(it => 
        `• ${it.slotLabel}: ${it.recipe.title} (${it.cookingTimeMinutes} мин)\n` +
        `  Взято из холодильника: ${it.usedUserIngredients.join(', ') || 'базовые'}\n` +
        (it.missingIngredients.length > 0 ? `  Докупить: ${it.missingIngredients.join(', ')}\n` : `  ✓ Все ингредиенты в наличии!\n`)
      ).join('\n') +
      `\n⏱️ Общее время: ~${currentPlan.totalCookTime} мин` +
      `\n⚡ КБЖУ: ~${currentPlan.totalCalories} ккал | Б: ${currentPlan.totalProteins}г | Ж: ${currentPlan.totalFats}г | У: ${currentPlan.totalCarbs}г\n` +
      `♻️ Утилизация продуктов: ${currentPlan.wasteReductionPercent}% без остатка`;

    navigator.clipboard.writeText(text);
    setCopiedMenu(true);
    setTimeout(() => setCopiedMenu(false), 2200);
  };

  // Copy shopping list to clipboard
  const handleCopyShopping = () => {
    if (!currentPlan || currentPlan.shoppingList.length === 0) return;
    const text = `🛒 Список покупок для меню «${currentPlan.title}»:\n` +
      currentPlan.shoppingList.map((item, idx) => `${idx + 1}. ${item}`).join('\n');

    navigator.clipboard.writeText(text);
    setCopiedShopping(true);
    setTimeout(() => setCopiedShopping(false), 2200);
  };

  // Generate customized recipe via AI
  const handleGenerateAiRecipe = async () => {
    if (fridgeItems.length === 0) return;
    setIsGenerating(true);
    setGenerateError(null);

    try {
      const response = await fetch(apiUrl('/api/gemini/generate-recipe'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ingredients: fridgeItems,
          preferences: aiCustomDish || 'Максимально утилизировать продукты из холодильника',
          servings: 4,
        }),
      });

      const data = await response.json();
      if (!response.ok || data.error) {
        throw new Error(data.error || 'Не удалось сгенерировать рецепт');
      }

      onAddCustomRecipe(data.recipe);
      onSelectRecipe(data.recipe);
    } catch (err: any) {
      console.error(err);
      setGenerateError(err.message || 'Ошибка связи с кулинарным AI-сервером');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="space-y-8">
      {/* Top Banner: Smart Fridge Hero */}
      <div className="bg-gradient-to-br from-amber-500/10 via-stone-50 to-orange-500/5 border border-amber-200/80 rounded-3xl p-6 sm:p-8 shadow-xs">
        <div className="max-w-4xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold mb-3">
            <Refrigerator className="w-3.5 h-3.5 text-amber-700" />
            <span>Интеллектуальный Zero-Waste шеф &bull; 660+ проверенных рецептов</span>
          </div>

          <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-stone-900 leading-tight mb-2">
            Умный кулинарный помощник: готовое меню из того, что завалялось
          </h1>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed">
            Просто перечислите остатки с полок любой фразой (например: <span className="font-semibold text-stone-800 italic">«пара яиц, немного сыра, вчерашняя курица и зелень»</span>). Система распознает продукты, рассчитает утилизацию без отходов и сразу соберёт сбалансированное меню на день или комплексный обед.
          </p>
        </div>

        {/* Free-text input form */}
        <form onSubmit={handleAddFreeText} className="mt-6">
          <div className="flex flex-col sm:flex-row gap-2.5">
            <div className="relative flex-1">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400" />
              <input
                type="text"
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
                placeholder="Что завалялось на полках? (например: пара яиц, немного сыра, вчерашняя курица и зелень)..."
                className="w-full pl-10 pr-4 py-3 rounded-2xl border border-stone-300/90 bg-white text-sm focus:outline-hidden focus:border-amber-500 focus:ring-2 focus:ring-amber-500/20 shadow-xs placeholder:text-stone-400"
              />
            </div>
            <button
              type="submit"
              disabled={!textInput.trim()}
              className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-2xl text-sm font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 shadow-sm shadow-amber-600/20 active:scale-[0.98]"
            >
              <Plus className="w-4 h-4" />
              <span>Закинуть в холодильник</span>
            </button>
          </div>
        </form>

        {/* Quick Clickable Presets */}
        <div className="mt-4 pt-4 border-t border-stone-200/60">
          <div className="text-xs text-stone-500 font-medium mb-2 flex items-center space-x-1.5">
            <Lightbulb className="w-3.5 h-3.5 text-amber-600" />
            <span>Быстрые примеры остатков (кликните для проверки):</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {QUICK_SCENARIOS.map((sc, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleApplyScenario(sc.items)}
                className="px-3 py-1.5 rounded-xl text-xs bg-white hover:bg-amber-50 hover:text-amber-900 border border-stone-200 hover:border-amber-300 text-stone-700 transition-all shadow-2xs text-left"
              >
                {sc.label}
              </button>
            ))}
          </div>
        </div>

        {/* Current Fridge Shelves Status */}
        <div className="mt-6 pt-5 border-t border-stone-200/80">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2">
              <span className="text-xs sm:text-sm font-bold text-stone-900">
                Сейчас на полках холодильника ({fridgeItems.length}):
              </span>
              {fridgeItems.length > 0 && (
                <button
                  type="button"
                  onClick={clearAll}
                  className="text-xs text-stone-400 hover:text-rose-600 transition-colors underline ml-2"
                >
                  Очистить всё
                </button>
              )}
            </div>
            {fridgeItems.length > 0 && (
              <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-md">
                ✓ Продукты распознаны
              </span>
            )}
          </div>

          {fridgeItems.length === 0 ? (
            <div className="p-4 rounded-xl bg-white/80 border border-dashed border-stone-300 text-stone-500 text-xs italic text-center">
              Холодильник пуст. Введите список продуктов в строке выше или выберите ингредиенты с полок ниже.
            </div>
          ) : (
            <div className="flex flex-wrap gap-2">
              {fridgeItems.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-white border border-amber-300 text-stone-900 shadow-2xs"
                >
                  <span>{item}</span>
                  <button
                    type="button"
                    onClick={() => removeItem(item)}
                    className="p-0.5 text-stone-400 hover:text-rose-600 rounded-full transition-colors"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Interactive Shelves: Shelf categories selector */}
      <div className="space-y-3 bg-white p-5 sm:p-6 rounded-3xl border border-stone-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
          <div className="flex items-center space-x-2">
            <Refrigerator className="w-5 h-5 text-amber-600" />
            <h2 className="font-serif text-lg sm:text-xl font-bold text-stone-900">
              Полки холодильника (добавить в один клик)
            </h2>
          </div>

          <div className="flex overflow-x-auto gap-1 no-scrollbar py-0.5">
            {SHELF_CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveShelf(cat)}
                className={`px-3 py-1 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                  activeShelf === cat
                    ? 'bg-stone-900 text-white'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Shelf items grid */}
        <div className="flex flex-wrap gap-2 pt-1">
          {filteredShelfProducts.map((p) => {
            const isSelected = fridgeItems.includes(p.canonicalName);
            return (
              <button
                key={p.canonicalName}
                type="button"
                onClick={() => toggleItem(p.canonicalName)}
                className={`px-3 py-2 rounded-xl text-xs font-medium border transition-all select-none flex items-center space-x-1.5 ${
                  isSelected
                    ? 'bg-amber-600 text-white border-amber-600 shadow-2xs font-semibold'
                    : 'bg-stone-50 hover:bg-white text-stone-700 border-stone-200 hover:border-amber-300'
                }`}
              >
                {p.iconText && <span className="text-sm">{p.iconText}</span>}
                <span>{p.canonicalName}</span>
                {isSelected ? (
                  <CheckCircle2 className="w-3.5 h-3.5 text-white ml-0.5" />
                ) : (
                  <Plus className="w-3 h-3 text-stone-400 ml-0.5" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Mode Navigation Bar: Menu vs All Recipes vs AI */}
      <div className="border-b border-stone-200 flex items-center justify-between pb-3">
        <div className="flex space-x-2">
          <button
            type="button"
            onClick={() => setViewMode('menu')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
              viewMode === 'menu'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'text-stone-600 hover:bg-stone-100'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Готовое меню ({readyPlans.length} планов)</span>
          </button>

          <button
            type="button"
            onClick={() => setViewMode('catalog')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
              viewMode === 'catalog'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'text-stone-600 hover:bg-stone-100'
            }`}
          >
            <Utensils className="w-4 h-4" />
            <span>Все подходящие рецепты ({allMatches.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setViewMode('ai')}
            className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
              viewMode === 'ai'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'text-stone-600 hover:bg-stone-100'
            }`}
          >
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>AI Шеф-автор</span>
          </button>
        </div>

        {viewMode === 'menu' && readyPlans.length > 0 && (
          <button
            type="button"
            onClick={() => setShuffleSeed(prev => prev + 1)}
            className="hidden sm:flex items-center space-x-1.5 px-3 py-1.5 rounded-xl border border-stone-300 text-xs font-medium text-stone-700 hover:bg-stone-50 transition-colors"
          >
            <RotateCw className="w-3.5 h-3.5 text-stone-500" />
            <span>Другой вариант меню</span>
          </button>
        )}
      </div>

      {/* VIEW MODE 1: ГОТОВОЕ МЕНЮ (Primary requested feature) */}
      {viewMode === 'menu' && (
        <div className="space-y-6">
          {fridgeItems.length === 0 ? (
            <div className="p-12 text-center bg-white rounded-3xl border border-stone-200 space-y-3">
              <div className="w-14 h-14 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600 mx-auto">
                <Refrigerator className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-xl font-bold text-stone-900">
                Загрузите продукты в холодильник
              </h3>
              <p className="text-sm text-stone-500 max-w-md mx-auto">
                Введите остатки в строку наверху (например, «пара яиц, немного сыра, вчерашняя курица и зелень»), чтобы умный помощник подобрал меню.
              </p>
              <button
                type="button"
                onClick={() => handleApplyScenario(QUICK_SCENARIOS[0].items)}
                className="px-4 py-2.5 bg-amber-600 text-white rounded-xl text-xs font-semibold hover:bg-amber-700 transition-colors inline-flex items-center space-x-2"
              >
                <span>Загрузить тестовый набор продуктов</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : readyPlans.length === 0 ? (
            <div className="p-10 text-center bg-white rounded-3xl border border-stone-200">
              <AlertCircle className="w-10 h-10 text-amber-500 mx-auto mb-3" />
              <h3 className="font-serif text-lg font-bold text-stone-900">
                Для этого набора пока нет точных сочетаний меню
              </h3>
              <p className="text-xs text-stone-500 mt-1 max-w-sm mx-auto">
                Попробуйте добавить еще 1-2 базовых продукта (яйца, сыр, зелень или лук) или сгенерировать авторское блюдо в AI Шефе.
              </p>
            </div>
          ) : (
            <>
              {/* Menu Plan Switcher Tabs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {readyPlans.map((plan, idx) => {
                  const isCurrent = selectedPlanIndex === idx;
                  return (
                    <button
                      key={plan.id}
                      type="button"
                      onClick={() => setSelectedPlanIndex(idx)}
                      className={`p-4 rounded-2xl text-left border transition-all ${
                        isCurrent
                          ? 'bg-amber-50/80 border-amber-400 ring-2 ring-amber-400/20 shadow-xs'
                          : 'bg-white border-stone-200 hover:border-stone-300'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-amber-800">
                          Вариант {idx + 1}
                        </span>
                        <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                          {plan.wasteReductionPercent}% остатков
                        </span>
                      </div>
                      <h3 className="font-serif text-sm font-bold text-stone-900 leading-snug">
                        {plan.title}
                      </h3>
                      <p className="text-[11px] text-stone-500 line-clamp-2 mt-1">
                        {plan.description}
                      </p>
                      <div className="mt-3 pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] text-stone-500">
                        <span>{plan.items.length} блюда</span>
                        <span>~{plan.totalCookTime} мин</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Active Menu Detail Card */}
              {currentPlan && (
                <div className="bg-white rounded-3xl border border-stone-200 overflow-hidden shadow-xs">
                  {/* Menu Summary Header */}
                  <div className="p-6 sm:p-7 border-b border-stone-200/80 bg-stone-50/60">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div>
                        <div className="flex items-center space-x-2 mb-1.5">
                          <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-amber-100 text-amber-900">
                            Готовое меню
                          </span>
                          <span className="text-xs text-stone-500">&bull;</span>
                          <span className="text-xs font-medium text-emerald-700 flex items-center space-x-1">
                            <CheckCircle2 className="w-3.5 h-3.5" />
                            <span>Утилизировано {currentPlan.usedUserIngredients.length} из {fridgeItems.length} продуктов</span>
                          </span>
                        </div>
                        <h2 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
                          {currentPlan.title}
                        </h2>
                        <p className="text-xs sm:text-sm text-stone-600 mt-1 max-w-2xl">
                          {currentPlan.description}
                        </p>
                      </div>

                      {/* Action buttons: Copy & Shuffle */}
                      <div className="flex items-center space-x-2">
                        <button
                          type="button"
                          onClick={() => setShuffleSeed(prev => prev + 1)}
                          className="px-3.5 py-2 rounded-xl border border-stone-300 text-xs font-semibold text-stone-700 hover:bg-white transition-all flex items-center space-x-1.5 shadow-2xs"
                        >
                          <RotateCw className="w-3.5 h-3.5 text-stone-500" />
                          <span>Перемешать блюда</span>
                        </button>

                        <button
                          type="button"
                          onClick={handleCopyMenu}
                          className="px-4 py-2 rounded-xl bg-stone-900 text-white text-xs font-semibold hover:bg-stone-800 transition-all flex items-center space-x-1.5 shadow-xs"
                        >
                          {copiedMenu ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                          <span>{copiedMenu ? 'Скопировано!' : 'Скопировать меню'}</span>
                        </button>
                      </div>
                    </div>

                    {/* Fast Stats Bar */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-5 border-t border-stone-200">
                      <div className="p-3 bg-white rounded-xl border border-stone-100">
                        <span className="text-[10px] text-stone-400 uppercase font-semibold block">Время на кухне</span>
                        <span className="text-base font-bold text-stone-900 flex items-center space-x-1 mt-0.5">
                          <Clock className="w-4 h-4 text-amber-600" />
                          <span>~{currentPlan.totalCookTime} мин</span>
                        </span>
                      </div>

                      <div className="p-3 bg-white rounded-xl border border-stone-100">
                        <span className="text-[10px] text-stone-400 uppercase font-semibold block">Суммарный КБЖУ</span>
                        <span className="text-base font-bold text-stone-900 flex items-center space-x-1 mt-0.5">
                          <Flame className="w-4 h-4 text-orange-600" />
                          <span>~{currentPlan.totalCalories} ккал</span>
                        </span>
                      </div>

                      <div className="p-3 bg-white rounded-xl border border-stone-100">
                        <span className="text-[10px] text-stone-400 uppercase font-semibold block">Белки / Жиры / Угл</span>
                        <span className="text-xs font-bold text-stone-800 mt-1 block">
                          Б: {currentPlan.totalProteins}г &bull; Ж: {currentPlan.totalFats}г &bull; У: {currentPlan.totalCarbs}г
                        </span>
                      </div>

                      <div className="p-3 bg-white rounded-xl border border-stone-100">
                        <span className="text-[10px] text-stone-400 uppercase font-semibold block">Покупки в магазине</span>
                        <span className={`text-xs font-bold mt-1 block ${currentPlan.shoppingList.length === 0 ? 'text-emerald-700' : 'text-amber-800'}`}>
                          {currentPlan.shoppingList.length === 0 ? '✓ Всё есть на полках' : `Докупить ${currentPlan.shoppingList.length} поз.`}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Meals in this Menu */}
                  <div className="p-6 sm:p-7 space-y-5">
                    <h3 className="font-serif text-lg font-bold text-stone-900">
                      Состав готового меню:
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {currentPlan.items.map((item, idx) => (
                        <div
                          key={`${item.recipe.id}-${idx}`}
                          className="bg-stone-50/50 hover:bg-stone-50 rounded-2xl border border-stone-200 p-5 transition-all flex flex-col justify-between space-y-4"
                        >
                          <div>
                            {/* Meal slot badge */}
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-xs font-bold px-2.5 py-1 rounded-lg bg-white border border-stone-200 text-stone-800 shadow-2xs">
                                {item.slotLabel}
                              </span>
                              <span className="text-xs text-stone-500 flex items-center space-x-1">
                                <Clock className="w-3.5 h-3.5 text-stone-400" />
                                <span>{item.cookingTimeMinutes} мин</span>
                              </span>
                            </div>

                            {/* Title & Description */}
                            <h4 className="font-serif text-base font-bold text-stone-900 hover:text-amber-700 transition-colors cursor-pointer" onClick={() => onSelectRecipe(item.recipe)}>
                              {item.recipe.title}
                            </h4>
                            <p className="text-xs text-stone-600 mt-1 line-clamp-2 leading-relaxed">
                              {item.recipe.description}
                            </p>

                            {/* Used Ingredients from Fridge */}
                            <div className="mt-3.5 pt-3 border-t border-stone-200/60">
                              <span className="text-[11px] font-semibold text-emerald-800 block mb-1">
                                Взято из холодильника:
                              </span>
                              <div className="flex flex-wrap gap-1.5">
                                {item.usedUserIngredients.map((u) => (
                                  <span
                                    key={u}
                                    className="inline-flex items-center space-x-1 text-[11px] font-medium px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-900 border border-emerald-200"
                                  >
                                    <Check className="w-3 h-3 text-emerald-600" />
                                    <span>{u}</span>
                                  </span>
                                ))}
                              </div>
                            </div>

                            {/* Missing Ingredients or All in Stock */}
                            <div className="mt-2.5">
                              {item.missingIngredients.length > 0 ? (
                                <div className="text-[11px] text-stone-500">
                                  <span className="font-medium text-amber-900">Докупить: </span>
                                  <span>{item.missingIngredients.join(', ')}</span>
                                </div>
                              ) : (
                                <div className="text-[11px] text-emerald-700 font-medium flex items-center space-x-1">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                                  <span>Все ингредиенты уже есть дома!</span>
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Action Buttons for this Dish */}
                          <div className="pt-3 border-t border-stone-200/80 flex items-center justify-between gap-2">
                            <button
                              type="button"
                              onClick={() => onSelectRecipe(item.recipe)}
                              className="px-3.5 py-1.5 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-xs font-semibold transition-colors flex items-center space-x-1 shadow-2xs"
                            >
                              <span>Рецепт</span>
                              <ArrowRight className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Integrated Shopping List Accordion */}
                    {currentPlan.shoppingList.length > 0 && (
                      <div className="mt-6 p-5 rounded-2xl bg-amber-50/50 border border-amber-200">
                        <div className="flex items-center justify-between mb-3">
                          <div className="flex items-center space-x-2">
                            <ShoppingCart className="w-4 h-4 text-amber-700" />
                            <h4 className="font-serif text-sm font-bold text-stone-900">
                              Список покупок для этого меню ({currentPlan.shoppingList.length} поз.)
                            </h4>
                          </div>
                          <button
                            type="button"
                            onClick={handleCopyShopping}
                            className="text-xs font-semibold text-amber-900 hover:underline flex items-center space-x-1"
                          >
                            {copiedShopping ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                            <span>{copiedShopping ? 'Скопировано!' : 'Скопировать список'}</span>
                          </button>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
                          {currentPlan.shoppingList.map((shopItem, sIdx) => (
                            <div
                              key={sIdx}
                              className="flex items-center space-x-2 p-2 rounded-lg bg-white border border-amber-200/70 text-xs text-stone-800"
                            >
                              <input type="checkbox" id={`shop-${sIdx}`} className="rounded-sm text-amber-600 focus:ring-amber-500" />
                              <label htmlFor={`shop-${sIdx}`} className="cursor-pointer select-none truncate">
                                {shopItem}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      )}

      {/* VIEW MODE 2: ВСЕ ПОДХОДЯЩИЕ РЕЦЕПТЫ КАТАЛОГА */}
      {viewMode === 'catalog' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between pb-2 border-b border-stone-200">
            <div>
              <h3 className="font-serif text-xl font-bold text-stone-900">
                Все блюда с совпадением по остаткам
              </h3>
              <p className="text-xs text-stone-500">
                Найдено совпадений: {allMatches.length} из 660+ проверенных рецептов
              </p>
            </div>
            <span className="text-xs font-semibold bg-amber-50 text-amber-900 border border-amber-200 px-2.5 py-1 rounded-lg">
              Сортировка по % совпадения
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {allMatches.slice(0, 30).map((m) => (
              <div
                key={m.recipe.id}
                className="bg-white rounded-2xl border border-stone-200 p-5 hover:border-amber-300 hover:shadow-sm transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                      {m.matchScore}% совпадение
                    </span>
                    <span className="text-xs text-stone-500 font-mono">
                      ~{m.recipe.prepTime + m.recipe.cookTime} мин
                    </span>
                  </div>

                  <h4
                    className="font-serif text-base font-bold text-stone-900 hover:text-amber-700 cursor-pointer transition-colors"
                    onClick={() => onSelectRecipe(m.recipe)}
                  >
                    {m.recipe.title}
                  </h4>
                  <p className="text-xs text-stone-600 mt-1 line-clamp-2">
                    {m.recipe.description}
                  </p>

                  {/* Matched badges */}
                  <div className="mt-3">
                    <span className="text-[10px] text-stone-400 font-semibold uppercase block mb-1">
                      Использует из полок:
                    </span>
                    <div className="flex flex-wrap gap-1">
                      {m.usedUserItems.map((u) => (
                        <span key={u} className="text-[11px] px-2 py-0.5 bg-emerald-50 text-emerald-900 rounded-md border border-emerald-200">
                          ✓ {u}
                        </span>
                      ))}
                    </div>
                  </div>

                  {m.missingIngredients.length > 0 && (
                    <div className="mt-2 text-[11px] text-stone-500">
                      <span className="font-semibold text-stone-700">Не хватает ({m.missingIngredients.length}): </span>
                      <span>{m.missingIngredients.slice(0, 3).join(', ')}{m.missingIngredients.length > 3 ? '...' : ''}</span>
                    </div>
                  )}
                </div>

                <div className="mt-4 pt-3 border-t border-stone-100 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => onSelectRecipe(m.recipe)}
                    className="text-xs font-semibold text-amber-700 hover:text-amber-800 flex items-center space-x-1"
                  >
                    <span>Открыть рецепт</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* VIEW MODE 3: AI ШЕФ-АВТОР (Индивидуальный шедевр) */}
      {viewMode === 'ai' && (
        <div className="bg-white rounded-3xl border border-stone-200 p-6 sm:p-8 space-y-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-semibold mb-2">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              <span>Нейросетевой шеф-повар высокой кухни</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-stone-900">
              Создать авторское блюдо из ваших продуктов
            </h3>
            <p className="text-sm text-stone-600 mt-1 leading-relaxed">
              Если вы хотите что-то особенное или редкое сочетание, шеф-повар Gemini сгенерирует детальный рецепт с точной технологической картой, калькуляцией отходов и пошаговым таймером.
            </p>
          </div>

          <div className="space-y-4 max-w-xl">
            <div>
              <label className="text-xs font-semibold text-stone-700 block mb-1">
                Продукты для приготовления:
              </label>
              <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs text-stone-800 flex flex-wrap gap-1.5">
                {fridgeItems.map(i => (
                  <span key={i} className="px-2 py-1 rounded-md bg-white border border-stone-300 font-medium">
                    {i}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <label className="text-xs font-semibold text-stone-700 block mb-1">
                Особые пожелания или тип блюда (необязательно):
              </label>
              <input
                type="text"
                value={aiCustomDish}
                onChange={(e) => setAiCustomDish(e.target.value)}
                placeholder="Например: сытный горячий ужин за 25 минут, или ресторанная подача, или без лука..."
                className="w-full px-4 py-2.5 rounded-xl border border-stone-300 text-xs sm:text-sm focus:outline-hidden focus:border-amber-500"
              />
            </div>

            {generateError && (
              <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-xs text-rose-700 flex items-center space-x-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{generateError}</span>
              </div>
            )}

            <button
              type="button"
              onClick={handleGenerateAiRecipe}
              disabled={isGenerating || fridgeItems.length === 0}
              className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-xl text-sm font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2 shadow-md shadow-amber-600/20"
            >
              {isGenerating ? (
                <>
                  <RotateCw className="w-4 h-4 animate-spin" />
                  <span>Шеф рассчитывает рецептуру и техкарту...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>Сгенерировать авторское блюдо</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
