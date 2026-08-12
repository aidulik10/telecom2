import React, { useState, useEffect } from 'react';

export default function Devices() {
  const items = [
    { 
      title: 'Apple iPhone 17e',
      image: 'https://www.telecomarmenia.am/images/product/12/17738409938768/245x280c-center.jpeg',
      price: '299,900 ֏', 
      credit: 'Սկսած 5,000 ֏/ամիս' 
    },
    { 
      title: 'Y մոդելի սմարթֆոն', 
      price: '210 000 ֏', 
      credit: '5 800 դրամ/ամիս-ից սկսած' 
    },
    { 
      title: 'Pro 11 պլանշետ', 
      price: '320 000 ֏', 
      credit: 'от 8 900 դրամ/ամիս-ից սկսած' 
    },
  ];

  const banners = [
    {
      type: 'center',
      image: 'https://www.telecomarmenia.am/images/advanced_slider/2/17863417310977.jpeg',
    },
    {
      type: 'split',
      image: 'https://www.telecomarmenia.am/images/advanced_slider/2/17857419207587.png',
      title: 'Samsung Galaxy Z Fold8 Ultra | Fold8 | Flip8',
      subtitle: 'Շտապի՛ր նախապատվիրել',
      buttonText: 'Միանալ',
    },
    {
      type: 'center',
      image: 'https://www.telecomarmenia.am/images/advanced_slider/2/17858342308522.jpeg',
    },
    {
      type: 'center',
      image: 'https://www.telecomarmenia.am/images/advanced_slider/2/17797054143953.jpeg',
    },
    {
      type: 'center',
      image: 'https://www.telecomarmenia.am/images/advanced_slider/2/17797043279448.jpeg',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [banners.length]);

  const activeBanner = banners[currentSlide];

  return (
    <div className="w-full">
      {/* Полноэкранный слайдер баннеров */}
      <div className="relative w-full h-[480px] bg-white overflow-hidden shadow-md mb-12 flex items-center justify-center">
        {activeBanner.type === 'center' ? (
          <div className="w-full h-full flex items-center justify-center p-4">
            <img
              src={activeBanner.image}
              alt="Banner"
              className="max-w-full max-h-[85%] object-contain transition-opacity duration-700 ease-in-out"
            />
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-between px-8 md:px-20 bg-gradient-to-r from-slate-900 to-[#004B6E] transition-opacity duration-700 ease-in-out">
            <div className="max-w-xl text-white z-10">
              <h2 className="text-3xl md:text-5xl font-black mb-4 leading-tight">{activeBanner.title}</h2>
              <p className="text-xl md:text-2xl font-medium text-emerald-400 mb-8">{activeBanner.subtitle}</p>
              <button className="bg-[#FF4B4B] text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-[#e03a3a] transition shadow-md">
                {activeBanner.buttonText}
              </button>
            </div>
            <div className="w-1/2 h-full flex items-center justify-end pr-4 p-4">
              <img
                src={activeBanner.image}
                alt="Samsung Banner"
                className="max-w-full max-h-[80%] object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        )}

        {/* Чистые точки переключения */}
        <div className="absolute bottom-5 left-0 right-0 flex justify-center space-x-2 z-20">
          {banners.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`h-2.5 rounded-full transition-all ${
                currentSlide === idx ? 'bg-[#004B6E] w-8' : 'bg-gray-300 w-2.5'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 pb-12">
        <h1 className="text-3xl font-bold text-[#004B6E] mb-8">Գաջեթների առցանց խանութ</h1>
        {/* Контейнер с сеткой карточек (ширина 300px, высота 600px, серый фон и рамка) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <div key={idx} className="bg-gray-50 border border-gray-200 rounded-none p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between w-[300px] h-[600px]">
              <div>
                {item.title && (
                  <h3 className="font-bold text-slate-800 mb-2">{item.title}</h3>
                )}
                <div className="w-full h-64 bg-white rounded-none mb-4 flex items-center justify-center overflow-hidden border border-gray-100">
                  {item.image ? (
                    <img src={item.image} alt={item.title || 'Product'} className="w-full h-full object-contain" />
                  ) : (
                    <div className="text-gray-400"></div>
                  )}
                </div>
              </div>
              <div className="border-t border-gray-200 pt-4 mt-auto flex flex-col justify-between h-[180px]">
                <div>
                  <p className="text-xl font-black text-slate-900 mb-2">{item.price}</p>
                  <div className="w-full h-[1px] bg-gray-200 mb-3"></div>
                  <p className="text-xs text-gray-500 whitespace-pre-line mb-3">{item.credit}</p>
                </div>
                <button className="w-full bg-[#FF4B4B] text-white text-xs py-3 rounded-lg font-bold flex items-center justify-center gap-1.5 hover:bg-[#e03a3a] transition">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Ավելացնել զամբյուղ
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}