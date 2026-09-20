import React, { useState, useEffect } from 'react';
import { useShoppingList } from '../hooks/useShoppingList';
import { Recipe, CATEGORY_LABELS } from '../types';
import { ShoppingCart, Check } from 'lucide-react';
import { 
  X, 
  Clock, 
  Users, 
  Flame, 
  Play, 
  Pause, 
  RotateCcw, 
  CheckCircle2, 
  BookOpen, 
  Sparkles,
  Minus,
  Plus,
  Info,
  Scale
} from 'lucide-react';
import { scaleIngredients, convertRecipeToTechCardItems, calculateTechCardTotals, formatScaledAmount } from '../utils/calculator';
import { playTimerChime } from '../utils/audio';

interface RecipeDetailModalProps {
  recipe: Recipe | null;
  onClose: () => void;
}

export const RecipeDetailModal: React.FC<RecipeDetailModalProps> = ({
  recipe,
  onClose,
}) => {
  const [servings, setServings] = useState<number>(recipe?.servings || 4);
  const [activeTab, setActiveTab] = useState<'cooking' | 'techcard'>('cooking');
  const [checkedIngredients, setCheckedIngredients] = useState<Record<number, boolean>>({});
const { addRecipe } = useShoppingList();
const [addedToList, setAddedToList] = useState(false);
  // Step timers state: { [stepNumber]: { remaining: number, isRunning: boolean, initial: number } }
  const [timers, setTimers] = useState<Record<number, { remaining: number; isRunning: boolean; initial: number }>>({});

  // Initialize step timers
  useEffect(() => {
    if (!recipe) return;
    setServings(recipe.servings || 4);
    const initialTimers: Record<number, { remaining: number; isRunning: boolean; initial: number }> = {};
    recipe.instructions.forEach((step) => {
      if (step.timerSeconds && step.timerSeconds > 0) {
        initialTimers[step.stepNumber] = {
          remaining: step.timerSeconds,
          initial: step.timerSeconds,
          isRunning: false,
        };
      }
    });
    setTimers(initialTimers);
    setCheckedIngredients({});
  }, [recipe]);

  // Interval ticker for running timers
  useEffect(() => {
    const interval = setInterval(() => {
      setTimers((prev) => {
        let hasChanges = false;
        const next = { ...prev };

        Object.keys(next).forEach((key) => {
          const stepNum = Number(key);
          const t = next[stepNum];
          if (t && t.isRunning) {
            hasChanges = true;
            if (t.remaining > 1) {
              next[stepNum] = { ...t, remaining: t.remaining - 1 };
            } else {
              // Timer finished!
              next[stepNum] = { ...t, remaining: 0, isRunning: false };
              playTimerChime();
            }
          }
        });

        return hasChanges ? next : prev;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const toggleTimer = (stepNumber: number) => {
    setTimers((prev) => {
      const current = prev[stepNumber];
      if (!current) return prev;
      return {
        ...prev,
        [stepNumber]: {
          ...current,
          isRunning: !current.isRunning,
        },
      };
    });
  };

  const resetTimer = (stepNumber: number) => {
    setTimers((prev) => {
      const current = prev[stepNumber];
      if (!current) return prev;
      return {
        ...prev,
        [stepNumber]: {
          ...current,
          remaining: current.initial,
          isRunning: false,
        },
      };
    });
  };

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}:${s < 10 ? '0' : ''}${s}`;
  };

  if (!recipe) return null;

  const scaledIngredients = scaleIngredients(recipe.ingredients, recipe.servings, servings);
  const techItems = convertRecipeToTechCardItems(recipe, servings);
  const totals = calculateTechCardTotals(techItems, servings);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 md:p-6">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-stone-200 overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header Bar */}
        <div className="px-5 py-4 sm:px-6 sm:py-5 border-b border-stone-100 bg-stone-50 flex items-center justify-between">
          <div>
            <div className="flex items-center space-x-2 mb-1">
              <span className="px-2 py-0.5 rounded text-[11px] font-semibold uppercase tracking-wider bg-amber-100 text-amber-900">
                {CATEGORY_LABELS[recipe.category] || recipe.category}
              </span>
              <span className="text-xs text-stone-500 font-medium">Сложность: {recipe.difficulty}</span>
            </div>
            <h2 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
              {recipe.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-stone-400 hover:text-stone-700 hover:bg-stone-200/60 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* View Switcher & Servings Scaler Bar */}
        <div className="px-5 py-3 sm:px-6 bg-white border-b border-stone-100 flex flex-wrap items-center justify-between gap-3">
          {/* Tabs */}
          <div className="flex items-center p-1 bg-stone-100 rounded-xl space-x-1">
            <button
              onClick={() => setActiveTab('cooking')}
              className={`flex items-center space-x-2 px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === 'cooking'
                  ? 'bg-white text-stone-900 shadow-xs'
                  : 'text-stone-600 hover:text-stone-900'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5 text-amber-600" />
              <span>Пошаговое приготовление</span>
            </button>
          </div>

          {/* Interactive Servings Scaler */}
          <div className="flex items-center space-x-2 bg-amber-50/70 border border-amber-200/80 px-3 py-1.5 rounded-xl">
            <Users className="w-4 h-4 text-amber-700" />
            <span className="text-xs font-medium text-stone-700">Порций:</span>
            <div className="flex items-center space-x-1">
              <button
                onClick={() => setServings(Math.max(1, servings - 1))}
                className="w-6 h-6 rounded-md bg-white border border-stone-200 flex items-center justify-center text-stone-700 hover:bg-amber-100 transition-colors"
                title="Уменьшить порции"
              >
                <Minus className="w-3 h-3" />
              </button>
              <input
                type="number"
                min="1"
                max="100"
                value={servings}
                onChange={(e) => {
                  const v = parseInt(e.target.value);
                  if (!isNaN(v) && v > 0) setServings(v);
                }}
                className="w-10 text-center font-bold text-sm bg-transparent border-none focus:outline-hidden text-stone-900"
              />
              <button
                onClick={() => setServings(servings + 1)}
                className="w-6 h-6 rounded-md bg-white border border-stone-200 flex items-center justify-center text-stone-700 hover:bg-amber-100 transition-colors"
                title="Увеличить порции"
              >
                <Plus className="w-3 h-3" />
              </button>
            </div>
            {servings !== recipe.servings && (
              <button
                onClick={() => setServings(recipe.servings)}
                className="text-[11px] text-amber-700 underline ml-1 hover:text-amber-900"
              >
                Сброс ({recipe.servings})
              </button>
            )}
          </div>
        </div>

        {/* Modal Body */}
        <div className="overflow-y-auto p-5 sm:p-6 space-y-6 flex-1">
          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-3 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center space-x-1.5 text-stone-500 text-xs mb-1">
                <Clock className="w-3.5 h-3.5 text-amber-600" />
                <span>Время готовки</span>
              </div>
              <p className="text-sm font-bold text-stone-900">
                {recipe.prepTime + recipe.cookTime} мин
                <span className="text-[11px] font-normal text-stone-500 block">
                  ({recipe.prepTime}м подгот. + {recipe.cookTime}м варка)
                </span>
              </p>
            </div>

            <div className="p-3 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center space-x-1.5 text-stone-500 text-xs mb-1">
                <Scale className="w-3.5 h-3.5 text-emerald-600" />
                <span>Выход блюда</span>
              </div>
              <p className="text-sm font-bold text-stone-900">
                {totals.portionYield} г / порц.
                <span className="text-[11px] font-normal text-stone-500 block">
                  Общий: {totals.totalOutput} г
                </span>
              </p>
            </div>

            <div className="p-3 rounded-xl bg-stone-50 border border-stone-100">
              <div className="flex items-center space-x-1.5 text-stone-500 text-xs mb-1">
                <Flame className="w-3.5 h-3.5 text-rose-600" />
                <span>Калорийность</span>
              </div>
              <p className="text-sm font-bold text-stone-900">
                {recipe.techCard?.kzhbu?.calories || 210} ккал
                <span className="text-[11px] font-normal text-stone-500 block">
                  Б: {recipe.techCard?.kzhbu?.proteins || 10}г &bull; Ж: {recipe.techCard?.kzhbu?.fats || 8}г &bull; У: {recipe.techCard?.kzhbu?.carbs || 22}г
                </span>
              </p>
            </div>

          </div>

          {/* TAB 1: COOKING GUIDE */}
          {activeTab === 'cooking' && (
            <div className="space-y-6">
              {/* Description */}
              <p className="text-stone-600 text-sm leading-relaxed">
                {recipe.description}
              </p>

              {/* Chef Secrets Box */}
              {recipe.chefSecrets && recipe.chefSecrets.length > 0 && (
                <div className="p-4 rounded-xl bg-amber-50/80 border border-amber-200/90 space-y-2">
                  <div className="flex items-center space-x-2 text-amber-900 font-semibold text-xs uppercase tracking-wider">
                    <Sparkles className="w-4 h-4 text-amber-600" />
                    <span>Секреты приготовления от шеф-повара</span>
                  </div>
                  <ul className="space-y-1.5 text-xs sm:text-sm text-stone-700">
                    {recipe.chefSecrets.map((secret, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="text-amber-600 font-bold text-base leading-none">&bull;</span>
                        <span className="leading-snug">{secret}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Ingredients Checklist */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-serif text-lg font-bold text-stone-900">
                    Ингредиенты ({scaledIngredients.length})
                  </h3>
                  <span className="text-xs text-stone-500">
                    Автоматический пересчет на <strong className="text-stone-800">{servings} {servings === 1 ? 'порцию' : servings < 5 ? 'порции' : 'порций'}</strong>
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 bg-stone-50/60 p-3 rounded-xl border border-stone-100">
                  {scaledIngredients.map((ing, idx) => {
                    const isChecked = Boolean(checkedIngredients[idx]);
                    return (
                      <label
                        key={idx}
                        className={`flex items-center justify-between p-2.5 rounded-lg border transition-all cursor-pointer select-none text-xs sm:text-sm ${
                          isChecked
                            ? 'bg-stone-100/80 border-stone-200 text-stone-400 line-through'
                            : 'bg-white border-stone-200/80 text-stone-800 hover:border-amber-300'
                        }`}
                        onClick={() => setCheckedIngredients(prev => ({ ...prev, [idx]: !prev[idx] }))}
                      >
                        <div className="flex items-center space-x-2.5 min-w-0 pr-2">
                          <input
                            type="checkbox"
                            checked={isChecked}
                            onChange={() => {}}
                            className="w-4 h-4 rounded text-amber-600 focus:ring-amber-500 border-stone-300"
                          />
                          <span className="truncate font-medium">{ing.name}</span>
                        </div>
                        <span className={`font-semibold shrink-0 ${isChecked ? 'text-stone-400' : 'text-amber-900'}`}>
                          {formatScaledAmount(ing.amount)} {ing.unit}
                        </span>
                      </label>
                                      );
                  })}
                </div>
                
                {/* Кнопка "Добавить в список покупок" */}
                <button
                  onClick={() => {
                    addRecipe(scaledIngredients.map(ing => ({
                      name: ing.name,
                      amount: ing.amount,
                      unit: ing.unit
                    })));
                    setAddedToList(true);
                    setTimeout(() => setAddedToList(false), 2000);
                  }}
                  className={`w-full mt-3 py-3 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-colors ${
                    addedToList
                      ? 'bg-emerald-600 text-white'
                      : 'bg-amber-600 hover:bg-amber-700 text-white'
                  }`}
                >
                  {addedToList ? (
                    <>
                      <Check className="w-5 h-5" />
                      <span>Добавлено в список покупок!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-5 h-5" />
                      <span>Добавить в список покупок</span>
                    </>
                  )}
                </button>
              </div>

              {/* Step-by-Step Instructions with Timers */}
              <div>
                <h3 className="font-serif text-lg font-bold text-stone-900 mb-3">
                  Пошаговая инструкция
                </h3>

                <div className="space-y-4">
                  {recipe.instructions.map((step) => {
                    const timer = timers[step.stepNumber];
                    const hasTimer = Boolean(step.timerSeconds && step.timerSeconds > 0);

                    return (
                      <div
                        key={step.stepNumber}
                        className="p-4 rounded-xl border border-stone-200/90 bg-white hover:border-stone-300 transition-all space-y-3"
                      >
                        <div className="flex items-start space-x-3">
                          <span className="w-7 h-7 rounded-full bg-stone-900 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                            {step.stepNumber}
                          </span>
                          <div className="flex-1">
                            <p className="text-stone-800 text-sm leading-relaxed">
                              {step.instruction}
                            </p>
                          </div>
                        </div>

                        {/* Step Pro-Tip if available */}
                        {step.tip && (
                          <div className="ml-10 p-2.5 rounded-lg bg-amber-50/60 border border-amber-100 flex items-start space-x-2 text-xs text-amber-900">
                            <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                            <span><strong>Технический нюанс:</strong> {step.tip}</span>
                          </div>
                        )}

                        {/* Interactive Step Countdown Timer */}
                        {hasTimer && timer && (
                          <div className="ml-10 flex items-center justify-between p-2.5 rounded-lg bg-stone-50 border border-stone-200">
                            <div className="flex items-center space-x-2">
                              <Clock className={`w-4 h-4 ${timer.isRunning ? 'text-amber-600 animate-pulse' : 'text-stone-400'}`} />
                              <span className="text-xs font-medium text-stone-600">Таймер процесса:</span>
                              <span className={`font-mono text-sm font-bold ${
                                timer.remaining === 0 ? 'text-emerald-600 font-extrabold' : 'text-stone-900'
                              }`}>
                                {timer.remaining === 0 ? 'Готово!' : formatTime(timer.remaining)}
                              </span>
                            </div>

                            <div className="flex items-center space-x-1.5">
                              <button
                                onClick={() => toggleTimer(step.stepNumber)}
                                className={`px-2.5 py-1 rounded-md text-xs font-medium flex items-center space-x-1 transition-colors ${
                                  timer.isRunning
                                    ? 'bg-amber-100 text-amber-900 hover:bg-amber-200'
                                    : 'bg-stone-900 text-white hover:bg-stone-800'
                                }`}
                              >
                                {timer.isRunning ? (
                                  <>
                                    <Pause className="w-3 h-3" />
                                    <span>Пауза</span>
                                  </>
                                ) : (
                                  <>
                                    <Play className="w-3 h-3" />
                                    <span>{timer.remaining < timer.initial ? 'Продолжить' : 'Старт'}</span>
                                  </>
                                )}
                              </button>
                              <button
                                onClick={() => resetTimer(step.stepNumber)}
                                className="p-1 rounded-md text-stone-400 hover:text-stone-700 hover:bg-stone-200 transition-colors"
                                title="Сбросить таймер"
                              >
                                <RotateCcw className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-3.5 border-t border-stone-100 bg-stone-50 flex items-center justify-between text-xs text-stone-500">
          <div>
            Масштаб: <strong className="text-stone-800">{servings} порций</strong> ({totals.portionYield}г / порц.)
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-stone-900 text-white rounded-xl font-medium hover:bg-stone-800 transition-colors"
          >
            Закрыть
          </button>
        </div>
      </div>
    </div>
  );
};
