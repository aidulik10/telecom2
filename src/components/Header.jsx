import React, { useState } from 'react';
import { User, Search, CreditCard, ShoppingBag, ShoppingCart, X, Menu, ChevronDown } from 'lucide-react';
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
        page: 'internet',
        items: [
          { name: 'Սմարտֆոնի համար', page: 'internet-smartphone' },
          { name: 'Տան համար - ԿՈՍՄՈ', page: 'internet-kosmo' },
          { name: 'Տան համար - ԿՈՄԲՈ', page: 'combo' },
          { name: 'Համակարգչի/պլանշետի համար', page: 'internet-pc-tablet' },
          { name: 'Team 5G', page: 'team-5g' },
        ],
      },
      {
        id: 'services',
        name: 'Ծառայություններ',
        page: 'services',
        items: [
          { name: 'Team TV', page: 'service-teamtv' },
          { name: 'Վճարում և համալրում', page: 'service-payment' },
          { name: 'Զվարճանք', page: 'service-entertainment' },
          { name: 'Զանգեր և անվտանգություն', page: 'service-security' },
          { name: 'Ֆիքսված հեռախոսակապ', page: 'service-fixed-phone' },
        ],
      },
      {
        id: 'roaming',
        name: 'Ռոումինգ',
        page: 'roaming',
        items: [
          { name: 'Ռոումինգ', page: 'roaming' },
          { name: 'Միջազգային կապ', page: 'roaming-international' },
          { name: 'Օգտակար տեղեկատվություն', page: 'roaming-info' },
          { name: 'Ծառայություններ', page: 'roaming-addons' },
        ],
      },
      {
        id: 'shop',
        name: 'Առցանց խանութ',
        page: 'devices',
        items: [
          { name: 'E-shop', page: 'eshop' },
          { name: 'Առցանց ապառիկ', page: 'online-credit' },
          { name: 'Բաժանորդագրություն', page: 'subscriptions' },
        ],
      },
      {
        id: 'offers',
        name: 'Առաջարկներ',
        page: 'news',
        items: [
          { name: 'Շեյքի՛ր և Շահի՛ր', page: 'shake-win' },
          { name: 'Team Բոնուս', page: 'team-bonus' },
          { name: 'Ակցիաներ', page: 'promotions' },
          { name: 'MobiBattle', page: 'mobibattle' },
          { name: 'GeForce Games', page: 'geforce-games' },
          { name: 'Koreez', page: 'koreez' },
        ],
      },
      {
        id: 'help',
        name: 'Օգնություն',
        page: 'support',
        items: [
          { name: 'Հաճախ տրվող հարցեր', page: 'faq' },
          { name: 'Սարքերի կարգավորումներ', page: 'device-settings' },
          { name: 'Բաժանորդային սպասարկում', page: 'customer-service' },
          { name: 'USSD հրահանգներ և օգտակար համարներ', page: 'ussd' },
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
          { name: 'Интернет и TV КОМБО', page: 'combo' },
          { name: 'Фиксированная связь', page: 'fixed' },
        ],
      },
      {
        id: 'internet',
        name: 'Интернет',
        page: 'internet',
        items: [
          { name: 'Для смартфона', page: 'internet-smartphone' },
          { name: 'Для дома - КОСМО', page: 'internet-kosmo' },
          { name: 'Для дома - КОМБО', page: 'combo' },
          { name: 'Для ПК/планшета', page: 'internet-pc-tablet' },
          { name: 'Team 5G', page: 'team-5g' },
        ],
      },
      {
        id: 'services',
        name: 'Услуги',
        page: 'services',
        items: [
          { name: 'Team TV', page: 'service-teamtv' },
          { name: 'Оплата и пополнение', page: 'service-payment' },
          { name: 'Развлечения', page: 'service-entertainment' },
          { name: 'Звонки и безопасность', page: 'service-security' },
          { name: 'Фиксированная связь', page: 'service-fixed-phone' },
        ],
      },
      {
        id: 'roaming',
        name: 'Роуминг',
        page: 'roaming',
        items: [
          { name: 'Роуминг', page: 'roaming' },
          { name: 'Международная связь', page: 'roaming-international' },
          { name: 'Полезная информация', page: 'roaming-info' },
          { name: 'Услуги', page: 'roaming-addons' },
        ],
      },
      {
        id: 'shop',
        name: 'Интернет-магазин',
        page: 'devices',
        items: [
          { name: 'E-shop', page: 'eshop' },
          { name: 'Онлайн кредит', page: 'online-credit' },
          { name: 'Подписки', page: 'subscriptions' },
        ],
      },
      {
        id: 'offers',
        name: 'Предложения',
        page: 'news',
        items: [
          { name: 'Шейк и Выигрывай', page: 'shake-win' },
          { name: 'Team Бонус', page: 'team-bonus' },
          { name: 'Акции', page: 'promotions' },
          { name: 'MobiBattle', page: 'mobibattle' },
          { name: 'GeForce Games', page: 'geforce-games' },
          { name: 'Koreez', page: 'koreez' },
        ],
      },
      {
        id: 'help',
        name: 'Помощь',
        page: 'support',
        items: [
          { name: 'Часто задаваемые вопросы', page: 'faq' },
          { name: 'Настройки устройств', page: 'device-settings' },
          { name: 'Обслуживание абонентов', page: 'customer-service' },
          { name: 'USSD команды и номера', page: 'ussd' },
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
          { name: 'Internet & TV COMBO', page: 'combo' },
          { name: 'Fixed Connection', page: 'fixed' },
        ],
      },
      {
        id: 'internet',
        name: 'Internet',
        page: 'internet',
        items: [
          { name: 'For Smartphone', page: 'internet-smartphone' },
          { name: 'For Home - KOSMO', page: 'internet-kosmo' },
          { name: 'For Home - COMBO', page: 'combo' },
          { name: 'For PC/Tablet', page: 'internet-pc-tablet' },
          { name: 'Team 5G', page: 'team-5g' },
        ],
      },
      {
        id: 'services',
        name: 'Services',
        page: 'services',
        items: [
          { name: 'Team TV', page: 'service-teamtv' },
          { name: 'Payment & Top-up', page: 'service-payment' },
          { name: 'Entertainment', page: 'service-entertainment' },
          { name: 'Calls & Security', page: 'service-security' },
          { name: 'Fixed Connection', page: 'service-fixed-phone' },
        ],
      },
      {
        id: 'roaming',
        name: 'Roaming',
        page: 'roaming',
        items: [
          { name: 'Roaming', page: 'roaming' },
          { name: 'International Calls', page: 'roaming-international' },
          { name: 'Useful Info', page: 'roaming-info' },
          { name: 'Services', page: 'roaming-addons' },
        ],
      },
      {
        id: 'shop',
        name: 'Online Shop',
        page: 'devices',
        items: [
          { name: 'E-shop', page: 'eshop' },
          { name: 'Online Credit', page: 'online-credit' },
          { name: 'Subscriptions', page: 'subscriptions' },
        ],
      },
      {
        id: 'offers',
        name: 'Offers',
        page: 'news',
        items: [
          { name: 'Shake & Win', page: 'shake-win' },
          { name: 'Team Bonus', page: 'team-bonus' },
          { name: 'Promotions', page: 'promotions' },
          { name: 'MobiBattle', page: 'mobibattle' },
          { name: 'GeForce Games', page: 'geforce-games' },
          { name: 'Koreez', page: 'koreez' },
        ],
      },
      {
        id: 'help',
        name: 'Help',
        page: 'support',
        items: [
          { name: 'FAQ', page: 'faq' },
          { name: 'Device Settings', page: 'device-settings' },
          { name: 'Customer Support', page: 'customer-service' },
          { name: 'USSD Commands & Numbers', page: 'ussd' },
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

  // Мобильное меню
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileExpandedId, setMobileExpandedId] = useState(null);

  // Корзина
  const { totalCount } = useCart();

  // Текстовый контент согласно выбранному языку
  const t = translations[currentLang];

  const handleNavigation = (pageId) => {
    if (pageId) {
      setCurrentPage(pageId);
      setHoveredTab(null);
      setIsMobileMenuOpen(false);
      setMobileExpandedId(null);
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

  const toggleMobileSection = (id) => {
    setMobileExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <header className="sticky top-0 z-50 shadow-md">
      {/* 1. Верхняя тёмно-синяя шапка — скрыта до экранов lg (1024px) */}
      <div className="hidden lg:block bg-[#004B6E] text-white px-4 py-2">
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
                <span className="hidden lg:inline font-semibold">{t.cabinet}</span>
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* 2. Вторая белая шапка */}
      <div className="bg-white border-b border-gray-200 px-4 py-2 relative">
        <div className="max-w-7xl mx-auto flex justify-between items-center gap-2 sm:gap-4">

          {/* Гамбургер — виден до экранов lg (1024px) */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-[#004B6E] p-1 shrink-0"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div
            onClick={() => handleNavigation('home')}
            className="flex flex-col cursor-pointer select-none group shrink-0"
          >
            <span className="text-xl sm:text-2xl font-black uppercase tracking-wider text-[#004B6E] leading-none group-hover:opacity-80 transition-opacity">
              TEAM
            </span>
            <span className="hidden sm:block text-[10px] uppercase tracking-widest font-semibold text-gray-500 mt-0.5 leading-none">
              Telecom Armenia
            </span>
          </div>

          {/* Десктопная навигация — появляется только с lg (1024px) */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
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
                  className={`px-3 py-1.5 text-xs xl:text-sm font-bold rounded-md transition-all relative ${
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

          {/* Правая группа на экранах меньше lg: поиск-иконка, корзина, кабинет */}
          <div className="flex lg:hidden items-center gap-3 shrink-0">
            <button type="button" onClick={() => setIsSearchOpen(!isSearchOpen)} className="text-[#004B6E]">
              <Search size={20} />
            </button>
            <button onClick={() => handleNavigation('cart')} className="relative text-[#004B6E]">
              <ShoppingCart size={20} />
              {totalCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-[#FF4B4B] text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">
                  {totalCount}
                </span>
              )}
            </button>
            <button onClick={() => handleNavigation('profile')} className="text-[#004B6E]">
              <User size={20} />
            </button>
          </div>

          {/* Кнопка оплаты — скрыта на самых узких экранах, появляется постепенно шире */}
          <div
            onClick={() => handleNavigation('profile')}
            className="hidden sm:flex bg-[#004B6E] text-white h-10 w-10 hover:w-32 rounded-xl shadow-sm items-center justify-start px-2.5 cursor-pointer select-none transition-all duration-300 ease-in-out group overflow-hidden shrink-0"
          >
            <CreditCard size={20} className="shrink-0 text-white group-hover:text-emerald-400 transition-colors" />
            <span className="font-bold text-sm ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              {t.pay}
            </span>
          </div>

        </div>

        {/* Мобильный поиск (раскрывается под шапкой) — до lg */}
        {isSearchOpen && (
          <form
            onSubmit={handleSearchSubmit}
            className="lg:hidden max-w-7xl mx-auto mt-2 flex items-center relative"
          >
            <input
              type="text"
              autoFocus
              placeholder={t.searchPlaceholder}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-gray-100 text-[#004B6E] placeholder-gray-400 text-sm px-4 py-2 pr-8 rounded-full outline-none"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-3 text-gray-400 hover:text-gray-600"
              >
                <X size={14} />
              </button>
            )}
          </form>
        )}
      </div>

      {/* 3. Мобильное выпадающее меню на всю ширину — видно до lg */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200 shadow-lg max-h-[75vh] overflow-y-auto">
          {/* Ссылки верхней панели, перенесённые в мобильное меню */}
          <div className="flex items-center justify-around px-4 py-3 bg-[#004B6E] text-white text-xs font-semibold">
            <button onClick={() => handleNavigation('home')}>{t.individuals}</button>
            <button onClick={() => handleNavigation('support')}>{t.business}</button>
            <button onClick={() => handleNavigation('devices')} className="flex items-center gap-1">
              <ShoppingBag size={14} className="text-[#FF4B4B]" />
              {t.eshop}
            </button>
          </div>

          {/* Переключатель языков */}
          <div className="flex items-center justify-center gap-3 py-2 border-b border-gray-100 text-sm">
            {['Հայ', 'Рус', 'Eng'].map((lang) => (
              <button
                key={lang}
                onClick={() => setCurrentLang(lang)}
                className={`px-2 py-0.5 rounded-full transition-colors ${
                  currentLang === lang ? 'bg-[#004B6E] text-white font-bold' : 'text-gray-500'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>

          {/* Разделы меню */}
          <nav className="px-2 py-2">
            {t.menu.map((menuItem) => (
              <div key={menuItem.id} className="border-b border-gray-100 last:border-b-0">
                <button
                  type="button"
                  onClick={() => toggleMobileSection(menuItem.id)}
                  className="w-full flex items-center justify-between px-2 py-3 text-sm font-bold text-gray-700"
                >
                  {menuItem.name}
                  <ChevronDown
                    size={16}
                    className={`transition-transform ${mobileExpandedId === menuItem.id ? 'rotate-180' : ''}`}
                  />
                </button>
                {mobileExpandedId === menuItem.id && menuItem.items && (
                  <ul className="pb-2 pl-4">
                    {menuItem.items.map((subItem, subIdx) => (
                      <li key={subIdx}>
                        <button
                          type="button"
                          onClick={() => handleNavigation(subItem.page)}
                          className="w-full text-left px-2 py-2 text-xs font-medium text-gray-600 hover:text-[#004B6E]"
                        >
                          {subItem.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </nav>

          {/* Кнопка оплаты */}
          <div className="px-4 py-3">
            <button
              onClick={() => handleNavigation('profile')}
              className="w-full bg-[#004B6E] text-white rounded-xl py-2.5 flex items-center justify-center gap-2 font-bold text-sm"
            >
              <CreditCard size={18} />
              {t.pay}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}