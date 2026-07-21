import React from 'react';
import { Phone, Globe, Smartphone, Tv } from 'lucide-react';

export default function Home({ setCurrentPage }) {
  return (
    <div className="space-y-12 pb-12">
      {/* Большой Баннер (Hero) */}
      <section className="bg-[#EBE7E0] py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-black text-[#004B6E] leading-tight">Связь нового поколения</h1>
            <p className="text-lg text-gray-700">Подключайте безлимитные пакеты для всей семьи с максимальной скоростью.</p>
            <button onClick={() => setCurrentPage('mobile')} className="bg-[#FF4B4B] hover:bg-[#e03f3f] text-white font-bold py-3 px-8 rounded-full shadow-lg transition">
              Выбрать тариф
            </button>
          </div>
          <div className="w-full h-64 md:h-80 bg-gradient-to-tr from-[#004B6E] to-[#FF4B4B] rounded-2xl opacity-80 flex items-center justify-center text-white text-xl font-bold">
            [ Главное Спецпредложение ]
          </div>
        </div>
      </section>

      {/* Сетка Категорий (Два главных блока, как на скриншоте) */}
      <section className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div onClick={() => setCurrentPage('mobile')} className="bg-[#004B6E] text-white p-8 rounded-2xl shadow-md min-h-[240px] flex flex-col justify-between cursor-pointer group">
          <h2 className="text-3xl font-bold uppercase tracking-wide">Мобильная связь</h2>
          <div className="flex justify-between items-center">
            <span className="underline group-hover:text-gray-300">Подробнее →</span>
            <Phone size={40} className="opacity-40" />
          </div>
        </div>
        <div onClick={() => setCurrentPage('fixed')} className="bg-[#085a82] text-white p-8 rounded-2xl shadow-md min-h-[240px] flex flex-col justify-between cursor-pointer group">
          <h2 className="text-3xl font-bold uppercase tracking-wide">Фиксированная связь</h2>
          <div className="flex justify-between items-center">
            <span className="underline group-hover:text-gray-300">Подробнее →</span>
            <Globe size={40} className="opacity-40" />
          </div>
        </div>
      </section>

      {/* Дополнительные экспресс-ссылки */}
      <section className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div onClick={() => setCurrentPage('devices')} className="bg-white p-6 rounded-xl shadow-sm border text-center cursor-pointer hover:shadow-md transition">
          <Smartphone className="mx-auto text-[#004B6E] mb-2" />
          <span className="font-semibold text-sm">Купить смартфон</span>
        </div>
        <div onClick={() => setCurrentPage('fixed')} className="bg-white p-6 rounded-xl shadow-sm border text-center cursor-pointer hover:shadow-md transition">
          <Tv className="mx-auto text-[#004B6E] mb-2" />
          <span className="font-semibold text-sm">Телевидение</span>
        </div>
        <div onClick={() => setCurrentPage('news')} className="bg-white p-6 rounded-xl shadow-sm border text-center cursor-pointer hover:shadow-md transition">
          <div className="text-[#FF4B4B] font-bold text-lg mb-2">5G</div>
          <span className="font-semibold text-sm">Карта покрытия</span>
        </div>
        <div onClick={() => setCurrentPage('profile')} className="bg-white p-6 rounded-xl shadow-sm border text-center cursor-pointer hover:shadow-md transition">
          <div className="text-emerald-600 font-bold text-lg mb-2">⚡</div>
          <span className="font-semibold text-sm">Быстрая оплата</span>
        </div>
      </section>
    </div>
  );
}