import { Ingredient, Recipe, TechCardItem } from '../types';

export function formatScaledAmount(amount: number): string {
  if (amount <= 0) return 'по вкусу';
  if (Number.isInteger(amount)) return amount.toString();
  // If close to a half or quarter
  const rounded = Math.round(amount * 10) / 10;
  return rounded.toString();
}

export function scaleIngredients(ingredients: Ingredient[], originalServings: number, targetServings: number): Ingredient[] {
  if (originalServings <= 0 || targetServings <= 0) return ingredients;
  const ratio = targetServings / originalServings;

  return ingredients.map(ing => ({
    ...ing,
    amount: Math.round(ing.amount * ratio * 10) / 10,
  }));
}

export function convertRecipeToTechCardItems(recipe: Recipe, targetServings?: number): TechCardItem[] {
  const servings = targetServings || recipe.servings;
  const ratio = servings / recipe.servings;

  return recipe.ingredients.map((ing, idx) => {
    const coldWaste = ing.coldWastePercent ?? 10;
    const heatLoss = ing.heatLossPercent ?? 20;
    const priceKg = ing.estimatedCostPerKg ?? 150;

    // Approximate grams if unit is not grams
    let grossGrams = ing.amount * ratio;
    if (ing.unit === 'кг' || ing.unit === 'л') {
      grossGrams = ing.amount * 1000 * ratio;
    } else if (ing.unit === 'мл') {
      grossGrams = ing.amount * ratio;
    } else if (ing.unit === 'шт' || ing.unit === 'зубчик') {
      // rough average weight
      const weightPerPiece = ing.name.toLowerCase().includes('чеснок') ? 6 : (ing.name.toLowerCase().includes('яйц') ? 55 : 120);
      grossGrams = ing.amount * weightPerPiece * ratio;
    } else if (ing.unit.includes('ст. л.')) {
      grossGrams = ing.amount * 20 * ratio;
    } else if (ing.unit.includes('ч. л.')) {
      grossGrams = ing.amount * 7 * ratio;
    }

    grossGrams = Math.round(grossGrams * 10) / 10;
    const netGrams = Math.round(grossGrams * (1 - coldWaste / 100) * 10) / 10;
    const outputGrams = Math.round(netGrams * (1 - heatLoss / 100) * 10) / 10;

    return {
      id: `${recipe.id}-${idx}`,
      name: ing.name,
      grossWeight: grossGrams,
      coldWastePercent: coldWaste,
      netWeight: netGrams,
      heatLossPercent: heatLoss,
      outputWeight: outputGrams,
      pricePerKg: priceKg,
    };
  });
}

export function calculateTechCardTotals(items: TechCardItem[], servings: number) {
  let totalGross = 0;
  let totalNet = 0;
  let totalOutput = 0;
  let totalCost = 0;

  items.forEach(item => {
    totalGross += item.grossWeight || 0;
    totalNet += item.netWeight || 0;
    totalOutput += item.outputWeight || 0;
    const cost = ((item.grossWeight || 0) / 1000) * (item.pricePerKg || 0);
    totalCost += cost;
  });

  const portionYield = servings > 0 ? Math.round(totalOutput / servings) : 0;
  const portionCost = servings > 0 ? Math.round(totalCost / servings) : 0;

  return {
    totalGross: Math.round(totalGross),
    totalNet: Math.round(totalNet),
    totalOutput: Math.round(totalOutput),
    totalCost: Math.round(totalCost),
    portionYield,
    portionCost,
  };
}
