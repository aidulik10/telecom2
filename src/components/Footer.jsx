import React from 'react';

export default function Footer({ setCurrentPage }) {
  return (
    <footer className="bg-slate-900 text-white mt-auto py-12 px-4 border-t border-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h5 className="font-bold text-gray-400 mb-3 text-sm uppercase">Услуги</h5>
          <ul className="space-y-2 text-sm text-gray-300">
            <li onClick={() => setCurrentPage('mobile')} className="hover:text-white cursor-pointer">Мобильная связь</li>
            <li onClick={() => setCurrentPage('fixed')} className="hover:text-white cursor-pointer">Домашний Интернет</li>
            <li onClick={() => setCurrentPage('fixed')} className="hover:text-white cursor-pointer">Телевидение</li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-gray-400 mb-3 text-sm uppercase">Компания</h5>
          <ul className="space-y-2 text-sm text-gray-300">
            <li onClick={() => setCurrentPage('about')} className="hover:text-white cursor-pointer">О нас</li>
            <li onClick={() => setCurrentPage('news')} className="hover:text-white cursor-pointer">Пресс-центр</li>
            <li className="hover:text-white cursor-pointer">Вакансии</li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-gray-400 mb-3 text-sm uppercase">Поддержка</h5>
          <ul className="space-y-2 text-sm text-gray-300">
            <li onClick={() => setCurrentPage('support')} className="hover:text-white cursor-pointer">Помощь</li>
            <li onClick={() => setCurrentPage('support')} className="hover:text-white cursor-pointer">Офисы продаж</li>
            <li className="hover:text-white cursor-pointer">Контакты</li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-gray-400 mb-3 text-sm uppercase">Приложения</h5>
          <ul className="space-y-2 text-sm text-gray-300">
            <li onClick={() => setCurrentPage('profile')} className="hover:text-white cursor-pointer">Личный кабинет</li>
            <li className="hover:text-white cursor-pointer">Скачать My Team</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-slate-800 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Телеком Провайдер Шаблон. Все права защищены.
      </div>
    </footer>
  );
}