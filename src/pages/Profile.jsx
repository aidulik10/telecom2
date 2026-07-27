import React, { useState, useEffect } from 'react';
import { Eye, EyeOff } from 'lucide-react';

// Словарь переводов для разных языков
const translations = {
  AM: {
    title: "TEAM",
    subtitle: "Telecom Armenia",
    loginTab: "Մուտք",
    emailTab: "Էլ․ հասցե",
    fullNameLabel: "Անուն Ազգանուն",
    fullNamePlaceholder: "Արմեն Պետրոսյան",
    emailLabel: "Էլ․ հասցե",
    emailPlaceholder: "example@mail.com",
    phoneLabel: "Հեռախոսահամար",
    phonePlaceholder: "+374 99 000 000",
    passwordLabel: "Գաղտնաբառ",
    confirmPasswordLabel: "Կրկնել գաղտնաբառը",
    submitRegister: "Հաստատել Էլ․ հասցեն",
    submitLogin: "Մուտք գործել",
    accountTitle: "Բաժանորդի անձնական էջ",
    logout: "Ելք",
    balanceLabel: "Ձեր հաշվեկշիռը՝",
    topUpBtn: "Լիցքավորել առցանց",
    tariffLabel: "Ընթացիկ սակագին՝",
    tariffActive: "Be Free 3500 (Ակտիվ է)",
    nextCharge: "Հաջորդ գանձումը՝ 01.08.2026",
    errPhoneExists: "Այս հեռախոսահամարով օգտատեր արդեն գրանցված է:",
    errPassMismatch: "Գաղտնաբառերը չեն համապատասխանում:",
    errUserNotFound: "Օգտատերը գտնված չէ կամ գաղտնաբառը սխալ է:",
    userPhoneLabel: "Հեռախոսահամար՝",
  },
  RU: {
    title: "TEAM",
    subtitle: "Telecom Armenia",
    loginTab: "Вход",
    emailTab: "Регистрация",
    fullNameLabel: "Имя Фамилия",
    fullNamePlaceholder: "Армен Петросян",
    emailLabel: "Эл. почта",
    emailPlaceholder: "example@mail.com",
    phoneLabel: "Номер телефона",
    phonePlaceholder: "+374 99 000 000",
    passwordLabel: "Пароль",
    confirmPasswordLabel: "Повторите пароль",
    submitRegister: "Зарегистрироваться",
    submitLogin: "Войти",
    accountTitle: "Личный кабинет абонента",
    logout: "Выйти",
    balanceLabel: "Ваш баланс:",
    topUpBtn: "Пополнить онлайн",
    tariffLabel: "Текущий тариф:",
    tariffActive: "Be Free 3500 (Активен)",
    nextCharge: "Следующее списание: 01.08.2026",
    errPhoneExists: "Пользователь с таким номером телефона уже зарегистрирован!",
    errPassMismatch: "Пароли не совпадают!",
    errUserNotFound: "Пользователь не найден или пароль неверен!",
    userPhoneLabel: "Номер телефона:",
  },
  US: {
    title: "TEAM",
    subtitle: "Telecom Armenia",
    loginTab: "Login",
    emailTab: "Register",
    fullNameLabel: "Full Name",
    fullNamePlaceholder: "Armen Petrosyan",
    emailLabel: "Email address",
    emailPlaceholder: "example@mail.com",
    phoneLabel: "Phone number",
    phonePlaceholder: "+374 99 000 000",
    passwordLabel: "Password",
    confirmPasswordLabel: "Confirm Password",
    submitRegister: "Sign Up",
    submitLogin: "Sign In",
    accountTitle: "Subscriber Account",
    logout: "Logout",
    balanceLabel: "Your Balance:",
    topUpBtn: "Top Up Online",
    tariffLabel: "Current Tariff:",
    tariffActive: "Be Free 3500 (Active)",
    nextCharge: "Next charge: 01.08.2026",
    errPhoneExists: "User with this phone number is already registered!",
    errPassMismatch: "Passwords do not match!",
    errUserNotFound: "User not found or password incorrect!",
    userPhoneLabel: "Phone number:",
  },
};

export default function Profile() {
  const [currentUser, setCurrentUser] = useState(null);
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const [currentLang, setCurrentLang] = useState('AM'); // AM, RU, US

  // Состояния показа паролей
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Состояние ошибки
  const [errorMessage, setErrorMessage] = useState('');

  const t = translations[currentLang];

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  // Загружаем сохраненный сеанс из localStorage при загрузке страницы
  useEffect(() => {
    const savedUser = localStorage.getItem('team_telecom_logged_user');
    if (savedUser) {
      setCurrentUser(JSON.parse(savedUser));
    }
  }, []);

  const handleChange = (e) => {
    setErrorMessage('');
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    // Получаем текущих зарегистрированных пользователей из localStorage
    const existingUsers = JSON.parse(localStorage.getItem('team_telecom_users') || '[]');

    // Очистка номера от лишних пробелов для точного сравнения
    const cleanPhone = formData.phone.trim();

    if (isRegisterMode) {
      // 1. Проверка совпадения паролей
      if (formData.password !== formData.confirmPassword) {
        setErrorMessage(t.errPassMismatch);
        return;
      }

      // 2. ПРОВЕРКА: Существует ли уже пользователь с таким номером
      const isAlreadyRegistered = existingUsers.some(
        (user) => user.phone.trim() === cleanPhone
      );

      if (isAlreadyRegistered) {
        setErrorMessage(t.errPhoneExists);
        return;
      }

      // 3. Сохранение нового пользователя
      const newUser = {
        fullName: formData.fullName || 'Աբոնենտ',
        email: formData.email,
        phone: cleanPhone,
        password: formData.password,
      };

      const updatedUsers = [...existingUsers, newUser];
      localStorage.setItem('team_telecom_users', JSON.stringify(updatedUsers));

      // Входим в аккаунт сразу после успешной регистрации
      localStorage.setItem('team_telecom_logged_user', JSON.stringify(newUser));
      setCurrentUser(newUser);

    } else {
      // РЕЖИМ ВХОДА (LOGIN)
      const foundUser = existingUsers.find(
        (user) => user.phone.trim() === cleanPhone && user.password === formData.password
      );

      if (foundUser) {
        localStorage.setItem('team_telecom_logged_user', JSON.stringify(foundUser));
        setCurrentUser(foundUser);
      } else {
        setErrorMessage(t.errUserNotFound);
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('team_telecom_logged_user');
    setCurrentUser(null);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      password: '',
      confirmPassword: '',
    });
    setErrorMessage('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-6">
      
      {/* 1. Заголовок TEAM TELECOM ARMENIA */}
      <div className="flex flex-col items-start select-none">
        <span className="text-3xl font-black uppercase tracking-wider text-[#004B6E] leading-none">
          {t.title}
        </span>
        <span className="text-xs uppercase tracking-widest font-semibold text-gray-500 mt-1 leading-none">
          {t.subtitle}
        </span>
      </div>

      {/* Контейнер: Форма слева, Картинка и Ссылки справа */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        
        {/* ЛЕВАЯ СТОРОНА: Форма / Личный кабинет */}
        {!currentUser ? (
          <div className="bg-white border border-gray-200 rounded-lg p-6 md:p-8 shadow-md w-full max-w-md mx-auto md:mx-0 space-y-6">
            
            {/* Переключатель (Մուտք / Էլ․ հասցե) */}
            <div className="flex border-b border-gray-200 pb-3">
              <button
                type="button"
                onClick={() => {
                  setIsRegisterMode(false);
                  setErrorMessage('');
                }}
                className={`flex-1 text-center font-bold pb-2 transition-colors ${
                  !isRegisterMode
                    ? 'text-[#FF4B4B] border-b-2 border-[#FF4B4B]'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {t.loginTab}
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsRegisterMode(true);
                  setErrorMessage('');
                }}
                className={`flex-1 text-center font-bold pb-2 transition-colors ${
                  isRegisterMode
                    ? 'text-[#FF4B4B] border-b-2 border-[#FF4B4B]'
                    : 'text-gray-400 hover:text-gray-600'
                }`}
              >
                {t.emailTab}
              </button>
            </div>

            {/* Вывод ошибки */}
            {errorMessage && (
              <div className="bg-red-50 border border-red-200 text-red-600 text-xs p-3 rounded-md font-semibold text-center">
                {errorMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              
              {isRegisterMode && (
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">
                    {t.fullNameLabel}
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    placeholder={t.fullNamePlaceholder}
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full border-gray-300 border rounded-md px-3.5 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF4B4B] transition"
                  />
                </div>
              )}

              {isRegisterMode && (
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">
                    {t.emailLabel}
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder={t.emailPlaceholder}
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border-gray-300 border rounded-md px-3.5 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF4B4B] transition"
                  />
                </div>
              )}

              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">
                  {t.phoneLabel}
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder={t.phonePlaceholder}
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border-gray-300 border rounded-md px-3.5 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF4B4B] transition"
                />
              </div>

              {/* Поле с паролем и иконкой глаза */}
              <div>
                <label className="block text-xs font-semibold text-gray-600 mb-1">
                  {t.passwordLabel}
                </label>
                <div className="relative flex items-center">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    required
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full border-gray-300 border rounded-md pl-3.5 pr-10 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF4B4B] transition"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 text-gray-400 hover:text-gray-600 focus:outline-none"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Поле подтверждения пароля */}
              {isRegisterMode && (
                <div>
                  <label className="block text-xs font-semibold text-gray-600 mb-1">
                    {t.confirmPasswordLabel}
                  </label>
                  <div className="relative flex items-center">
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      required
                      placeholder="••••••••"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="w-full border-gray-300 border rounded-md pl-3.5 pr-10 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF4B4B] transition"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-3 text-gray-400 hover:text-gray-600 focus:outline-none"
                    >
                      {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>
              )}

              {/* КРАСНАЯ КНОПКА ОТПРАВКИ */}
              <button
                type="submit"
                className="w-full bg-[#FF4B4B] hover:bg-[#e03f3f] text-white font-bold py-2.5 rounded-md shadow transition duration-200 text-sm mt-2 active:scale-[0.98]"
              >
                {isRegisterMode ? t.submitRegister : t.submitLogin}
              </button>
            </form>

            {/* Блок переключения языков */}
            <div className="pt-4 border-t border-gray-100 flex items-center justify-center space-x-6">
              <button
                type="button"
                onClick={() => setCurrentLang('AM')}
                className={`flex items-center space-x-1.5 p-1 rounded transition ${
                  currentLang === 'AM' ? 'ring-2 ring-[#FF4B4B] bg-gray-50' : 'opacity-70 hover:opacity-100'
                }`}
                title="Հայերեն"
              >
                <img
                  src="https://flagcdn.com/w40/am.png"
                  alt="Armenia Flag"
                  className="w-6 h-4 object-cover rounded-[2px]"
                />
                <span className="text-xs font-bold text-gray-700">AM</span>
              </button>

              <button
                type="button"
                onClick={() => setCurrentLang('RU')}
                className={`flex items-center space-x-1.5 p-1 rounded transition ${
                  currentLang === 'RU' ? 'ring-2 ring-[#FF4B4B] bg-gray-50' : 'opacity-70 hover:opacity-100'
                }`}
                title="Русский"
              >
                <img
                  src="https://flagcdn.com/w40/ru.png"
                  alt="Russia Flag"
                  className="w-6 h-4 object-cover rounded-[2px]"
                />
                <span className="text-xs font-bold text-gray-700">RU</span>
              </button>

              <button
                type="button"
                onClick={() => setCurrentLang('US')}
                className={`flex items-center space-x-1.5 p-1 rounded transition ${
                  currentLang === 'US' ? 'ring-2 ring-[#FF4B4B] bg-gray-50' : 'opacity-70 hover:opacity-100'
                }`}
                title="English"
              >
                <img
                  src="https://flagcdn.com/w40/us.png"
                  alt="USA Flag"
                  className="w-6 h-4 object-cover rounded-[2px]"
                />
                <span className="text-xs font-bold text-gray-700">EN</span>
              </button>
            </div>

          </div>
        ) : (
          /* ЛИЧНЫЙ КАБИНЕТ (КОГДА ПОЛЬЗОВАТЕЛЬ АВТОРИЗОВАН) */
          <div className="space-y-6 w-full">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-xl font-bold text-gray-800">{t.accountTitle}</h2>
                <p className="text-sm font-semibold text-[#004B6E] mt-1">
                  {currentUser.fullName}
                </p>
                <p className="text-xs text-gray-500">
                  {t.userPhoneLabel} {currentUser.phone}
                </p>
              </div>
              <button
                onClick={handleLogout}
                className="text-xs text-[#FF4B4B] hover:underline font-semibold bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-md transition"
              >
                {t.logout}
              </button>
            </div>

            <div className="bg-white border rounded-lg p-6 shadow-md space-y-4">
              <div className="space-y-2">
                <p className="text-sm text-gray-500">{t.balanceLabel}</p>
                <p className="text-4xl font-black text-[#004B6E]">4 250 ֏</p>
                <button className="bg-emerald-600 text-white text-xs px-4 py-2.5 rounded-md font-bold hover:bg-emerald-700 transition">
                  {t.topUpBtn}
                </button>
              </div>

              <div className="space-y-2 border-t pt-4 border-gray-200">
                <p className="text-sm text-gray-500 font-semibold">{t.tariffLabel}</p>
                <p className="text-lg font-bold text-slate-800">{t.tariffActive}</p>
                <p className="text-xs text-gray-500">{t.nextCharge}</p>
              </div>
            </div>
          </div>
        )}

        {/* ПРАВАЯ СТОРОНА: Ссылки над фото и картинка */}
        <div className="w-full flex flex-col items-center justify-center p-4 space-y-6">
          
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://apps.apple.com/us/app/my-beeline-armenia/id886204055"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#004B6E] hover:bg-[#085a82] text-white font-semibold text-xs px-5 py-2.5 rounded-md shadow-sm transition-transform hover:scale-105 flex items-center space-x-2"
            >
              <span>App Store</span>
            </a>

            <a
              href="https://play.google.com/store/apps/details?id=am.beeline.odp&hl=hy-------android"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#004B6E] hover:bg-[#085a82] text-white font-semibold text-xs px-5 py-2.5 rounded-md shadow-sm transition-transform hover:scale-105 flex items-center space-x-2"
            >
              <span>Google Play</span>
            </a>
          </div>

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