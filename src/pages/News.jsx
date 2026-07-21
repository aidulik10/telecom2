import React from 'react';

export default function News() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-[#004B6E] mb-8">Ընկերության նորություններ</h1>
      <div className="space-y-6">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="bg-white border rounded-2xl p-6 shadow-sm flex flex-col md:flex-row gap-6 hover:shadow-md transition cursor-pointer">
            <div className="w-full md:w-48 h-32 bg-gray-200 rounded-xl shrink-0 flex items-center justify-center text-gray-400"></div>
            <div className="flex flex-col justify-between">
              <div>
                <span className="text-xs text-gray-400 block mb-1">Դեկ 2026</span>
                <h3 className="text-xl font-bold text-slate-800 mb-2">Ցանցային տեխնոլոգիաների համապարփակ արդիականացում և 5G տեխնոլոգիայի ներդրում</h3>
                <p className="text-sm text-gray-600 line-clamp-2">Ուրախ ենք հայտնել մեր գերարագ բազային կայանների ընդլայնման մասին՝ կայուն ծածկույթ ապահովելու նպատակով նույնիսկ ամենահեռավոր շրջաններում...</p>
              </div>
              <span className="text-xs font-bold text-[#FF4B4B] mt-4 inline-block">Կարդալ ավելին →</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}