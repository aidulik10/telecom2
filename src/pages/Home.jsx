import React, { useState, useEffect } from 'react';
import { Phone, Globe, Smartphone, Tv, ChevronLeft, ChevronRight } from 'lucide-react';

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

  const activeSlide = slides[currentSlide];

  return (
    <div className="bg-[#F8F6F0] min-h-screen space-y-8 sm:space-y-12 pb-8 sm:pb-12">
      
      {/* 🟦 СЛАЙДЕР С КВАДРАТНЫМИ УГЛАМИ */}
      <section className="bg-[#EBE7E0] relative group overflow-hidden rounded-none shadow-sm min-h-[360px] sm:min-h-[420px]">
        
        {/* ФОН ДЛЯ ВСЕГО БАННЕРА */}
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

        {/* ОСНОВНОЙ КОНТЕНТ */}
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

      {/* 🟦 ШИРОКАЯ ПОЛОСА ВО ВСЮ ШИРИНУ ЭКРАНА */}
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

    </div>
  );
}