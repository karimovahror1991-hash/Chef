import React, { useState, useEffect } from 'react';
import { Trophy, Send, Loader2, AlertCircle, Vote, Plus, Calendar } from 'lucide-react';
import { apiUrl } from '../utils/api';

interface BattleEntry {
  id: number;
  title: string;
  description: string | null;
  photo_url: string | null;
  vote_count: string;
}

interface Battle {
  id: number;
  theme: string;
  endsAt: string;
}

interface RatingUser {
  user_id: number;
  username: string | null;
  first_name: string | null;
  points: number;
  wins: number;
}

export const ChefBattleView: React.FC = () => {
  const [battle, setBattle] = useState<Battle | null>(null);
  const [entries, setEntries] = useState<BattleEntry[]>([]);
  const [userVotes, setUserVotes] = useState<number[]>([]);
  const [rating, setRating] = useState<RatingUser[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showSubmit, setShowSubmit] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [tab, setTab] = useState<'battle' | 'rating'>('battle');

  const getUserId = (): number | null => {
    const tg = (window as any).Telegram?.WebApp;
    return tg?.initDataUnsafe?.user?.id || null;
  };

  const loadBattle = async () => {
    try {
      const userId = getUserId();
      const res = await fetch(apiUrl(`/api/battle/current?userId=${userId || 0}`));
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setBattle(data.battle);
      setEntries(data.entries || []);
      setUserVotes(data.userVotes || []);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const loadRating = async () => {
    try {
      const res = await fetch(apiUrl('/api/battle/rating'));
      const data = await res.json();
      setRating(data.rating || []);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    loadBattle();
    loadRating();
  }, []);

  const handleVote = async (entryId: number) => {
    const userId = getUserId();
    if (!userId) return;
    
    try {
      const res = await fetch(apiUrl('/api/battle/vote'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, entryId }),
      });
      const data = await res.json();
      if (data.error) {
        setError(data.error);
        return;
      }
      setUserVotes(prev => [...prev, entryId]);
      loadBattle();
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleSubmit = async () => {
    const userId = getUserId();
    if (!userId || !newTitle.trim()) return;
    
    setIsSubmitting(true);
    try {
      const res = await fetch(apiUrl('/api/battle/submit'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ userId, title: newTitle, description: newDescription }),
      });
      const data = await res.json();
      if (data.error) {
        setError(data.error);
        return;
      }
      setNewTitle('');
      setNewDescription('');
      setShowSubmit(false);
      loadBattle();
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-20">
        <Loader2 className="w-8 h-8 animate-spin text-amber-600" />
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Заголовок */}
      <div className="bg-gradient-to-r from-rose-600 to-orange-600 rounded-3xl p-6 sm:p-8 text-white shadow-md">
        <div className="flex items-center space-x-3 mb-2">
          <Trophy className="w-6 h-6" />
          <span className="text-xs uppercase font-bold tracking-wider text-rose-100">
            Битва поваров
          </span>
        </div>
        <h1 className="font-serif text-2xl sm:text-3xl font-bold">
          {battle?.theme || 'Конкурс блюд'}
        </h1>
        <p className="text-sm text-rose-100/90 mt-1">
          Голосуйте за лучшие блюда и следите за рейтингом
        </p>
      </div>

      {/* Табы */}
      <div className="flex gap-2">
        <button
          onClick={() => setTab('battle')}
          className={`flex-1 py-3 rounded-2xl font-semibold transition ${
            tab === 'battle' ? 'bg-amber-600 text-white' : 'bg-white text-stone-600 border border-stone-200'
          }`}
        >
          🏆 Конкурс
        </button>
        <button
          onClick={() => setTab('rating')}
          className={`flex-1 py-3 rounded-2xl font-semibold transition ${
            tab === 'rating' ? 'bg-amber-600 text-white' : 'bg-white text-stone-600 border border-stone-200'
          }`}
        >
          🥇 Рейтинг
        </button>
      </div>

      {error && (
        <div className="p-3 bg-rose-50 border border-rose-200 text-rose-800 text-xs rounded-xl flex items-center space-x-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {tab === 'battle' && (
        <>
          {/* Кнопка предложить блюдо */}
          <button
            onClick={() => setShowSubmit(!showSubmit)}
            className="w-full bg-white border-2 border-dashed border-amber-300 rounded-2xl p-4 flex items-center justify-center space-x-2 text-amber-700 hover:bg-amber-50 transition"
          >
            <Plus className="w-5 h-5" />
            <span className="font-semibold">Предложить своё блюдо</span>
          </button>

          {/* Форма предложения */}
          {showSubmit && (
            <div className="bg-white border border-stone-200 rounded-2xl p-4 space-y-3">
              <input
                type="text"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                placeholder="Название блюда"
                className="w-full px-4 py-3 rounded-xl border border-stone-300 text-sm"
              />
              <textarea
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
                placeholder="Краткое описание (необязательно)"
                rows={3}
                className="w-full px-4 py-3 rounded-xl border border-stone-300 text-sm"
              />
              <button
                onClick={handleSubmit}
                disabled={!newTitle.trim() || isSubmitting}
                className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-3 rounded-xl disabled:opacity-50 transition"
              >
                {isSubmitting ? 'Отправка...' : 'Отправить'}
              </button>
            </div>
          )}

          {/* Список блюд */}
          {entries.length === 0 ? (
            <div className="bg-white border border-stone-200 rounded-2xl p-8 text-center">
              <p className="text-stone-500">Пока нет участников. Будьте первым!</p>
            </div>
          ) : (
            <div className="space-y-3">
              {entries.map((entry) => {
                const hasVoted = userVotes.includes(entry.id);
                return (
                  <div
                    key={entry.id}
                    className="bg-white border border-stone-200 rounded-2xl p-4 space-y-3"
                  >
                    <div>
                      <h3 className="font-bold text-stone-900">{entry.title}</h3>
                      {entry.description && (
                        <p className="text-sm text-stone-600 mt-1">{entry.description}</p>
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-stone-500">
                        🗳 {entry.vote_count} голосов
                      </span>
                      <button
                        onClick={() => handleVote(entry.id)}
                        disabled={hasVoted}
                        className={`px-4 py-2 rounded-xl text-sm font-semibold flex items-center space-x-2 transition ${
                          hasVoted
                            ? 'bg-stone-100 text-stone-400'
                            : 'bg-amber-600 hover:bg-amber-700 text-white'
                        }`}
                      >
                        <Vote className="w-4 h-4" />
                        <span>{hasVoted ? 'Вы проголосовали' : 'Голосовать'}</span>
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </>
      )}

      {tab === 'rating' && (
        <div className="bg-white border border-stone-200 rounded-2xl p-4">
          <h2 className="font-bold text-stone-900 mb-4 flex items-center space-x-2">
            <Trophy className="w-5 h-5 text-amber-600" />
            <span>Топ-10 лучших поваров</span>
          </h2>
          {rating.length === 0 ? (
            <p className="text-center text-stone-500 py-8">
              Рейтинг пока пуст. Участвуйте в конкурсах!
            </p>
          ) : (
            <div className="space-y-2">
              {rating.map((user, index) => (
                <div
                  key={user.user_id}
                  className="flex items-center space-x-3 p-3 rounded-xl bg-stone-50"
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-white ${
                    index === 0 ? 'bg-amber-500' :
                    index === 1 ? 'bg-stone-400' :
                    index === 2 ? 'bg-amber-700' :
                    'bg-stone-300'
                  }`}>
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-stone-900">
                      {user.username ? `@${user.username}` : user.first_name || 'Повар'}
                    </div>
                    <div className="text-xs text-stone-500">
                      {user.wins} побед
                    </div>
                  </div>
                  <div className="text-lg font-bold text-amber-600">
                    {user.points}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};