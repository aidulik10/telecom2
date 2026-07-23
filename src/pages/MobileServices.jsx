import React from 'react';

export default function MobileServices() {
  const plans = [
    { name: 'Սկսեք Plus-ը', price: '1500', data: '10 GB', mins: '200 րոպե' },
    { name: 'Անսահմանափակ հարմարավետություն', price: '3500', data: 'Безлимит', mins: '500 րոպե', popular: true },
    { name: 'Պրեմիում Ուլտրա', price: '5500', data: 'Безлимит', mins: 'Անսահմանափակ' },
  ];

  return (
    <div className="space-y-12 pb-12">
      
      {/* ВЕРХНЯЯ ЧАСТЬ: Фото во всё пространство баннера */}
      <section className="w-full h-[350px] md:h-[450px] overflow-hidden bg-[#EBE7E0]">
        <img 
          src="https://www.telecomarmenia.am/images/menu/1/15774519405911.png" 
          alt="Mobile Services" 
          className="w-full h-full object-cover object-center"
        />
      </section>

      {/* РАСШИРЕННЫЙ ОСТРОВОК С ТРЕМЯ ИКОНКАМИ */}
      <div className="flex justify-center -mt-20 relative z-10 px-4">
        <div className="bg-white border border-gray-100 shadow-xl rounded-3xl px-8 py-5 flex items-center justify-center gap-8 md:gap-16 hover:shadow-2xl transition duration-300">
          
          {/* 1. Բջջային կապ */}
          <div className="flex flex-col items-center space-y-2 cursor-pointer group">
            <div className="w-12 h-12 bg-[#004B6E]/10 text-[#004B6E] rounded-full flex items-center justify-center group-hover:bg-[#004B6E] group-hover:text-white transition">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth={2}
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" 
                />
              </svg>
            </div>
            <span className="text-sm font-bold text-[#004B6E]">
              բջջային կապ
            </span>
          </div>

          <div className="h-10 w-[1px] bg-gray-200"></div>

          {/* 2. Սմարթ բիզնես */}
          <div className="flex flex-col items-center space-y-2 cursor-pointer group">
            <div className="w-12 h-12 bg-[#004B6E]/10 text-[#004B6E] rounded-full flex items-center justify-center group-hover:bg-[#004B6E] group-hover:text-white transition">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth={2}
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                />
              </svg>
            </div>
            <span className="text-sm font-bold text-[#004B6E]">
              սմարթ բիզնես
            </span>
          </div>

          <div className="h-10 w-[1px] bg-gray-200"></div>

          {/* 3. Ֆիքսված հեռախոսակապ */}
          <div className="flex flex-col items-center space-y-2 cursor-pointer group">
            <div className="w-12 h-12 bg-[#004B6E]/10 text-[#004B6E] rounded-full flex items-center justify-center group-hover:bg-[#004B6E] group-hover:text-white transition">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth={2}
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
                />
              </svg>
            </div>
            <span className="text-sm font-bold text-[#004B6E]">
              ֆիքսված հեռախոսակապ
            </span>
          </div>

        </div>
      </div>

      {/* НИЖНЯЯ ЧАСТЬ: Карточки с тарифными планами */}
      <section className="max-w-7xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold text-[#004B6E]">Բջջային կապի սակագնային պլաններ</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`border rounded-2xl p-6 bg-white shadow-sm flex flex-col justify-between relative transition-all duration-300 hover:shadow-md ${
                plan.popular ? 'border-2 border-[#FF4B4B]' : 'border-gray-200'
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 right-6 bg-[#FF4B4B] text-white text-xs px-3 py-1 rounded-full font-bold shadow-sm">
                  Հիթ
                </span>
              )}
              
              <div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">{plan.name}</h3>
                <div className="space-y-2 mb-6 text-gray-600">
                  <p>🌐 ինտերնետ: <strong>{plan.data}</strong></p>
                  <p>📞 Զանգեր: <strong>{plan.mins}</strong></p>
                  <p>💬 SMS: <strong>100 հատ</strong></p>
                </div>
              </div>

              <div>
                <div className="text-2xl font-black text-[#004B6E] mb-4">
                  {plan.price} ֏ <span className="text-xs font-normal text-gray-500">/ ամիս</span>
                </div>
                <button className="w-full bg-[#004B6E] text-white py-2.5 rounded-xl hover:bg-[#085a82] font-semibold transition">
                  Միանալ
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}