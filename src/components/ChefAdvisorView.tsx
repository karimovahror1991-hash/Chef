import React, { useState } from 'react';
import { ChefHat, Sparkles, Send, Loader2, HelpCircle, MessageSquare, AlertCircle } from 'lucide-react';
import { Recipe } from '../types';
import { apiUrl } from '../utils/api';

interface ChefAdvisorViewProps {
  currentRecipe?: Recipe | null;
}

interface Message {
  id: string;
  role: 'user' | 'chef';
  text: string;
  timestamp: string;
}

export const ChefAdvisorView: React.FC<ChefAdvisorViewProps> = ({ currentRecipe }) => {
  const [question, setQuestion] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'chef',
      text: `Здравствуйте! Я ваш профессиональный шеф-повар и кулинарный технолог. 
Задайте мне любой вопрос:
• Как спасти блюдо, если оно пересолено, подгорело или соус расслоился?
• Чем заменить редкий ингредиент или специю?
• Какая температура и время нужны для идеальной прожарки мяса или рыбы?
• Как работают технологические процессы: карамелизация, эмульгация, ферментация?`,
      timestamp: 'Только что',
    },
  ]);

  const quickQuestions = [
    'Как спасти пересоленный суп или соус?',
    'Как правильно прокалить чугунный казан перед пловом?',
    'Чем заменить бадьян и сычуаньский перец в лагмане?',
    'Почему сметана расслаивается при нагревании и как этого избежать?',
    'Как рассчитать коэффициент уварки риса и пасты?',
    'Секрет идеальной золотистой корочки на сырниках без пригорания',
  ];

  const handleAsk = async (qText?: string) => {
    const q = (qText || question).trim();
    if (!q || isLoading) return;

    const userMsg: Message = {
      id: 'user-' + Date.now(),
      role: 'user',
      text: q,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!qText) setQuestion('');
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(apiUrl('/api/gemini/ask-chef'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: q,
          contextRecipe: currentRecipe ? { title: currentRecipe.title, ingredients: currentRecipe.ingredients } : undefined,
        }),
      });

      const data = await response.json();
      if (!response.ok || data.error) {
        throw new Error(data.error || 'Не удалось получить ответ от шефа');
      }

      if (typeof data.answer !== 'string' || !data.answer.trim()) {
        throw new Error('Шеф вернул пустой ответ. Попробуйте сформулировать вопрос иначе.');
      }

      const chefMsg: Message = {
        id: 'chef-' + Date.now(),
        role: 'chef',
        text: data.answer.trim(),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, chefMsg]);
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Ошибка связи с кулинарным экспертом');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-amber-600 to-orange-600 rounded-3xl p-6 sm:p-8 text-white shadow-md">
        <div className="flex items-center space-x-3 mb-2">
          <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center">
            <ChefHat className="w-6 h-6 text-white" />
          </div>
          <span className="text-xs uppercase font-bold tracking-wider text-amber-100">
            Интеллектуальный советник шеф-повара
          </span>
        </div>
        <h1 className="font-serif text-2xl sm:text-3xl font-bold leading-tight">
          Кулинарная скорая помощь и секреты мастерства
        </h1>
        <p className="text-xs sm:text-sm text-amber-100/90 mt-1 max-w-xl">
          Спросите о заменах ингредиентов, температурных режимах, секретах специй или способах исправить кулинарную ошибку.
        </p>
      </div>

      {/* Preset Quick Chips */}
      <div className="space-y-2">
        <span className="text-xs font-bold text-stone-500 uppercase tracking-wider block">
          Частые вопросы шефу:
        </span>
        <div className="flex flex-wrap gap-2">
          {quickQuestions.map((q, idx) => (
            <button
              key={idx}
              onClick={() => handleAsk(q)}
              disabled={isLoading}
              className="text-left text-xs bg-white hover:bg-amber-50 hover:border-amber-300 text-stone-700 px-3 py-2 rounded-xl border border-stone-200 transition-colors flex items-center space-x-1.5 shadow-2xs"
            >
              <HelpCircle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span>{q}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Chat messages */}
      <div className="bg-white border border-stone-200 rounded-3xl p-4 sm:p-6 shadow-2xs space-y-4 min-h-[360px] flex flex-col justify-between">
        <div className="space-y-4 overflow-y-auto max-h-[500px] pr-2">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex items-start space-x-3 ${
                msg.role === 'user' ? 'flex-row-reverse space-x-reverse' : ''
              }`}
            >
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 mt-1 ${
                  msg.role === 'user'
                    ? 'bg-stone-900 text-white'
                    : 'bg-amber-600 text-white shadow-xs'
                }`}
              >
                {msg.role === 'user' ? <MessageSquare className="w-4 h-4" /> : <ChefHat className="w-4 h-4" />}
              </div>

              <div
                className={`max-w-[85%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed ${
                  msg.role === 'user'
                    ? 'bg-stone-900 text-white rounded-tr-xs'
                    : 'bg-stone-50 border border-stone-200 text-stone-800 rounded-tl-xs whitespace-pre-line'
                }`}
              >
                <div className="font-medium">{msg.text}</div>
                <div
                  className={`text-[10px] mt-1.5 ${
                    msg.role === 'user' ? 'text-stone-400 text-right' : 'text-stone-400'
                  }`}
                >
                  {msg.timestamp}
                </div>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 rounded-full bg-amber-600 text-white flex items-center justify-center shrink-0">
                <ChefHat className="w-4 h-4" />
              </div>
              <div className="bg-stone-50 border border-stone-200 rounded-2xl p-3.5 text-xs text-stone-500 flex items-center space-x-2">
                <Loader2 className="w-4 h-4 animate-spin text-amber-600" />
                <span>Шеф-повар анализирует рецептуру и готовит ответ...</span>
              </div>
            </div>
          )}
        </div>

        {error && (
          <div className="p-3 bg-rose-50 border border-rose-200 text-rose-800 text-xs rounded-xl flex items-center space-x-2">
            <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        {/* Input Bar */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleAsk();
          }}
          className="pt-3 border-t border-stone-100 flex gap-2"
        >
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Задайте кулинарный вопрос шефу (например: «Чем заменить кокосовое молоко в Том Яме?»)..."
            disabled={isLoading}
            className="flex-1 px-4 py-3 rounded-2xl border border-stone-300 text-xs sm:text-sm bg-white focus:outline-hidden focus:border-amber-500 focus:ring-1 focus:ring-amber-500"
          />
          <button
            type="submit"
            disabled={!question.trim() || isLoading}
            className="px-5 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-2xl text-xs sm:text-sm font-semibold flex items-center space-x-2 disabled:opacity-50 transition-colors shadow-xs"
          >
            <Send className="w-4 h-4" />
            <span className="hidden sm:inline">Спросить</span>
          </button>
        </form>
      </div>
    </div>
  );
};
