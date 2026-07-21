import React from 'react';
import { User, ShoppingCart, Menu } from 'lucide-react';

export default function Header({ setCurrentPage }) {
  const navItems = [
    { name: 'Главная', id: 'home' },
    { name: 'Мобильная связь', id: 'mobile' },
    { name: 'Интернет и TV', id: 'fixed' },
    { name: 'Магазин', id: 'devices' },
    { name: 'Новости', id: 'news' },
    { name: 'О компании', id: 'about' },
    { name: 'Поддержка', id: 'support' },
  ];

  return (
    <header className="bg-[#004B6E] text-white sticky top-0 z-50 px-4 py-3 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Логотип */}
        <div onClick={() => setCurrentPage('home')} className="flex items-center space-x-2 cursor-pointer">
          <span className="text-2xl font-black tracking-wider text-[#FF4B4B]">team</span>
          <span className="text-xs uppercase font-light border-l border-white/30 pl-2 hidden sm:inline">Template</span>
        </div>

        {/* Навигация для десктопа */}
        <nav className="hidden lg:flex space-x-6 text-sm font-medium">
          {navItems.map((item) => (
            <button 
              key={item.id} 
              onClick={() => setCurrentPage(item.id)}
              className="hover:text-[#FF4B4B] transition-colors"
            >
              {item.name}
            </button>
          ))}
        </nav>

        {/* Действия */}
        <div className="flex items-center space-x-4">
          <button onClick={() => setCurrentPage('profile')} className="hover:text-gray-300 transition"><User size={20} /></button>
          <button className="hover:text-gray-300 transition relative">
            <ShoppingCart size={20} />
            <span className="absolute -top-2 -right-2 bg-[#FF4B4B] text-xs w-4 h-4 rounded-full flex items-center justify-center">0</span>
          </button>
          <button className="lg:hidden hover:text-gray-300 transition"><Menu size={20} /></button>
        </div>

      </div>
    </header>
  );
}
