import React, { useState } from 'react';
import { User, Search, CreditCard, ShoppingBag, ShoppingCart, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

// Словарь переводов для текста в шапке
const translations = {
  Հայ: {
    individuals: 'Անհատներին',
    business: 'Բիզնես',
    eshop: 'E - shop',
    searchPlaceholder: 'Որոնել...',
    cabinet: 'Անձնական գրասենյակ',
    pay: 'Վճարել',
    menu: [
      {
        id: 'tariffs',
        name: 'Սակագներ',
        page: 'mobile',
        items: [
          { name: 'Բջջային կապ', page: 'mobile' },
          { name: 'Ինտերնետ և TV ԿՈՍՄՈ', page: 'fixed' },
          { name: 'Ինտերնետ և TV ԿՈՄԲՈ', page: 'combo' },
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
          { name: 'Տան համար - ԿՈՄԲՈ', page: 'combo' },
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
        ],
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
        ],
      },
      {
        id: 'shop',
        name: 'Առցանց խանութ',
        page: 'devices',
        items: [
          { name: 'E-shop', page: 'devices' },
          { name: 'Առցանց ապառիկ', page: 'devices' },
          { name: 'Բաժանորդագրություն', page: 'devices' },
        ],
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
        ],
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
        ],
      },
    ],
  },
  Рус: {
    individuals: 'Частным лицам',
    business: 'Бизнес',
    eshop: 'E - shop',
    searchPlaceholder: 'Поиск...',
    cabinet: 'Личный кабинет',
    pay: 'Оплатить',
    menu: [
      {
        id: 'tariffs',
        name: 'Тарифы',
        page: 'mobile',
        items: [
          { name: 'Мобильная связь', page: 'mobile' },
          { name: 'Интернет и TV КОСМО', page: 'fixed' },
          { name: 'Интернет и TV КОМБО', page: 'fixed' },
          { name: 'Фиксированная связь', page: 'fixed' },
        ],
      },
      {
        id: 'internet',
        name: 'Интернет',
        page: 'fixed',
        items: [
          { name: 'Для смартфона', page: 'mobile' },
          { name: 'Для дома - КОСМО', page: 'fixed' },
          { name: 'Для дома - КОМБО', page: 'fixed' },
          { name: 'Для ПК/планшета', page: 'fixed' },
          { name: 'Team 5G', page: 'news' },
        ],
      },
      {
        id: 'services',
        name: 'Услуги',
        page: 'services',
        items: [
          { name: 'Team TV', page: 'fixed' },
          { name: 'Оплата и пополнение', page: 'profile' },
          { name: 'Развлечения', page: 'services' },
          { name: 'Звонки и безопасность', page: 'services' },
          { name: 'Фиксированная связь', page: 'fixed' },
        ],
      },
      {
        id: 'roaming',
        name: 'Роуминг',
        page: 'mobile',
        items: [
          { name: 'Роуминг', page: 'mobile' },
          { name: 'Международная связь', page: 'mobile' },
          { name: 'Полезная информация', page: 'support' },
          { name: 'Услуги', page: 'services' },
        ],
      },
      {
        id: 'shop',
        name: 'Интернет-магазин',
        page: 'devices',
        items: [
          { name: 'E-shop', page: 'devices' },
          { name: 'Онлайн кредит', page: 'devices' },
          { name: 'Подписки', page: 'devices' },
        ],
      },
      {
        id: 'offers',
        name: 'Предложения',
        page: 'news',
        items: [
          { name: 'Шейк и Выигрывай', page: 'news' },
          { name: 'Team Бонус', page: 'news' },
          { name: 'Акции', page: 'news' },
          { name: 'MobiBattle', page: 'news' },
          { name: 'GeForce Games', page: 'news' },
          { name: 'Koreez', page: 'news' },
        ],
      },
      {
        id: 'help',
        name: 'Помощь',
        page: 'support',
        items: [
          { name: 'Часто задаваемые вопросы', page: 'support' },
          { name: 'Настройки устройств', page: 'support' },
          { name: 'Обслуживание абонентов', page: 'support' },
          { name: 'USSD команды и номера', page: 'support' },
        ],
      },
    ],
  },
  Eng: {
    individuals: 'Individuals',
    business: 'Business',
    eshop: 'E - shop',
    searchPlaceholder: 'Search...',
    cabinet: 'Personal Account',
    pay: 'Pay',
    menu: [
      {
        id: 'tariffs',
        name: 'Tariffs',
        page: 'mobile',
        items: [
          { name: 'Mobile Connection', page: 'mobile' },
          { name: 'Internet & TV KOSMO', page: 'fixed' },
          { name: 'Internet & TV COMBO', page: 'fixed' },
          { name: 'Fixed Connection', page: 'fixed' },
        ],
      },
      {
        id: 'internet',
        name: 'Internet',
        page: 'fixed',
        items: [
          { name: 'For Smartphone', page: 'mobile' },
          { name: 'For Home - KOSMO', page: 'fixed' },
          { name: 'For Home - COMBO', page: 'fixed' },
          { name: 'For PC/Tablet', page: 'fixed' },
          { name: 'Team 5G', page: 'news' },
        ],
      },
      {
        id: 'services',
        name: 'Services',
        page: 'services',
        items: [
          { name: 'Team TV', page: 'fixed' },
          { name: 'Payment & Top-up', page: 'profile' },
          { name: 'Entertainment', page: 'services' },
          { name: 'Calls & Security', page: 'services' },
          { name: 'Fixed Connection', page: 'fixed' },
        ],
      },
      {
        id: 'roaming',
        name: 'Roaming',
        page: 'mobile',
        items: [
          { name: 'Roaming', page: 'mobile' },
          { name: 'International Calls', page: 'mobile' },
          { name: 'Useful Info', page: 'support' },
          { name: 'Services', page: 'services' },
        ],
      },
      {
        id: 'shop',
        name: 'Online Shop',
        page: 'devices',
        items: [
          { name: 'E-shop', page: 'devices' },
          { name: 'Online Credit', page: 'devices' },
          { name: 'Subscriptions', page: 'devices' },
        ],
      },
      {
        id: 'offers',
        name: 'Offers',
        page: 'news',
        items: [
          { name: 'Shake & Win', page: 'news' },
          { name: 'Team Bonus', page: 'news' },
          { name: 'Promotions', page: 'news' },
          { name: 'MobiBattle', page: 'news' },
          { name: 'GeForce Games', page: 'news' },
          { name: 'Koreez', page: 'news' },
        ],
      },
      {
        id: 'help',
        name: 'Help',
        page: 'support',
        items: [
          { name: 'FAQ', page: 'support' },
          { name: 'Device Settings', page: 'support' },
          { name: 'Customer Support', page: 'support' },
          { name: 'USSD Commands & Numbers', page: 'support' },
        ],
      },
    ],
  },
};

export default function Header({ setCurrentPage }) {
  const [hoveredTab, setHoveredTab] = useState(null);
  const [currentLang, setCurrentLang] = useState('Հայ');
  
  // Поиск
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Корзина
  const { totalCount } = useCart();

  // Текстовый контент согласно выбранному языку
  const t = translations[currentLang];

  const handleNavigation = (pageId) => {
    if (pageId) {
      setCurrentPage(pageId);
      setHoveredTab(null);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      handleNavigation('devices');
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  return (
    <header className="sticky top-0 z-50 shadow-md">
      {/* 1. Верхняя тёмно-синяя шапка */}
      <div className="bg-[#004B6E] text-white px-4 py-2">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Левая часть */}
          <div className="flex items-center space-x-6 text-sm font-semibold">
            <button 
              onClick={() => handleNavigation('home')}
              className="text-white/80 hover:text-white transition-colors"
            >
              {t.individuals}
            </button>

            <button 
              onClick={() => handleNavigation('support')}
              className="text-white/80 hover:text-white transition-colors"
            >
              {t.business}
            </button>

            <button 
              onClick={() => handleNavigation('devices')}
              className="flex items-center space-x-1.5 text-white/80 hover:text-white transition-colors"
            >
              <ShoppingBag size={18} className="text-[#FF4B4B]" />
              <span>{t.eshop}</span>
            </button>
          </div>

          {/* Правая часть */}
          <div className="flex items-center text-xs sm:text-sm font-medium">
            
            {/* Поиск с круглым полем */}
            <div className="border-r border-white/20 pr-3 sm:pr-4 flex items-center">
              <div className="relative flex items-center">
                <form 
                  onSubmit={handleSearchSubmit} 
                  className={`transition-all duration-300 ease-in-out overflow-hidden flex items-center relative ${
                    isSearchOpen ? 'w-36 sm:w-44 opacity-100 mr-2' : 'w-0 opacity-0 mr-0'
                  }`}
                >
                  <input
                    type="text"
                    placeholder={t.searchPlaceholder}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-white text-[#004B6E] placeholder-gray-400 text-xs px-3 py-1 pr-6 rounded-full outline-none shadow-sm"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery('')}
                      className="absolute right-2 text-gray-400 hover:text-gray-600"
                    >
                      <X size={13} />
                    </button>
                  )}
                </form>

                <button 
                  type="button"
                  onClick={() => setIsSearchOpen(!isSearchOpen)}
                  className="text-white/80 hover:text-white transition-colors flex items-center p-1"
                >
                  <Search size={18} />
                </button>
              </div>
            </div>

            {/* Переключатель языков */}
            <div className="flex items-center px-3 sm:px-4 border-r border-white/20 space-x-2">
              <button 
                onClick={() => setCurrentLang('Հայ')}
                className={`hover:text-white transition-colors ${currentLang === 'Հայ' ? 'text-white font-bold' : 'text-white/60'}`}
              >
                Հայ
              </button>
              <span className="text-white/30 text-xs">|</span>
              <button 
                onClick={() => setCurrentLang('Рус')}
                className={`hover:text-white transition-colors ${currentLang === 'Рус' ? 'text-white font-bold' : 'text-white/60'}`}
              >
                Рус
              </button>
              <span className="text-white/30 text-xs">|</span>
              <button 
                onClick={() => setCurrentLang('Eng')}
                className={`hover:text-white transition-colors ${currentLang === 'Eng' ? 'text-white font-bold' : 'text-white/60'}`}
              >
                Eng
              </button>
            </div>

                        {/* Корзина */}
            <div className="pl-3 sm:pl-4 border-l border-white/20">
              <button 
                onClick={() => handleNavigation('cart')} 
                className="relative flex items-center space-x-2 text-white/90 hover:text-white transition-colors"
              >
                <ShoppingCart size={18} />
                {totalCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#FF4B4B] text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                    {totalCount}
                  </span>
                )}
              </button>
            </div>

            {/* Личный кабинет */}
            <div className="pl-3 sm:pl-4">
              <button 
                onClick={() => handleNavigation('profile')} 
                className="flex items-center space-x-2 text-white/90 hover:text-white transition-colors"
              >
                <User size={18} />
                <span className="hidden md:inline font-semibold">{t.cabinet}</span>
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* 2. Вторая белая шапка */}
      <div className="bg-white border-b border-gray-200 px-4 py-2 relative">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-4">
          
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

          {/* Навигация с динамическим переводом */}
          <nav className="flex items-center gap-1 md:gap-2">
            {t.menu.map((menuItem) => (
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
                  {hoveredTab === menuItem.id && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-[#004B6E] rounded-full"></span>
                  )}
                </button>

                {hoveredTab === menuItem.id && (
                  <div className="absolute top-full left-0 pt-2 z-50 w-max">
                    <div className="bg-white border border-gray-200 rounded-xl shadow-lg p-3">
                      {menuItem.items && menuItem.items.length > 0 && (
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
                      )}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Кнопка оплаты */}
          <div 
            onClick={() => handleNavigation('profile')} 
            className="bg-[#004B6E] text-white h-10 w-10 hover:w-32 rounded-xl shadow-sm flex items-center justify-start px-2.5 cursor-pointer select-none transition-all duration-300 ease-in-out group overflow-hidden shrink-0"
          >
            <CreditCard size={20} className="shrink-0 text-white group-hover:text-emerald-400 transition-colors" />
            <span className="font-bold text-sm ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              {t.pay}
            </span>
          </div>

        </div>
      </div>
    </header>
  );
}