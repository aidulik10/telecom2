import React from 'react';
import { User, ShoppingCart, Menu, CreditCard } from 'lucide-react';

export default function Header({ setCurrentPage }) {
  const navItems = [
    { name: 'Գլխավոր', id: 'home' },
    { name: 'Բջջային կապ', id: 'mobile' },
    { name: 'Ինտերնետ և TV', id: 'fixed' },
    { name: 'Խանութ', id: 'devices' },
    { name: 'Նորություններ', id: 'news' },
    { name: 'Ընկերության մասին', id: 'about' },
    { name: 'Աջակցություն', id: 'support' },
  ];

  return (
    <header className="sticky top-0 z-50 shadow-md">
      {/* 1. Верхняя тёмно-синяя шапка */}
      <div className="bg-[#004B6E] text-white px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          <div onClick={() => setCurrentPage('home')} className="flex items-center space-x-2 cursor-pointer">
            <span className="text-2xl font-black tracking-wider text-[#FF4B4B]">team</span>
            <span className="text-xs uppercase font-light border-l border-white/30 pl-2 hidden sm:inline">Telecom</span>
          </div>

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

          <div className="flex items-center space-x-4">
            <button onClick={() => setCurrentPage('profile')} className="hover:text-gray-300 transition"><User size={20} /></button>
            <button className="hover:text-gray-300 transition relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-[#FF4B4B] text-xs w-4 h-4 rounded-full flex items-center justify-center">0</span>
            </button>
            <button className="lg:hidden hover:text-gray-300 transition"><Menu size={20} /></button>
          </div>

        </div>
      </div>

      {/* 2. Вторая белая шапка */}
      <div className="bg-white border-b border-gray-200 px-4 py-2">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* TEAM с подписью Telecom Armenia под ним */}
          <div 
            onClick={() => setCurrentPage('home')} 
            className="flex flex-col cursor-pointer select-none group"
          >
            <span className="text-2xl font-black uppercase tracking-wider text-[#004B6E] leading-none group-hover:opacity-80 transition-opacity">
              TEAM
            </span>
            <span className="text-[10px] uppercase tracking-widest font-semibold text-gray-500 mt-0.5 leading-none">
              Telecom Armenia
            </span>
          </div>

          {/* Кнопка-карточка справа */}
          <div 
            onClick={(e) => e.preventDefault()} 
            className="bg-[#004B6E] text-white h-10 w-10 hover:w-32 rounded-xl shadow-sm flex items-center justify-start px-2.5 cursor-not-allowed select-none transition-all duration-300 ease-in-out group overflow-hidden"
          >
            <CreditCard size={20} className="shrink-0 text-white group-hover:text-emerald-400 transition-colors" />
            <span className="font-bold text-sm ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              Վճարել
            </span>
          </div>

        </div>
      </div>
    </header>
  );
}