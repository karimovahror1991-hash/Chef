import React from 'react';
import { ShoppingCart, Trash2, X } from 'lucide-react';
import { useShoppingList } from '../hooks/useShoppingList';

interface ShoppingListViewProps {
  onClose: () => void;
}

export const ShoppingListView: React.FC<ShoppingListViewProps> = ({ onClose }) => {
  const { items, removeItem, clearAll } = useShoppingList();

  return (
    <div className="max-w-2xl mx-auto space-y-4">
      {/* Заголовок */}
      <div className="bg-emerald-600 text-white rounded-3xl p-6 shadow-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <ShoppingCart className="w-6 h-6" />
            <h1 className="font-serif text-2xl font-bold">Список покупок</h1>
          </div>
          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        <p className="text-sm text-emerald-100 mt-2">
          {items.length === 0 ? 'Список пуст' : `Товаров: ${items.length}`}
        </p>
      </div>

      {/* Список */}
      {items.length === 0 ? (
        <div className="bg-white border border-stone-200 rounded-2xl p-12 text-center">
          <ShoppingCart className="w-12 h-12 text-stone-300 mx-auto mb-3" />
          <p className="text-stone-500">
            Добавляйте ингредиенты из рецептов, и они появятся здесь.
          </p>
        </div>
      ) : (
        <>
          <div className="bg-white border border-stone-200 rounded-2xl divide-y divide-stone-100">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-4 hover:bg-stone-50 transition"
              >
                <div className="flex-1 min-w-0">
                  <div className="font-medium text-stone-900 truncate">
                    {item.name}
                  </div>
                  <div className="text-sm text-stone-500">
                    {item.amount} {item.unit}
                  </div>
                </div>
                <button
                  onClick={() => removeItem(index)}
                  className="p-2 rounded-full hover:bg-rose-50 text-stone-400 hover:text-rose-600 transition"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={clearAll}
            className="w-full py-3 rounded-2xl bg-rose-50 hover:bg-rose-100 text-rose-700 font-semibold transition"
          >
            Очистить весь список
          </button>
        </>
      )}
    </div>
  );
};