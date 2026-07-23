import React, { useState } from 'react';

export default function Profile() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isRegisterMode, setIsRegisterMode] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-6">
      
      {/* 1. Заголовок TEAM TELECOM ARMENIA */}
      <div className="flex flex-col items-start select-none">
        <span className="text-3xl font-black uppercase tracking-wider text-[#004B6E] leading-none">
          TEAM
        </span>
        <span className="text-xs uppercase tracking-widest font-semibold text-gray-500 mt-1 leading-none">
          Telecom Armenia
        </span>
      </div>

      {/* Контейнер: Форма слева, Картинка и Ссылки справа */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        
        {/* ЛЕВАЯ СТОРОНА: Форма входа / Email */}
        {!isLoggedIn ? (
          <div className="bg-white border rounded-3xl p-6 md:p-8 shadow-lg w-full max-w-md mx-auto md:mx-0 space-y-6">
            
            {/* Переключатель (Մուտք / Էլ․ հասցե) */}
            <div className="flex border-b border-gray-200 pb-3">
              <button
                onClick={() => setIsRegisterMode(false)}
                className={`flex-1 text-center font-bold pb-2 transition-colors ${
                  !isRegisterMode
                    ? 'text-[#004B6E] border-b-2 border-[#004B6E]'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                Մուտք
              </button>
              <button
                onClick={() => setIsRegisterMode(true)}
                className={`flex-1 text-center font-bold pb-2 transition-colors ${
                  isRegisterMode
                    ? 'text-[#004B6E] border-b-2 border-[#004B6E]'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                Էլ․ հասցե
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {isRegisterMode && (
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">
                    Անուն Ազգանուն
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    placeholder="Արմեն Պետրոսյան"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full border-gray-300 border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#004B6E] transition"
                  />
                </div>
              )}

              {isRegisterMode && (
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">
                    Էլ․ հասցե
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="example@mail.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border-gray-300 border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#004B6E] transition"
                  />
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">
                  Հեռախոսահամար
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="+374 99 000 000"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border-gray-300 border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#004B6E] transition"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">
                  Գաղտնաբառ
                </label>
                <input
                  type="password"
                  name="password"
                  required
                  placeholder="••••••••"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full border-gray-300 border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#004B6E] transition"
                />
              </div>

              {isRegisterMode && (
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">
                    Կրկնել գաղտնաբառը
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    required
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full border-gray-300 border rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#004B6E] transition"
                  />
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-[#004B6E] hover:bg-[#085a82] text-white font-bold py-3 rounded-xl shadow-md transition duration-200 text-sm mt-2"
              >
                {isRegisterMode ? 'Հաստատել Էլ․ հասցեն' : 'Մուտք գործել'}
              </button>
            </form>
          </div>
        ) : (
          /* Личный кабинет (когда вошел) */
          <div className="space-y-6 w-full">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-gray-800">Բաժանորդի անձնական էջ</h2>
              <button
                onClick={() => setIsLoggedIn(false)}
                className="text-xs text-[#FF4B4B] hover:underline font-semibold"
              >
                Ելք
              </button>
            </div>

            <div className="bg-white border rounded-3xl p-6 shadow-lg space-y-4">
              <div className="space-y-2">
                <p className="text-sm text-gray-500">Ձեր հաշվեկշիռը՝</p>
                <p className="text-4xl font-black text-[#004B6E]">4 250 ֏</p>
                <button className="bg-emerald-600 text-white text-xs px-4 py-2.5 rounded-xl font-bold hover:bg-emerald-700 transition">
                  Լիցքավորել առցանց
                </button>
              </div>

              <div className="space-y-2 border-t pt-4 border-gray-200">
                <p className="text-sm text-gray-500 font-semibold">Ընթացիկ սակագին՝</p>
                <p className="text-lg font-bold text-slate-800">Be Free 3500 (Ակտիվ է)</p>
                <p className="text-xs text-gray-500">Հաջորդ գանձումը՝ 01.08.2026</p>
              </div>
            </div>
          </div>
        )}

        {/* ПРАВАЯ СТОРОНА: Ссылки над фото и картинка */}
        <div className="w-full flex flex-col items-center justify-center p-4 space-y-6">
          
          {/* Кнопки-ссылки для скачивания приложения над картинкой */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://apps.apple.com/us/app/my-beeline-armenia/id886204055"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#004B6E] hover:bg-[#085a82] text-white font-semibold text-xs px-5 py-2.5 rounded-xl shadow-sm transition-transform hover:scale-105 flex items-center space-x-2"
            >
              <span>App Store</span>
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=am.beeline.odp&hl=hy-------android"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#004B6E] hover:bg-[#085a82] text-white font-semibold text-xs px-5 py-2.5 rounded-xl shadow-sm transition-transform hover:scale-105 flex items-center space-x-2"
            >
              <span>Google Play</span>
            </a>
          </div>

          {/* Картинка */}
          <img 
            src="https://www.telecomarmenia.am/myaccount/img/mobile-devices.png?v=3" 
            alt="Mobile Devices" 
            className="max-h-[460px] w-auto object-contain"
          />
        </div>

      </div>
    </div>
  );
}