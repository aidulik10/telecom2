import React, { useState } from 'react';
import { Phone, Globe, Smartphone, Tv, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Home({ setCurrentPage }) {
  // Массив из 10 баннеров для слайдера
  const slides = [
    {
      id: 1,
      title: "Միացի'ր ԿՈՍՄՈ 4",
      subtitle: "Տունը այնտեղ է, որտեղ միասին ենք",
      buttonText: "Ավելին",
      page: "mobile",
      bgGradient: "from-[#004B6E] to-[#FF4B4B]"
    },
    {
      id: 2,
      title: "Արագ 5G Ինտերնետ",
      subtitle: "Վայելիր ամենաարագ ինտերնետը ամբողջ Հայաստանում",
      buttonText: "Ծածկույթի քարտ",
      page: "news",
      bgGradient: "from-[#FF4B4B] to-[#085a82]"
    },
    {
      id: 3,
      title: "Նոր Սմարթֆոններ",
      subtitle: "Ձեռք բեր լավագույն սմարթֆոնները ապառիկ տարբերակով",
      buttonText: "Գնեք սմարթֆոն",
      page: "devices",
      bgGradient: "from-[#085a82] to-[#10B981]"
    },
    {
      id: 4,
      title: "TeamTV – 200+ ալիք",
      subtitle: "Դիտիր սիրելի ֆիլմերն ու հաղորդումները ցանկացած սարքով",
      buttonText: "Միանալ TV-ին",
      page: "fixed",
      bgGradient: "from-[#6366F1] to-[#004B6E]"
    },
    {
      id: 5,
      title: "Ռոումինգ առանց սահմանների",
      subtitle: "Մնա կապի մեջ արտասահմանում մատչելի փաթեթներով",
      buttonText: "Իմանալ ավելին",
      page: "mobile",
      bgGradient: "from-[#F59E0B] to-[#FF4B4B]"
    },
    {
      id: 6,
      title: "eSIM Ակտիվացում",
      subtitle: "Ակտիվացրու քո SIM քարտը առանց այցելելու սպասարկման կենտրոն",
      buttonText: "Պատվիրել eSIM",
      page: "mobile",
      bgGradient: "from-[#8B5CF6] to-[#EC4899]"
    },
    {
      id: 7,
      title: "Օպտիկական Ինտերնետ",
      subtitle: "Անսահմանափակ արագություն քո տան համար",
      buttonText: "Միացնել ինտերնետ",
      page: "fixed",
      bgGradient: "from-[#0284C7] to-[#0D9488]"
    },
    {
      id: 8,
      title: "E-Shop Հատուկ Զեղչեր",
      subtitle: "Գնիր աքսեսուարներ և պլանշետներ մինչև 30% զեղչով",
      buttonText: "Անցնել խանութ",
      page: "devices",
      bgGradient: "from-[#EF4444] to-[#F97316]"
    },
    {
      id: 9,
      title: "Բիզնես Լուծումներ",
      subtitle: "Հատուկ սակագնային փաթեթներ ձեր ընկերության համար",
      buttonText: "Կորպորատիվ կապ",
      page: "support",
      bgGradient: "from-[#1E293B] to-[#004B6E]"
    },
    {
      id: 10,
      title: "Team Pay Հավելված",
      subtitle: "Կատարիր վճարումներ արագ, ապահով և առանց միջնորդավճարի",
      buttonText: "Ներբեռնել app-ը",
      page: "profile",
      bgGradient: "from-[#10B981] to-[#06B6D4]"
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const activeSlide = slides[currentSlide];

  return (
    <div className="space-y-12 pb-12">
      
      {/* Промо-баннер с высоким профилем и слайдером на 10 карточек */}
      <section className="bg-[#EBE7E0] py-20 px-4 relative group">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[360px]">
          
          {/* Текст слайдера */}
          <div className="space-y-6 text-center md:text-left transition-all duration-500">
            <h1 className="text-4xl md:text-6xl font-black text-[#004B6E] leading-tight">
              {activeSlide.title}
            </h1>
            <p className="text-lg text-gray-700">
              {activeSlide.subtitle}
            </p>
            <button 
              onClick={() => setCurrentPage(activeSlide.page)} 
              className="bg-[#FF4B4B] hover:bg-[#e03f3f] text-white font-bold py-3.5 px-8 rounded-full shadow-lg transition"
            >
              {activeSlide.buttonText}
            </button>
          </div>

          {/* Градиентная карточка баннера */}
          <div className={`w-full h-72 md:h-96 bg-gradient-to-tr ${activeSlide.bgGradient} rounded-2xl opacity-90 shadow-xl transition-all duration-500`}>
          </div>
        </div>

        {/* Левая стрелка */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#004B6E] p-3 rounded-full shadow-md transition transform hover:scale-110 z-10"
        >
          <ChevronLeft size={28} />
        </button>

        {/* Правая стрелка */}
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-[#004B6E] p-3 rounded-full shadow-md transition transform hover:scale-110 z-10"
        >
          <ChevronRight size={28} />
        </button>

        {/* Точки-индикаторы для всех 10 слайдов */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
          {slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-3 rounded-full transition-all duration-300 ${
                idx === currentSlide ? 'bg-[#004B6E] w-6' : 'bg-gray-400/60 w-3 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Секция с синими карточками */}
      <section className="max-w-7xl mx-auto px-4 flex flex-col gap-6">
        
        {/* ВЕРХНИЙ РЯД: 2 одинаковые карточки */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div onClick={() => setCurrentPage('mobile')} className="bg-[#004B6E] text-white p-8 rounded-2xl shadow-md min-h-[240px] flex flex-col justify-between cursor-pointer group">
            <h2 className="text-3xl font-bold uppercase tracking-wide">Բջջային կապ</h2>
            <div className="flex justify-between items-center">
              <span className="underline group-hover:text-gray-300">Ավելին →</span>
              <Phone size={40} className="opacity-40" />
            </div>
          </div>

          <div onClick={() => setCurrentPage('fixed')} className="bg-[#085a82] text-white p-8 rounded-2xl shadow-md min-h-[240px] flex flex-col justify-between cursor-pointer group">
            <h2 className="text-3xl font-bold uppercase tracking-wide">Ֆիքսված կապ</h2>
            <div className="flex justify-between items-center">
              <span className="underline group-hover:text-gray-300">Ավելին →</span>
              <Globe size={40} className="opacity-40" />
            </div>
          </div>
        </div>

        {/* НИЖНИЙ РЯД: 1-я длинная (62.5%), 2-я короткая (37.5%) */}
        <div className="grid grid-cols-1 md:grid-cols-[5fr_3fr] gap-6">
          <div onClick={() => setCurrentPage('fixed')} className="bg-[#085a82] text-white p-8 rounded-2xl shadow-md min-h-[240px] flex flex-col justify-between cursor-pointer group">
            <h2 className="text-3xl font-bold uppercase tracking-wide">Հեռուստատեսություն և Ինտերնետ</h2>
            <div className="flex justify-between items-center">
              <span className="underline group-hover:text-gray-300">Ավելին →</span>
              <Tv size={40} className="opacity-40" />
            </div>
          </div>

          <div onClick={() => setCurrentPage('devices')} className="bg-[#004B6E] text-white p-8 rounded-2xl shadow-md min-h-[240px] flex flex-col justify-between cursor-pointer group">
            <h2 className="text-3xl font-bold uppercase tracking-wide">Սմարթֆոններ</h2>
            <div className="flex justify-between items-center">
              <span className="underline group-hover:text-gray-300">Ավելին →</span>
              <Smartphone size={40} className="opacity-40" />
            </div>
          </div>
        </div>

      </section>

      {/* Нижняя быстрая навигация */}
      <section className="max-w-7xl mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div onClick={() => setCurrentPage('devices')} className="bg-white p-6 rounded-xl shadow-sm border text-center cursor-pointer hover:shadow-md transition">
          <Smartphone className="mx-auto text-[#004B6E] mb-2" />
          <span className="font-semibold text-sm">Գնեք սմարթֆոն</span>
        </div>
        <div onClick={() => setCurrentPage('fixed')} className="bg-white p-6 rounded-xl shadow-sm border text-center cursor-pointer hover:shadow-md transition">
          <Tv className="mx-auto text-[#004B6E] mb-2" />
          <span className="font-semibold text-sm">Հեռուստատեսություն</span>
        </div>
        <div onClick={() => setCurrentPage('news')} className="bg-white p-6 rounded-xl shadow-sm border text-center cursor-pointer hover:shadow-md transition">
          <div className="text-[#FF4B4B] font-bold text-lg mb-2">5G</div>
          <span className="font-semibold text-sm">Ծածկույթի քարտ</span>
        </div>
        <div onClick={() => setCurrentPage('profile')} className="bg-white p-6 rounded-xl shadow-sm border text-center cursor-pointer hover:shadow-md transition">
          <div className="text-emerald-600 font-bold text-lg mb-2">⚡</div>
          <span className="font-semibold text-sm">Արագ վճարում</span>
        </div>
      </section>
    </div>
  );
}