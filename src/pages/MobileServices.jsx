import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function MobileServices() {
const [activePackage, setActivePackage] = useState('prepaid');
  const { cartItems, addToCart, removeFromCart } = useCart();

  // Иконки приложений (SVG)
  const socialIcons = {
    facebook: (
      <svg className="w-4 h-4 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
    instagram: (
      <svg className="w-4 h-4 text-[#E4405F]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
    telegram: (
      <svg className="w-4 h-4 text-[#26A5E4]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
      </svg>
    ),
    whatsapp: (
      <svg className="w-4 h-4 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/>
      </svg>
    ),
    viber: (
      <svg className="w-4 h-4 text-[#7360F2]" fill="currentColor" viewBox="0 0 24 24">
        <path d="M11.97 0C5.358 0 0 4.887 0 10.916c0 3.33 1.61 6.31 4.14 8.258v3.633l3.65-2.007c1.3.36 2.68.556 4.18.556 6.612 0 11.97-4.887 11.97-10.916C23.94 4.887 18.582 0 11.97 0zm1.09 15.65c-.32.11-.69.04-.94-.18l-1.98-1.74-2.93 1.74c-.31.18-.7.13-.95-.12-.25-.26-.28-.65-.07-.95l2.12-3.11-2.12-3.11c-.21-.3-.18-.69.07-.95.25-.25.64-.3.95-.12l2.93 1.74 1.98-1.74c.25-.22.62-.29.94-.18.32.11.53.4.53.74v8.52c0 .34-.21.63-.53.74z"/>
      </svg>
    ),
    snapchat: (
      <svg className="w-4 h-4 text-[#FFFC00] bg-black rounded-full p-0.5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.002 1.2c-4.412 0-7.393 3.125-7.393 6.37 0 1.226.42 2.215.897 3.013.19.32.327.585.305.815-.038.384-.52.68-1.028.91-.497.227-1.168.498-1.222.956-.046.388.245.748.718.905.772.257 1.57.172 2.146.066.27-.05.474-.088.618.068.222.242.348.878.536 1.826.173.876.38 1.916 1.458 2.288.948.328 1.986.136 2.965-.046.29-.054.58-.108.87-.108.29 0 .58.054.87.108.979.182 2.017.374 2.965.046 1.078-.372 1.285-1.412 1.458-2.288.188-.948.314-1.584.536-1.826.144-.156.348-.118.618-.068.576.106 1.374.19 2.146-.066.473-.157.764-.517.718-.905-.054-.458-.725-.729-1.222-.956-.508-.23-.99-.526-1.028-.91-.022-.23.115-.495.305-.815.477-.798.897-1.787.897-3.013 0-3.245-2.981-6.37-7.393-6.37z"/>
      </svg>
    )
  };

  // Список приложений
  const socialAppsList = ['facebook', 'instagram', 'telegram', 'whatsapp', 'viber', 'snapchat'];

  // Данные для карточек PRO / Կանխավճարային (1 и 4 с иконками)
  const prepaidCards = [
    {
      id: 1,
      title: 'PRO 1500',
      price: '1,500 ֏ / ամիս',
      internet: '10 ԳԲ',
      calls: '1500 րոպե',
      sms: '150 SMS',
      apps: socialAppsList,
    },
    {
      id: 2,
      title: 'PRO 2500',
      price: '2,500 ֏ / ամիս',
      internet: '20 ԳԲ',
      calls: '2500 րոպե',
      sms: '250 SMS',
    },
    {
      id: 3,
      title: 'PRO 3500',
      price: '3,500 ֏ / ամիս',
      internet: '40 ԳԲ',
      calls: '3500 րոպե',
      sms: '350 SMS',
    },
    {
      id: 4,
      title: 'PRO 5500',
      price: '5,500 ֏ / ամիս',
      internet: 'Անսահմանափակ',
      calls: '5500 րոպե',
      sms: '500 SMS',
      apps: socialAppsList,
    },
  ];

  // Данные для карточек Be free / Հետվճարային (только 1 с иконками)
  const postpaidCards = [
    {
      id: 1,
      title: 'Be free 1900',
      price: '1,900 ֏ / ամիս',
      internet: '15 ԳԲ',
      calls: '2000 րոպե',
      sms: '200 SMS',
      apps: socialAppsList, // <--- Добавили иконки для первой карточки
    },
    {
      id: 2,
      title: 'Be free 2900',
      price: '2,900 ֏ / ամիս',
      internet: '30 ԳԲ',
      calls: '3000 րոպե',
      sms: '300 SMS',
    },
    {
      id: 3,
      title: 'Be free 4900',
      price: '4,900 ֏ / ամիս',
      internet: 'Անսահմանափակ',
      calls: '4500 րոպե',
      sms: '450 SMS',
    },
  ];

  return (
    <div className="space-y-8 pb-12">
      
      {/* ВЕРХНЯЯ ЧАСТЬ: Баннер */}
      <section className="w-full h-[350px] md:h-[450px] overflow-hidden bg-[#EBE7E0]">
        <img 
          src="https://www.telecomarmenia.am/images/menu/1/15774519405911.png" 
          alt="Mobile Services" 
          className="w-full h-full object-cover object-center"
        />
      </section>

      {/* ВЕРХНИЙ ОСТРОВОК С ИКОНКАМИ */}
      <div className="flex justify-center -mt-20 relative z-10 px-4">
        <div className="bg-white border border-gray-100 shadow-xl rounded-none px-8 py-5 flex items-center justify-center gap-8 md:gap-16 hover:shadow-2xl transition duration-300">
          
          <div className="flex flex-col items-center space-y-2 cursor-pointer group">
            <div className="w-12 h-12 bg-[#004B6E]/10 text-[#004B6E] rounded-full flex items-center justify-center group-hover:bg-[#004B6E] group-hover:text-white transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="text-sm font-bold text-[#004B6E]">բջջային կապ</span>
          </div>

          <div className="h-10 w-[1px] bg-gray-200"></div>

          <div className="flex flex-col items-center space-y-2 cursor-pointer group">
            <div className="w-12 h-12 bg-[#004B6E]/10 text-[#004B6E] rounded-full flex items-center justify-center group-hover:bg-[#004B6E] group-hover:text-white transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="text-sm font-bold text-[#004B6E]">սմարթ բիզնես</span>
          </div>

          <div className="h-10 w-[1px] bg-gray-200"></div>

          <div className="flex flex-col items-center space-y-2 cursor-pointer group">
            <div className="w-12 h-12 bg-[#004B6E]/10 text-[#004B6E] rounded-full flex items-center justify-center group-hover:bg-[#004B6E] group-hover:text-white transition">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <span className="text-sm font-bold text-[#004B6E]">ֆիքսված հեռախոսակապ</span>
          </div>

        </div>
      </div>

      {/* ОСНОВНОЙ БЛОК: ОСТРОВОК (20%) + КАРТОЧКИ В (80%) */}
      <div className="max-w-7xl mx-auto px-4 relative mt-12">
        
        <hr className="border-t-2 border-gray-200 absolute w-[calc(100%-2rem)] top-0 left-4 z-0" />

        <div className="flex flex-col lg:flex-row items-start justify-start gap-6 relative z-10 pt-0">
          
          {/* Левая часть (~20% ширины): ОСТРОВОК С ВЫБОРОМ ПАКЕТА */}
          <div className="w-full lg:w-1/4 bg-white border-t-0 border-x border-b border-gray-200 shadow-md rounded-b-2xl p-6 flex flex-col items-center shrink-0">
            <span className="text-sm font-bold text-[#004B6E] mb-4 uppercase tracking-wider text-center">
              Ընտրիր քո փաթեթը
            </span>
            
            <div className="flex flex-col w-full space-y-3">
              <button
                onClick={() => setActivePackage('prepaid')}
                className={`w-full py-3 px-4 rounded-xl font-bold text-base transition-all ${
                  activePackage === 'prepaid'
                    ? 'bg-[#004B6E] text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                PRO
              </button>
              
              <button
                onClick={() => setActivePackage('postpaid')}
                className={`w-full py-3 px-4 rounded-xl font-bold text-base transition-all ${
                  activePackage === 'postpaid'
                    ? 'bg-[#004B6E] text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                Be free
              </button>
            </div>
          </div>

          {/* Правая часть (~80% ширины): ПЕРЕКЛЮЧАТЕЛЬ + КАРТОЧКИ */}
          <div className="w-full lg:w-3/4 flex flex-col pt-4 space-y-6">
            
            {/* ПЕРЕКЛЮЧАТЕЛЬ (Կանխավճարային / Հետվճարային) */}
            <div className="border-b-2 border-gray-300 pb-2 flex justify-start gap-8">
              <button
                onClick={() => setActivePackage('prepaid')}
                className={`font-bold text-lg pb-3 transition-colors ${
                  activePackage === 'prepaid'
                    ? 'text-[#004B6E] border-b-4 border-[#004B6E]'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                Կանխավճարային
              </button>
              
              <button
                onClick={() => setActivePackage('postpaid')}
                className={`font-bold text-lg pb-3 transition-colors ${
                  activePackage === 'postpaid'
                    ? 'text-[#004B6E] border-b-4 border-[#004B6E]'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                Հետվճարային
              </button>
            </div>

            {/* СПИСОК КАРТОЧЕК */}
            <div className="flex flex-col space-y-4">
              {(activePackage === 'prepaid' ? prepaidCards : postpaidCards).map((card) => {
                const isInCart = cartItems.some((i) => i.title === card.title);
                return (
                <div 
                  key={card.id}
                  className="relative w-full bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
                >
                  <button
                    onClick={() =>
                      isInCart ? removeFromCart(card.title) : addToCart(card)
                    }
                    className="absolute top-4 right-4 z-10 p-1.5 rounded-full bg-white/80 hover:bg-white shadow-sm transition-colors"
                  >
                    <Heart
                      size={20}
                      className={isInCart ? 'fill-red-500 text-red-500' : 'text-gray-400'}
                    />
                  </button>
                  {/* Основные 5 колонок */}
                  <div className="grid grid-cols-1 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-gray-100 items-center p-5 gap-3 md:gap-0">
                    
                    {/* 1 ЧАСТЬ: Название и Цена */}
                    <div className="flex flex-col items-start justify-center md:px-4">
                      <span className="text-xl font-black text-[#004B6E]">{card.title}</span>
                      <span className="text-sm font-semibold text-gray-500 mt-0.5">{card.price}</span>
                    </div>

                    {/* 2 ЧАСТЬ: Интернет */}
                    <div className="flex flex-col items-start md:items-center justify-center md:px-4 pt-2 md:pt-0">
                      <span className="text-xs text-gray-400 uppercase font-bold tracking-wider">Ինտերնետ</span>
                      <span className="text-base font-bold text-gray-800 mt-0.5">{card.internet}</span>
                    </div>

                    {/* 3 ЧАСТЬ: Звонки */}
                    <div className="flex flex-col items-start md:items-center justify-center md:px-4 pt-2 md:pt-0">
                      <span className="text-xs text-gray-400 uppercase font-bold tracking-wider">Զանգեր</span>
                      <span className="text-base font-bold text-gray-800 mt-0.5">{card.calls}</span>
                    </div>

                    {/* 4 ЧАСТЬ: SMS */}
                    <div className="flex flex-col items-start md:items-center justify-center md:px-4 pt-2 md:pt-0">
                      <span className="text-xs text-gray-400 uppercase font-bold tracking-wider">SMS</span>
                      <span className="text-base font-bold text-gray-800 mt-0.5">{card.sms}</span>
                    </div>

                    {/* 5 ЧАСТЬ: Кнопка */}
                    <div className="flex items-center justify-end md:justify-center md:px-4 pt-2 md:pt-0">
                      <button className="bg-white text-red-600 border border-red-500 hover:bg-red-50 font-bold text-sm px-5 py-2 rounded-xl transition duration-200 shadow-sm active:scale-95">
                        մանրամասն
                      </button>
                    </div>

                  </div>

                  {/* НИЖНЯЯ СЕКЦИЯ С ИКОНКАМИ ПРИЛОЖЕНИЙ (если они есть) */}
                  {card.apps && card.apps.length > 0 && (
                    <div className="bg-gray-50/70 border-t border-gray-100 px-6 py-2 flex items-center gap-3">
                      <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider">
                        Անսահմանափակ հավելվածներ՝
                      </span>
                      <div className="flex items-center gap-2.5">
                        {card.apps.map((appName) => (
                          <div 
                            key={appName} 
                            className="p-1 bg-white rounded-md shadow-2xs border border-gray-100 flex items-center justify-center hover:scale-110 transition-transform"
                            title={appName}
                          >
                            {socialIcons[appName]}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}