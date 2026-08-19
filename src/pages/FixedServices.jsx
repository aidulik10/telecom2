import React, { useState, useEffect } from 'react';

export default function FixedServices() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState('main'); // 'main' для Հիմնական, 'regional' для Մարզային

  const banners = [
    {
      badge: "ԿՈՍՄՈ",
      title: "ԿՈՍՄՈ. Առաջին ամիս ԱՆՎՃԱՐ՝ առցանց միանալու դեպքում",
      description: "Մինչև 200 Մբ/վ ինտերնետ + 150-ից ավելի հեռուստաալիք",
      buttonText: "Միանալ առցանց",
      image: "https://www.telecomarmenia.am/images/sliders_block_slides/1/17775256210007.png",
      bgClass: "bg-gradient-to-r from-cyan-50 via-teal-50 to-blue-100",
      textColor: "text-slate-900",
      descColor: "text-gray-700",
      cardBg: "bg-white/90 border-cyan-200 shadow-md",
      badgeBg: "bg-[#004B6E] text-white"
    },
    {
      badge: "ԿՈՍՄՈ 4",
      title: "Միացի'ր ԿՈՍՄՈ 4",
      description: "Զեղճը գործում է 16.07.2026թ - 16.10.2027թ միանալու դեպքում",
      buttonText: "Միանալ առցանց",
      image: "https://www.telecomarmenia.am/images/sliders_block_slides/1/17758194399312.png",
      bgClass: "bg-gradient-to-r from-cyan-50 via-teal-50 to-blue-100",
      textColor: "text-slate-900",
      descColor: "text-gray-700",
      cardBg: "bg-white/90 border-cyan-200 shadow-md",
      badgeBg: "bg-[#004B6E] text-white"
    },
    {
      badge: "ԿՈՍՄՈ GIG",
      title: "ԿՈՍՄՈ GIG",
      description: "1 ԳԲ գերարագ ինտերնետ լավագույն Nokia սարքով",
      buttonText: "Միանալ առցանց",
      image: "https://www.telecomarmenia.am/images/sliders_block_slides/1/17767669719393.png",
      bgClass: "bg-gradient-to-r from-slate-950 via-teal-950 to-cyan-950",
      textColor: "text-white",
      descColor: "text-cyan-200",
      cardBg: "bg-slate-900/80 backdrop-blur-md border-cyan-800/50 shadow-xl",
      badgeBg: "bg-cyan-400 text-slate-950 font-extrabold"
    },
    {
      badge: "ԱՌԱՋԱՐԿ",
      title: "Զգա արագությունը՝ մեծ էկրանով",
      description: "TCL QLED 55\" սմարթ TV",
      buttonText: "Միանալ առցանց",
      image: "https://www.telecomarmenia.am/images/sliders_block_slides/1/17857440992138.png",
      bgClass: "bg-gradient-to-r from-cyan-50 via-teal-50 to-blue-100",
      textColor: "text-slate-900",
      descColor: "text-gray-700",
      cardBg: "bg-white/90 border-cyan-200 shadow-md",
      badgeBg: "bg-[#004B6E] text-white"
    }
  ];

  const cardsData = [
    { title: "Ինտերնետ տան համար", desc: "Բարձր արագություն և կայուն կապ", icon: "🌐" },
    { title: "Ժամանակակից TV", desc: "150+ ալիք և հարուստ մեդիադարդան", icon: "📺" },
    { title: "Անսահմանափակ ինտերնետ", desc: "Միացեք առանց սահմանափակումների", icon: "♾️" },
    { title: "GeForce Now", desc: "Ամպային խաղեր ուղղակի ձեր էկրանին", icon: "🎮" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [banners.length]);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % banners.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length);

  const slide = banners[currentSlide];

  return (
    <div className="w-full py-6 space-y-0 relative">
      
      {/* Слайдер баннеров */}
      <div className={`w-full ${slide.bgClass} py-12 px-4 md:px-12 shadow-sm relative overflow-hidden transition-all duration-700`}>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[340px]">
          
          {/* Левая часть с текстом */}
          <div className={`space-y-6 ${slide.cardBg} p-8 rounded-2xl border z-10 transition-all duration-500`}>
            <span className={`inline-block ${slide.badgeBg} text-xs px-3 py-1 rounded-md font-bold uppercase tracking-wider`}>
              {slide.badge}
            </span>
            <h2 className={`text-2xl md:text-3xl font-extrabold ${slide.textColor} leading-snug`}>
              {slide.title}
            </h2>
            <p className={`${slide.descColor} text-sm`}>
              {slide.description}
            </p>
            <button className="bg-[#FF4B4B] text-white font-bold py-3 px-8 rounded-xl hover:bg-opacity-90 transition shadow-md">
              {slide.buttonText}
            </button>
          </div>

          {/* Правая часть с фотографией */}
          <div className="h-full flex items-center justify-center z-10">
            <img 
              src={slide.image} 
              alt={slide.badge} 
              className="w-full h-auto object-cover rounded-2xl transition-opacity duration-500"
            />
          </div>

        </div>

        {/* Кнопки переключения слайдов */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-cyan-950 p-3 rounded-full shadow-md transition z-20"
          aria-label="Previous slide"
        >
          ❮
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-cyan-950 p-3 rounded-full shadow-md transition z-20"
          aria-label="Next slide"
        >
          ❯
        </button>

        {/* Точки-индикаторы снизу */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index ? 'bg-cyan-400 w-6' : 'bg-cyan-900/30'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Остров под баннером */}
      <div className="max-w-3xl mx-auto px-4 mt-2 relative z-30">
        <div className="bg-white rounded-t-none rounded-b-3xl shadow-lg border-x border-b border-gray-100 py-4 px-6 flex justify-center items-center gap-8">
          
          {/* Кнопка Հիմնական */}
          <button
            onClick={() => setActiveTab('main')}
            className={`flex-1 py-2 text-center font-bold text-lg transition relative ${
              activeTab === 'main' ? 'text-slate-900' : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            Հիմնական
            {activeTab === 'main' && (
              <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-1 bg-[#FF4B4B] rounded-full"></span>
            )}
          </button>

          {/* Разделитель */}
          <div className="w-px h-8 bg-gray-200"></div>

          {/* Кнопка Մարզային */}
          <button
            onClick={() => setActiveTab('regional')}
            className={`flex-1 py-2 text-center font-bold text-lg transition relative ${
              activeTab === 'regional' ? 'text-slate-900' : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            Մարզային
            {activeTab === 'regional' && (
              <span className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-20 h-1 bg-[#FF4B4B] rounded-full"></span>
            )}
          </button>

        </div>
      </div>

    {/* Ультра-широкие длинные карточки (max-w-[1700px] с более квадратными углами) */}
    <div className="max-w-[1700px] mx-auto px-4 mt-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cardsData.map((card, idx) => (
          <div 
            key={idx} 
            className="bg-white rounded-md p-10 shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 flex flex-col justify-between min-h-[250px]"
          >
            <div>
              <div className="text-3xl mb-4">{card.icon}</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">{card.title}</h3>
              <p className="text-gray-600 text-base">{card.desc}</p>
            </div>
            <div className="mt-8 pt-4 border-t border-gray-100">
              <span className="text-[#004B6E] font-semibold text-base hover:underline cursor-pointer">
                Подробнее →
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>

    </div>
  );
}