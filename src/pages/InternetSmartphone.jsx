import React from 'react';

export default function InternetSmartphone() {
  return (
    <div className="space-y-8 pb-16">
      {/* Секция с фото и плавающим островом поверх */}
      <section className="relative w-full">
        <div className="w-full h-[300px] md:h-[400px] overflow-hidden bg-[#EBE7E0]">
          <img
            src="https://www.telecomarmenia.am/images/menu/1/16881410294975.jpeg"
            alt="Սմարտֆոնի համար"
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Широкий плавающий остров с 5 секциями */}
        <div className="max-w-6xl mx-auto px-4 -mt-16 relative z-10">
          <div className="bg-white shadow-xl border border-gray-200 grid grid-cols-1 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-gray-200">
            
            {/* Часть 1: Смартфон */}
            <div className="p-5 flex flex-col items-center text-center cursor-pointer hover:bg-gray-50 transition-colors">
              <div className="w-10 h-10 mb-3 flex items-center justify-center text-[#004B6E]">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                  <line x1="12" y1="18" x2="12" y2="18.01" strokeLinecap="round" strokeWidth="3"></line>
                </svg>
              </div>
              <span className="text-xs md:text-sm font-bold text-[#004B6E]">
                Սմարտֆոնի համար
              </span>
            </div>

            {/* Часть 2: Телевизор (КОСМО) */}
            <div className="p-5 flex flex-col items-center text-center cursor-pointer hover:bg-gray-50 transition-colors">
              <div className="w-10 h-10 mb-3 flex items-center justify-center text-[#004B6E]">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect>
                  <polyline points="17 2 12 7 7 2"></polyline>
                </svg>
              </div>
              <span className="text-xs md:text-sm font-bold text-[#004B6E]">
                Տան համար - ԿՈՍՄՈ
              </span>
            </div>

            {/* Часть 3: Телевизор (КОМБО) */}
            <div className="p-5 flex flex-col items-center text-center cursor-pointer hover:bg-gray-50 transition-colors">
              <div className="w-10 h-10 mb-3 flex items-center justify-center text-[#004B6E]">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect>
                  <polyline points="17 2 12 7 7 2"></polyline>
                </svg>
              </div>
              <span className="text-xs md:text-sm font-bold text-[#004B6E]">
                Տան համար - ԿՈՄԲՈ
              </span>
            </div>

            {/* Часть 4: Ноутбук / планшет */}
            <div className="p-5 flex flex-col items-center text-center cursor-pointer hover:bg-gray-50 transition-colors">
              <div className="w-10 h-10 mb-3 flex items-center justify-center text-[#004B6E]">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="2" y1="21" x2="22" y2="21"></line>
                  <line x1="6" y1="17" x2="6" y2="21"></line>
                  <line x1="18" y1="17" x2="18" y2="21"></line>
                </svg>
              </div>
              <span className="text-xs md:text-sm font-bold text-[#004B6E]">
                Համակարգչի / պլանշետի համար
              </span>
            </div>

            {/* Часть 5: Team 5G */}
            <div className="p-5 flex flex-col items-center text-center cursor-pointer hover:bg-gray-50 transition-colors">
              <div className="w-10 h-10 mb-3 flex items-center justify-center text-[#004B6E]">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path d="M5 12.55a11 11 0 0 1 14.08 0"></path>
                  <path d="M1.42 9a16 16 0 0 1 21.16 0"></path>
                  <path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path>
                  <line x1="12" y1="20" x2="12.01" y2="20" strokeLinecap="round" strokeWidth="3"></line>
                </svg>
              </div>
              <span className="text-xs md:text-sm font-bold text-[#004B6E]">
                Team 5G
              </span>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}