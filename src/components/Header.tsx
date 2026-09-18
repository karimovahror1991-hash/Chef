import React from 'react';
import { BookOpen, Sparkles, Refrigerator, Trophy, FlaskConical } from 'lucide-react';

interface HeaderProps {
  activeTab: 'fridge' | 'catalog' | 'advisor' | 'battle' | 'lab';
  setActiveTab: (tab: 'fridge' | 'catalog' | 'advisor' | 'battle' | 'lab') => void;
  recipesCount: number;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab, recipesCount }) => {
  const tabs = [
    { id: 'fridge' as const, label: 'Умный кулинарный помощник', icon: Refrigerator, badge: 'Меню' },
    { id: 'catalog' as const, label: 'База рецептов', icon: BookOpen, count: recipesCount },
    { id: 'advisor' as const, label: 'Советник Шефа', icon: Sparkles, badge: 'AI' },
    { id: 'battle' as const, label: 'Битва поваров', icon: Trophy, badge: 'LIVE' },
    { id: 'lab' as const, label: 'Глобальная лаборатория', icon: FlaskConical, badge: 'NEW' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo & Brand */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab('fridge')}>
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-amber-600 flex items-center justify-center text-white shadow-sm shadow-amber-200">
              <Refrigerator className="w-6 h-6" />
            </div>
            <div>
              <span className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-stone-900 block leading-tight">
                Умный<span className="text-amber-600"> кулинарный помощник</span>
              </span>
              <span className="text-[11px] sm:text-xs text-stone-500 hidden sm:block tracking-wide">
                Готовое меню из остатков &bull; 660+ рецептов &bull; Техкарты
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 sm:space-x-2">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-3.5 py-2 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-amber-50 text-amber-900 border border-amber-200/80 shadow-xs'
                      : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100/70 border border-transparent'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-amber-700' : 'text-stone-400'}`} />
                  <span>{tab.label}</span>
                  {tab.badge && (
                    <span className={`text-[10px] font-semibold px-1.5 py-0.5 rounded-md ${
                      isActive ? 'bg-amber-200/70 text-amber-900' : 'bg-stone-100 text-stone-600'
                    }`}>
                      {tab.badge}
                    </span>
                  )}
                  {tab.count !== undefined && (
                    <span className="text-xs px-1.5 py-0.5 rounded-full bg-stone-100 text-stone-500 font-mono">
                      {tab.count}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

        </div>

        {/* Mobile Navigation bar */}
        <div className="flex md:hidden overflow-x-auto py-2 space-x-1.5 border-t border-stone-100 no-scrollbar">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-colors ${
                  isActive
                    ? 'bg-amber-100/80 text-amber-900 font-semibold'
                    : 'text-stone-600 hover:bg-stone-100'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </header>
  );
};
