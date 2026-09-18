import React, { useState, useEffect } from 'react';
import { Recipe, TechCardItem } from '../types';
import { convertRecipeToTechCardItems, calculateTechCardTotals } from '../utils/calculator';
import { 
  Calculator, 
  Printer, 
  Scale, 
  Plus, 
  Trash2, 
  RefreshCw, 
  FileSpreadsheet, 
  Sparkles, 
  Info,
  DollarSign,
  PieChart,
  CheckCircle2,
  ChevronDown,
  Loader2
} from 'lucide-react';
import { apiUrl } from '../utils/api';

interface TechCardCalculatorViewProps {
  recipes: Recipe[];
  initialRecipe?: Recipe | null;
  initialServings?: number;
}

export const TechCardCalculatorView: React.FC<TechCardCalculatorViewProps> = ({
  recipes,
  initialRecipe,
  initialServings = 4,
}) => {
  const [selectedRecipeId, setSelectedRecipeId] = useState<string>(
    initialRecipe ? initialRecipe.id : (recipes[0]?.id || '')
  );

  const currentRecipe = recipes.find(r => r.id === selectedRecipeId) || recipes[0];

  const [dishTitle, setDishTitle] = useState<string>(
    initialRecipe?.title || currentRecipe?.title || 'Новое блюдо / Полуфабрикат'
  );
  const [servings, setServings] = useState<number>(initialServings || 4);

  // Table items
  const [items, setItems] = useState<TechCardItem[]>([]);

  // Scaling mode: 'servings' or 'base_ingredient'
  const [scaleMode, setScaleMode] = useState<'servings' | 'base_ingredient'>('servings');
  const [baseIngredientIndex, setBaseIngredientIndex] = useState<number>(0);
  const [targetBaseWeight, setTargetBaseWeight] = useState<number>(1000);

  // Food cost margin settings
  const [targetFoodCostPercent, setTargetFoodCostPercent] = useState<number>(28);

  // AI Tech Card generation
  const [showAiPromptModal, setShowAiPromptModal] = useState(false);
  const [aiRecipeRaw, setAiRecipeRaw] = useState('');
  const [isAiCalculating, setIsAiCalculating] = useState(false);
  const [aiError, setAiError] = useState<string | null>(null);

  // Print modal state
  const [showPrintModal, setShowPrintModal] = useState(false);

  // Initialize table from chosen recipe
  useEffect(() => {
    if (currentRecipe) {
      setDishTitle(currentRecipe.title);
      const converted = convertRecipeToTechCardItems(currentRecipe, servings);
      setItems(converted);
      if (converted[0]) {
        setTargetBaseWeight(converted[0].grossWeight);
      }
    }
  }, [selectedRecipeId]);

  // Recalculate when servings change in 'servings' mode
  const handleServingsChange = (newServings: number) => {
    if (newServings <= 0) return;
    const ratio = newServings / servings;
    setServings(newServings);

    setItems(prev => prev.map(item => {
      const gross = Math.round(item.grossWeight * ratio * 10) / 10;
      const net = Math.round(gross * (1 - item.coldWastePercent / 100) * 10) / 10;
      const output = Math.round(net * (1 - item.heatLossPercent / 100) * 10) / 10;
      return { ...item, grossWeight: gross, netWeight: net, outputWeight: output };
    }));
  };

  // Scale by base ingredient weight
  const handleScaleByBaseIngredient = (newWeight: number) => {
    if (newWeight <= 0 || items.length === 0) return;
    setTargetBaseWeight(newWeight);

    const currentBase = items[baseIngredientIndex];
    if (!currentBase || currentBase.grossWeight <= 0) return;

    const ratio = newWeight / currentBase.grossWeight;
    const estimatedNewServings = Math.max(1, Math.round(servings * ratio));
    setServings(estimatedNewServings);

    setItems(prev => prev.map(item => {
      const gross = Math.round(item.grossWeight * ratio * 10) / 10;
      const net = Math.round(gross * (1 - item.coldWastePercent / 100) * 10) / 10;
      const output = Math.round(net * (1 - item.heatLossPercent / 100) * 10) / 10;
      return { ...item, grossWeight: gross, netWeight: net, outputWeight: output };
    }));
  };

  // Update specific row property
  const updateRow = (index: number, field: keyof TechCardItem, value: any) => {
    setItems(prev => {
      const next = [...prev];
      const item = { ...next[index], [field]: value };

      // Auto-update dependent weights
      if (field === 'grossWeight' || field === 'coldWastePercent') {
        item.netWeight = Math.round(item.grossWeight * (1 - item.coldWastePercent / 100) * 10) / 10;
        item.outputWeight = Math.round(item.netWeight * (1 - item.heatLossPercent / 100) * 10) / 10;
      } else if (field === 'heatLossPercent') {
        item.outputWeight = Math.round(item.netWeight * (1 - item.heatLossPercent / 100) * 10) / 10;
      }

      next[index] = item;
      return next;
    });
  };

  const addEmptyRow = () => {
    setItems(prev => [
      ...prev,
      {
        id: 'custom-' + Date.now(),
        name: 'Новый ингредиент',
        grossWeight: 100,
        coldWastePercent: 10,
        netWeight: 90,
        heatLossPercent: 20,
        outputWeight: 72,
        pricePerKg: 200,
      }
    ]);
  };

  const deleteRow = (index: number) => {
    setItems(prev => prev.filter((_, i) => i !== index));
  };

  const totals = calculateTechCardTotals(items, servings);
  const recommendedMenuPrice = targetFoodCostPercent > 0
    ? Math.round((totals.portionCost / (targetFoodCostPercent / 100)))
    : totals.portionCost;

  // AI Tech Card Breakdown handler
  const handleAiBreakdown = async () => {
    if (!aiRecipeRaw.trim()) return;
    setIsAiCalculating(true);
    setAiError(null);

    try {
      const response = await fetch(apiUrl('/api/gemini/tech-card'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: dishTitle || 'Пользовательское блюдо',
          ingredientsRaw: aiRecipeRaw,
          servings: servings || 4,
        }),
      });

      const data = await response.json();
      if (!response.ok || data.error) {
        throw new Error(data.error || 'Ошибка расчета ТТК');
      }

      const tc = data.techCard;
      if (tc && tc.ingredients) {
        setDishTitle(tc.title || dishTitle);
        setServings(tc.servings || servings);

        const newItems: TechCardItem[] = tc.ingredients.map((ing: any, idx: number) => ({
          id: 'ai-tc-' + idx,
          name: ing.name,
          grossWeight: ing.grossWeight || 100,
          coldWastePercent: ing.coldWastePercent || 10,
          netWeight: ing.netWeight || 90,
          heatLossPercent: ing.heatLossPercent || 20,
          outputWeight: ing.outputWeight || 70,
          pricePerKg: ing.pricePerKg || 250,
        }));

        setItems(newItems);
        setShowAiPromptModal(false);
      }
    } catch (err: any) {
      console.error(err);
      setAiError(err.message || 'Ошибка обработки данных');
    } finally {
      setIsAiCalculating(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="bg-white border border-stone-200 rounded-3xl p-6 shadow-2xs">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2 text-blue-700 text-xs font-bold uppercase tracking-wider mb-1.5">
              <Calculator className="w-4 h-4" />
              <span>Технологические карты (ТТК) &bull; Масштабирование рецептур</span>
            </div>
            <h1 className="font-serif text-2xl sm:text-3xl font-bold text-stone-900">
              Калькулятор выхода, потерь и себестоимости
            </h1>
            <p className="text-xs sm:text-sm text-stone-500 mt-1">
              Профессиональный расчет брутто/нетто, холодных отходов, термопотерь (уварки/ужарки) и себестоимости сырья.
            </p>
          </div>

          <div className="flex items-center space-x-2.5 shrink-0">
            <button
              onClick={() => setShowAiPromptModal(true)}
              className="px-3.5 py-2 rounded-xl bg-amber-50 text-amber-900 border border-amber-200 hover:bg-amber-100 text-xs sm:text-sm font-semibold flex items-center space-x-1.5 transition-colors"
            >
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>Расчет ТТК через AI</span>
            </button>

            <button
              onClick={() => setShowPrintModal(true)}
              className="px-4 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs sm:text-sm font-semibold flex items-center space-x-1.5 transition-colors shadow-xs"
            >
              <Printer className="w-4 h-4" />
              <span>Печать ТТК</span>
            </button>
          </div>
        </div>

        {/* Recipe Selection & Scaling Controls */}
        <div className="mt-6 pt-5 border-t border-stone-100 grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Pick recipe template */}
          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1.5">
              Шаблон из базы или свое блюдо:
            </label>
            <div className="relative">
              <select
                value={selectedRecipeId}
                onChange={(e) => setSelectedRecipeId(e.target.value)}
                className="w-full appearance-none px-3.5 py-2 rounded-xl border border-stone-300 text-xs sm:text-sm bg-white font-medium text-stone-800 focus:outline-hidden focus:border-blue-500 pr-9"
              >
                {recipes.map(r => (
                  <option key={r.id} value={r.id}>
                    {r.title}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none" />
            </div>
          </div>

          {/* Dish Name */}
          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1.5">
              Наименование блюда / полуфабриката:
            </label>
            <input
              type="text"
              value={dishTitle}
              onChange={(e) => setDishTitle(e.target.value)}
              className="w-full px-3.5 py-2 rounded-xl border border-stone-300 text-xs sm:text-sm bg-white font-medium text-stone-900 focus:outline-hidden focus:border-blue-500"
            />
          </div>

          {/* Scaling Mode Selector */}
          <div>
            <label className="block text-xs font-semibold text-stone-700 mb-1.5">
              Режим масштабирования:
            </label>
            <div className="flex bg-stone-100 p-1 rounded-xl text-xs font-semibold">
              <button
                type="button"
                onClick={() => setScaleMode('servings')}
                className={`flex-1 py-1.5 rounded-lg transition-all ${
                  scaleMode === 'servings'
                    ? 'bg-white text-stone-900 shadow-2xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                По порциям
              </button>
              <button
                type="button"
                onClick={() => setScaleMode('base_ingredient')}
                className={`flex-1 py-1.5 rounded-lg transition-all ${
                  scaleMode === 'base_ingredient'
                    ? 'bg-white text-stone-900 shadow-2xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                По базовому продукту
              </button>
            </div>
          </div>
        </div>

        {/* Dynamic Scaling Slider / Input */}
        <div className="mt-4 p-4 rounded-2xl bg-blue-50/50 border border-blue-100/80 flex flex-wrap items-center justify-between gap-4">
          {scaleMode === 'servings' ? (
            <div className="flex items-center space-x-4 w-full sm:w-auto">
              <div>
                <span className="text-xs text-blue-900 font-bold block">
                  Количество порций:
                </span>
                <span className="text-xs text-stone-500">
                  Все ингредиенты пересчитываются синхронно
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="number"
                  min="1"
                  max="500"
                  value={servings}
                  onChange={(e) => {
                    const v = parseInt(e.target.value);
                    if (!isNaN(v) && v > 0) handleServingsChange(v);
                  }}
                  className="w-20 px-3 py-1.5 text-center font-bold text-base rounded-xl border border-blue-300 bg-white text-blue-950 focus:outline-hidden"
                />
                <span className="text-xs font-medium text-stone-600">порций</span>
              </div>
            </div>
          ) : (
            <div className="flex flex-wrap items-center gap-3 w-full">
              <div>
                <span className="text-xs text-blue-900 font-bold block">
                  Масштабировать по наличию сырья:
                </span>
                <span className="text-xs text-stone-500">
                  Пересчитать весь рецепт под фактический вес ключевого продукта
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <select
                  value={baseIngredientIndex}
                  onChange={(e) => {
                    const idx = Number(e.target.value);
                    setBaseIngredientIndex(idx);
                    if (items[idx]) setTargetBaseWeight(items[idx].grossWeight);
                  }}
                  className="px-3 py-1.5 text-xs rounded-xl border border-stone-300 bg-white text-stone-800"
                >
                  {items.map((it, idx) => (
                    <option key={idx} value={idx}>{it.name}</option>
                  ))}
                </select>
                <input
                  type="number"
                  min="1"
                  value={targetBaseWeight}
                  onChange={(e) => {
                    const v = parseFloat(e.target.value);
                    if (!isNaN(v)) handleScaleByBaseIngredient(v);
                  }}
                  className="w-24 px-3 py-1.5 text-center font-bold text-sm rounded-xl border border-blue-300 bg-white text-blue-950"
                />
                <span className="text-xs text-stone-600 font-medium">г (брутто)</span>
              </div>
              <span className="text-xs text-blue-800 font-medium ml-auto">
                Эквивалент: ~{servings} порций
              </span>
            </div>
          )}

          {/* Quick preset buttons */}
          <div className="flex items-center space-x-1.5 text-xs font-semibold">
            <span className="text-stone-400 text-[11px] mr-1">Быстро:</span>
            {[2, 4, 10, 25, 50].map(cnt => (
              <button
                key={cnt}
                onClick={() => handleServingsChange(cnt)}
                className={`px-2.5 py-1 rounded-lg border transition-colors ${
                  servings === cnt
                    ? 'bg-blue-600 text-white border-blue-600'
                    : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-100'
                }`}
              >
                {cnt} порц.
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main TTK Table */}
      <div className="bg-white border border-stone-200 rounded-3xl overflow-hidden shadow-2xs">
        <div className="px-6 py-4 border-b border-stone-100 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <FileSpreadsheet className="w-5 h-5 text-blue-600" />
            <h2 className="font-serif text-lg font-bold text-stone-900">
              Спецификация сырья и технологических потерь
            </h2>
          </div>
          <button
            onClick={addEmptyRow}
            className="px-3 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold rounded-lg flex items-center space-x-1.5 transition-colors"
          >
            <Plus className="w-3.5 h-3.5 text-stone-600" />
            <span>Добавить ингредиент</span>
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-stone-50 border-b border-stone-200 text-stone-600 font-semibold uppercase tracking-wider text-[11px]">
              <tr>
                <th className="p-3 pl-6">Наименование сырья</th>
                <th className="p-3 text-right">Брутто (г)</th>
                <th className="p-3 text-right">% отхода</th>
                <th className="p-3 text-right">Нетто (г)</th>
                <th className="p-3 text-right">% потерь</th>
                <th className="p-3 text-right font-bold text-stone-900">Выход (г)</th>
                <th className="p-3 text-right">Цена/кг (₽)</th>
                <th className="p-3 text-right font-bold">Сумма (₽)</th>
                <th className="p-3 pr-6 text-center w-10"></th>
              </tr>
            </thead>

            <tbody className="divide-y divide-stone-100">
              {items.map((item, idx) => {
                const itemCost = Math.round((item.grossWeight / 1000) * item.pricePerKg);
                return (
                  <tr key={item.id || idx} className="hover:bg-stone-50/80 transition-colors">
                    <td className="p-2.5 pl-6 font-medium text-stone-900">
                      <input
                        type="text"
                        value={item.name}
                        onChange={(e) => updateRow(idx, 'name', e.target.value)}
                        className="w-full font-medium bg-transparent border-none focus:outline-hidden focus:bg-white focus:ring-1 focus:ring-blue-500 rounded px-1 py-0.5"
                      />
                    </td>

                    {/* Gross */}
                    <td className="p-2.5 text-right font-mono">
                      <input
                        type="number"
                        min="0"
                        step="1"
                        value={item.grossWeight}
                        onChange={(e) => updateRow(idx, 'grossWeight', parseFloat(e.target.value) || 0)}
                        className="w-20 text-right font-mono font-semibold bg-stone-50 border border-stone-200 rounded px-1.5 py-0.5 focus:bg-white focus:border-blue-500 focus:outline-hidden"
                      />
                    </td>

                    {/* Cold Waste % */}
                    <td className="p-2.5 text-right text-stone-600">
                      <input
                        type="number"
                        min="0"
                        max="90"
                        value={item.coldWastePercent}
                        onChange={(e) => updateRow(idx, 'coldWastePercent', parseFloat(e.target.value) || 0)}
                        className="w-14 text-right bg-stone-50 border border-stone-200 rounded px-1 py-0.5 focus:bg-white focus:border-blue-500 focus:outline-hidden text-stone-600"
                      />%
                    </td>

                    {/* Net */}
                    <td className="p-2.5 text-right font-mono font-medium text-stone-700">
                      {item.netWeight} г
                    </td>

                    {/* Heat Loss % */}
                    <td className="p-2.5 text-right text-stone-600">
                      <input
                        type="number"
                        value={item.heatLossPercent}
                        onChange={(e) => updateRow(idx, 'heatLossPercent', parseFloat(e.target.value) || 0)}
                        className="w-14 text-right bg-stone-50 border border-stone-200 rounded px-1 py-0.5 focus:bg-white focus:border-blue-500 focus:outline-hidden text-stone-600"
                      />%
                    </td>

                    {/* Output */}
                    <td className="p-2.5 text-right font-mono font-bold text-amber-900 bg-amber-50/40">
                      {item.outputWeight} г
                    </td>

                    {/* Price per Kg */}
                    <td className="p-2.5 text-right text-stone-600 font-mono">
                      <input
                        type="number"
                        min="0"
                        step="10"
                        value={item.pricePerKg}
                        onChange={(e) => updateRow(idx, 'pricePerKg', parseFloat(e.target.value) || 0)}
                        className="w-16 text-right font-mono bg-stone-50 border border-stone-200 rounded px-1 py-0.5 focus:bg-white focus:border-blue-500 focus:outline-hidden"
                      />
                    </td>

                    {/* Subtotal */}
                    <td className="p-2.5 text-right font-bold text-stone-900 font-mono">
                      {itemCost} ₽
                    </td>

                    {/* Actions */}
                    <td className="p-2.5 pr-6 text-center">
                      <button
                        onClick={() => deleteRow(idx)}
                        className="text-stone-300 hover:text-rose-600 transition-colors p-1"
                        title="Удалить строку"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>

            {/* Footers */}
            <tfoot className="bg-stone-100 border-t-2 border-stone-200 font-bold text-stone-900">
              <tr>
                <td className="p-3 pl-6">ИТОГО ПО ТТК ({items.length} поз.):</td>
                <td className="p-3 text-right font-mono">{totals.totalGross} г</td>
                <td className="p-3 text-right text-stone-400">&mdash;</td>
                <td className="p-3 text-right font-mono">{totals.totalNet} г</td>
                <td className="p-3 text-right text-stone-400">&mdash;</td>
                <td className="p-3 text-right font-mono text-amber-900 text-sm">{totals.totalOutput} г</td>
                <td className="p-3 text-right text-stone-400">&mdash;</td>
                <td className="p-3 text-right font-mono text-blue-900 text-sm">{totals.totalCost} ₽</td>
                <td className="p-3 pr-6"></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>

      {/* Economic & Yield Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* Portion Yield */}
        <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-2xs space-y-1">
          <div className="flex items-center justify-between text-xs text-stone-500 font-medium">
            <span>Выход на 1 порцию</span>
            <Scale className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-2xl font-bold font-serif text-stone-900">
            {totals.portionYield} <span className="text-sm font-sans font-normal text-stone-500">грамм</span>
          </div>
          <p className="text-[11px] text-stone-500">
            Общий выход партии: {totals.totalOutput} г на {servings} порц.
          </p>
        </div>

        {/* Portion Food Cost */}
        <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-2xs space-y-1">
          <div className="flex items-center justify-between text-xs text-stone-500 font-medium">
            <span>Себестоимость порции</span>
            <DollarSign className="w-4 h-4 text-amber-600" />
          </div>
          <div className="text-2xl font-bold font-serif text-amber-900">
            {totals.portionCost} <span className="text-sm font-sans font-normal text-stone-500">₽ / порция</span>
          </div>
          <p className="text-[11px] text-stone-500">
            Вся партия: {totals.totalCost} ₽
          </p>
        </div>

        {/* Recommended Menu Price */}
        <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-2xs space-y-1">
          <div className="flex items-center justify-between text-xs text-stone-500 font-medium">
            <span>Реком. цена в меню</span>
            <PieChart className="w-4 h-4 text-blue-600" />
          </div>
          <div className="text-2xl font-bold font-serif text-blue-950">
            {recommendedMenuPrice} <span className="text-sm font-sans font-normal text-stone-500">₽</span>
          </div>
          <div className="flex items-center space-x-1.5 text-[11px] text-stone-500">
            <span>Целевой Food Cost:</span>
            <input
              type="number"
              min="15"
              max="60"
              value={targetFoodCostPercent}
              onChange={(e) => setTargetFoodCostPercent(parseInt(e.target.value) || 28)}
              className="w-10 px-1 py-0.5 rounded border border-stone-300 text-center font-bold"
            />
            <span>%</span>
          </div>
        </div>

        {/* Nutritional KBJU */}
        <div className="p-5 rounded-2xl bg-white border border-stone-200 shadow-2xs space-y-1">
          <div className="flex items-center justify-between text-xs text-stone-500 font-medium">
            <span>КБЖУ (на 100 г блюда)</span>
            <CheckCircle2 className="w-4 h-4 text-rose-600" />
          </div>
          <div className="text-lg font-bold text-stone-900 pt-1">
            {currentRecipe?.techCard?.kzhbu?.calories || 215} ккал
          </div>
          <p className="text-[11px] text-stone-500 leading-tight">
            Белки: {currentRecipe?.techCard?.kzhbu?.proteins || 12}г &bull; Жиры: {currentRecipe?.techCard?.kzhbu?.fats || 10}г &bull; Углеводы: {currentRecipe?.techCard?.kzhbu?.carbs || 19}г
          </p>
        </div>
      </div>

      {/* AI Tech Card Calculation Modal */}
      {showAiPromptModal && (
        <div className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl border border-stone-200 p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-stone-100 pb-3">
              <div className="flex items-center space-x-2">
                <Sparkles className="w-5 h-5 text-amber-600" />
                <h3 className="font-serif text-lg font-bold text-stone-900">
                  AI Шеф-Технолог: Автоматический расчет ТТК
                </h3>
              </div>
              <button
                onClick={() => setShowAiPromptModal(false)}
                className="text-stone-400 hover:text-stone-700"
              >
                &times;
              </button>
            </div>

            <p className="text-xs text-stone-600 leading-relaxed">
              Вставьте произвольный рецепт или список продуктов с весом.
              AI автоматически применит нормативные проценты холодных отходов по ГОСТ/СанПиН, определит термопотери (% уварки/ужарки) и рассчитает чистый выход готового блюда.
            </p>

            <textarea
              rows={5}
              value={aiRecipeRaw}
              onChange={(e) => setAiRecipeRaw(e.target.value)}
              placeholder="Например:
Говядина вырезка 600г
Лук репчатый 200г
Шампиньоны 250г
Сметана 20% 200г
Сливочное масло 50г"
              className="w-full p-3 text-xs sm:text-sm font-mono rounded-xl border border-stone-300 focus:outline-hidden focus:border-amber-500"
            />

            {aiError && (
              <div className="p-3 bg-rose-50 border border-rose-200 text-rose-800 text-xs rounded-xl">
                {aiError}
              </div>
            )}

            <div className="flex items-center justify-end space-x-2 pt-2">
              <button
                type="button"
                onClick={() => setShowAiPromptModal(false)}
                disabled={isAiCalculating}
                className="px-4 py-2 text-xs font-medium text-stone-600 hover:bg-stone-100 rounded-xl"
              >
                Отмена
              </button>
              <button
                type="button"
                onClick={handleAiBreakdown}
                disabled={isAiCalculating || !aiRecipeRaw.trim()}
                className="px-4 py-2.5 bg-amber-600 hover:bg-amber-700 text-white text-xs sm:text-sm font-semibold rounded-xl flex items-center space-x-2 disabled:opacity-50"
              >
                {isAiCalculating ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Расчет норм и отходов...</span>
                  </>
                ) : (
                  <>
                    <Sparkles className="w-4 h-4" />
                    <span>Рассчитать ТТК</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Printable TTK Sheet Modal */}
      {showPrintModal && (
        <div className="fixed inset-0 z-50 bg-stone-900/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6 text-stone-900">
            {/* Action Bar */}
            <div className="flex items-center justify-between border-b pb-4">
              <span className="text-xs text-stone-400 font-semibold uppercase">Предпросмотр печатной формы ТТК</span>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => window.print()}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-semibold flex items-center space-x-1.5 shadow-xs"
                >
                  <Printer className="w-4 h-4" />
                  <span>Печать на принтер</span>
                </button>
                <button
                  onClick={() => setShowPrintModal(false)}
                  className="px-3 py-2 bg-stone-100 hover:bg-stone-200 text-stone-700 rounded-xl text-xs font-medium"
                >
                  Закрыть
                </button>
              </div>
            </div>

            {/* Printable Document Body */}
            <div className="border border-stone-300 p-6 rounded-lg space-y-4 text-xs font-serif print:border-none print:p-0">
              <div className="flex justify-between items-start border-b pb-4">
                <div>
                  <h2 className="text-base font-bold uppercase tracking-wider">
                    ТЕХНИКО-ТЕХНОЛОГИЧЕСКАЯ КАРТА (ТТК)
                  </h2>
                  <p className="text-sm font-sans font-bold text-stone-800 mt-1">
                    Блюдо: &laquo;{dishTitle}&raquo;
                  </p>
                  <p className="text-[11px] font-sans text-stone-500">
                    Норма выхода: {totals.portionYield} г на 1 порцию &bull; Расчет на партию: {servings} порций
                  </p>
                </div>
                <div className="text-right text-[11px] font-sans border border-stone-300 p-2 rounded">
                  <p className="font-bold">УТВЕРЖДАЮ:</p>
                  <p className="text-stone-500">Шеф-повар / Зав. производством</p>
                  <p className="mt-4 border-t border-stone-300 pt-1">«___» ____________ 2026 г.</p>
                </div>
              </div>

              {/* Table */}
              <table className="w-full text-left font-sans border-collapse text-[11px]">
                <thead>
                  <tr className="border-b-2 border-stone-400 bg-stone-50">
                    <th className="py-1 px-2 border">№</th>
                    <th className="py-1 px-2 border">Наименование сырья</th>
                    <th className="py-1 px-2 border text-right">Брутто, г</th>
                    <th className="py-1 px-2 border text-right">% отхода</th>
                    <th className="py-1 px-2 border text-right">Нетто, г</th>
                    <th className="py-1 px-2 border text-right">% потерь</th>
                    <th className="py-1 px-2 border text-right font-bold">Выход, г</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((it, idx) => (
                    <tr key={idx} className="border-b border-stone-200">
                      <td className="py-1 px-2 border text-center">{idx + 1}</td>
                      <td className="py-1 px-2 border font-medium">{it.name}</td>
                      <td className="py-1 px-2 border text-right font-mono">{it.grossWeight}</td>
                      <td className="py-1 px-2 border text-right text-stone-600">{it.coldWastePercent}%</td>
                      <td className="py-1 px-2 border text-right font-mono">{it.netWeight}</td>
                      <td className="py-1 px-2 border text-right text-stone-600">{it.heatLossPercent}%</td>
                      <td className="py-1 px-2 border text-right font-mono font-bold">{it.outputWeight}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="font-bold border-t-2 border-stone-400 bg-stone-50">
                    <td colSpan={2} className="py-1.5 px-2 border">ИТОГО ВЫХОД:</td>
                    <td className="py-1.5 px-2 border text-right font-mono">{totals.totalGross} г</td>
                    <td className="py-1.5 px-2 border text-right text-stone-400">&mdash;</td>
                    <td className="py-1.5 px-2 border text-right font-mono">{totals.totalNet} г</td>
                    <td className="py-1.5 px-2 border text-right text-stone-400">&mdash;</td>
                    <td className="py-1.5 px-2 border text-right font-mono text-blue-900">{totals.totalOutput} г</td>
                  </tr>
                </tfoot>
              </table>

              <div className="space-y-2 pt-2 text-[11px] font-sans">
                <p>
                  <strong>Выход одной порции готового блюда:</strong> {totals.portionYield} грамм.
                </p>
                <p>
                  <strong>Пищевая ценность (на 100 г):</strong> Калорийность: {currentRecipe?.techCard?.kzhbu?.calories || 215} ккал, Белки: {currentRecipe?.techCard?.kzhbu?.proteins || 12} г, Жиры: {currentRecipe?.techCard?.kzhbu?.fats || 10} г, Углеводы: {currentRecipe?.techCard?.kzhbu?.carbs || 19} г.
                </p>
                <p>
                  <strong>Срок реализации:</strong> 24 часа при температуре +2...+4°С. Температура подачи: не ниже 65°С.
                </p>
              </div>

              <div className="flex justify-between pt-6 border-t font-sans text-[11px]">
                <span>Инженер-технолог: ___________________ / ___________________ /</span>
                <span>Шеф-повар: ___________________ / ___________________ /</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
