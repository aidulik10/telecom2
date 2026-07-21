import React from 'react';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-6">
      <h1 className="text-3xl font-bold text-[#004B6E]">О нашей компании</h1>
      <p className="text-gray-700 leading-relaxed">
        Мы являемся одним из крупнейших телекоммуникационных провайдеров, объединяющим передовые технологии мобильной связи и оптоволоконного интернета. Наша цель — предоставлять качественный, быстрый и доступный доступ в сеть для каждого жителя и бизнеса.
      </p>
      <div className="grid grid-cols-3 gap-4 pt-6 text-center">
        <div className="bg-slate-50 p-4 rounded-xl border">
          <div className="text-2xl font-black text-[#FF4B4B]">99%</div>
          <div className="text-xs text-gray-500">Покрытие сети</div>
        </div>
        <div className="bg-slate-50 p-4 rounded-xl border">
          <div className="text-2xl font-black text-[#004B6E]">1М+</div>
          <div className="text-xs text-gray-500">Абонентов</div>
        </div>
        <div className="bg-slate-50 p-4 rounded-xl border">
          <div className="text-2xl font-black text-emerald-600">24/7</div>
          <div className="text-xs text-gray-500">Поддержка</div>
        </div>
      </div>
    </div>
  );
}