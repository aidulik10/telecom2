import React, { useState } from 'react';
import { User, ShoppingCart, Menu, CreditCard } from 'lucide-react';

export default function Header({ setCurrentPage }) {
  // Навигация для верхней тёмно-синей шапки
  const topNavItems = [
    { name: 'Գլխավոր', id: 'home' },
    { name: 'Բջջային կապ', id: 'mobile' },
    { name: 'Ինտերնետ և TV', id: 'fixed' },
    { name: 'Խանութ', id: 'devices' },
    { name: 'Նորություններ', id: 'news' },
    { name: 'Ընկերության մասին', id: 'about' },
    { name: 'Աջակցություն', id: 'support' },
  ];

  // Пункты меню с их подпунктами и связанными страницами
  const whiteNavMenu = [
    {
      id: 'tariffs',
      name: 'Սակագներ',
      page: 'mobile', // Основная страница для самого разделов
      items: [
        { name: 'Բջջային կապ', page: 'mobile' },
        { name: 'Ինտերնետ և TV ԿՈՍՄՈ', page: 'fixed' },
        { name: 'Ինտերնետ և TV ԿՈՄԲՈ', page: 'fixed' },
        { name: 'Ֆիքսված հեռախոսակապ', page: 'fixed' },
      ],
    },
    {
      id: 'internet',
      name: 'Ինտերնետ',
      page: 'fixed',
      items: [
        { name: 'Սմարտֆոնի համար', page: 'mobile' },
        { name: 'Տան համար - ԿՈՍՄՈ', page: 'fixed' },
        { name: 'Տան համար - ԿՈՄԲՈ', page: 'fixed' },
        { name: 'Համակարգչի/պլանշետի համար', page: 'fixed' },
        { name: 'Team 5G', page: 'news' },
      ],
    },
    { 
      id: 'services', 
      name: 'Ծառայություններ', 
      page: 'services',
      items: [
        { name: 'Team TV', page: 'fixed' },
        { name: 'Վճարում և համալրում', page: 'profile' },
        { name: 'Զվարճանք', page: 'services' },
        { name: 'Զանգեր և անվտանգություն', page: 'services' },
        { name: 'Ֆիքսված հեռախոսակապ', page: 'fixed' },
      ] 
    },
    { 
      id: 'roaming', 
      name: 'Ռոումինգ', 
      page: 'mobile',
      items: [
        { name: 'Ռոումինգ', page: 'mobile' },
        { name: 'Միջազգային կապ', page: 'mobile' },
        { name: 'Օգտակար տեղեկատվություն', page: 'support' },
        { name: 'Ծառայություններ', page: 'services' },
      ] 
    },
    { 
      id: 'shop', 
      name: 'Առցանց խանութ', 
      page: 'devices',
      items: [
        { name: 'E-shop', page: 'devices' },
        { name: 'Առցանց ապառիկ', page: 'devices' },
        { name: 'Բաժանորդագրություն', page: 'devices' },
      ] 
    },
    { 
      id: 'offers', 
      name: 'Առաջարկներ', 
      page: 'news',
      items: [
        { name: 'Շեյքի՛ր և Շահի՛ր', page: 'news' },
        { name: 'Team Բոնուս', page: 'news' },
        { name: 'Ակցիաներ', page: 'news' },
        { name: 'MobiBattle', page: 'news' },
        { name: 'GeForce Games', page: 'news' },
        { name: 'Koreez', page: 'news' },
      ] 
    },
    { 
      id: 'help', 
      name: 'Օգնություն', 
      page: 'support',
      items: [
        { name: 'Հաճախ տրվող հարցեր', page: 'support' },
        { name: 'Սարքերի կարգավորումներ', page: 'support' },
        { name: 'Բաժանորդային սպասարկում', page: 'support' },
        { name: 'USSD հրահանգներ և օգտակար համարներ', page: 'support' },
      ] 
    },
  ];

  const [hoveredTab, setHoveredTab] = useState(null);

  const handleNavigation = (pageId) => {
    if (pageId) {
      setCurrentPage(pageId);
      setHoveredTab(null); // Закрываем выпадающее меню при переходе
    }
  };

  return (
    <header className="sticky top-0 z-50 shadow-md">
      {/* 1. Верхняя тёмно-синяя шапка */}
      <div className="bg-[#004B6E] text-white px-4 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          <div onClick={() => handleNavigation('home')} className="flex items-center space-x-2 cursor-pointer">
            <span className="text-2xl font-black tracking-wider text-[#FF4B4B]">team</span>
            <span className="text-xs uppercase font-light border-l border-white/30 pl-2 hidden sm:inline">Telecom</span>
          </div>

          <nav className="hidden lg:flex space-x-6 text-sm font-medium">
            {topNavItems.map((item) => (
              <button 
                key={item.id} 
                onClick={() => handleNavigation(item.id)}
                className="hover:text-[#FF4B4B] transition-colors"
              >
                {item.name}
              </button>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <button onClick={() => handleNavigation('profile')} className="hover:text-gray-300 transition"><User size={20} /></button>
            <button className="hover:text-gray-300 transition relative">
              <ShoppingCart size={20} />
              <span className="absolute -top-2 -right-2 bg-[#FF4B4B] text-xs w-4 h-4 rounded-full flex items-center justify-center">0</span>
            </button>
            <button className="lg:hidden hover:text-gray-300 transition"><Menu size={20} /></button>
          </div>

        </div>
      </div>

      {/* 2. Вторая белая шапка С НАВИГАЦИЕЙ */}
      <div className="bg-white border-b border-gray-200 px-4 py-2 relative">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-4">
          
          {/* TEAM с подписью Telecom Armenia */}
          <div 
            onClick={() => handleNavigation('home')} 
            className="flex flex-col cursor-pointer select-none group shrink-0"
          >
            <span className="text-2xl font-black uppercase tracking-wider text-[#004B6E] leading-none group-hover:opacity-80 transition-opacity">
              TEAM
            </span>
            <span className="text-[10px] uppercase tracking-widest font-semibold text-gray-500 mt-0.5 leading-none">
              Telecom Armenia
            </span>
          </div>

          {/* НАВИГАЦИЯ В БЕЛОЙ ШАПКЕ */}
          <nav className="flex items-center gap-1 md:gap-2">
            {whiteNavMenu.map((menuItem) => (
              <div 
                key={menuItem.id} 
                className="relative"
                onMouseEnter={() => setHoveredTab(menuItem.id)}
                onMouseLeave={() => setHoveredTab(null)}
              >
                <button
                  type="button"
                  onClick={() => handleNavigation(menuItem.page)}
                  className={`px-3 py-1.5 text-xs md:text-sm font-bold rounded-md transition-all relative ${
                    hoveredTab === menuItem.id
                      ? 'text-[#004B6E] bg-gray-100/80'
                      : 'text-gray-600 hover:text-[#004B6E]'
                  }`}
                >
                  {menuItem.name}
                  
                  {/* Подчеркивание при наведении */}
                  {hoveredTab === menuItem.id && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#004B6E] rounded-full"></span>
                  )}
                </button>

                {/* ВЫПАДАЮЩИЙ ОСТРОВОК С РАБОЧИМИ ССЫЛКАМИ */}
                {hoveredTab === menuItem.id && (
                  <div className="absolute top-full left-0 pt-2 z-50 w-max">
                    <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-3">
                      {menuItem.items && menuItem.items.length > 0 ? (
                        <ul className="space-y-0.5">
                          {menuItem.items.map((subItem, subIdx) => (
                            <li key={subIdx}>
                              <button
                                type="button"
                                onClick={() => handleNavigation(subItem.page)}
                                className="w-full text-left px-2.5 py-1.5 text-xs font-semibold text-gray-700 hover:text-[#004B6E] hover:bg-gray-50 rounded-md transition-colors whitespace-nowrap cursor-pointer"
                              >
                                {subItem.name}
                              </button>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <div className="text-xs text-gray-400 px-2 py-1 whitespace-nowrap">
                          Շուտով (Скоро)
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Кнопка «Վճարել» */}
          <div 
            onClick={() => handleNavigation('profile')} 
            className="bg-[#004B6E] text-white h-10 w-10 hover:w-32 rounded-xl shadow-sm flex items-center justify-start px-2.5 cursor-pointer select-none transition-all duration-300 ease-in-out group overflow-hidden shrink-0"
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