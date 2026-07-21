import React from 'react';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12 space-y-6">
      <h1 className="text-3xl font-bold text-[#004B6E]">Ընկերության մասին</h1>
      <p className="text-gray-700 leading-relaxed">
        Մենք հեռահաղորդակցության խոշորագույն օպերատորներից ենք՝ համատեղելով բջջային կապի և օպտիկամանրաթելային ինտերնետի առաջադեմ տեխնոլոգիաները։ Մեր նպատակն է յուրաքանչյուր բնակչի և բիզնեսի ապահովել բարձրորակ, արագ և մատչելի ինտերնետ-կապով։
      </p>
      <div className="grid grid-cols-3 gap-4 pt-6 text-center">
        <div className="bg-slate-50 p-4 rounded-xl border">
          <div className="text-2xl font-black text-[#FF4B4B]">99%</div>
          <div className="text-xs text-gray-500">Ցանցի ծածկույթ</div>
        </div>
        <div className="bg-slate-50 p-4 rounded-xl border">
          <div className="text-2xl font-black text-[#004B6E]">1М+</div>
          <div className="text-xs text-gray-500">Բաժանորդներ</div>
        </div>
        <div className="bg-slate-50 p-4 rounded-xl border">
          <div className="text-2xl font-black text-emerald-600">24/7</div>
          <div className="text-xs text-gray-500">Աջակցություն</div>
        </div>
      </div>
    </div>
  );
}