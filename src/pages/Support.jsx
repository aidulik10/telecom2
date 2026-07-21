import React from 'react';

export default function Support() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-[#004B6E]">Служба поддержки</h1>
        <p className="text-gray-600">Есть вопросы или возникли трудности? Свяжитесь с нами удобным способом.</p>
        <div className="p-4 bg-white border rounded-xl shadow-sm space-y-2">
          <p className="font-bold text-slate-800">📞 Единый номер:</p>
          <p className="text-xl font-bold text-[#FF4B4B]">100 (Бесплатно с мобильных)</p>
        </div>
        <div className="p-4 bg-white border rounded-xl shadow-sm space-y-2">
          <p className="font-bold text-slate-800">✉️ Электронная почта:</p>
          <p className="text-blue-600 hover:underline cursor-pointer">support@example.com</p>
        </div>
      </div>
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-800">Центры обслуживания</h2>
        <div className="w-full h-64 bg-gray-200 rounded-2xl flex items-center justify-center text-gray-400">[ Здесь будет интерактивная карта офисов ]</div>
        <ul className="text-sm space-y-2 text-gray-600">
          <li>📍 Центральный офис: Главная улица, д. 1 (09:00 - 21:00)</li>
          <li>📍 Филиал Север: Проспект Мира, д. 24 (10:00 - 20:00)</li>
        </ul>
      </div>
    </div>
  );
}