import React from 'react';
import { Tv, CreditCard, Gamepad2, ShieldCheck, Phone } from 'lucide-react';

// TODO: заменить placeholder-описания на реальные тексты сервисов
const serviceCards = [
  {
    id: 'teamtv',
    icon: Tv,
    title: 'Team TV',
    description: 'TODO: описание сервиса Team TV.',
  },
  {
    id: 'payment',
    icon: CreditCard,
    title: 'Վճարում և համալրում',
    description: 'TODO: способы оплаты и пополнения счёта.',
  },
  {
    id: 'entertainment',
    icon: Gamepad2,
    title: 'Զվարճանք',
    description: 'TODO: развлекательные сервисы и подписки.',
  },
  {
    id: 'security',
    icon: ShieldCheck,
    title: 'Զանգեր և անվտանգություն',
    description: 'TODO: услуги безопасности и защиты звонков.',
  },
  {
    id: 'fixedphone',
    icon: Phone,
    title: 'Ֆիքսված հեռախոսակապ',
    description: 'TODO: описание фиксированной телефонной связи.',
  },
];

export default function Services() {
  return (
    <div className="space-y-8 pb-12">
      <section className="w-full h-[350px] md:h-[450px] overflow-hidden bg-[#EBE7E0]">
        <img
          src="https://www.telecomarmenia.am/images/menu/1/15774519405911.png"
          alt="Services"
          className="w-full h-full object-cover object-center"
        />
      </section>

      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-2xl font-black text-[#004B6E] mb-8">Ծառայություններ</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 flex flex-col items-start"
              >
                <div className="w-12 h-12 bg-[#004B6E]/10 text-[#004B6E] rounded-full flex items-center justify-center mb-4">
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-bold text-[#004B6E] mb-2">{card.title}</h3>
                <p className="text-sm text-gray-500 mb-4">{card.description}</p>
                <button className="mt-auto bg-white text-red-600 border border-red-500 hover:bg-red-50 font-bold text-sm px-5 py-2 rounded-xl transition duration-200 shadow-sm active:scale-95">
                  մանրամասն
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}