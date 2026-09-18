import React from 'react';
import {
  BookOpen,
  ChefHat,
  FlaskConical,
  Refrigerator,
  Sparkles,
  Trophy,
  ArrowRight,
} from 'lucide-react';

export type AppSection = 'catalog' | 'advisor' | 'fridge' | 'battle' | 'lab';

interface HomeSectionsViewProps {
  onSelectSection: (section: AppSection) => void;
}

const sections = [
  {
    id: 'catalog' as const,
    title: 'База рецептов',
    description: 'Проверенные блюда, напитки, выпечка и соусы с пошаговым приготовлением.',
    icon: BookOpen,
    tone: 'bg-amber-500',
    surface: 'bg-amber-50 border-amber-200',
  },
  {
    id: 'advisor' as const,
    title: 'Советник шефа',
    description: 'Задайте любой кулинарный вопрос и получите совет от AI-шефа.',
    icon: Sparkles,
    tone: 'bg-orange-500',
    surface: 'bg-orange-50 border-orange-200',
  },
  {
    id: 'fridge' as const,
    title: 'Умный холодильник',
    description: 'Подберите меню из продуктов, которые уже есть под рукой.',
    icon: Refrigerator,
    tone: 'bg-emerald-600',
    surface: 'bg-emerald-50 border-emerald-200',
  },
  {
    id: 'battle' as const,
    title: 'Битва поваров',
    description: 'Публикуйте блюда, голосуйте и соревнуйтесь с другими поварами.',
    icon: Trophy,
    tone: 'bg-rose-600',
    surface: 'bg-rose-50 border-rose-200',
  },
  {
    id: 'lab' as const,
    title: 'Глобальная лаборатория',
    description: 'Создавайте авторские рецепты и делитесь ими с кулинарами со всего мира.',
    icon: FlaskConical,
    tone: 'bg-cyan-700',
    surface: 'bg-cyan-50 border-cyan-200',
  },
];

export const HomeSectionsView: React.FC<HomeSectionsViewProps> = ({ onSelectSection }) => (
  <div className="space-y-8 py-2 sm:py-8">
    <section className="relative overflow-hidden rounded-3xl bg-stone-900 px-6 py-9 text-white shadow-lg sm:px-10 sm:py-12">
      <div className="absolute -right-20 -top-28 h-80 w-80 rounded-full border-[36px] border-amber-400/15" />
      <div className="absolute bottom-[-100px] left-1/2 h-56 w-56 rounded-full border-[28px] border-cyan-400/10" />
      <div className="relative max-w-3xl">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-amber-400/15 px-3 py-1.5 text-xs font-bold uppercase tracking-widest text-amber-200">
          <ChefHat className="h-4 w-4" /> ВКУСНЫЙ АССИСТЕНТ
        </div>
        <h1 className="font-serif text-3xl font-bold leading-tight sm:text-5xl">Умный кулинарный помощник</h1>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-stone-300 sm:text-base">
          Рецепты, AI-советы, подбор продуктов и соревнования поваров в одном месте.
        </p>
      </div>
    </section>

    <section>
      <div className="mb-4 flex items-end justify-between gap-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-amber-700">Главное меню</p>
          <h2 className="font-serif text-2xl font-bold text-stone-900">Куда отправимся?</h2>
        </div>
        <span className="hidden text-xs text-stone-500 sm:block">5 возможностей для кухни</span>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sections.map((section, index) => {
          const Icon = section.icon;
          return (
            <button
              key={section.id}
              type="button"
              onClick={() => onSelectSection(section.id)}
              className={`group relative flex min-h-48 flex-col items-start justify-between overflow-hidden rounded-2xl border p-5 text-left transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${section.surface} ${index === 0 ? 'lg:col-span-2' : ''}`}
            >
              <div className={`flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-sm ${section.tone}`}>
                <Icon className="h-5 w-5" />
              </div>
              <div className="mt-6 w-full">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="font-serif text-xl font-bold text-stone-900">{section.title}</h3>
                  <ArrowRight className="h-5 w-5 shrink-0 text-stone-400 transition-transform group-hover:translate-x-1 group-hover:text-stone-900" />
                </div>
                <p className="mt-1 max-w-lg text-xs leading-relaxed text-stone-600">{section.description}</p>
              </div>
            </button>
          );
        })}
      </div>
    </section>
  </div>
);
