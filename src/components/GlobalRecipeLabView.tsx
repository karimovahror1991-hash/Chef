import React, { useEffect, useMemo, useState } from 'react';
import {
  Bookmark,
  Check,
  ChevronDown,
  Globe2,
  Heart,
  ImagePlus,
  MessageCircle,
  Search,
  Send,
  Sparkles,
  Star,
  ThumbsUp,
  WandSparkles,
  X,
} from 'lucide-react';
import { CATEGORY_LABELS, RecipeCategory } from '../types';
import { apiUrl } from '../utils/api';

type LabCategory = RecipeCategory;
type SortMode = 'popular' | 'latest';

interface LabReview {
  id: string;
  author: string;
  text: string;
  createdAt: number;
}

interface LabRecipe {
  id: string;
  title: string;
  description: string;
  category: LabCategory;
  author: string;
  location: string;
  photo: string;
  secretIngredients: string;
  proportions: string;
  spices: string;
  method: string;
  ratingTotal: number;
  ratingCount: number;
  respects: number;
  savedBy: number;
  reviews: LabReview[];
  createdAt: number;
}

const STORAGE_KEY = 'global-recipe-lab-v1';

const categoryOptions: Array<{ id: LabCategory; label: string }> = [
  { id: 'dishes', label: CATEGORY_LABELS.dishes },
  { id: 'drinks', label: CATEGORY_LABELS.drinks },
  { id: 'sauces', label: CATEGORY_LABELS.sauces },
  { id: 'marinades', label: CATEGORY_LABELS.marinades },
  { id: 'pastry', label: CATEGORY_LABELS.pastry },
  { id: 'salads', label: CATEGORY_LABELS.salads },
];

const starterRecipes: LabRecipe[] = [
  {
    id: 'lab-1',
    title: 'Шафрановый плов семи ароматов',
    description: 'Авторская версия плова с цитрусовым маслом, мягким жаром зиры и хрустом фисташки.',
    category: 'dishes',
    author: 'Амина Рахимова',
    location: 'Ташкент, Узбекистан',
    photo: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=1000&q=80',
    secretIngredients: 'рис лазер, фисташка, цедра апельсина',
    proportions: 'Рис 400 г, морковь 300 г, мясо 500 г',
    spices: 'Зира, шафран, барбарис, черный перец',
    method: 'Собрать зирвак, аккуратно заложить рис, настоять под крышкой 20 минут.',
    ratingTotal: 46,
    ratingCount: 11,
    respects: 28,
    savedBy: 64,
    reviews: [{ id: 'review-1', author: 'Илья', text: 'Цедра очень тонко работает с шафраном.', createdAt: Date.now() - 100000 }],
    createdAt: Date.now() - 1000 * 60 * 32,
  },
  {
    id: 'lab-2',
    title: 'Тихий сад',
    description: 'Свежий безалкогольный напиток с огурцом, белым чаем и настоем мяты.',
    category: 'drinks',
    author: 'Lucas Moretti',
    location: 'Милан, Италия',
    photo: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=1000&q=80',
    secretIngredients: 'огуречная вода, белый чай, сироп бузины',
    proportions: 'Белый чай 150 мл, огуречная вода 80 мл',
    spices: 'Мята, цедра лайма, щепотка морской соли',
    method: 'Охладить компоненты, смешать со льдом, украсить мятой и тонким слайсом огурца.',
    ratingTotal: 39,
    ratingCount: 9,
    respects: 22,
    savedBy: 41,
    reviews: [],
    createdAt: Date.now() - 1000 * 60 * 65,
  },
  {
    id: 'lab-3',
    title: 'Медовый мисо-маринад',
    description: 'Глянцевый маринад для овощей и тофу: умами, медовая карамель и пряный имбирь.',
    category: 'marinades',
    author: 'Екатерина Ли',
    location: 'Владивосток, Россия',
    photo: 'https://images.unsplash.com/photo-1472476442910-50c7d8a7e8f3?auto=format&fit=crop&w=1000&q=80',
    secretIngredients: 'светлая мисо-паста, мед, рисовый уксус',
    proportions: 'Мисо 80 г, мед 30 г, уксус 35 мл',
    spices: 'Имбирь, чеснок, кунжут',
    method: 'Размешать до глянцевой эмульсии и выдержать овощи 30 минут перед запеканием.',
    ratingTotal: 34,
    ratingCount: 8,
    respects: 19,
    savedBy: 35,
    reviews: [],
    createdAt: Date.now() - 1000 * 60 * 98,
  },
];

const readRecipes = (): LabRecipe[] => {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) return starterRecipes;
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) ? parsed : starterRecipes;
  } catch {
    return starterRecipes;
  }
};

const makeId = (prefix: string) => `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;

export const GlobalRecipeLabView: React.FC = () => {
  const [recipes, setRecipes] = useState<LabRecipe[]>(readRecipes);
  const [activeCategory, setActiveCategory] = useState<LabCategory | 'all'>('all');
  const [sortMode, setSortMode] = useState<SortMode>('popular');
  const [searchQuery, setSearchQuery] = useState('');
  const [isBuilderOpen, setIsBuilderOpen] = useState(false);
  const [savedIds, setSavedIds] = useState<string[]>(() => {
    try { return JSON.parse(window.localStorage.getItem(`${STORAGE_KEY}-saved`) || '[]'); } catch { return []; }
  });
  const [ratedIds, setRatedIds] = useState<string[]>(() => {
    try { return JSON.parse(window.localStorage.getItem(`${STORAGE_KEY}-rated`) || '[]'); } catch { return []; }
  });
  const [respectedIds, setRespectedIds] = useState<string[]>(() => {
    try { return JSON.parse(window.localStorage.getItem(`${STORAGE_KEY}-respected`) || '[]'); } catch { return []; }
  });
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [selectedRecipeId, setSelectedRecipeId] = useState<string | null>(null);
  const [reviewDrafts, setReviewDrafts] = useState<Record<string, string>>({});

  const [category, setCategory] = useState<LabCategory>('dishes');
  const [author, setAuthor] = useState('');
  const [location, setLocation] = useState('');
  const [secretIngredients, setSecretIngredients] = useState('');
  const [proportions, setProportions] = useState('');
  const [spices, setSpices] = useState('');
  const [method, setMethod] = useState('');
  const [photo, setPhoto] = useState('');
  const [photoName, setPhotoName] = useState('');
  const [generatedTitle, setGeneratedTitle] = useState('');
  const [generatedDescription, setGeneratedDescription] = useState('');
  const [builderError, setBuilderError] = useState('');
  const [isGeneratingCopy, setIsGeneratingCopy] = useState(false);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(recipes));
    } catch {
      setBuilderError('Локальное хранилище заполнено. Удалите старые данные сайта и попробуйте снова.');
    }
  }, [recipes]);
  useEffect(() => { window.localStorage.setItem(`${STORAGE_KEY}-saved`, JSON.stringify(savedIds)); }, [savedIds]);
  useEffect(() => { window.localStorage.setItem(`${STORAGE_KEY}-rated`, JSON.stringify(ratedIds)); }, [ratedIds]);
  useEffect(() => { window.localStorage.setItem(`${STORAGE_KEY}-respected`, JSON.stringify(respectedIds)); }, [respectedIds]);

  const filteredRecipes = useMemo(() => recipes
    .filter((recipe) => activeCategory === 'all' || recipe.category === activeCategory)
    .filter((recipe) => {
      if (!searchQuery.trim()) return true;
      const query = searchQuery.toLowerCase();
      return [recipe.title, recipe.description, recipe.author, recipe.location, recipe.secretIngredients].some((value) => value.toLowerCase().includes(query));
    })
    .sort((a, b) => sortMode === 'popular'
      ? (b.ratingTotal + b.respects * 2 + b.savedBy) - (a.ratingTotal + a.respects * 2 + a.savedBy)
      : b.createdAt - a.createdAt), [recipes, activeCategory, searchQuery, sortMode]);

    const selectedRecipe = recipes.find((recipe) => recipe.id === selectedRecipeId) || null;

  const resetBuilder = () => {
    setAuthor(''); setLocation(''); setSecretIngredients(''); setProportions(''); setSpices(''); setMethod(''); setPhoto(''); setPhotoName(''); setGeneratedTitle(''); setGeneratedDescription(''); setBuilderError('');
  };

  const generateChefCopy = async () => {
    if (!secretIngredients.trim() || !spices.trim()) {
      setBuilderError('Добавьте секретные ингредиенты и специи, чтобы шеф собрал вкусовой профиль.');
      return;
    }
    if (!proportions.trim() || !method.trim()) {
      setBuilderError('Заполните пропорции и технологию перед генерацией описания.');
      return;
    }
    setIsGeneratingCopy(true);
    setBuilderError('');
    try {
      const response = await fetch(apiUrl('/api/gemini/lab-copy'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ category: CATEGORY_LABELS[category], secretIngredients, proportions, spices, method }),
      });
      const data = await response.json();
      if (!response.ok || data.error) throw new Error(data.error || 'Не удалось получить текст от шефа');
      if (typeof data.title !== 'string' || typeof data.description !== 'string') throw new Error('AI вернул неполный ответ');
      setGeneratedTitle(data.title.trim());
      setGeneratedDescription(data.description.trim());
    } catch (error: any) {
      setBuilderError(error.message || 'Ошибка связи с AI');
    } finally {
      setIsGeneratingCopy(false);
    }
  };

  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/') || file.size > 5 * 1024 * 1024) {
      setBuilderError('Выберите изображение размером до 5 МБ.');
      return;
    }
    setPhotoName(file.name);
    const reader = new FileReader();
    reader.onload = () => {
      const image = new Image();
      image.onload = () => {
        const maxSide = 1400;
        const scale = Math.min(1, maxSide / Math.max(image.width, image.height));
        const canvas = document.createElement('canvas');
        canvas.width = Math.max(1, Math.round(image.width * scale));
        canvas.height = Math.max(1, Math.round(image.height * scale));
        const context = canvas.getContext('2d');
        if (!context) {
          setBuilderError('Не удалось обработать фотографию. Выберите другой файл.');
          return;
        }
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
        setPhoto(canvas.toDataURL('image/jpeg', 0.78));
        setBuilderError('');
      };
      image.onerror = () => setBuilderError('Не удалось прочитать фотографию.');
      image.src = String(reader.result);
    };
    reader.onerror = () => setBuilderError('Не удалось загрузить фотографию.');
    reader.readAsDataURL(file);
  };

  const publishRecipe = (event: React.FormEvent) => {
    event.preventDefault();
    if (!author.trim() || !location.trim() || !secretIngredients.trim() || !proportions.trim() || !spices.trim() || !method.trim() || !photo) {
      setBuilderError('Заполните автора, город, фото и все поля рецептуры.');
      return;
    }
    const newRecipe: LabRecipe = {
      id: makeId('lab'),
      title: generatedTitle || `${secretIngredients.split(',')[0].trim()} — авторский рецепт`,
      description: generatedDescription || `Авторский ${CATEGORY_LABELS[category].toLowerCase()} от ${author.trim()}.`,
      category, author: author.trim(), location: location.trim(), photo, secretIngredients, proportions, spices, method,
      ratingTotal: 0, ratingCount: 0, respects: 0, savedBy: 0, reviews: [], createdAt: Date.now(),
    };
    try {
      const nextRecipes = [newRecipe, ...recipes];
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextRecipes));
      setRecipes(nextRecipes);
    } catch {
      setBuilderError('Фото слишком большое для локального хранения. Выберите другое изображение.');
      return;
    }
    resetBuilder();
    setIsBuilderOpen(false);
    setActiveCategory('all');
  };

  const rateRecipe = (id: string, score: number) => {
    if (ratedIds.includes(id)) return;
    setRecipes((current) => current.map((recipe) => recipe.id === id ? { ...recipe, ratingTotal: recipe.ratingTotal + score, ratingCount: recipe.ratingCount + 1 } : recipe));
    setRatedIds((current) => [...current, id]);
  };

  const respectRecipe = (id: string) => {
    if (respectedIds.includes(id)) return;
    setRecipes((current) => current.map((recipe) => recipe.id === id ? { ...recipe, respects: recipe.respects + 1 } : recipe));
    setRespectedIds((current) => [...current, id]);
  };

  const saveRecipe = (id: string) => {
    setSavedIds((current) => current.includes(id) ? current.filter((savedId) => savedId !== id) : [...current, id]);
    setRecipes((current) => current.map((recipe) => recipe.id === id ? { ...recipe, savedBy: recipe.savedBy + (savedIds.includes(id) ? -1 : 1) } : recipe));
  };

  const addReview = (recipeId: string) => {
    const text = reviewDrafts[recipeId]?.trim();
    if (!text) return;
    setRecipes((current) => current.map((recipe) => recipe.id === recipeId ? { ...recipe, reviews: [...recipe.reviews, { id: makeId('review'), author: 'Вы', text, createdAt: Date.now() }] } : recipe));
    setReviewDrafts((current) => ({ ...current, [recipeId]: '' }));
  };

  return (
    <div
      className="space-y-7"
      onClick={(event) => {
        const target = event.target as HTMLElement;
        if (target.closest('button, input, textarea, select, a')) return;
        const article = target.closest('article');
        if (!article) return;
        const index = Array.from(article.parentElement?.children || []).indexOf(article);
        setSelectedRecipeId(filteredRecipes[index]?.id || null);
      }}
    >
      <section className="relative overflow-hidden rounded-3xl bg-[#1f2933] px-6 py-8 text-white shadow-lg sm:px-9 sm:py-10">
        <div className="absolute -right-20 -top-24 h-72 w-72 rounded-full border-[32px] border-amber-400/15" />
        <div className="relative max-w-3xl">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-cyan-300/10 px-3 py-1 text-xs font-bold uppercase tracking-widest text-cyan-200"><Globe2 className="h-3.5 w-3.5" /> Глобальная кухня</div>
          <h1 className="font-serif text-3xl font-bold leading-tight sm:text-5xl">Глобальная лаборатория рецептов</h1>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-stone-300 sm:text-base">Создавайте смелые вкусовые идеи, публикуйте их для мира и собирайте респект от шефов из разных городов.</p>
          <button onClick={() => setIsBuilderOpen(true)} className="mt-6 inline-flex items-center gap-2 rounded-xl bg-amber-400 px-5 py-3 text-sm font-bold text-stone-950 transition-colors hover:bg-amber-300"><WandSparkles className="h-4 w-4" /> Создать авторский рецепт</button>
        </div>
      </section>

      <section className="space-y-4">
        <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div><p className="text-xs font-bold uppercase tracking-widest text-cyan-700">Global feed</p><h2 className="font-serif text-2xl font-bold text-stone-900">Международная лента</h2></div>
          <div className="flex flex-col gap-2 sm:flex-row">
            <div className="relative"><Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-stone-400" /><input value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} placeholder="Поиск рецептов и авторов" className="w-full rounded-xl border border-stone-300 bg-white py-2.5 pl-9 pr-3 text-xs outline-none focus:border-cyan-600 sm:w-64" /></div>
            <select value={sortMode} onChange={(event) => setSortMode(event.target.value as SortMode)} className="rounded-xl border border-stone-300 bg-white px-3 py-2.5 text-xs font-semibold text-stone-700 outline-none"><option value="popular">По популярности</option><option value="latest">Сначала новые</option></select>
          </div>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1 no-scrollbar"><button onClick={() => setActiveCategory('all')} className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-bold ${activeCategory === 'all' ? 'bg-stone-900 text-white' : 'bg-white text-stone-600 ring-1 ring-stone-200'}`}>Все рецепты</button>{categoryOptions.map((option) => <button key={option.id} onClick={() => setActiveCategory(option.id)} className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-bold ${activeCategory === option.id ? 'bg-cyan-700 text-white' : 'bg-white text-stone-600 ring-1 ring-stone-200'}`}>{option.label}</button>)}</div>
      </section>

      {filteredRecipes.length === 0 ? <div className="rounded-2xl border border-dashed border-stone-300 bg-white p-12 text-center text-sm text-stone-500">В этой категории пока нет рецептов.</div> : <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{filteredRecipes.map((recipe) => { const average = recipe.ratingCount ? (recipe.ratingTotal / recipe.ratingCount).toFixed(1) : 'Новая'; const isSaved = savedIds.includes(recipe.id); const isRated = ratedIds.includes(recipe.id); const isRespected = respectedIds.includes(recipe.id); const isExpanded = expandedId === recipe.id; return <article key={recipe.id} className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-2xs transition-shadow hover:shadow-md"><div className="relative aspect-[4/3] bg-stone-100"><img src={recipe.photo} alt={recipe.title} className="h-full w-full object-cover" /><span className="absolute left-3 top-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-stone-800">{CATEGORY_LABELS[recipe.category]}</span><button onClick={() => saveRecipe(recipe.id)} title="Сохранить в кулинарную книгу" className={`absolute right-3 top-3 rounded-full p-2 ${isSaved ? 'bg-amber-400 text-stone-950' : 'bg-stone-950/60 text-white hover:bg-stone-950'}`}><Bookmark className="h-4 w-4" fill={isSaved ? 'currentColor' : 'none'} /></button></div><div className="space-y-3 p-5"><div><h3 className="font-serif text-xl font-bold text-stone-900">{recipe.title}</h3><p className="mt-1 text-xs leading-relaxed text-stone-600">{recipe.description}</p></div><div className="flex items-center justify-between text-[11px] text-stone-500"><span className="font-semibold text-stone-700">{recipe.author}</span><span>{recipe.location}</span></div><div className="flex items-center gap-3 border-y border-stone-100 py-2 text-xs"><span className="flex items-center gap-1 font-bold text-amber-700"><Star className="h-3.5 w-3.5" fill="currentColor" /> {average}</span><span className="flex items-center gap-1 text-rose-600"><Heart className="h-3.5 w-3.5" fill="currentColor" /> {recipe.respects} респектов</span><span className="flex items-center gap-1 text-stone-500"><Bookmark className="h-3.5 w-3.5" /> {recipe.savedBy}</span></div><div className="flex flex-wrap gap-1.5">{[1, 2, 3, 4, 5].map((score) => <button key={score} onClick={() => rateRecipe(recipe.id, score)} disabled={isRated} title={`Оценить на ${score}`} className={`rounded-md p-1 ${isRated ? 'text-stone-300' : 'text-amber-500 hover:bg-amber-50'}`}><Star className="h-4 w-4" fill="currentColor" /></button>)}<button onClick={() => respectRecipe(recipe.id)} disabled={isRespected} className={`ml-auto inline-flex items-center gap-1 rounded-lg px-2 py-1 text-[11px] font-bold ${isRespected ? 'bg-rose-50 text-rose-500' : 'bg-stone-100 text-stone-600 hover:bg-rose-50 hover:text-rose-600'}`}><ThumbsUp className="h-3.5 w-3.5" /> {isRespected ? 'Респект отправлен' : 'Респект шефу'}</button></div><button onClick={() => setExpandedId(isExpanded ? null : recipe.id)} className="flex items-center gap-1 text-xs font-bold text-cyan-700 hover:text-cyan-900"><MessageCircle className="h-3.5 w-3.5" /> {recipe.reviews.length} отзывов <ChevronDown className={`h-3.5 w-3.5 transition-transform ${isExpanded ? 'rotate-180' : ''}`} /></button>{isExpanded && <div className="space-y-3 rounded-xl bg-stone-50 p-3"><div className="space-y-2">{recipe.reviews.map((review) => <div key={review.id} className="text-xs"><strong className="text-stone-800">{review.author}</strong><p className="mt-0.5 text-stone-600">{review.text}</p></div>)}</div><div className="flex gap-2"><input value={reviewDrafts[recipe.id] || ''} onChange={(event) => setReviewDrafts((current) => ({ ...current, [recipe.id]: event.target.value }))} placeholder="Оставить отзыв" className="min-w-0 flex-1 rounded-lg border border-stone-200 bg-white px-2.5 py-2 text-xs outline-none focus:border-cyan-600" /><button onClick={() => addReview(recipe.id)} className="rounded-lg bg-cyan-700 px-3 text-white hover:bg-cyan-800"><Send className="h-3.5 w-3.5" /></button></div></div>}</div></article>; })}</div>}

      {isBuilderOpen && <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/60 p-4 backdrop-blur-sm"><div className="mx-auto my-4 max-w-3xl rounded-2xl bg-white p-5 shadow-2xl sm:p-7"><div className="mb-5 flex items-start justify-between"><div><p className="text-xs font-bold uppercase tracking-widest text-cyan-700">AI-лаборатория</p><h2 className="font-serif text-2xl font-bold text-stone-900">Собрать авторский рецепт</h2></div><button onClick={() => setIsBuilderOpen(false)} className="rounded-lg p-2 text-stone-400 hover:bg-stone-100"><X className="h-5 w-5" /></button></div><form onSubmit={publishRecipe} className="space-y-4"><div className="grid gap-4 sm:grid-cols-2"><label className="text-xs font-semibold text-stone-700">Категория<select value={category} onChange={(event) => setCategory(event.target.value as LabCategory)} className="mt-1.5 w-full rounded-xl border border-stone-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-cyan-600">{categoryOptions.map((option) => <option key={option.id} value={option.id}>{option.label}</option>)}</select></label><label className="text-xs font-semibold text-stone-700">Имя автора<input value={author} onChange={(event) => setAuthor(event.target.value)} placeholder="Как вас представить" className="mt-1.5 w-full rounded-xl border border-stone-300 px-3 py-2.5 text-sm outline-none focus:border-cyan-600" /></label><label className="text-xs font-semibold text-stone-700 sm:col-span-2">Страна / город<input value={location} onChange={(event) => setLocation(event.target.value)} placeholder="Например, Самарканд, Узбекистан" className="mt-1.5 w-full rounded-xl border border-stone-300 px-3 py-2.5 text-sm outline-none focus:border-cyan-600" /></label></div><label className="flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-stone-300 bg-stone-50 p-4 hover:border-cyan-500"><ImagePlus className="h-6 w-6 text-cyan-700" /><span className="text-xs font-semibold text-stone-700">{photoName || 'Добавить фотографию авторского творения'}<small className="mt-1 block font-normal text-stone-500">JPG/PNG до 5 МБ</small></span><input type="file" accept="image/*" onChange={handlePhotoChange} className="sr-only" /></label>{photo && <img src={photo} alt="Предпросмотр рецепта" className="h-40 w-full rounded-xl object-cover" />}<div className="grid gap-4 sm:grid-cols-2"><label className="text-xs font-semibold text-stone-700">Секретные ингредиенты<textarea value={secretIngredients} onChange={(event) => setSecretIngredients(event.target.value)} placeholder="Ключевые продукты через запятую" className="mt-1.5 h-24 w-full rounded-xl border border-stone-300 px-3 py-2.5 text-sm outline-none focus:border-cyan-600" /></label><label className="text-xs font-semibold text-stone-700">Пропорции<textarea value={proportions} onChange={(event) => setProportions(event.target.value)} placeholder="Граммы, миллилитры, количество порций" className="mt-1.5 h-24 w-full rounded-xl border border-stone-300 px-3 py-2.5 text-sm outline-none focus:border-cyan-600" /></label><label className="text-xs font-semibold text-stone-700">Уникальные специи<textarea value={spices} onChange={(event) => setSpices(event.target.value)} placeholder="Специи, травы, вкусовые акценты" className="mt-1.5 h-24 w-full rounded-xl border border-stone-300 px-3 py-2.5 text-sm outline-none focus:border-cyan-600" /></label><label className="text-xs font-semibold text-stone-700">Пошаговая технология<textarea value={method} onChange={(event) => setMethod(event.target.value)} placeholder="Опишите процесс приготовления по шагам" className="mt-1.5 h-24 w-full rounded-xl border border-stone-300 px-3 py-2.5 text-sm outline-none focus:border-cyan-600" /></label></div><button type="button" onClick={generateChefCopy} disabled={isGeneratingCopy} className="inline-flex items-center gap-2 rounded-xl bg-stone-900 px-4 py-2.5 text-xs font-bold text-white hover:bg-cyan-800 disabled:opacity-60"><Sparkles className="h-4 w-4 text-amber-300" /> {isGeneratingCopy ? 'Шеф подбирает название...' : 'Сгенерировать название и описание от шефа'}</button>{generatedTitle && <div className="rounded-xl border border-cyan-200 bg-cyan-50 p-4"><p className="text-xs font-bold uppercase tracking-wider text-cyan-800">Предложение шефа</p><h3 className="mt-1 font-serif text-xl font-bold text-stone-900">{generatedTitle}</h3><p className="mt-1 text-sm text-stone-600">{generatedDescription}</p></div>}{builderError && <p className="rounded-lg bg-rose-50 px-3 py-2 text-xs text-rose-700">{builderError}</p>}<button type="submit" className="flex w-full items-center justify-center gap-2 rounded-xl bg-amber-500 px-4 py-3 text-sm font-bold text-stone-950 hover:bg-amber-400"><Globe2 className="h-4 w-4" /> Опубликовать в глобальной ленте</button></form></div></div>}
      {selectedRecipe && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-stone-950/60 p-4 backdrop-blur-sm" onClick={() => setSelectedRecipeId(null)}>
          <div className="mx-auto my-4 max-w-3xl rounded-2xl bg-white shadow-2xl" onClick={(event) => event.stopPropagation()}>
            <div className="flex items-start justify-between border-b border-stone-100 p-6">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-cyan-700">{CATEGORY_LABELS[selectedRecipe.category]}</p>
                <h2 className="mt-1 font-serif text-2xl font-bold text-stone-900">{selectedRecipe.title}</h2>
                <p className="mt-1 text-xs text-stone-500">Автор: {selectedRecipe.author} · {selectedRecipe.location}</p>
              </div>
              <button onClick={() => setSelectedRecipeId(null)} className="rounded-lg p-2 text-stone-400 hover:bg-stone-100"><X className="h-5 w-5" /></button>
            </div>
            <div className="space-y-6 p-6">
              <img src={selectedRecipe.photo} alt={selectedRecipe.title} className="max-h-80 w-full rounded-xl object-cover" />
              <p className="text-sm leading-relaxed text-stone-600">{selectedRecipe.description}</p>
              <div className="grid gap-4 md:grid-cols-2">
                <section className="rounded-xl bg-stone-50 p-4"><h3 className="font-serif text-lg font-bold text-stone-900">Ингредиенты</h3><p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-stone-700">{selectedRecipe.secretIngredients}</p></section>
                <section className="rounded-xl bg-stone-50 p-4"><h3 className="font-serif text-lg font-bold text-stone-900">Пропорции</h3><p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-stone-700">{selectedRecipe.proportions}</p></section>
              </div>
              <section><h3 className="font-serif text-lg font-bold text-stone-900">Специи и вкусовые акценты</h3><p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-stone-700">{selectedRecipe.spices}</p></section>
              <section><h3 className="font-serif text-lg font-bold text-stone-900">Пошаговая технология</h3><p className="mt-2 whitespace-pre-line text-sm leading-7 text-stone-700">{selectedRecipe.method}</p></section>
              <div className="flex flex-wrap items-center gap-3 border-t border-stone-100 pt-4 text-xs text-stone-500"><span><Star className="mr-1 inline h-4 w-4 text-amber-500" fill="currentColor" />{selectedRecipe.ratingCount ? (selectedRecipe.ratingTotal / selectedRecipe.ratingCount).toFixed(1) : 'Новая'} рейтинг</span><span><Heart className="mr-1 inline h-4 w-4 text-rose-500" fill="currentColor" />{selectedRecipe.respects} респектов</span><button onClick={() => saveRecipe(selectedRecipe.id)} className="ml-auto rounded-lg bg-stone-900 px-3 py-2 font-bold text-white">{savedIds.includes(selectedRecipe.id) ? 'Сохранено' : 'Сохранить в книгу'}</button></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};