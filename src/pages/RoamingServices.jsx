import React from 'react';

export default function RoamingServices() {
  // Данные для таблицы
  const roamingRates = [
    { service: 'Ինտերնետ', rate: '9 դր/ՄԲ*' },
    { service: 'Մուտքային զանգեր և ելքային զանգեր դեպի Հայաստան', rate: '150 դր/ր' },
    { service: 'Տեղական և միջազգային զանգեր', rate: '250 դր/ր' },
    { service: 'SMS', rate: '25 դր' },
  ];

  return (
    <div className="space-y-0 pb-12 bg-white">
      {/* 1. Верхний баннер (нормального размера) */}
      <section className="w-full bg-[#EBE7E0] overflow-hidden h-auto md:h-[450px] min-h-[350px]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center h-full">
          {/* Левая часть: текстовая карточка */}
          <div className="p-8 md:p-12 flex flex-col justify-center space-y-4">
            <span className="text-xs md:text-sm font-bold tracking-widest uppercase text-[#004B6E]/75">
              Ռոումինգ
            </span>
            <h1 className="text-3xl md:text-5xl font-black text-[#004B6E] leading-tight">
              Բացահայտենք աշխարհը
            </h1>
            <p className="text-lg md:text-xl font-medium text-gray-700">
              ռոումինգ՞ որ գալիս է քեզ հետ
            </p>
          </div>

          {/* Правая часть: картинка */}
          <div className="w-full h-[300px] md:h-full overflow-hidden">
            <img
              src="https://www.telecomarmenia.am/images/sliders_block_slides/1/17857625505622.png"
              alt="Roaming"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      {/* 2. Центральная темная часть */}
      <section className="w-full bg-[rgb(2,39,58)] py-20 px-4 text-center">
        <div className="max-w-5xl mx-auto space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Ճանապարհորդիր առանց սահմանափակումների
          </h2>
          <p className="text-white text-base md:text-lg opacity-90">
            Միացրե՛ք ռոումինգ ծառայությունները և կապի մեջ մնացեք աշխարհի ցանկացած կետում։
          </p>
        </div>
      </section>

      {/* 3. Таблица, добавленная СНИЗУ темной части */}
      <section className="w-full bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-black text-[#004B6E] mb-10 text-center">
            Հասանելի ուղղությունների և սակագների ամբողջական ցանկ
          </h2>
          
          <div className="overflow-x-auto shadow-lg sm:rounded-2xl border border-gray-100">
            <table className="w-full text-sm text-left text-gray-700">
              <thead className="text-xs text-gray-500 uppercase bg-gray-50/50">
                <tr>
                  <th scope="col" className="px-8 py-5 font-bold tracking-wider">
                    Ծառայություն
                  </th>
                  <th scope="col" className="px-8 py-5 font-bold tracking-wider text-right">
                    Սակագին
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {roamingRates.map((item, index) => (
                  <tr key={index} className="bg-white hover:bg-gray-50/50 transition-colors">
                    <td className="px-8 py-5 font-medium text-gray-900 whitespace-normal">
                      {item.service}
                    </td>
                    <td className="px-8 py-5 font-bold text-[#004B6E] text-right whitespace-nowrap text-base">
                      {item.rate}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-5 italic pl-3">
            *Գները ներառում են ԱԱՀ: Ինտերնետի արժեքը նշված է 1 ՄԲ-ի համար։
          </p>
        </div>
      </section>
    </div>
  );
}