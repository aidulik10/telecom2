import React from 'react';

export default function Support() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-[#004B6E]">Հաճախորդների սպասարկում</h1>
        <p className="text-gray-600">Հարցեր ունե՞ք կամ դժվարությունների հանդիպո՞ւם եք։ Կապ հաստատեք մեզ հետ՝ օգտվելով ձեզ հարմար եղանակից։</p>
        <div className="p-4 bg-white border rounded-xl shadow-sm space-y-2">
          <p className="font-bold text-slate-800">📞 Միասնական համար։</p>
          <p className="text-xl font-bold text-[#FF4B4B]">100 (Բջջային հեռախոսներից անվճար)</p>
        </div>
        <div className="p-4 bg-white border rounded-xl shadow-sm space-y-2">
          <p className="font-bold text-slate-800">✉️ Էլ․ փոստ:</p>
          <p className="text-blue-600 hover:underline cursor-pointer">support@example.com</p>
        </div>
      </div>
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-slate-800">Սպասարկման կենտրոններ</h2>
        <div className="w-full h-64 bg-gray-200 rounded-2xl flex items-center justify-center text-gray-400"></div>
        <ul className="text-sm space-y-2 text-gray-600">
          <li>📍 Գլխամասային գրասենյակ՝ Գլավնայա 1 (09:00 – 21:00)</li>
          <li>📍 Հյուսիսային մասնաճյուղ՝ 24 Prospekt Mira (10:00 – 20:00)</li>
        </ul>
      </div>
    </div>
  );
}