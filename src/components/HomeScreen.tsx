import React from 'react';
import { BookOpen, Refrigerator, ChefHat, Trophy, FlaskConical, Sparkles, ShoppingCart } from 'lucide-react';
import { useShoppingList } from '../hooks/useShoppingList';

interface HomeScreenProps {
  onSelectSection: (section: 'catalog' | 'fridge' | 'advisor' | 'battle' | 'lab') => void;
  onOpenShoppingList: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({ onSelectSection, onOpenShoppingList }) => {
  const { items } = useShoppingList();

  const sections = [
    {
      id: 'catalog' as const,
      title: 'База рецептов',
      description: '660+ проверенных рецептов',
      icon: BookOpen,
      color: 'bg-blue-500',
    },
    {
      id: 'fridge' as const,
      title: 'Умный кулинарный помощник',
      description: 'Готовое меню из остатков',
      icon: Refrigerator,
      color: 'bg-emerald-500',
    },
    {
      id: 'advisor' as const,
      title: 'Советник Шефа',
      description: 'AI-ответы на кулинарные вопросы',
      icon: ChefHat,
      color: 'bg-amber-500',
    },
    {
      id: 'battle' as const,
      title: 'Битва поваров',
      description: 'Соревнование и рейтинг',
      icon: Trophy,
      color: 'bg-rose-500',
    },
    {
      id: 'lab' as const,
      title: 'Глобальная лаборатория',
      description: 'Авторские рецепты',
      icon: FlaskConical,
      color: 'bg-purple-500',
    },
  ];

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-stone-800 flex flex-col">
      {/* Заголовок */}
      <div className="relative bg-amber-600 text-white p-6 sm:p-8" style={{ backgroundColor: '#D97706' }}>
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center space-x-3 mb-2">
            <Sparkles className="w-6 h-6" />
            <span className="text-xs uppercase font-bold tracking-wider text-amber-100">
              AI Кулинарный помощник
            </span>
          </div>
          <h1 className="font-serif text-2xl sm:text-3xl font-bold">
            Умный кулинарный помощник
          </h1>
          <p className="text-sm text-amber-100/90 mt-1">
            Выберите раздел, чтобы начать
          </p>
        </div>

        {/* Кнопка списка покупок */}
        <button
          onClick={onOpenShoppingList}
          className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md flex items-center justify-center transition"
        >
          <ShoppingCart className="w-6 h-6 text-white" />
          {items.length > 0 && (
            <span className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-rose-500 text-white text-xs font-bold flex items-center justify-center">
              {items.length}
            </span>
          )}
        </button>
      </div>

      {/* Карточки разделов */}
      <div className="flex-1 max-w-4xl w-full mx-auto p-4 sm:p-6 space-y-3">
        {sections.map((section) => {
          const Icon = section.icon;
          return (
            <button
              key={section.id}
              onClick={() => onSelectSection(section.id)}
              className="w-full bg-white border border-stone-200 rounded-2xl p-4 sm:p-5 flex items-center space-x-4 hover:shadow-md hover:border-amber-300 transition-all text-left"
            >
              <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl ${section.color} flex items-center justify-center text-white shrink-0`}>
                <Icon className="w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-stone-900 text-base sm:text-lg">
                  {section.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-500 truncate">
                  {section.description}
                </p>
              </div>
              <div className="text-stone-300 shrink-0">
                →
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};