import React from 'react';

export default function Devices() {
  const items = [
    { title: 'Флагманский Смартфон X', price: '450 000 ֏', credit: 'от 12 500 ֏/мес' },
    { title: 'Смартфон Модель Y', price: '210 000 ֏', credit: 'от 5 800 ֏/мес' },
    { title: 'Планшет Pro 11', price: '320 000 ֏', credit: 'от 8 900 ֏/мес' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-[#004B6E] mb-8">Интернет-магазин гаджетов</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, idx) => (
          <div key={idx} className="bg-white border rounded-2xl p-4 shadow-sm hover:shadow-md transition flex flex-col justify-between">
            <div className="w-full h-48 bg-gray-200 rounded-xl mb-4 flex items-center justify-center text-gray-400">[ Изображение товара ]</div>
            <div>
              <h3 className="font-bold text-slate-800 mb-1">{item.title}</h3>
              <p className="text-xs text-emerald-600 font-semibold mb-4">Рассрочка 0% - 0% - 0%</p>
            </div>
            <div className="border-t pt-3 flex justify-between items-center">
              <div>
                <p className="text-lg font-black text-slate-900">{item.price}</p>
                <p className="text-xs text-gray-500">{item.credit}</p>
              </div>
              <button className="bg-[#FF4B4B] text-white text-xs px-4 py-2 rounded-lg font-bold">Купить</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}