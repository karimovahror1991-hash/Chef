import React, { useEffect, useMemo, useState } from 'react';
import {
  Award,
  Camera,
  Check,
  ChefHat,
  Crown,
  Flame,
  Heart,
  ImagePlus,
  Medal,
  Plus,
  Trophy,
  Users,
  X,
} from 'lucide-react';

interface BattleEntry {
  id: string;
  dishName: string;
  authorName: string;
  authorAvatar?: string;
  photo: string;
  votes: number;
  createdAt: number;
}

interface OnlineChef {
  id: string;
  name: string;
  avatar?: string;
  status: string;
}

const STORAGE_KEY = 'chef-battle-state-v1';

const starterEntries: BattleEntry[] = [
  {
    id: 'battle-1',
    dishName: 'Самаркандский плов',
    authorName: 'Алишер Каримов',
    photo: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80',
    votes: 38,
    createdAt: Date.now() - 1000 * 60 * 18,
  },
  {
    id: 'battle-2',
    dishName: 'Тыквенный латте со специями',
    authorName: 'Мария Соколова',
    photo: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=900&q=80',
    votes: 31,
    createdAt: Date.now() - 1000 * 60 * 34,
  },
  {
    id: 'battle-3',
    dishName: 'Хрустящие сырники',
    authorName: 'Денис Волков',
    photo: 'https://images.unsplash.com/photo-1565299507177-b0ac66763828?auto=format&fit=crop&w=900&q=80',
    votes: 24,
    createdAt: Date.now() - 1000 * 60 * 49,
  },
];

const starterOnlineChefs: OnlineChef[] = [
  { id: 'chef-1', name: 'Алишер Каримов', status: 'В битве', avatar: 'АК' },
  { id: 'chef-2', name: 'Мария Соколова', status: 'В битве', avatar: 'МС' },
  { id: 'chef-3', name: 'Денис Волков', status: 'В битве', avatar: 'ДВ' },
  { id: 'chef-4', name: 'Нина Орлова', status: 'Смотрит', avatar: 'НО' },
];

const readStoredState = () => {
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) return { entries: starterEntries, onlineChefs: starterOnlineChefs };
    const parsed = JSON.parse(stored);
    return {
      entries: Array.isArray(parsed.entries) ? parsed.entries : starterEntries,
      onlineChefs: Array.isArray(parsed.onlineChefs) ? parsed.onlineChefs : starterOnlineChefs,
    };
  } catch {
    return { entries: starterEntries, onlineChefs: starterOnlineChefs };
  }
};

const initials = (name: string) => name.split(' ').map((part) => part[0]).slice(0, 2).join('').toUpperCase();

export const ChefBattleView: React.FC = () => {
  const [storedState] = useState(readStoredState);
  const [entries, setEntries] = useState<BattleEntry[]>(storedState.entries);
  const [onlineChefs, setOnlineChefs] = useState<OnlineChef[]>(storedState.onlineChefs);
  const [votedEntries, setVotedEntries] = useState<string[]>(() => {
    try {
      return JSON.parse(window.localStorage.getItem('chef-battle-votes') || '[]');
    } catch {
      return [];
    }
  });
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [dishName, setDishName] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [photo, setPhoto] = useState('');
  const [photoName, setPhotoName] = useState('');
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ entries, onlineChefs }));
  }, [entries, onlineChefs]);

  useEffect(() => {
    window.localStorage.setItem('chef-battle-votes', JSON.stringify(votedEntries));
  }, [votedEntries]);

  const leaderboard = useMemo(() => {
    const scores = new Map<string, { name: string; avatar?: string; points: number; wins: number }>();
    entries.forEach((entry) => {
      const current = scores.get(entry.authorName) || { name: entry.authorName, avatar: entry.authorAvatar, points: 0, wins: 0 };
      current.points += entry.votes;
      current.avatar = current.avatar || entry.authorAvatar;
      scores.set(entry.authorName, current);
    });
    const sortedEntries = [...entries].sort((a, b) => b.votes - a.votes);
    sortedEntries.forEach((entry, index) => {
      const chef = scores.get(entry.authorName);
      if (chef && index === 0) chef.wins += 1;
    });
    return [...scores.values()].sort((a, b) => b.points - a.points);
  }, [entries]);

  const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      setSubmitError('Выберите файл изображения.');
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setSubmitError('Фото должно быть меньше 5 МБ.');
      return;
    }
    setPhotoName(file.name);
    const reader = new FileReader();
    reader.onload = () => setPhoto(String(reader.result));
    reader.readAsDataURL(file);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!dishName.trim() || !authorName.trim() || !photo) {
      setSubmitError('Добавьте имя, название блюда и фотографию.');
      return;
    }
    const newEntry: BattleEntry = {
      id: `battle-${Date.now()}`,
      dishName: dishName.trim(),
      authorName: authorName.trim(),
      authorAvatar: initials(authorName),
      photo,
      votes: 0,
      createdAt: Date.now(),
    };
    setEntries((current) => [newEntry, ...current]);
    setOnlineChefs((current) => [{ id: newEntry.id, name: newEntry.authorName, status: 'В битве', avatar: newEntry.authorAvatar }, ...current.filter((chef) => chef.name !== newEntry.authorName)]);
    setDishName('');
    setAuthorName('');
    setPhoto('');
    setPhotoName('');
    setSubmitError('');
    setIsFormOpen(false);
  };

  const voteFor = (entryId: string) => {
    if (votedEntries.includes(entryId)) return;
    setEntries((current) => current.map((entry) => entry.id === entryId ? { ...entry, votes: entry.votes + 1 } : entry));
    setVotedEntries((current) => [...current, entryId]);
  };

  return (
    <div className="space-y-7">
      <section className="relative overflow-hidden rounded-3xl bg-stone-900 px-6 py-7 text-white shadow-lg sm:px-9 sm:py-9">
        <div className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-amber-500/25 to-transparent" />
        <div className="relative flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-amber-400/15 px-3 py-1 text-xs font-semibold text-amber-200">
              <Flame className="h-3.5 w-3.5" /> Онлайн-соревнование в реальном времени
            </div>
            <h1 className="font-serif text-3xl font-bold leading-tight sm:text-4xl">Арена битвы поваров</h1>
            <p className="mt-2 max-w-xl text-sm leading-relaxed text-stone-300">Готовьте, публикуйте и поддерживайте лучших. Каждый голос меняет таблицу лидеров.</p>
          </div>
          <button onClick={() => setIsFormOpen(true)} className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-amber-500 px-5 py-3 text-sm font-bold text-stone-950 transition-colors hover:bg-amber-400">
            <Plus className="h-4 w-4" /> Создать битву / Участвовать
          </button>
        </div>
      </section>

      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_310px]">
        <section className="space-y-4">
          <div className="flex items-end justify-between gap-3">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-amber-700">Прямо сейчас</p>
              <h2 className="font-serif text-2xl font-bold text-stone-900">Лента соревнований</h2>
            </div>
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">{entries.length} блюд на арене</span>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {entries.map((entry) => {
              const hasVoted = votedEntries.includes(entry.id);
              return (
                <article key={entry.id} className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-2xs transition-shadow hover:shadow-md">
                  <div className="relative aspect-[4/3] bg-stone-100">
                    <img src={entry.photo} alt={entry.dishName} className="h-full w-full object-cover" />
                    <div className="absolute left-3 top-3 rounded-lg bg-stone-950/75 px-2.5 py-1 text-xs font-bold text-white">{entry.votes} голосов</div>
                  </div>
                  <div className="space-y-3 p-4">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-amber-100 text-[10px] font-bold text-amber-800">
                        {entry.authorAvatar?.startsWith('data:') ? <img src={entry.authorAvatar} alt="" className="h-full w-full object-cover" /> : entry.authorAvatar || initials(entry.authorName)}
                      </div>
                      <div className="min-w-0"><p className="truncate text-xs font-semibold text-stone-500">{entry.authorName}</p><p className="text-[10px] text-stone-400">Участник арены</p></div>
                    </div>
                    <h3 className="font-serif text-xl font-bold text-stone-900">{entry.dishName}</h3>
                    <button onClick={() => voteFor(entry.id)} disabled={hasVoted} className={`flex w-full items-center justify-center gap-2 rounded-xl px-3 py-2.5 text-xs font-bold transition-colors ${hasVoted ? 'bg-emerald-50 text-emerald-700' : 'bg-stone-900 text-white hover:bg-amber-700'}`}>
                      {hasVoted ? <Check className="h-4 w-4" /> : <Heart className="h-4 w-4" />} {hasVoted ? 'Ваш голос учтён' : 'Отдать голос'}
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </section>

        <aside className="space-y-5">
          <section className="rounded-2xl border border-stone-200 bg-white p-5 shadow-2xs">
            <div className="mb-4 flex items-center justify-between"><div><p className="text-xs font-bold uppercase tracking-widest text-emerald-700">Сейчас онлайн</p><h2 className="font-serif text-xl font-bold text-stone-900">На арене</h2></div><Users className="h-5 w-5 text-emerald-600" /></div>
            <div className="space-y-3">
              {onlineChefs.map((chef) => <div key={chef.id} className="flex items-center gap-3"><div className="relative flex h-9 w-9 items-center justify-center rounded-full bg-amber-100 text-xs font-bold text-amber-800">{chef.avatar || initials(chef.name)}<span className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full border-2 border-white bg-emerald-500" /></div><div className="min-w-0 flex-1"><p className="truncate text-sm font-semibold text-stone-800">{chef.name}</p><p className="text-[11px] text-stone-400">{chef.status}</p></div></div>)}
            </div>
          </section>

          <section className="rounded-2xl border border-stone-200 bg-white p-5 shadow-2xs">
            <div className="mb-4 flex items-center gap-2"><Trophy className="h-5 w-5 text-amber-600" /><div><p className="text-xs font-bold uppercase tracking-widest text-amber-700">Рейтинг</p><h2 className="font-serif text-xl font-bold text-stone-900">Топ поваров</h2></div></div>
            <div className="space-y-3">
              {leaderboard.map((chef, index) => <div key={chef.name} className="flex items-center gap-3"><div className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-bold ${index === 0 ? 'bg-amber-100 text-amber-800' : 'bg-stone-100 text-stone-500'}`}>{index === 0 ? <Crown className="h-4 w-4" /> : index + 1}</div><div className="flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-stone-800 text-xs font-bold text-white">{chef.avatar || initials(chef.name)}</div><div className="min-w-0 flex-1"><p className="truncate text-sm font-semibold text-stone-800">{chef.name}</p><p className="text-[11px] text-stone-400">{chef.wins} победа</p></div><strong className="text-sm text-amber-700">{chef.points} очк.</strong></div>)}
            </div>
          </section>
        </aside>
      </div>

      {isFormOpen && <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/60 p-4 backdrop-blur-sm"><div className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl"><div className="mb-5 flex items-center justify-between"><div><p className="text-xs font-bold uppercase tracking-widest text-amber-700">Новый участник</p><h2 className="font-serif text-2xl font-bold text-stone-900">Выйти на арену</h2></div><button onClick={() => setIsFormOpen(false)} className="rounded-lg p-2 text-stone-400 hover:bg-stone-100 hover:text-stone-800"><X className="h-5 w-5" /></button></div><form onSubmit={handleSubmit} className="space-y-4"><label className="block text-xs font-semibold text-stone-700">Ваше имя<input value={authorName} onChange={(event) => setAuthorName(event.target.value)} placeholder="Например, Анна Петрова" className="mt-1.5 w-full rounded-xl border border-stone-300 px-3.5 py-2.5 text-sm outline-none focus:border-amber-500" /></label><label className="block text-xs font-semibold text-stone-700">Название блюда или напитка<input value={dishName} onChange={(event) => setDishName(event.target.value)} placeholder="Например, Рамен с мисо" className="mt-1.5 w-full rounded-xl border border-stone-300 px-3.5 py-2.5 text-sm outline-none focus:border-amber-500" /></label><label className="flex cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-stone-300 bg-stone-50 px-4 py-6 text-center hover:border-amber-400"><ImagePlus className="mb-2 h-7 w-7 text-amber-600" /><span className="text-sm font-semibold text-stone-800">{photoName || 'Загрузить фото блюда'}</span><span className="mt-1 text-[11px] text-stone-500">PNG, JPG до 5 МБ</span><input type="file" accept="image/*" onChange={handlePhotoChange} className="sr-only" /></label>{photo && <img src={photo} alt="Предпросмотр" className="h-32 w-full rounded-xl object-cover" />}{submitError && <p className="rounded-lg bg-rose-50 px-3 py-2 text-xs text-rose-700">{submitError}</p>}<button type="submit" className="flex w-full items-center justify-center gap-2 rounded-xl bg-amber-600 px-4 py-3 text-sm font-bold text-white hover:bg-amber-700"><Camera className="h-4 w-4" /> Отправить на суд зрителей</button></form></div></div>}
    </div>
  );
};