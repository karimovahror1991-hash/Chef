import React, { useState, useEffect } from 'react';
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
import { apiUrl } from './utils/api';

export default function App() {
  const [activeTab, setActiveTab] = useState<'fridge' | 'catalog' | 'advisor' | 'battle' | 'lab'>('fridge');
  const [recipes, setRecipes] = useState<Recipe[]>(CLASSIC_RECIPES);
  const [selectedRecipe, setSelectedRecipe] = useState<Recipe | null>(null);
  const [isPremium, setIsPremium] = useState(false);
  const [showPaywall, setShowPaywall] = useState(false);
  const [userId, setUserId] = useState<number | null>(null);

  useEffect(() => {
    const tg = (window as any).Telegram?.WebApp;
    if (tg?.initDataUnsafe?.user?.id) {
      setUserId(tg.initDataUnsafe.user.id);
    }
  }, []);

  useEffect(() => {
    if (!userId) return;
    fetch(apiUrl(`/api/check-subscription?userId=${userId}`))
      .then(r => r.json())
      .then(data => setIsPremium(data.isPremium))
      .catch(() => {});
  }, [userId]);

  const handleAddCustomRecipe = (newRecipe: Recipe) => {
    setRecipes((prev) => [newRecipe, ...prev]);
  };

  const handleTabChange = (tab: typeof activeTab) => {
    if (!isPremium && ['fridge', 'advisor', 'lab'].includes(tab)) {
      setShowPaywall(true);
      return;
    }
    setActiveTab(tab);
  };

  const handleSubscribe = async () => {
    if (!userId) return;
    try {
      const res = await fetch(apiUrl('/api/create-subscription-invoice'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId }),
      });
      const data = await res.json();
      if (data.invoiceLink) {
        const tg = (window as any).Telegram?.WebApp;
        tg.openInvoice(data.invoiceLink, (status: string) => {
          if (status === 'paid') {
            setIsPremium(true);
            setShowPaywall(false);
          }
        });
      }
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-800 flex flex-col font-sans">
      <Header
        activeTab={activeTab}
        setActiveTab={handleTabChange}
        recipesCount={recipes.length}
      />

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

      {selectedRecipe && (
        <RecipeDetailModal
          recipe={selectedRecipe}
          onClose={() => setSelectedRecipe(null)}
        />
      )}

      {showPaywall && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl">
            <h2 className="text-2xl font-bold text-stone-900 mb-4">
              🎉 Разблокируйте всё!
            </h2>
            <ul className="space-y-2 text-sm text-stone-700 mb-6">
              <li>✅ Все 660+ рецептов</li>
              <li>✅ Безлимитный AI-советник</li>
              <li>✅ Умный холодильник без ограничений</li>
              <li>✅ Глобальная лаборатория</li>
            </ul>
            <div className="text-center mb-6">
              <span className="text-3xl font-bold text-amber-600">250 Stars</span>
              <span className="text-stone-500 text-sm"> (≈4.99$) в месяц</span>
            </div>
            <div className="flex gap-3">
              <button
                onClick={handleSubscribe}
                className="flex-1 bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 rounded-2xl transition"
              >
                Разблокировать
              </button>
              <button
                onClick={() => setShowPaywall(false)}
                className="px-5 py-3 text-stone-500 hover:text-stone-700"
              >
                Позже
              </button>
            </div>
          </div>
        </div>
      )}

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