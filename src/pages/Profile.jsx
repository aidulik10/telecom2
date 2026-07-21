import React from 'react';

export default function Profile() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-6">
      <h1 className="text-3xl font-bold text-[#004B6E]">Личный кабинет абонента</h1>
      <div className="bg-white border rounded-2xl p-6 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <p className="text-sm text-gray-500">Ваш баланс:</p>
          <p className="text-4xl font-black text-[#004B6E]">4 250 ֏</p>
          <button className="bg-emerald-600 text-white text-xs px-4 py-2 rounded-lg font-bold hover:bg-emerald-700 transition">Пополнить онлайн</button>
        </div>
        <div className="space-y-2 border-t md:border-t-0 md:border-l md:pl-6 pt-4 md:pt-0">
          <p className="text-sm text-gray-500 font-semibold">Текущий тариф:</p>
          <p className="text-lg font-bold text-slate-800">Be Free 3500 (Активен)</p>
          <p className="text-xs text-gray-500">Следующее списание: 01.08.2026</p>
        </div>
      </div>
    </div>
  );
}