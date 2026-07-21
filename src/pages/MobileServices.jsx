import React from 'react';

export default function MobileServices() {
  const plans = [
    { name: 'Старт Плюс', price: '1500', data: '10 ГБ', mins: '200 мин' },
    { name: 'Безлимит Комфорт', price: '3500', data: 'Безлимит', mins: '500 мин', popular: true },
    { name: 'Премиум Ультра', price: '5500', data: 'Безлимит', mins: 'Безлимит' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-8">
      <h1 className="text-3xl font-bold text-[#004B6E]">Тарифные планы мобильной связи</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, idx) => (
          <div key={idx} className={`border rounded-2xl p-6 bg-white shadow-sm flex flex-col justify-between relative ${plan.popular ? 'border-2 border-[#FF4B4B]' : ''}`}>
            {plan.popular && <span className="absolute -top-3 right-6 bg-[#FF4B4B] text-white text-xs px-3 py-1 rounded-full font-bold">Хит</span>}
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">{plan.name}</h3>
              <div className="space-y-2 mb-6 text-gray-600">
                <p>🌐 Интернет: <strong>{plan.data}</strong></p>
                <p>📞 Звонки: <strong>{plan.mins}</strong></p>
                <p>💬 SMS: <strong>100 шт</strong></p>
              </div>
            </div>
            <div>
              <div className="text-2xl font-black text-[#004B6E] mb-4">{plan.price} ֏ <span className="text-xs font-normal text-gray-500">/ месяц</span></div>
              <button className="w-full bg-[#004B6E] text-white py-2 rounded-xl hover:bg-opacity-90 font-medium">Подключить</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}