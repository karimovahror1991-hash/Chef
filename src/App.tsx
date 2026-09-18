import React, { useState } from 'react';
import { Header } from './components/Header';
import { SmartFridgeView } from './components/SmartFridgeView';
import { RecipeCatalogView } from './components/RecipeCatalogView';
import { ChefAdvisorView } from './components/ChefAdvisorView';
import { ChefBattleView } from './components/ChefBattleView';
import { GlobalRecipeLabView } from './components/GlobalRecipeLabView';
import { RecipeDetailModal } from './components/RecipeDetailModal';
import { CLASSIC_RECIPES } from './data/recipes';
import { Recipe } from './types';
import { Sparkles } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'fridge' | 'catalog' | 'advisor' | 'battle' | 'lab'>('fridge');
  const [recipes, setRecipes] = useState<Recipe[]>(CLASSIC_RECIPES);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);

  // Add newly generated AI recipe
  const handleAddCustomRecipe = (newRecipe: Recipe) => {
    setRecipes((prev) => [newRecipe, ...prev]);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-800 flex flex-col font-sans">
      {/* Top Navigation */}
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        recipesCount={recipes.length}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {activeTab === 'fridge' && (
          <SmartFridgeView
            allRecipes={recipes}
            onSelectRecipe={(r) => setSelectedRecipe(r)}
            onAddCustomRecipe={handleAddCustomRecipe}
          />
        )}

        {activeTab === 'catalog' && (
          <RecipeCatalogView
            recipes={recipes}
            onSelectRecipe={(r) => setSelectedRecipe(r)}
            onAddCustomRecipe={handleAddCustomRecipe}
          />
        )}

        {activeTab === 'advisor' && (
          <ChefAdvisorView currentRecipe={selectedRecipe || recipes[0]} />
        )}

        {activeTab === 'battle' && <ChefBattleView />}

        {activeTab === 'lab' && <GlobalRecipeLabView />}
      </main>

      {/* Recipe Cooking & Details Modal */}
      {selectedRecipe && (
        <RecipeDetailModal
          recipe={selectedRecipe}
          onClose={() => setSelectedRecipe(null)}
        />
      )}

      {/* Subtle Footer */}
      <footer className="border-t border-stone-200/70 py-6 bg-stone-50/50 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-3">
          <div className="flex items-center space-x-2">
            <span className="font-serif font-bold text-stone-900">Умный кулинарный помощник</span>
            <span>&bull;</span>
            <span>Подбор по продуктам и база кулинарной классики</span>
          </div>
          <div className="flex items-center space-x-1.5 text-stone-400">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>AI Шеф-повар и технолог питания</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
