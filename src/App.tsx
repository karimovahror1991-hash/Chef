import React, { useState, useEffect } from 'react';
import { HomeScreen } from './components/HomeScreen';
import { SmartFridgeView } from './components/SmartFridgeView';
import { RecipeCatalogView } from './components/RecipeCatalogView';
import { ChefAdvisorView } from './components/ChefAdvisorView';
import { ChefBattleView } from './components/ChefBattleView';
import { GlobalRecipeLabView } from './components/GlobalRecipeLabView';
import { RecipeDetailModal } from './components/RecipeDetailModal';
import { CLASSIC_RECIPES } from './data/recipes';
import { Recipe } from './types';
import { apiUrl } from './utils/api';
import { ArrowLeft } from 'lucide-react';

type Section = 'home' | 'catalog' | 'fridge' | 'advisor' | 'battle' | 'lab';

export default function App() {
  const [activeSection, setActiveSection] = useState<Section>('home');
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

  const handleSelectSection = (section: Section) => {
    if (!isPremium && ['fridge', 'advisor', 'lab'].includes(section)) {
      setShowPaywall(true);
      return;
    }
    setActiveSection(section);
  };

  const handleBack = () => {
    setActiveSection('home');
    setSelectedRecipe(null);
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

  // Главный экран
  if (activeSection === 'home') {
    return (
      <>
        <HomeScreen onSelectSection={handleSelectSection} />
        {showPaywall && <PaywallModal onSubscribe={handleSubscribe} onClose={() => setShowPaywall(false)} />}
      </>
    );
  }

  // Заголовок с кнопкой «Назад»
  const sectionTitles: Record<Section, string> = {
    home: '',
    catalog: 'База рецептов',
    fridge: 'Умный кулинарный помощник',
    advisor: 'Советник Шефа',
    battle: 'Битва поваров',
    lab: 'Глобальная лаборатория',
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-800 flex flex-col font-sans">
      {/* Заголовок с кнопкой «Назад» */}
      <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center space-x-3">
          <button
            onClick={handleBack}
            className="w-9 h-9 rounded-full bg-stone-100 hover:bg-amber-100 flex items-center justify-center transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-stone-700" />
          </button>
          <h1 className="font-serif text-lg font-bold text-stone-900">
            {sectionTitles[activeSection]}
          </h1>
        </div>
      </div>

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {activeSection === 'fridge' && (
          <SmartFridgeView
            allRecipes={recipes}
            onSelectRecipe={(r) => setSelectedRecipe(r)}
            onAddCustomRecipe={handleAddCustomRecipe}
          />
        )}

        {activeSection === 'catalog' && (
          <RecipeCatalogView
            recipes={recipes}
            onSelectRecipe={(r) => setSelectedRecipe(r)}
            onAddCustomRecipe={handleAddCustomRecipe}
          />
        )}

        {activeSection === 'advisor' && (
          <ChefAdvisorView currentRecipe={selectedRecipe || recipes[0]} />
        )}

        {activeSection === 'battle' && <ChefBattleView />}

        {activeSection === 'lab' && <GlobalRecipeLabView />}
      </main>

      {selectedRecipe && (
        <RecipeDetailModal
          recipe={selectedRecipe}
          onClose={() => setSelectedRecipe(null)}
        />
      )}

      {showPaywall && <PaywallModal onSubscribe={handleSubscribe} onClose={() => setShowPaywall(false)} />}
    </div>
  );
}

// Модальное окно оплаты
const PaywallModal: React.FC<{ onSubscribe: () => void; onClose: () => void }> = ({ onSubscribe, onClose }) => (
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
        <span className="text-3xl font-bold text-amber-600">100 Stars</span>
<span className="text-stone-500 text-sm"> (≈1.99$) в месяц</span>
      </div>
      <div className="flex gap-3">
        <button
          onClick={onSubscribe}
          className="flex-1 bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 rounded-2xl transition"
        >
          Разблокировать
        </button>
        <button
          onClick={onClose}
          className="px-5 py-3 text-stone-500 hover:text-stone-700"
        >
          Позже
        </button>
      </div>
    </div>
  </div>
);