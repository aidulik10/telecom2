import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function InternetServices() {
  const { cartItems, addToCart, removeFromCart } = useCart();

  // TODO: заменить плейсхолдеры на реальные тарифы КОСМО / чисто интернет пакетов
  const categories = [
    {
      id: 'kosmo',
      label: 'ԿՈՍՄՈ. Ինտերնետ տան համար',
      plans: [
        {
          id: 'kosmo-1',
          name: 'ԿՈՍՄՈ 1 — TODO',
          price: 0,
          discountPrice: null,
          discountPeriod: null,
          specs: [
            { label: 'Ֆիքսված ինտերնետ (մինչև)', value: 'TODO Մբիթ/վրկ' },
            { label: 'TeamTV', value: 'TODO ալիք' },
            { label: 'Միանալ', value: 'Wi-Fi սարք' },
          ],
        },
        {
          id: 'kosmo-2',
          name: 'ԿՈՍՄՈ 2 — TODO',
          price: 0,
          discountPrice: null,
          discountPeriod: null,
          specs: [],
        },
      ],
    },
    {
      id: 'pc-tablet',
      label: 'Համակարգչի/պլանշետի համար',
      plans: [
        {
          id: 'pc-1',
          name: 'Ինտերնետ USB/Router — TODO',
          price: 0,
          discountPrice: null,
          discountPeriod: null,
          specs: [],
        },
      ],
    },
  ];

  const [activeCategory, setActiveCategory] = useState(categories[0].id);
  const currentCategory = categories.find((c) => c.id === activeCategory);

  const [activePlanId, setActivePlanId] = useState(currentCategory.plans[0].id);

  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    const cat = categories.find((c) => c.id === categoryId);
    setActivePlanId(cat.plans[0].id);
  };

  const activePlan = currentCategory.plans.find((p) => p.id === activePlanId) || currentCategory.plans[0];
  const isInCart = cartItems.some((i) => i.title === activePlan.name);

  return (
    <div className="space-y-8 pb-12">
      <section className="w-full h-[350px] md:h-[450px] overflow-hidden bg-[#EBE7E0]">
        <img
          src="https://www.telecomarmenia.am/images/menu/1/15774519405911.png"
          alt="Internet Services"
          className="w-full h-full object-cover object-center"
        />
      </section>

      <div className="max-w-7xl mx-auto px-4 relative mt-4">
        <div className="flex flex-col lg:flex-row items-start justify-start gap-6 relative z-10">

          <div className="w-full lg:w-1/4 bg-white border border-gray-200 shadow-md rounded-2xl p-6 flex flex-col items-center shrink-0">
            <span className="text-sm font-bold text-[#004B6E] mb-4 uppercase tracking-wider text-center">
              Ընտրիր քո փաթեթը
            </span>
            <div className="flex flex-col w-full space-y-3">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryChange(cat.id)}
                  className={`w-full py-3 px-4 rounded-xl font-bold text-sm text-left transition-all ${
                    activeCategory === cat.id
                      ? 'bg-[#004B6E] text-white shadow-md'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-3/4 flex flex-col pt-0 space-y-6">

            <div className="border-b-2 border-gray-300 pb-2 flex flex-wrap justify-start gap-6">
              {currentCategory.plans.map((plan) => (
                <button
                  key={plan.id}
                  onClick={() => setActivePlanId(plan.id)}
                  className={`font-bold text-base md:text-lg pb-3 transition-colors ${
                    activePlanId === plan.id
                      ? 'text-[#004B6E] border-b-4 border-[#004B6E]'
                      : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  {plan.name}
                </button>
              ))}
            </div>

            <div className="relative w-full bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">

              <button
                onClick={() => (isInCart ? removeFromCart(activePlan.name) : addToCart({ title: activePlan.name, price: activePlan.price }))}
                className="absolute top-4 right-4 z-10 p-1.5 rounded-full bg-white/80 hover:bg-white shadow-sm transition-colors"
              >
                <Heart size={20} className={isInCart ? 'fill-red-500 text-red-500' : 'text-gray-400'} />
              </button>

              <div className="p-6 border-b border-gray-100">
                <h2 className="text-2xl font-black text-[#004B6E]">{activePlan.name}</h2>
                <div className="mt-2 flex items-baseline gap-3 flex-wrap">
                  <span className={`text-lg font-semibold ${activePlan.discountPrice ? 'line-through text-gray-400' : 'text-gray-700'}`}>
                    Ամսական վճարը {activePlan.price.toLocaleString('ru-RU')} դրամ է։
                  </span>
                  {activePlan.discountPrice && (
                    <span className="text-lg font-bold text-red-600">
                      Զեղչված արժեք՝ {activePlan.discountPrice.toLocaleString('ru-RU')} դրամ։
                    </span>
                  )}
                </div>
              </div>

              <div className="p-6">
                {activePlan.specs.length > 0 ? (
                  <ul className="space-y-3">
                    {activePlan.specs.map((row, idx) => (
                      <li key={idx} className="flex justify-between items-start gap-4 text-sm">
                        <span className="text-gray-500">{row.label}</span>
                        <span className="font-bold text-gray-800 text-right whitespace-nowrap">{row.value}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm text-gray-400 italic">Տվյալները դեռ լրացված չեն։</p>
                )}
              </div>

              <div className="px-6 pb-6 flex justify-end">
                <button className="bg-white text-red-600 border border-red-500 hover:bg-red-50 font-bold text-sm px-6 py-2.5 rounded-xl transition duration-200 shadow-sm active:scale-95">
                  Միանալ
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}