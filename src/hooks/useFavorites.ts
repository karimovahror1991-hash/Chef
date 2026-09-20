import { useState, useEffect } from 'react';

const FAVORITES_KEY = 'chef_favorites';

export function useFavorites() {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem(FAVORITES_KEY);
    if (saved) {
      try {
        setFavorites(JSON.parse(saved));
      } catch (e) {
        console.error('Ошибка загрузки избранного:', e);
      }
    }
  }, []);

  const toggleFavorite = (recipeId: string) => {
    setFavorites((prev) => {
      const next = prev.includes(recipeId)
        ? prev.filter((id) => id !== recipeId)
        : [...prev, recipeId];
      localStorage.setItem(FAVORITES_KEY, JSON.stringify(next));
      return next;
    });
  };

  const isFavorite = (recipeId: string) => favorites.includes(recipeId);

  return { favorites, toggleFavorite, isFavorite };
}