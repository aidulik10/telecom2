import React, { useState, useEffect } from 'react';
import { Phone, Globe, Smartphone, Tv, ChevronLeft, ChevronRight, MessageCircle, X, Send, User, Circle, Search } from 'lucide-react';

export default function Home({ setCurrentPage }) {
  // Массив баннеров
  const slides = [
    {
      id: 1,
      title: "Միացի'ր ԿՈՍՄՈ 4",
      subtitle: "Տունը այնտեղ է, որտեղ միասին ենք",
      buttonText: "Ավելին",
      page: "mobile",
      image: "https://www.telecomarmenia.am/images/sliders_block_slides/1/17758194399312.png"
    },
    {
      id: 2,
      title: "Արագ 5G Ինտերնետ",
      subtitle: "լիցքավորիր առցանց",
      buttonText: "Ծածկույթի քարտ",
      page: "news",
      image: "https://www.telecomarmenia.am/images/advanced_slider/2/17714010168919.jpeg"
    },
    {
      id: 3,
      title: "Նոր Սմարթֆոններ",
      subtitle: "Ձեռք բեր լավագույն սմարթֆոնները ապառիկ տարբերակով",
      buttonText: "Գնեք սմարթֆոն",
      page: "devices",
      bgImage: "https://www.telecomarmenia.am/images/advanced_slider/2/17400318090138.jpeg",
      image: "https://www.telecomarmenia.am/images/advanced_slider/2/17400318089669.png",
      textColor: "text-white",
      subtitleColor: "text-gray-100"
    },
    {
      id: 4,
      title: "TeamTV – 200+ ալիք",
      subtitle: "Դիտիր սիրելի ֆիլմերն ու հաղորդումները ցանկացած սարքով",
      buttonText: "Միանալ TV-ին",
      page: "fixed",
      bgColor: "bg-[#004B6E]",
      image: "https://www.telecomarmenia.am/images/advanced_slider/2/17551722211701.png",
      textColor: "text-white",
      subtitleColor: "text-gray-100"
    },
    {
      id: 5,
      title: "Ռոումինգ առանց սահմանների",
      subtitle: "ռոումինգ, որ գալիս է քեզ հետ",
      buttonText: "Իմանալ ավելին",
      page: "mobile",
      image: "https://www.telecomarmenia.am/images/advanced_slider/2/17835178577289.png"
    },
    {
      id: 6,
      bgColor: "bg-[rgb(2,39,58)]",
      image: "https://www.telecomarmenia.am/images/advanced_slider/2/17574203779594.jpeg",
      fullWidthImage: true
    },
    {
      id: 7,
      title: "Օպտիկական Ինտերնետ",
      subtitle: "Անսահմանափակ արագություն քո տան համար",
      buttonText: "Միացնել ինտերնետ",
      page: "fixed",
      bgGradient: "from-[#0284C7] to-[#0D9488]",
      image: "https://www.telecomarmenia.am/images/advanced_slider/2/17775254728686.png",
      textColor: "text-white",
      subtitleColor: "text-gray-100"
    },
    {
      id: 8,
      bgColor: "bg-black",
      image: "https://www.telecomarmenia.am/images/advanced_slider/2/17815221988238.png",
      fullWidthImage: true
    },
    {
      id: 9,
      title: "մեծ ֆուտբոլը ՝ մեծ էկրանով․",
      buttonText: "Ավելին",
      page: "fixed",
      bgColor: "bg-[#004B6E]",
      image: "https://www.telecomarmenia.am/images/advanced_slider/2/17810972360462.png",
      textColor: "text-white"
    },
    {
      id: 10,
      title: "Be free 3500",
      buttonText: "Ավելին",
      page: "mobile",
      bgColor: "bg-white",
      image: "https://www.telecomarmenia.am/images/advanced_slider/2/17494512279093.jpeg",
      textColor: "text-[#004B6E]"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // 💬 Состояния модуля чата
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isRegistered, setIsRegistered] = useState(true); // Состояние авторизации
  const [searchQuery, setSearchQuery] = useState('');
  
  // Сюда будут подгружаться реальные пользователи из вашей базы данных / API
  const [registeredUsers, setRegisteredUsers] = useState([]);
  
  // Выбранный пользователь для диалога
  const [selectedUser, setSelectedUser] = useState(null);
  
  // История сообщений по ID диалога
  const [chatMessages, setChatMessages] = useState({});
  const [newMessage, setNewMessage] = useState('');

  // Загрузка пользователей при открытии (заглушка под API запрос)
  useEffect(() => {
    if (isRegistered && isChatOpen) {
      // Здесь должен быть реальный fetch/axios запрос к вашему бэкенду
      // fetch('/api/users').then(res => res.json()).then(data => setRegisteredUsers(data));
    }
  }, [isRegistered, isChatOpen]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim() || !selectedUser) return;
    
    const userId = selectedUser.id;
    const userMessages = chatMessages[userId] || [];

    setChatMessages({
      ...chatMessages,
      [userId]: [
        ...userMessages,
        {
          id: Date.now(),
          sender: 'me',
          text: newMessage,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]
    });
    setNewMessage('');
  };

  const filteredUsers = registeredUsers.filter(u => 
    u.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const activeSlide = slides[currentSlide];

  return (
    <div className="bg-[#F8F6F0] min-h-screen space-y-8 sm:space-y-12 pb-8 sm:pb-12 relative">
      
      {/* 🟦 СЛАЙДЕР С КВАДРАТНЫМИ УГЛАМИ */}
      <section className="bg-[#EBE7E0] relative group overflow-hidden rounded-none shadow-sm min-h-[360px] sm:min-h-[420px]">
        {activeSlide.bgImage ? (
          <img 
            key={`bg-${activeSlide.id}`}
            src={activeSlide.bgImage} 
            alt="background" 
            className="absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-700 ease-in-out"
          />
        ) : activeSlide.bgColor ? (
          <div 
            key={`bg-${activeSlide.id}`}
            className={`absolute inset-0 w-full h-full ${activeSlide.bgColor} transition-opacity duration-700 ease-in-out`}
          />
        ) : activeSlide.bgGradient ? (
          <div 
            key={`bg-${activeSlide.id}`}
            className={`absolute inset-0 w-full h-full bg-gradient-to-tr ${activeSlide.bgGradient} opacity-90 transition-opacity duration-700 ease-in-out`}
          />
        ) : null}

        {activeSlide.fullWidthImage ? (
          <div className="w-full h-[360px] sm:h-[420px] relative z-10 flex items-center justify-center">
            {activeSlide.image && (
              <img 
                key={`img-${activeSlide.id}`}
                src={activeSlide.image} 
                alt="Banner" 
                className="w-full h-full object-cover sm:object-contain transition-opacity duration-700 ease-in-out"
              />
            )}
          </div>
        ) : (
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center min-h-[360px] sm:min-h-[420px] relative z-10">
            <div className="space-y-4 sm:space-y-6 text-center md:text-left p-6 sm:p-8 md:p-12 lg:p-16 order-2 md:order-1">
              {activeSlide.title && (
                <h1 className={`text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight transition-all duration-500 ${activeSlide.textColor || 'text-[#004B6E]'}`}>
                  {activeSlide.title}
                </h1>
              )}
              {activeSlide.subtitle && (
                <p className={`text-sm sm:text-base md:text-lg max-w-md mx-auto md:mx-0 transition-all duration-500 ${activeSlide.subtitleColor || 'text-gray-700'}`}>
                  {activeSlide.subtitle}
                </p>
              )}
              {activeSlide.buttonText && (
                <div>
                  <button 
                    onClick={() => setCurrentPage(activeSlide.page)} 
                    className="bg-[#FF4B4B] hover:bg-[#e03f3f] active:scale-95 text-white font-bold text-sm sm:text-base py-3.5 px-8 rounded-full shadow-lg transition duration-200"
                  >
                    {activeSlide.buttonText}
                  </button>
                </div>
              )}
            </div>

            <div className="w-full h-48 sm:h-64 md:h-full min-h-[220px] sm:min-h-[300px] md:min-h-[420px] relative order-1 md:order-2 flex items-center justify-center p-4">
              {activeSlide.image && (
                <img 
                  key={`img-${activeSlide.id}`}
                  src={activeSlide.image} 
                  alt={activeSlide.title || "Slide Image"} 
                  className="max-h-[350px] w-auto object-contain transition-opacity duration-700 ease-in-out drop-shadow-md"
                />
              )}
            </div>
          </div>
        )}

        {/* Стрелки навигации */}
        <button 
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#004B6E] p-2 sm:p-3 rounded-full shadow-md transition transform hover:scale-110 z-20"
        >
          <ChevronLeft size={20} className="sm:w-7 sm:h-7" />
        </button>

        <button 
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#004B6E] p-2 sm:p-3 rounded-full shadow-md transition transform hover:scale-110 z-20"
        >
          <ChevronRight size={20} className="sm:w-7 sm:h-7" />
        </button>

        {/* Точки-индикаторы */}
        <div className="absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex space-x-1.5 sm:space-x-2 z-20">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2 sm:h-3 rounded-full transition-all duration-300 ${
                idx === currentSlide ? 'bg-[#004B6E] w-5 sm:w-6' : 'bg-gray-400/60 w-2 sm:w-3 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>
      </section>

      {/* ⚪ СЕКЦИЯ С КАРТОЧКАМИ */}
      <section className="max-w-7xl mx-auto flex flex-col gap-4 sm:gap-6 px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          <div 
            onClick={() => setCurrentPage('mobile')} 
            className="bg-[#004B6E] text-white p-6 sm:p-8 rounded-2xl shadow-md min-h-[180px] sm:min-h-[240px] flex flex-col justify-between cursor-pointer group hover:shadow-xl transition duration-300"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-wide">Բջջային կապ</h2>
            <div className="flex justify-between items-center mt-4">
              <span className="text-sm sm:text-base underline group-hover:text-gray-300">Ավելին →</span>
              <Phone size={32} className="sm:w-10 sm:h-10 opacity-40 group-hover:opacity-80 transition" />
            </div>
          </div>

          <div 
            onClick={() => setCurrentPage('fixed')} 
            className="bg-[#085a82] text-white p-6 sm:p-8 rounded-2xl shadow-md min-h-[180px] sm:min-h-[240px] flex flex-col justify-between cursor-pointer group hover:shadow-xl transition duration-300"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-wide">Ֆիքսված կապ</h2>
            <div className="flex justify-between items-center mt-4">
              <span className="text-sm sm:text-base underline group-hover:text-gray-300">Ավելին →</span>
              <Globe size={32} className="sm:w-10 sm:h-10 opacity-40 group-hover:opacity-80 transition" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[5fr_3fr] gap-4 sm:gap-6">
          <div 
            onClick={() => setCurrentPage('fixed')} 
            className="bg-[#085a82] text-white p-6 sm:p-8 rounded-2xl shadow-md min-h-[180px] sm:min-h-[240px] flex flex-col justify-between cursor-pointer group hover:shadow-xl transition duration-300"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-wide">Հեռուստատեսություն և Ինտերնետ</h2>
            <div className="flex justify-between items-center mt-4">
              <span className="text-sm sm:text-base underline group-hover:text-gray-300">Ավելին →</span>
              <Tv size={32} className="sm:w-10 sm:h-10 opacity-40 group-hover:opacity-80 transition" />
            </div>
          </div>

          <div 
            onClick={() => setCurrentPage('devices')} 
            className="bg-[#004B6E] text-white p-6 sm:p-8 rounded-2xl shadow-md min-h-[180px] sm:min-h-[240px] flex flex-col justify-between cursor-pointer group hover:shadow-xl transition duration-300"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold uppercase tracking-wide">Սմարթֆոններ</h2>
            <div className="flex justify-between items-center mt-4">
              <span className="text-sm sm:text-base underline group-hover:text-gray-300">Ավելին →</span>
              <Smartphone size={32} className="sm:w-10 sm:h-10 opacity-40 group-hover:opacity-80 transition" />
            </div>
          </div>
        </div>
      </section>

      {/* 🟦 ШИРОКАЯ ПОЛОСА */}
      <section className="w-full bg-[#004B6E] text-white py-12 px-4 shadow-inner mt-8">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center space-y-4">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-black uppercase tracking-wider">
            Դարձեք TEAM Բաժանորդ․
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-200 max-w-xl">
            Միացե՛ք մեզ ձեր համարով և օգտվեք Team-ի բոլոր առավելություններից:
          </p>
          <div className="pt-2">
            <button 
              onClick={() => setCurrentPage('profile')}
              className="bg-[#FF4B4B] hover:bg-[#e03f3f] active:scale-95 text-white font-bold text-sm sm:text-base py-3.5 px-10 rounded-full shadow-lg transition duration-200"
            >
              Միանալ
            </button>
          </div>
        </div>
      </section>

      {/* ⚪ БЫСТРАЯ НАВИГАЦИЯ */}
      <section className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 px-4 sm:px-6">
        <div onClick={() => setCurrentPage('devices')} className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border text-center cursor-pointer hover:shadow-md transition">
          <Smartphone className="mx-auto text-[#004B6E] mb-2 w-5 h-5 sm:w-6 sm:h-6" />
          <span className="font-semibold text-xs sm:text-sm">Գնեք սմարթֆոն</span>
        </div>
        <div onClick={() => setCurrentPage('fixed')} className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border text-center cursor-pointer hover:shadow-md transition">
          <Tv className="mx-auto text-[#004B6E] mb-2 w-5 h-5 sm:w-6 sm:h-6" />
          <span className="font-semibold text-xs sm:text-sm">Հեռուստատեսություն</span>
        </div>
        <div onClick={() => setCurrentPage('news')} className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border text-center cursor-pointer hover:shadow-md transition">
          <div className="text-[#FF4B4B] font-bold text-base sm:text-lg mb-1 sm:mb-2">5G</div>
          <span className="font-semibold text-xs sm:text-sm">Ծածկույթի քարտ</span>
        </div>
        <div onClick={() => setCurrentPage('profile')} className="bg-white p-4 sm:p-6 rounded-xl shadow-sm border text-center cursor-pointer hover:shadow-md transition">
          <div className="text-emerald-600 font-bold text-base sm:text-lg mb-1 sm:mb-2">⚡</div>
          <span className="font-semibold text-xs sm:text-sm">Արագ վճարում</span>
        </div>
      </section>

      {/* 💬 ДВУХСЕКЦИОННЫЙ ОСТРОВОК ЧАТА С КРУГЛОЙ КНОПКОЙ */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        
        {isChatOpen && (
          <div className="mb-4 w-[340px] sm:w-[600px] h-[450px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden transition-all duration-300 flex flex-col">
            
            {/* Шапка чата */}
            <div className="bg-[#004B6E] text-white p-3.5 flex justify-between items-center shrink-0">
              <div className="flex items-center space-x-2">
                <MessageCircle size={20} className="text-[#FF4B4B]" />
                <span className="font-bold text-sm sm:text-base">Team Chat</span>
              </div>
              <button 
                onClick={() => setIsChatOpen(false)}
                className="text-gray-300 hover:text-white p-1 rounded-full transition"
              >
                <X size={18} />
              </button>
            </div>

            {!isRegistered ? (
              /* Неавторизованный режим */
              <div className="p-8 text-center space-y-4 my-auto">
                <div className="w-14 h-14 bg-red-50 text-[#FF4B4B] rounded-full flex items-center justify-center mx-auto">
                  <User size={28} />
                </div>
                <h3 className="font-bold text-gray-800 text-lg">Մուտք գործեք չաթ</h3>
                <p className="text-xs text-gray-500 max-w-xs mx-auto">
                  Գրանցված օգտատերերի հետ շփվելու համար խնդրում ենք մուտք գործել համակարգ:
                </p>
                <button 
                  onClick={() => setCurrentPage('profile')}
                  className="bg-[#FF4B4B] hover:bg-[#e03f3f] text-white font-bold py-2.5 px-6 rounded-xl text-sm transition shadow-md"
                >
                  Մուտք / Գրանցում
                </button>
              </div>
            ) : (
              /* Разделенный чат (Слева пользователи, Справа диалог) */
              <div className="flex flex-1 overflow-hidden">
                
                {/* 👈 ЛЕВАЯ ЧАСТЬ: Имена зарегистрированных пользователей */}
                <div className="w-1/3 border-r bg-slate-50 flex flex-col shrink-0">
                  
                  {/* Поиск пользователей */}
                  <div className="p-2 border-b bg-white">
                    <div className="relative">
                      <Search size={14} className="absolute left-2.5 top-2.5 text-gray-400" />
                      <input 
                        type="text" 
                        placeholder="Փնտրել..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full bg-gray-100 text-xs pl-8 pr-2 py-1.5 rounded-lg focus:outline-none"
                      />
                    </div>
                  </div>

                  {/* Список зарегистрированных пользователей */}
                  <div className="flex-1 overflow-y-auto divide-y divide-gray-100">
                    {filteredUsers.length === 0 ? (
                      <div className="p-4 text-center text-xs text-gray-400">
                        Գրանցված օգտատերեր չկան
                      </div>
                    ) : (
                      filteredUsers.map((user) => (
                        <div 
                          key={user.id}
                          onClick={() => setSelectedUser(user)}
                          className={`p-2.5 flex items-center space-x-2 cursor-pointer transition ${
                            selectedUser?.id === user.id ? 'bg-white shadow-sm border-l-4 border-l-[#004B6E]' : 'hover:bg-gray-100'
                          }`}
                        >
                          <div className="relative">
                            <div className="w-8 h-8 rounded-full bg-[#004B6E]/10 text-[#004B6E] font-bold text-xs flex items-center justify-center">
                              {user.name.charAt(0)}
                            </div>
                            {user.isOnline && (
                              <Circle size={8} className="absolute bottom-0 right-0 text-emerald-500 fill-emerald-500" />
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-xs font-semibold text-gray-800 truncate">{user.name}</p>
                            <span className="text-[10px] text-gray-400 block">
                              {user.isOnline ? 'առցանց' : 'անցանց'}
                            </span>
                          </div>
                        </div>
                      ))
                    )}
                  </div>
                </div>

                {/* 👉 ПРАВАЯ ЧАСТЬ: Окно переписки */}
                <div className="flex-1 flex flex-col bg-white">
                  {selectedUser ? (
                    <>
                      {/* Шапка выбранного собеседника */}
                      <div className="p-2.5 border-b bg-slate-50 flex items-center space-x-2">
                        <div className="w-7 h-7 rounded-full bg-[#004B6E] text-white font-bold text-xs flex items-center justify-center">
                          {selectedUser.name.charAt(0)}
                        </div>
                        <div>
                          <h4 className="text-xs font-bold text-gray-800">{selectedUser.name}</h4>
                          <span className="text-[10px] text-emerald-600">
                            {selectedUser.isOnline ? 'Առցանց' : 'Անցանց'}
                          </span>
                        </div>
                      </div>

                      {/* Область сообщений */}
                      <div className="flex-1 p-3 overflow-y-auto space-y-2.5 bg-[#F8F6F0]/30">
                        {(chatMessages[selectedUser.id] || []).length === 0 ? (
                          <div className="text-center text-xs text-gray-400 my-auto pt-8">
                            Սկսեք զրույցը {selectedUser.name}-ի հետ
                          </div>
                        ) : (
                          (chatMessages[selectedUser.id] || []).map((msg) => (
                            <div 
                              key={msg.id} 
                              className={`flex flex-col ${msg.sender === 'me' ? 'items-end' : 'items-start'}`}
                            >
                              <div 
                                className={`max-w-[85%] px-3 py-1.5 rounded-xl text-xs ${
                                  msg.sender === 'me'
                                    ? 'bg-[#004B6E] text-white rounded-br-none'
                                    : 'bg-gray-100 text-gray-800 rounded-bl-none'
                                }`}
                              >
                                {msg.text}
                              </div>
                              <span className="text-[9px] text-gray-400 mt-0.5 px-0.5">{msg.time}</span>
                            </div>
                          ))
                        )}
                      </div>

                      {/* Ввод сообщения */}
                      <form onSubmit={handleSendMessage} className="p-2 border-t flex items-center space-x-2">
                        <input 
                          type="text" 
                          value={newMessage}
                          onChange={(e) => setNewMessage(e.target.value)}
                          placeholder="Գրեք..."
                          className="flex-1 bg-gray-100 text-xs px-3 py-2 rounded-full focus:outline-none focus:ring-1 focus:ring-[#004B6E]"
                        />
                        <button 
                          type="submit"
                          className="bg-[#FF4B4B] hover:bg-[#e03f3f] text-white p-2 rounded-full transition"
                        >
                          <Send size={14} />
                        </button>
                      </form>
                    </>
                  ) : (
                    /* Состояние когда собеседник не выбран */
                    <div className="flex-1 flex flex-col items-center justify-center p-4 text-center text-gray-400">
                      <MessageCircle size={32} className="mb-2 opacity-30 text-[#004B6E]" />
                      <p className="text-xs">Ընտրեք օգտատիրոջը՝ զրույցը սկսելու համար</p>
                    </div>
                  )}
                </div>

              </div>
            )}
          </div>
        )}

        {/* Круглая кнопка вызова чата */}
        <button
          onClick={() => setIsChatOpen(!isChatOpen)}
          className="bg-[#004B6E] hover:bg-[#085a82] active:scale-95 text-white p-4 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center relative group"
        >
          {isChatOpen ? (
            <X size={26} />
          ) : (
            <>
              <MessageCircle size={26} className="group-hover:scale-110 transition" />
              <span className="absolute top-1 right-1 w-3.5 h-3.5 bg-[#FF4B4B] border-2 border-white rounded-full"></span>
            </>
          )}
        </button>

      </div>

    </div>
  );
}