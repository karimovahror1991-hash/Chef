import { Recipe } from '../types';
import { DISHES_RECIPES } from './recipes/dishes';
import { DRINKS_RECIPES } from './recipes/drinks';
import { PASTRY_RECIPES } from './recipes/pastry';
import { SALAD_RECIPES } from './recipes/salads';
import { MARINADE_RECIPES } from './recipes/marinades';
import { SAUCE_RECIPES } from './recipes/sauces';

export {
  DISHES_RECIPES,
  DRINKS_RECIPES,
  PASTRY_RECIPES,
  SALAD_RECIPES,
  MARINADE_RECIPES,
  SAUCE_RECIPES
};

export const CLASSIC_RECIPES: Recipe[] = [
  ...DISHES_RECIPES,
  ...DRINKS_RECIPES,
  ...PASTRY_RECIPES,
  ...SALAD_RECIPES,
  ...MARINADE_RECIPES,
  ...SAUCE_RECIPES
];

