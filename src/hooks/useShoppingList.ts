import { useState, useEffect } from 'react';

const SHOPPING_KEY = 'chef_shopping_list';

export interface ShoppingItem {
  name: string;
  amount: number;
  unit: string;
}

export function useShoppingList() {
  const [items, setItems] = useState<ShoppingItem[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem(SHOPPING_KEY);
    if (saved) {
      try {
        setItems(JSON.parse(saved));
      } catch (e) {
        console.error('Ошибка загрузки списка покупок:', e);
      }
    }
  }, []);

  const saveItems = (newItems: ShoppingItem[]) => {
    setItems(newItems);
    localStorage.setItem(SHOPPING_KEY, JSON.stringify(newItems));
  };

  const addRecipe = (ingredients: ShoppingItem[]) => {
    const merged = [...items];
    ingredients.forEach((ing) => {
      const existing = merged.find(
        (i) => i.name.toLowerCase() === ing.name.toLowerCase() && i.unit === ing.unit
      );
      if (existing) {
        existing.amount += ing.amount;
      } else {
        merged.push({ ...ing });
      }
    });
    saveItems(merged);
  };

  const removeItem = (index: number) => {
    const next = items.filter((_, i) => i !== index);
    saveItems(next);
  };

  const clearAll = () => {
    saveItems([]);
  };

  return { items, addRecipe, removeItem, clearAll };
}