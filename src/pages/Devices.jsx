import React, { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';

export default function Devices() {
  const { addToCart } = useCart();

  const items = [
    { 
      title: 'Apple iPhone 17e',
      image: 'https://www.telecomarmenia.am/images/product/12/17738409938768/245x280c-center.jpeg',
      price: '299,900 ֏', 
      credit: 'Սկսած 5,000 ֏/ամիս' 
    },
    { 
      title: 'Նոթբուք Apple MacBook Neo A18 Pro 13" Touch ID', 
      image: 'https://www.telecomarmenia.am/images/product/12/17745233346226/245x280c-center.jpeg',
      price: '359,900 ֏', 
      credit: 'Սկսած 6,500 ֏/ամիս' 
    },
    { 
      title: 'Honor 600 Pro', 
      image: 'https://www.telecomarmenia.am/images/product/13/17823856145217/245x280c-center.png',
      price: '299,900 ֏', 
      credit: 'Սկսած 5,000 ֏/ամիս' 
    },
    { 
      title: 'Honor Magic 8 Lite', 
      image: 'https://www.telecomarmenia.am/images/product/13/17866969233836/245x280c-center.png',
      price: '169,900 ֏', 
      credit: 'Սկսած 2,840 ֏/ամիս' 
    },
    { 
      title: 'Samsung A27', 
      image: 'https://www.telecomarmenia.am/images/product/13/17836714065901/245x280c-center.png',
      price: '141,900 ֏', 
      credit: 'Սկսած 2,370 ֏/ամիս' 
    },
    { 
      title: 'Ականջակալ Galaxy Buds4 Pro R640', 
      image: 'https://www.telecomarmenia.am/images/product/12/17758055319629/241x273c-center.png',
      price: '72,900 ֏', 
      credit: 'Սկսած 1,300 ֏/ամիս' 
    },
    { 
      title: 'Samsung Galaxy S25', 
      image: 'https://www.telecomarmenia.am/images/product/12/17738409938768/245x280c-center.jpeg',
      price: '389,900 ֏', 
      credit: 'Սկսած 7,000 ֏/ամիս' 
    },
    { 
      title: 'Xiaomi 15 Ultra', 
      image: 'https://www.telecomarmenia.am/images/product/12/17745233346226/245x280c-center.jpeg',
      price: '349,900 ֏', 
      credit: 'Սկսած 6,000 ֏/ամիս' 
    },
    { 
      title: 'Google Pixel 10', 
      image: 'https://www.telecomarmenia.am/images/product/13/17823856145217/245x280c-center.png',
      price: '319,900 ֏', 
      credit: 'Սկսած 5,500 ֏/ամիս' 
    },
    { 
      title: 'OnePlus 13', 
      image: 'https://www.telecomarmenia.am/images/product/12/17738409938768/245x280c-center.jpeg',
      price: '279,900 ֏', 
      credit: 'Սկսած 4,800 ֏/ամիս' 
    },
    { 
      title: 'iPad Air 11', 
      image: 'https://www.telecomarmenia.am/images/product/12/17745233346226/245x280c-center.jpeg',
      price: '289,900 ֏', 
      credit: 'Սկսած 4,900 ֏/ամիս' 
    },
    { 
      title: 'Huawei MatePad Pro', 
      image: 'https://www.telecomarmenia.am/images/product/13/17823856145217/245x280c-center.png',
      price: '259,900 ֏', 
      credit: 'Սկսած 4,500 ֏/ամիս' 
    },
    { 
      title: 'Sony Xperia 1 VII', 
      image: 'https://www.telecomarmenia.am/images/product/12/17738409938768/245x280c-center.jpeg',
      price: '419,900 ֏', 
      credit: 'Սկսած 8,000 ֏/ամիս' 
    },
    { 
      title: 'Asus ROG Phone 9', 
      image: 'https://www.telecomarmenia.am/images/product/12/17745233346226/245x280c-center.jpeg',
      price: '449,900 ֏', 
      credit: 'Սկսած 8,500 ֏/ամիս' 
    },
    { 
      title: 'Lenovo Tab P12', 
      image: 'https://www.telecomarmenia.am/images/product/13/17823856145217/245x280c-center.png',
      price: '199,900 ֏', 
      credit: 'Սկսած 3,500 ֏/ամիս' 
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
  const [productIndex, setProductIndex] = useState(0);

  useEffect(() => {
    const bannerTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 4000);

    const productTimer = setInterval(() => {
      setProductIndex((prev) => (prev + 1) % items.length);
    }, 4000);

    return () => {
      clearInterval(bannerTimer);
      clearInterval(productTimer);
    };
  }, [banners.length, items.length]);

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

        {/* Чистые точки переключения баннера */}
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
        
        {/* Слайдер с каруселью карточек (плавное смещение ленты влево) */}
        <div className="relative overflow-hidden py-2">
          <div 
            className="flex gap-6 transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${productIndex * (300 + 24)}px)` }}
          >
            {items.concat(items.slice(0, 3)).map((item, idx) => (
              <div 
                key={idx} 
                className="bg-gray-50 border border-gray-200 rounded-none p-6 shadow-sm hover:shadow-md transition flex flex-col justify-between flex-shrink-0 w-[300px] h-[600px]"
              >
                <div>
                  {item.title && (
                    <h3 className="font-bold text-slate-800 mb-2 h-12 overflow-hidden text-ellipsis">{item.title}</h3>
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
                  <button 
                    onClick={() => addToCart(item)}
                    className="w-full bg-[#FF4B4B] text-white text-xs py-3 rounded-lg font-bold flex items-center justify-center gap-1.5 hover:bg-[#e03a3a] transition"
                  >                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    Ավելացնել զամբյուղ
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Индикаторы (точки) под слайдером карточек */}
          <div className="flex justify-center space-x-2 mt-8 z-20">
            {items.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setProductIndex(idx)}
                className={`h-2.5 rounded-full transition-all ${
                  productIndex % items.length === idx ? 'bg-[#004B6E] w-8' : 'bg-gray-300 w-2.5'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}