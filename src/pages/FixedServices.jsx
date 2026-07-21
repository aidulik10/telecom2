import React from 'react';

export default function FixedServices() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-12">
      <div>
        <h1 className="text-3xl font-bold text-[#004B6E] mb-4">Домашний Интернет и ТВ</h1>
        <p className="text-gray-600">Высокоскоростной оптический интернет для вашего дома.</p>
      </div>
      <div className="bg-slate-100 p-8 rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <span className="bg-[#004B6E] text-white text-xs px-3 py-1 rounded-md font-bold uppercase">Пакет КОСМО</span>
          <h2 className="text-2xl font-bold text-slate-800">Интернет до 200 Мбит/с + 150+ ТВ каналов</h2>
          <p className="text-gray-600 text-sm">Первый месяц использования бесплатно при подаче заявки онлайн.</p>
          <button className="bg-[#FF4B4B] text-white font-bold py-2 px-6 rounded-lg hover:bg-opacity-90">Проверить адрес</button>
        </div>
        <div className="h-48 bg-gray-300 rounded-xl flex items-center justify-center text-gray-500">[ Слайдер с преимуществами оптики ]</div>
      </div>
    </div>
  );
}