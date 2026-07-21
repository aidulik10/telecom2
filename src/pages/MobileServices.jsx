import React from 'react';

export default function MobileServices() {
  const plans = [
    { name: 'Սկսեք Plus-ը', price: '1500', data: '10 GB', mins: '200 րոպե' },
    { name: 'Անսահմանափակ հարմարավետություն', price: '3500', data: 'Безлимит', mins: '500 րոպե', popular: true },
    { name: 'Պրեմիում Ուլտրա', price: '5500', data: 'Безлимит', mins: 'Անսահմանափակ' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-8">
      <h1 className="text-3xl font-bold text-[#004B6E]">Բջջային կապի սակագնային պլաններ</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {plans.map((plan, idx) => (
          <div key={idx} className={`border rounded-2xl p-6 bg-white shadow-sm flex flex-col justify-between relative ${plan.popular ? 'border-2 border-[#FF4B4B]' : ''}`}>
            {plan.popular && <span className="absolute -top-3 right-6 bg-[#FF4B4B] text-white text-xs px-3 py-1 rounded-full font-bold">Հիթ</span>}
            <div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">{plan.name}</h3>
              <div className="space-y-2 mb-6 text-gray-600">
                <p>🌐 ինտերնետ: <strong>{plan.data}</strong></p>
                <p>📞 Զանգեր: <strong>{plan.mins}</strong></p>
                <p>💬 SMS: <strong>100 հատ</strong></p>
              </div>
            </div>
            <div>
              <div className="text-2xl font-black text-[#004B6E] mb-4">{plan.price} ֏ <span className="text-xs font-normal text-gray-500">/ ամիս</span></div>
              <button className="w-full bg-[#004B6E] text-white py-2 rounded-xl hover:bg-opacity-90 font-medium">Միանալ</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}