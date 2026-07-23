import React, { useState } from 'react';

export default function MobileServices() {
  // Состояние для выбора типа тарифов (կանխավճարային / հետվճարային)
  const [activeTab, setActiveTab] = useState('prepaid'); // 'prepaid' или 'postpaid'

  // Тарифы для предоплатной системы
  const prepaidPlans = [
    { name: 'Սկսեք Plus-ը', price: '1500', data: '10 GB', mins: '200 րոպե' },
    { name: 'Անսահմանափակ հարմարավետություն', price: '3500', data: 'Безлимит', mins: '500 րոպե', popular: true },
    { name: 'Պրեմիում Ուլտրա', price: '5500', data: 'Безлимит', mins: 'Անսահմանափակ' },
  ];

  // Тарифы для постоплатной системы
  const postpaidPlans = [
    { name: 'Postpaid Basic', price: '2000', data: '15 GB', mins: '400 րոպե' },
    { name: 'Postpaid Pro', price: '4500', data: 'Безлимит', mins: '1000 րոպե', popular: true },
    { name: 'Postpaid VIP', price: '7500', data: 'Безлимит', mins: 'Անսահմանափակ' },
  ];

  const currentPlans = activeTab === 'prepaid' ? prepaidPlans : postpaidPlans;

  return (
    <div className="space-y-10 pb-12">
      
      {/* ВЕРХНЯЯ ЧАСТЬ: Фото во всё пространство баннера */}
      <section className="w-full h-[350px] md:h-[450px] overflow-hidden bg-[#EBE7E0]">
        <img 
          src="https://www.telecomarmenia.am/images/menu/1/15774519405911.png" 
          alt="Mobile Services" 
          className="w-full h-full object-cover object-center"
        />
      </section>

      {/* СВОБОДНАЯ ЗОНА (вместо удаленного островка с иконками) */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        {/* Сюда можно добавить любой новый контент */}
      </div>

      {/* РАЗДЕЛИТЕЛЬНАЯ ПОЛОСКА */}
      <div className="max-w-7xl mx-auto px-4">
        <hr className="border-t-2 border-gray-200 my-2" />
      </div>

      {/* ПЕРЕКЛЮЧАТЕЛЬ: կանխավճարային / հետվճարային */}
      <div className="max-w-md mx-auto px-4">
        <div className="flex border-b border-gray-300 pb-2 justify-center">
          <button
            onClick={() => setActiveTab('prepaid')}
            className={`flex-1 text-center font-bold text-lg pb-3 transition-colors ${
              activeTab === 'prepaid'
                ? 'text-[#004B6E] border-b-4 border-[#004B6E]'
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            Կանխավճարային
          </button>
          
          <button
            onClick={() => setActiveTab('postpaid')}
            className={`flex-1 text-center font-bold text-lg pb-3 transition-colors ${
              activeTab === 'postpaid'
                ? 'text-[#004B6E] border-b-4 border-[#004B6E]'
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            Հետվճարային
          </button>
        </div>
      </div>

      {/* НИЖНЯЯ ЧАСТЬ: Карточки с тарифными планами */}
      <section className="max-w-7xl mx-auto px-4 space-y-8 pt-4">
        <h2 className="text-3xl font-bold text-[#004B6E] text-center md:text-left">
          Բջջային կապի սակագնային պլաններ
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentPlans.map((plan, idx) => (
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