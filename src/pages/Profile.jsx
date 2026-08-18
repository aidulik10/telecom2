import React, { useState, useEffect } from 'react';
import { 
  Eye, 
  EyeOff, 
  User, 
  Settings, 
  FileText, 
  Grid, 
  Gift, 
  HelpCircle, 
  ShoppingBag, 
  Globe, 
  Tag, 
  Newspaper, 
  Gauge, 
  Gamepad2, 
  LogOut, 
  CheckCircle2 
} from 'lucide-react';
import { auth, googleProvider } from '../firebase';
import { signInWithPopup, signOut } from 'firebase/auth';
import { registerUserInFirestore } from '../services/chatService';

const translations = {
  AM: {
    title: "TEAM",
    subtitle: "Telecom Armenia",
    loginTab: "Հեռախոսահամար",
    emailTab: "Էլ․ հասցե",
    segmentTab1: "Անհատներին",
    segmentTab2: "Բիզնես",
    emailLabel: "Էլ․ հասցե",
    emailPlaceholder: "example@mail.com",
    phoneLabel: "Հեռախոսահամար",
    phonePlaceholder: "+374 99 000 000",
    passwordLabel: "Գաղտնաբառ",
    confirmPasswordLabel: "Կրկնել գաղտնաբառը",
    submitRegister: "Հաստատել",
    submitLogin: "Մուտք գործել",
    btnRegisterMain: "Գրանցում",
    accountTitle: "Բաժանորդի անձնական էջ",
    logout: "Ելք",
    balanceLabel: "Ձեր հաշվեկշիռը՝",
    topUpBtn: "Լիցքավորել առցանց",
    tariffLabel: "Ընթացիկ սակագին՝",
    tariffActive: "Be Free 3500 (Ակտիվ է)",
    nextCharge: "Հաջորդ գանձումը՝ 01.08.2026",
    errEmailExists: "Այս էլ․ հասցեով օգտատեր արդեն գրանցված է:",
    errPhoneExists: "Այս հեռախոսահամարով օգտատեր արդեն գրանցված է:",
    errPassMismatch: "Գաղտնաբառերը չեն համապատասխանում:",
    errUserNotFound: "Օգտատերը գտնված չէ կամ գաղտնաբառը սխալ է:",
    errInvalidCode: "Մուտքագրեք 6-անիշ ծածկագիրը:",
    bizWelcome: "Բարի գալուստ Team բիզնես գրասենյակ:",
    bizSelectType: "Ընտրել տեսակը",
    bizAdmin: "Ադմինիստրատոր",
    bizPartner: "Գործընկեր",
    bizUsernameLabel: "Օգտանուն",
    bizUsernamePlaceholder: "Մուտքագրեք ձեր օգտանունը",
    bizPasswordLabel: "Գաղտնաբառ",
    bizPasswordPlaceholder: "Մուտքագրեք Ձեր գաղտնաբառը",
    bizSubmit: "Մուտք",
    bizForgot: "Մոռացե՞լ եք գաղտնաբառը",
    bizDownload: "Բիզնես գրասենյակի տրամադրման դիմումը ներբեռնեք այստեղ:",
    bizSupport: "Բիզնես հաճախորդների աջակցման հարցերով կարող եք զանգահարել (+374 010)-700-700; 0628",
    googleSignIn: "Շարունակել Google-ով",
    orDivider: "կամ",
    
    regSegment1: "Հեռախոսակապ",
    regSegment2: "Ֆիքսված ինտերնետ",
    regStep1Of3: "1 քայլ 3 -ից",
    regStep2Of3: "2 քայլ 3 -ից",
    regStep3Of3: "3 քայլ 3-ից",
    regTitle: "Գրանցում",
    regPhoneTab: "Հեռախոսահամար",
    regEmailTab: "Էլ. հասցե",
    regPhonePrefix: "+374",
    regPhonePlaceholder: "Մուտքագրեք ձեր հեռախոսահամարը",
    regEmailPlaceholder: "Մուտքագրեք ձեր էլ. հասցեն",
    regPasswordPlaceholder: "Մուտքագրեք գաղտնաբառը",
    regPasswordHint: "Ձեր գաղտնաբառը պետք է կազմված լինի առնվազն 8 նիշից և պետք է պարունակի տառեր և թվեր:",
    regConfirmPasswordPlaceholder: "Կրկին մուտքագրեք գաղտնաբառը",
    regTermsAccept: "Ես ընդունում եմ պայմանները",
    regGetCode: "Ստանալ ծածկագիրը",
    regNext: "Առաջ",
    regCodePlaceholder: "Ծածկագիր",
    regCodeNotice: "Գրանցումը շարունակելու համար մուտքագրեք Ձեր էլ. հասցեին ուղարկված ծածկագիրը:",
    regActivate: "Ակտիվացնել",
    regResendCode: "Ուղարկել ծածկագիրը կրկին",
    regCancel: "Չեղարկել",
  },
  RU: {
    title: "TEAM",
    subtitle: "Telecom Armenia",
    loginTab: "Номер телефона",
    emailTab: "Эл. почта",
    segmentTab1: "Физическим лицам",
    segmentTab2: "Бизнесу",
    emailLabel: "Эл. почта",
    emailPlaceholder: "example@mail.com",
    phoneLabel: "Номер телефона",
    phonePlaceholder: "+374 99 000 000",
    passwordLabel: "Пароль",
    confirmPasswordLabel: "Повторите пароль",
    submitRegister: "Зарегистрироваться",
    submitLogin: "Войти",
    btnRegisterMain: "Регистрация",
    accountTitle: "Личный кабинет абонента",
    logout: "Выйти",
    balanceLabel: "Ваш баланс:",
    topUpBtn: "Пополнить онлайн",
    tariffLabel: "Текущий тариф:",
    tariffActive: "Be Free 3500 (Активен)",
    nextCharge: "Следующее списание: 01.08.2026",
    errEmailExists: "Пользователь с такой эл. почтой уже зарегистрирован!",
    errPhoneExists: "Пользователь с таким номером телефона уже зарегистрирован!",
    errPassMismatch: "Пароли не совпадают!",
    errUserNotFound: "Пользователь не найден или пароль неверен!",
    errInvalidCode: "Введите 6-значный код!",
    bizWelcome: "Добро пожаловать в бизнес-офис Team!",
    bizSelectType: "Выберите тип",
    bizAdmin: "Администратор",
    bizPartner: "Партнер",
    bizUsernameLabel: "Имя пользователя",
    bizUsernamePlaceholder: "Введите ваше имя пользователя",
    bizPasswordLabel: "Пароль",
    bizPasswordPlaceholder: "Введите ваш пароль",
    bizSubmit: "Войти",
    bizForgot: "Забыли пароль?",
    bizDownload: "Загрузите заявку на предоставление бизнес-офиса здесь:",
    bizSupport: "По вопросам поддержки бизнес-клиентов вы можете позвонить: (+374 010)-700-700; 0628",
    googleSignIn: "Продолжить через Google",
    orDivider: "или",
    
    regSegment1: "Телефонная связь",
    regSegment2: "Фиксированный интернет",
    regStep1Of3: "Шаг 1 из 3",
    regStep2Of3: "Шаг 2 из 3",
    regStep3Of3: "Шаг 3 из 3",
    regTitle: "Регистрация",
    regPhoneTab: "Номер телефона",
    regEmailTab: "Эл. почта",
    regPhonePrefix: "+374",
    regPhonePlaceholder: "Введите ваш номер телефона",
    regEmailPlaceholder: "Введите вашу эл. почту",
    regPasswordPlaceholder: "Введите пароль",
    regPasswordHint: "Ваш пароль должен состоять минимум из 8 символов и содержать буквы и цифры.",
    regConfirmPasswordPlaceholder: "Повторите ввод пароля",
    regTermsAccept: "Я принимаю условия",
    regGetCode: "Получить код",
    regNext: "Далее",
    regCodePlaceholder: "Код",
    regCodeNotice: "Для продолжения регистрации введите код, отправленный на вашу эл. почту.",
    regActivate: "Активировать",
    regResendCode: "Отправить код повторно",
    regCancel: "Отмена",
  },
  US: {
    title: "TEAM",
    subtitle: "Telecom Armenia",
    loginTab: "Phone Number",
    emailTab: "Email",
    segmentTab1: "Individuals",
    segmentTab2: "Business",
    emailLabel: "Email address",
    emailPlaceholder: "example@mail.com",
    phoneLabel: "Phone number",
    phonePlaceholder: "+374 99 000 000",
    passwordLabel: "Password",
    confirmPasswordLabel: "Confirm Password",
    submitRegister: "Sign Up",
    submitLogin: "Sign In",
    btnRegisterMain: "Register",
    accountTitle: "Subscriber Account",
    logout: "Logout",
    balanceLabel: "Your Balance:",
    topUpBtn: "Top Up Online",
    tariffLabel: "Current Tariff:",
    tariffActive: "Be Free 3500 (Active)",
    nextCharge: "Next charge: 01.08.2026",
    errEmailExists: "User with this email is already registered!",
    errPhoneExists: "User with this phone number is already registered!",
    errPassMismatch: "Passwords do not match!",
    errUserNotFound: "User not found or password incorrect!",
    errInvalidCode: "Enter the 6-digit code!",
    bizWelcome: "Welcome to Team Business Office:",
    bizSelectType: "Select type",
    bizAdmin: "Administrator",
    bizPartner: "Partner",
    bizUsernameLabel: "Username",
    bizUsernamePlaceholder: "Enter your username",
    bizPasswordLabel: "Password",
    bizPasswordPlaceholder: "Enter your password",
    bizSubmit: "Login",
    bizForgot: "Forgot password?",
    bizDownload: "Download the business office application form here:",
    bizSupport: "For business customer support questions, you can call: (+374 010)-700-700; 0628",
    googleSignIn: "Continue with Google",
    orDivider: "or",
    
    regSegment1: "Telephony",
    regSegment2: "Fixed Internet",
    regStep1Of3: "Step 1 of 3",
    regStep2Of3: "Step 2 of 3",
    regStep3Of3: "Step 3 of 3",
    regTitle: "Registration",
    regPhoneTab: "Phone Number",
    regEmailTab: "Email",
    regPhonePrefix: "+374",
    regPhonePlaceholder: "Enter your phone number",
    regEmailPlaceholder: "Enter your email",
    regPasswordPlaceholder: "Enter password",
    regPasswordHint: "Your password must be at least 8 characters and contain letters and numbers.",
    regConfirmPasswordPlaceholder: "Re-enter password",
    regTermsAccept: "I accept the terms and conditions",
    regGetCode: "Get Code",
    regNext: "Next",
    regCodePlaceholder: "Code",
    regCodeNotice: "To continue registration, enter the code sent to your email.",
    regActivate: "Activate",
    regResendCode: "Resend code",
    regCancel: "Cancel",
  },
};

export default function Profile() {
  const [currentUser, setCurrentUser] = useState(null);
  const [pendingUser, setPendingUser] = useState(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [googleError, setGoogleError] = useState('');

  const [activeTab, setActiveTab] = useState('phone');
  const [activeSegment, setActiveSegment] = useState('segment1');
  const [currentLang, setCurrentLang] = useState('AM');

  const [isRegisterView, setIsRegisterView] = useState(false);
  const [regStep, setRegStep] = useState(1);
  const [regSegment, setRegSegment] = useState('phoneNet');
  const [regMethod, setRegMethod] = useState('phone');
  const [multiStepData, setMultiStepData] = useState({
    identifierValue: '',
    codeValue: '',
    passwordValue: '',
    confirmPasswordValue: '',
  });

  const [termsAccepted, setTermsAccepted] = useState(false);
  const [timerSeconds, setTimerSeconds] = useState(300);

  useEffect(() => {
    let timer;
    if (isRegisterView && regStep === 2 && timerSeconds > 0) {
      timer = setInterval(() => {
        setTimerSeconds((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [isRegisterView, regStep, timerSeconds]);

  const formatTime = (seconds) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const handleResetTimer = () => {
    setTimerSeconds(300);
    setErrorMessage('');
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showBizPassword, setShowBizPassword] = useState(false);
  const [showRegPassword, setShowRegPassword] = useState(false);
  const [showRegConfirmPassword, setShowRegConfirmPassword] = useState(false);

  const [bizData, setBizData] = useState({
    userType: 'Ադմինիստրատոր',
    username: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const t = translations[currentLang];

  const [formData, setFormData] = useState({
    identifier: '',
    password: '',
  });

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

  const handleBizChange = (e) => {
    setErrorMessage('');
    setBizData({ ...bizData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    const existingUsers = JSON.parse(localStorage.getItem('team_telecom_users') || '[]');
    const cleanInput = formData.identifier.trim().toLowerCase();

    const foundUser = existingUsers.find(
      (user) => user.identifier === cleanInput && user.password === formData.password
    );

    if (foundUser) {
      localStorage.setItem('team_telecom_logged_user', JSON.stringify(foundUser));
      setCurrentUser(foundUser);
    } else {
      setErrorMessage(t.errUserNotFound);
    }
  };

  const handleBizSubmit = (e) => {
    e.preventDefault();
    const bizUser = {
      identifier: bizData.username,
      type: 'business',
    };
    localStorage.setItem('team_telecom_logged_user', JSON.stringify(bizUser));
    setCurrentUser(bizUser);
  };

  // 🔵 Вход через Google (Firebase Authentication)
  const handleGoogleSignIn = async () => {
    setGoogleError('');
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const googleUser = result.user;

      // Формат, понятный и старой системе логина (team_telecom_logged_user),
      // и чату (currentUser), чтобы оба сразу видели, что человек вошёл.
      const userForApp = {
        identifier: googleUser.email,
        name: googleUser.displayName,
      };
      const userForChat = {
        id: googleUser.uid,
        name: googleUser.displayName,
        email: googleUser.email,
        picture: googleUser.photoURL,
      };

      localStorage.setItem('team_telecom_logged_user', JSON.stringify(userForApp));
      localStorage.setItem('currentUser', JSON.stringify(userForChat));

      // Сразу регистрируем пользователя в Firestore, чтобы он появился в чате
      await registerUserInFirestore(userForChat);

      setCurrentUser(userForApp);
    } catch (err) {
      console.error(err);
      setGoogleError('Google-ով մուտք գործել չհաջողվեց: Փորձեք կրկին:');
    }
  };

  const handleLogout = async () => {
    localStorage.removeItem('team_telecom_logged_user');
    localStorage.removeItem('currentUser');
    try {
      await signOut(auth);
    } catch {
      // пользователь мог войти не через Google — это нормально
    }
    setCurrentUser(null);
    setFormData({
      identifier: '',
      password: '',
    });
    setBizData({
      userType: 'Ադմինիստրատոր',
      username: '',
      password: '',
    });
    setErrorMessage('');
    setIsRegisterView(false);
    setRegStep(1);
  };

  const handleMultiStepSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (regStep === 1) {
      if (!multiStepData.identifierValue.trim()) {
        setErrorMessage(t.errUserNotFound);
        return;
      }
      setTimerSeconds(300);
      setRegStep(2);
    } else if (regStep === 2) {
      if (!multiStepData.codeValue.trim() || multiStepData.codeValue.trim().length !== 6) {
        setErrorMessage(t.errInvalidCode);
        return;
      }
      setRegStep(3);
    } else if (regStep === 3) {
      if (multiStepData.passwordValue !== multiStepData.confirmPasswordValue) {
        setErrorMessage(t.errPassMismatch);
        return;
      }
      if (!termsAccepted) {
        setErrorMessage('Խնդրում ենք ընդունել պայմանները');
        return;
      }
      const existingUsers = JSON.parse(localStorage.getItem('team_telecom_users') || '[]');
      const cleanInput = (multiStepData.identifierValue || 'aidulik10@gmail.com').trim().toLowerCase();

      const isAlreadyRegistered = existingUsers.some(
        (user) => user.identifier === cleanInput
      );

      if (isAlreadyRegistered) {
        setErrorMessage(regMethod === 'email' ? t.errEmailExists : t.errPhoneExists);
        return;
      }

      const newUser = {
        identifier: cleanInput,
        password: multiStepData.passwordValue,
      };

      const updatedUsers = [...existingUsers, newUser];
      localStorage.setItem('team_telecom_users', JSON.stringify(updatedUsers));

      setPendingUser(newUser);
      setShowSuccessModal(true);
    }
  };

  const handleConfirmRegistration = () => {
    if (pendingUser) {
      localStorage.setItem('team_telecom_logged_user', JSON.stringify(pendingUser));
      setCurrentUser(pendingUser);
      setPendingUser(null);
    }
    setShowSuccessModal(false);
    setIsRegisterView(false);
    setRegStep(1);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-6 relative">
      
      {/* 1. ВСПЫВАЮЩЕЕ ОКНО (МОДАЛЬНОЕ ОКНО) ПОСЛЕ 3-ГО ШАГА */}
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl p-6 md:p-8 max-w-sm w-full text-center space-y-5 shadow-2xl animate-in fade-in zoom-in duration-200">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 size={36} />
            </div>
            
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-gray-900 leading-snug">
                Դուք հաջողությամբ ստեղծել եք Ձեր էջը
              </h3>
            </div>

            <button
              onClick={handleConfirmRegistration}
              className="w-full bg-[#004B6E] hover:bg-[#085a82] text-white font-bold py-3 rounded-full shadow transition duration-200 text-sm active:scale-[0.98]"
            >
              Լավ
            </button>
          </div>
        </div>
      )}

      {/* ЛОГОТИП TEAM */}
      <div className="flex flex-col items-start select-none">
        <span className="text-3xl font-black uppercase tracking-wider text-[#004B6E] leading-none">
          {t.title}
        </span>
        <span className="text-xs uppercase tracking-widest font-semibold text-gray-500 mt-1 leading-none">
          {t.subtitle}
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* ЛЕВАЯ ЧАСТЬ */}
        <div className="lg:col-span-7 xl:col-span-8 space-y-6">
          {!currentUser ? (
            <div className="space-y-4 w-full max-w-sm">
              
              <div className="flex border-b border-gray-200">
                <button
                  type="button"
                  onClick={() => {
                    setActiveSegment('segment1');
                    setErrorMessage('');
                  }}
                  className={`flex-1 text-center font-bold pb-2.5 text-xs transition-colors relative ${
                    activeSegment === 'segment1'
                      ? 'text-[#004B6E]'
                      : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  {t.segmentTab1}
                  {activeSegment === 'segment1' && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FF4B4B]" />
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setActiveSegment('segment2');
                    setErrorMessage('');
                  }}
                  className={`flex-1 text-center font-bold pb-2.5 text-xs transition-colors relative ${
                    activeSegment === 'segment2'
                      ? 'text-[#004B6E]'
                      : 'text-gray-400 hover:text-gray-600'
                  }`}
                >
                  {t.segmentTab2}
                  {activeSegment === 'segment2' && (
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FF4B4B]" />
                  )}
                </button>
              </div>

              {activeSegment === 'segment1' ? (
                isRegisterView ? (
                  <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md w-full space-y-5">
                    
                    <div className="flex border-b border-gray-200">
                      <button
                        type="button"
                        onClick={() => setRegSegment('phoneNet')}
                        className={`flex-1 text-center font-bold pb-2.5 text-xs transition-colors relative ${
                          regSegment === 'phoneNet'
                            ? 'text-[#004B6E]'
                            : 'text-gray-400 hover:text-gray-600'
                        }`}
                      >
                        {t.regSegment1}
                        {regSegment === 'phoneNet' && (
                          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FF4B4B]" />
                        )}
                      </button>
                      <button
                        type="button"
                        onClick={() => setRegSegment('internetNet')}
                        className={`flex-1 text-center font-bold pb-2.5 text-xs transition-colors relative ${
                          regSegment === 'internetNet'
                            ? 'text-[#004B6E]'
                            : 'text-gray-400 hover:text-gray-600'
                        }`}
                      >
                        {t.regSegment2}
                        {regSegment === 'internetNet' && (
                          <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#FF4B4B]" />
                        )}
                      </button>
                    </div>

                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-xs font-bold text-[#FF4B4B]">
                          {regStep === 1 && t.regStep1Of3}
                          {regStep === 2 && t.regStep2Of3}
                          {regStep === 3 && t.regStep3Of3}
                        </span>
                      </div>

                      <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                        <div
                          className="bg-[#FF4B4B] h-full transition-all duration-300"
                          style={{
                            width: regStep === 1 ? '33.33%' : regStep === 2 ? '66.66%' : '100%',
                          }}
                        />
                      </div>

                      <h3 className="text-xl font-bold text-gray-800 pt-1">
                        {t.regTitle}
                      </h3>
                    </div>

                    {errorMessage && (
                      <div className="bg-red-50 border border-red-200 text-red-600 text-xs p-3 rounded-md font-semibold text-center">
                        {errorMessage}
                      </div>
                    )}

                    <form onSubmit={handleMultiStepSubmit} className="space-y-4">
                      
                      {regStep === 1 && (
                        <div className="space-y-4">
                          <div className="flex border-b border-gray-200 pb-2">
                            <button
                              type="button"
                              onClick={() => { setRegMethod('phone'); setMultiStepData({ ...multiStepData, identifierValue: '' }); setErrorMessage(''); }}
                              className={`flex-1 text-center font-bold pb-1 text-xs transition-colors ${
                                regMethod === 'phone' ? 'text-[#FF4B4B] border-b-2 border-[#FF4B4B]' : 'text-gray-400'
                              }`}
                            >
                              {t.regPhoneTab}
                            </button>
                            <button
                              type="button"
                              onClick={() => { setRegMethod('email'); setMultiStepData({ ...multiStepData, identifierValue: '' }); setErrorMessage(''); }}
                              className={`flex-1 text-center font-bold pb-1 text-xs transition-colors ${
                                regMethod === 'email' ? 'text-[#FF4B4B] border-b-2 border-[#FF4B4B]' : 'text-gray-400'
                              }`}
                            >
                              {t.regEmailTab}
                            </button>
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-gray-600 mb-1">
                              {regMethod === 'phone' ? t.phoneLabel : t.emailLabel}
                            </label>

                            {regMethod === 'phone' ? (
                              <div className="flex items-center border border-gray-300 rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-[#FF4B4B]">
                                <span className="bg-gray-100 text-gray-700 px-3.5 py-2.5 text-sm font-semibold border-r border-gray-300">
                                  {t.regPhonePrefix}
                                </span>
                                <input
                                  type="tel"
                                  required
                                  placeholder="99 000 000"
                                  value={multiStepData.identifierValue}
                                  onChange={(e) => {
                                    setMultiStepData({ ...multiStepData, identifierValue: e.target.value });
                                    setErrorMessage('');
                                  }}
                                  className="w-full px-3.5 py-2.5 text-sm focus:outline-none"
                                />
                              </div>
                            ) : (
                              <input
                                type="email"
                                required
                                placeholder={t.regEmailPlaceholder}
                                value={multiStepData.identifierValue}
                                onChange={(e) => {
                                  setMultiStepData({ ...multiStepData, identifierValue: e.target.value });
                                  setErrorMessage('');
                                }}
                                className="w-full border border-gray-300 rounded-md px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF4B4B]"
                              />
                            )}
                          </div>

                          <button
                            type="submit"
                            className="w-full bg-[#FF4B4B] hover:bg-[#e03f3f] text-white font-bold py-3 rounded-full shadow transition duration-200 text-sm mt-3 active:scale-[0.98]"
                          >
                            {t.regGetCode}
                          </button>
                        </div>
                      )}

                      {regStep === 2 && (
                        <div className="space-y-4">
                          <div>
                            <label className="block text-xs font-semibold text-gray-600 mb-1">
                              {t.regEmailTab}
                            </label>
                            <input
                              type="text"
                              disabled
                              value={multiStepData.identifierValue || 'aidulik10@gmail.com'}
                              className="w-full bg-gray-50 border border-gray-300 rounded-md px-3.5 py-2 text-sm text-gray-700 font-medium focus:outline-none cursor-not-allowed"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-gray-600 mb-2">
                              {t.regCodePlaceholder}
                            </label>

                            <div className="flex justify-between items-center gap-2">
                              {Array.from({ length: 6 }).map((_, index) => {
                                const digit = multiStepData.codeValue[index] || '';
                                return (
                                  <input
                                    key={index}
                                    id={`code-input-${index}`}
                                    type="text"
                                    inputMode="numeric"
                                    maxLength={1}
                                    value={digit}
                                    onChange={(e) => {
                                      const val = e.target.value.replace(/\D/g, '');
                                      const currentCode = multiStepData.codeValue.split('');
                                      currentCode[index] = val;
                                      const newCode = currentCode.join('');
                                      setMultiStepData({ ...multiStepData, codeValue: newCode });
                                      setErrorMessage('');

                                      if (val && index < 5) {
                                        const nextInput = document.getElementById(`code-input-${index + 1}`);
                                        if (nextInput) nextInput.focus();
                                      }
                                    }}
                                    onKeyDown={(e) => {
                                      if (e.key === 'Backspace' && !digit && index > 0) {
                                        const prevInput = document.getElementById(`code-input-${index - 1}`);
                                        if (prevInput) prevInput.focus();
                                      }
                                    }}
                                    className={`w-10 h-10 text-center font-bold text-lg rounded-full border transition-all focus:outline-none shadow-sm ${
                                      digit
                                        ? 'border-[#FF4B4B] bg-red-50 text-[#FF4B4B]'
                                        : 'border-gray-300 bg-white text-gray-800 focus:border-[#FF4B4B] focus:ring-2 focus:ring-[#FF4B4B]/20'
                                    }`}
                                  />
                                );
                              })}
                            </div>

                            <div className="flex justify-center items-center mt-3">
                              <span className="text-sm font-bold text-gray-600 bg-gray-100 px-3 py-1 rounded-full border border-gray-200 tracking-wider">
                                {formatTime(timerSeconds)}
                              </span>
                            </div>
                          </div>

                          <p className="text-xs text-gray-500 leading-normal text-center">
                            {t.regCodeNotice}
                          </p>

                          {timerSeconds > 0 ? (
                            <button
                              type="submit"
                              className="w-full bg-[#FF4B4B] hover:bg-[#e03f3f] text-white font-bold py-3 rounded-full shadow transition duration-200 text-sm active:scale-[0.98]"
                            >
                              {t.regActivate}
                            </button>
                          ) : (
                            <button
                              type="button"
                              onClick={handleResetTimer}
                              className="w-full bg-gray-700 hover:bg-gray-800 text-white font-bold py-3 rounded-full shadow transition duration-200 text-sm active:scale-[0.98]"
                            >
                              {t.regResendCode}
                            </button>
                          )}
                        </div>
                      )}

                      {regStep === 3 && (
                        <div className="space-y-4">
                          <div>
                            <label className="block text-xs font-semibold text-gray-600 mb-1">
                              {t.regEmailTab}
                            </label>
                            <input
                              type="text"
                              disabled
                              value={multiStepData.identifierValue || 'aidulik10@gmail.com'}
                              className="w-full bg-gray-50 border border-gray-300 rounded-md px-3.5 py-2.5 text-sm text-gray-700 font-medium focus:outline-none cursor-not-allowed"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-gray-600 mb-1">
                              {t.passwordLabel}
                            </label>
                            <div className="relative flex items-center">
                              <input
                                type={showRegPassword ? 'text' : 'password'}
                                required
                                placeholder={t.regPasswordPlaceholder}
                                value={multiStepData.passwordValue}
                                onChange={(e) => {
                                  setMultiStepData({ ...multiStepData, passwordValue: e.target.value });
                                  setErrorMessage('');
                                }}
                                className="w-full border border-gray-300 rounded-md pl-3.5 pr-10 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF4B4B]"
                              />
                              <button
                                type="button"
                                onClick={() => setShowRegPassword(!showRegPassword)}
                                className="absolute right-3 text-gray-400 hover:text-gray-600 focus:outline-none"
                              >
                                {showRegPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                              </button>
                            </div>
                            <p className="text-[11px] text-gray-500 mt-1.5 leading-snug">
                              {t.regPasswordHint}
                            </p>
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-gray-600 mb-1">
                              {t.confirmPasswordLabel}
                            </label>
                            <div className="relative flex items-center">
                              <input
                                type={showRegConfirmPassword ? 'text' : 'password'}
                                required
                                placeholder={t.regConfirmPasswordPlaceholder}
                                value={multiStepData.confirmPasswordValue}
                                onChange={(e) => {
                                  setMultiStepData({ ...multiStepData, confirmPasswordValue: e.target.value });
                                  setErrorMessage('');
                                }}
                                className="w-full border border-gray-300 rounded-md pl-3.5 pr-10 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF4B4B]"
                              />
                              <button
                                type="button"
                                onClick={() => setShowRegConfirmPassword(!showRegConfirmPassword)}
                                className="absolute right-3 text-gray-400 hover:text-gray-600 focus:outline-none"
                              >
                                {showRegConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                              </button>
                            </div>
                          </div>

                          <div className="flex items-center space-x-2 pt-1">
                            <input
                              type="checkbox"
                              id="terms"
                              checked={termsAccepted}
                              onChange={(e) => setTermsAccepted(e.target.checked)}
                              required
                              className="w-4 h-4 text-[#FF4B4B] border-gray-300 rounded focus:ring-[#FF4B4B] cursor-pointer"
                            />
                            <label htmlFor="terms" className="text-xs text-gray-600 cursor-pointer select-none">
                              {t.regTermsAccept}
                            </label>
                          </div>

                          <button
                            type="submit"
                            className="w-full bg-[#FF4B4B] hover:bg-[#e03f3f] text-white font-bold py-3 rounded-full shadow transition duration-200 text-sm mt-2 active:scale-[0.98]"
                          >
                            {t.regActivate}
                          </button>
                        </div>
                      )}

                      <button
                        type="button"
                        onClick={() => {
                          setIsRegisterView(false);
                          setRegStep(1);
                          setErrorMessage('');
                        }}
                        className="w-full bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-bold py-3 rounded-full shadow-sm transition duration-200 text-sm active:scale-[0.98]"
                      >
                        {t.regCancel}
                      </button>

                    </form>
                  </div>
                ) : (
                  <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md w-full space-y-6">

                    {/* 🔵 КНОПКА ВХОДА ЧЕРЕЗ GOOGLE */}
                    <div className="space-y-3">
                      {googleError && (
                        <div className="bg-red-50 border border-red-200 text-red-600 text-xs p-3 rounded-md font-semibold text-center">
                          {googleError}
                        </div>
                      )}
                      <button
                        type="button"
                        onClick={handleGoogleSignIn}
                        className="w-full flex items-center justify-center gap-2.5 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold py-2.5 rounded-full shadow-sm transition duration-200 text-sm active:scale-[0.98]"
                      >
                        <svg width="18" height="18" viewBox="0 0 18 18">
                          <path fill="#4285F4" d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.92c1.7-1.57 2.68-3.88 2.68-6.62z"/>
                          <path fill="#34A853" d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.92-2.26c-.81.54-1.84.86-3.04.86-2.34 0-4.32-1.58-5.03-3.71H.96v2.33A9 9 0 0 0 9 18z"/>
                          <path fill="#FBBC05" d="M3.97 10.71a5.4 5.4 0 0 1 0-3.42V4.96H.96a9 9 0 0 0 0 8.08l3.01-2.33z"/>
                          <path fill="#EA4335" d="M9 3.58c1.32 0 2.51.45 3.44 1.35l2.58-2.58A8.6 8.6 0 0 0 9 0 9 9 0 0 0 .96 4.96l3.01 2.33C4.68 5.16 6.66 3.58 9 3.58z"/>
                        </svg>
                        {t.googleSignIn}
                      </button>

                      <div className="flex items-center gap-3">
                        <div className="flex-1 h-px bg-gray-200" />
                        <span className="text-[11px] text-gray-400 font-medium">{t.orDivider}</span>
                        <div className="flex-1 h-px bg-gray-200" />
                      </div>
                    </div>

                    <div className="flex border-b border-gray-200 pb-3">
                      <button
                        type="button"
                        onClick={() => {
                          setActiveTab('phone');
                          setErrorMessage('');
                          setFormData({ identifier: '', password: '' });
                        }}
                        className={`flex-1 text-center font-bold pb-2 text-xs transition-colors ${
                          activeTab === 'phone'
                            ? 'text-[#FF4B4B] border-b-2 border-[#FF4B4B]'
                            : 'text-gray-400 hover:text-gray-600'
                        }`}
                      >
                        {t.loginTab}
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setActiveTab('email');
                          setErrorMessage('');
                          setFormData({ identifier: '', password: '' });
                        }}
                        className={`flex-1 text-center font-bold pb-2 text-xs transition-colors ${
                          activeTab === 'email'
                            ? 'text-[#FF4B4B] border-b-2 border-[#FF4B4B]'
                            : 'text-gray-400 hover:text-gray-600'
                        }`}
                      >
                        {t.emailTab}
                      </button>
                    </div>

                    {errorMessage && (
                      <div className="bg-red-50 border border-red-200 text-red-600 text-xs p-3 rounded-md font-semibold text-center">
                        {errorMessage}
                      </div>
                    )}

                    <form onSubmit={handleLoginSubmit} className="space-y-5">
                      <div>
                        <label className="block text-xs font-semibold text-gray-600 mb-1">
                          {activeTab === 'email' ? t.emailLabel : t.phoneLabel}
                        </label>
                        <input
                          type={activeTab === 'email' ? 'email' : 'tel'}
                          name="identifier"
                          required
                          placeholder={activeTab === 'email' ? t.emailPlaceholder : t.phonePlaceholder}
                          value={formData.identifier}
                          onChange={handleChange}
                          className="w-full border-gray-300 border rounded-md px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF4B4B] transition"
                        />
                      </div>

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
                            className="w-full border-gray-300 border rounded-md pl-3.5 pr-10 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF4B4B] transition"
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

                      <button
                        type="submit"
                        className="w-full bg-[#FF4B4B] hover:bg-[#e03f3f] text-white font-bold py-3 rounded-full shadow transition duration-200 text-sm mt-3 active:scale-[0.98]"
                      >
                        {t.submitLogin}
                      </button>

                      <button
                        type="button"
                        onClick={() => {
                          setIsRegisterView(true);
                          setRegStep(1);
                          setErrorMessage('');
                          setMultiStepData({
                            identifierValue: '',
                            codeValue: '',
                            passwordValue: '',
                            confirmPasswordValue: '',
                          });
                        }}
                        className="w-full bg-white border border-[#FF4B4B] text-[#FF4B4B] hover:bg-red-50 font-bold py-3 rounded-full shadow-sm transition duration-200 text-sm active:scale-[0.98]"
                      >
                        {t.btnRegisterMain}
                      </button>
                    </form>
                  </div>
                )
              ) : (
                <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md w-full space-y-4">
                  <h3 className="text-sm font-bold text-[#004B6E] leading-snug">
                    {t.bizWelcome}
                  </h3>

                  <form onSubmit={handleBizSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1">
                        {t.bizSelectType}
                      </label>
                      <select
                        name="userType"
                        value={bizData.userType}
                        onChange={handleBizChange}
                        className="w-full border-gray-300 border rounded-md px-3.5 py-2.5 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-[#FF4B4B] transition"
                      >
                        <option value="Ադմինիստրատոր">{t.bizAdmin}</option>
                        <option value="Գործընկեր">{t.bizPartner}</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1">
                        {t.bizUsernameLabel}
                      </label>
                      <input
                        type="text"
                        name="username"
                        required
                        placeholder={t.bizUsernamePlaceholder}
                        value={bizData.username}
                        onChange={handleBizChange}
                        className="w-full border-gray-300 border rounded-md px-3.5 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF4B4B] transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1">
                        {t.bizPasswordLabel}
                      </label>
                      <div className="relative flex items-center">
                        <input
                          type={showBizPassword ? 'text' : 'password'}
                          name="password"
                          required
                          placeholder={t.bizPasswordPlaceholder}
                          value={bizData.password}
                          onChange={handleBizChange}
                          className="w-full border-gray-300 border rounded-md pl-3.5 pr-10 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#FF4B4B] transition"
                        />
                        <button
                          type="button"
                          onClick={() => setShowBizPassword(!showBizPassword)}
                          className="absolute right-3 text-gray-400 hover:text-gray-600 focus:outline-none"
                        >
                          {showBizPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                      </div>
                    </div>

                    <div className="text-right">
                      <a href="#forgot" onClick={(e) => e.preventDefault()} className="text-xs text-[#004B6E] hover:underline font-medium">
                        {t.bizForgot}
                      </a>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-[#FF4B4B] hover:bg-[#e03f3f] text-white font-bold py-3 rounded-full shadow transition duration-200 text-sm active:scale-[0.98]"
                    >
                      {t.bizSubmit}
                    </button>
                  </form>

                  <div className="pt-3 border-t border-gray-100 space-y-2 text-xs">
                    <a href="#download" onClick={(e) => e.preventDefault()} className="text-[#004B6E] hover:underline block font-medium">
                      {t.bizDownload}
                    </a>
                    <p className="text-gray-600 leading-relaxed font-normal">
                      {t.bizSupport}
                    </p>
                  </div>
                </div>
              )}

              <div className="pt-2 flex items-center justify-center space-x-6">
                <button
                  type="button"
                  onClick={() => setCurrentLang('AM')}
                  className={`flex items-center space-x-1.5 p-1 px-2 rounded-md transition ${
                    currentLang === 'AM' ? 'ring-2 ring-[#FF4B4B] bg-gray-50' : 'opacity-70 hover:opacity-100'
                  }`}
                  title="Հայերեն"
                >
                  <img src="https://flagcdn.com/w40/am.png" alt="AM" className="w-5 h-3.5 object-cover rounded-[2px]" />
                  <span className="text-xs font-bold text-gray-700">AM</span>
                </button>

                <button
                  type="button"
                  onClick={() => setCurrentLang('RU')}
                  className={`flex items-center space-x-1.5 p-1 px-2 rounded-md transition ${
                    currentLang === 'RU' ? 'ring-2 ring-[#FF4B4B] bg-gray-50' : 'opacity-70 hover:opacity-100'
                  }`}
                  title="Русский"
                >
                  <img src="https://flagcdn.com/w40/ru.png" alt="RU" className="w-5 h-3.5 object-cover rounded-[2px]" />
                  <span className="text-xs font-bold text-gray-700">RU</span>
                </button>

                <button
                  type="button"
                  onClick={() => setCurrentLang('US')}
                  className={`flex items-center space-x-1.5 p-1 px-2 rounded-md transition ${
                    currentLang === 'US' ? 'ring-2 ring-[#FF4B4B] bg-gray-50' : 'opacity-70 hover:opacity-100'
                  }`}
                  title="English"
                >
                  <img src="https://flagcdn.com/w40/us.png" alt="EN" className="w-5 h-3.5 object-cover rounded-[2px]" />
                  <span className="text-xs font-bold text-gray-700">EN</span>
                </button>
              </div>

            </div>
          ) : (
            <div className="space-y-6 w-full max-w-lg">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-bold text-gray-800">{t.accountTitle}</h2>
                  <p className="text-sm font-semibold text-[#004B6E] mt-1">
                    {currentUser.identifier}
                  </p>
                </div>
                <button
                  onClick={handleLogout}
                  className="text-xs text-[#FF4B4B] hover:underline font-semibold bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-md transition flex items-center space-x-1"
                >
                  <LogOut size={14} />
                  <span>{t.logout}</span>
                </button>
              </div>

              <div className="bg-white border rounded-xl p-6 shadow-md space-y-4">
                <div className="space-y-2">
                  <p className="text-sm text-gray-500">{t.balanceLabel}</p>
                  <p className="text-4xl font-black text-[#004B6E]">0 ֏</p>
                  <button className="bg-emerald-600 text-white text-xs px-5 py-2.5 rounded-full font-bold hover:bg-emerald-700 transition">
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
        </div>

        {/* 2. ПРАВАЯ ЧАСТЬ: ПАНЕЛЬ НАСТРОЕК (ПРИ АВТОРИЗАЦИИ) ИЛИ БАННЕР (ПРИ ВХОДЕ) */}
        <div className="lg:col-span-5 xl:col-span-4 w-full">
          {currentUser ? (
            <div className="bg-white border border-gray-200 rounded-2xl p-5 shadow-lg space-y-4">
              
              {/* Заголовок Հաշիվներ с иконкой человека */}
              <div className="flex items-center space-x-2 border-b border-gray-100 pb-3">
                <div className="p-2 bg-blue-50 text-[#004B6E] rounded-full">
                  <User size={20} />
                </div>
                <h3 className="font-bold text-gray-800 text-base">Հաշիվներ</h3>
              </div>

              {/* Карточка основного счета */}
              <div className="bg-gradient-to-br from-slate-50 to-gray-100 border border-gray-200 rounded-xl p-3.5 space-y-1">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-semibold text-gray-500">Հիմնական հաշիվ</span>
                  <span className="text-sm font-black text-[#004B6E]">0 ֏</span>
                </div>
                <p className="text-xs font-bold text-gray-700 truncate">
                  {currentUser.identifier}
                </p>
              </div>

              {/* Боковое меню */}
              <nav className="space-y-1 pt-1 text-sm">
                <a href="#profile" onClick={(e) => e.preventDefault()} className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition font-medium">
                  <User size={16} className="text-gray-400" />
                  <span>Անձնական տվյալներ</span>
                </a>

                <a href="#settings" onClick={(e) => e.preventDefault()} className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition font-medium">
                  <Settings size={16} className="text-gray-400" />
                  <span>Կարգավորումներ</span>
                </a>

                <a href="#tariffs" onClick={(e) => e.preventDefault()} className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition font-medium">
                  <FileText size={16} className="text-gray-400" />
                  <span>Սակագներ</span>
                </a>

                <a href="#services" onClick={(e) => e.preventDefault()} className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition font-medium">
                  <Grid size={16} className="text-gray-400" />
                  <span>Ծառայություններ</span>
                </a>

                <a href="#bonus" onClick={(e) => e.preventDefault()} className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition font-medium">
                  <Gift size={16} className="text-gray-400" />
                  <span>Բոնուս</span>
                </a>

                <a href="#help" onClick={(e) => e.preventDefault()} className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition font-medium">
                  <HelpCircle size={16} className="text-gray-400" />
                  <span>Օգնություն</span>
                </a>

                <a href="#eshop" onClick={(e) => e.preventDefault()} className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition font-medium">
                  <ShoppingBag size={16} className="text-gray-400" />
                  <span>eShop</span>
                </a>

                <a href="#roaming" onClick={(e) => e.preventDefault()} className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition font-medium">
                  <Globe size={16} className="text-gray-400" />
                  <span>Ռոումինգ</span>
                </a>

                <a href="#offers" onClick={(e) => e.preventDefault()} className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition font-medium">
                  <Tag size={16} className="text-gray-400" />
                  <span>Առաջարկներ</span>
                </a>

                <a href="#news" onClick={(e) => e.preventDefault()} className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition font-medium">
                  <Newspaper size={16} className="text-gray-400" />
                  <span>Նորություններ</span>
                </a>

                <a href="#speedtest" onClick={(e) => e.preventDefault()} className="flex items-center space-x-3 px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-lg transition font-medium">
                  <Gauge size={16} className="text-gray-400" />
                  <span>SpeedTest</span>
                </a>

                {/* Вложенный блок Խաղեր */}
                <div className="pt-2 border-t border-gray-100">
                  <div className="flex items-center space-x-3 px-3 py-1.5 text-gray-800 font-bold text-xs uppercase tracking-wider">
                    <Gamepad2 size={16} className="text-[#FF4B4B]" />
                    <span>Խաղեր</span>
                  </div>
                  <div className="pl-9 space-y-1 pt-1">
                    <a href="#mobibattle" onClick={(e) => e.preventDefault()} className="block text-xs text-gray-600 hover:text-[#004B6E] py-1 font-medium">
                      MobiBattle
                    </a>
                    <a href="#geforce" onClick={(e) => e.preventDefault()} className="block text-xs text-gray-600 hover:text-[#004B6E] py-1 font-medium">
                      GeForce Games
                    </a>
                    <a href="#koreez" onClick={(e) => e.preventDefault()} className="block text-xs text-gray-600 hover:text-[#004B6E] py-1 font-medium">
                      Koreez
                    </a>
                  </div>
                </div>

                <div className="pt-2 border-t border-gray-100">
                  <button
                    onClick={handleLogout}
                    className="w-full flex items-center space-x-3 px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition font-bold"
                  >
                    <LogOut size={16} />
                    <span>Ելք</span>
                  </button>
                </div>
              </nav>

            </div>
          ) : (
            <div className="flex flex-col items-center justify-center p-4 space-y-6">
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="#appstore"
                  onClick={(e) => e.preventDefault()}
                  className="bg-[#004B6E] hover:bg-[#085a82] text-white font-semibold text-xs px-5 py-2.5 rounded-md shadow-sm transition-transform hover:scale-105 flex items-center space-x-2"
                >
                  <span>App Store</span>
                </a>

                <a
                  href="#googleplay"
                  onClick={(e) => e.preventDefault()}
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
          )}
        </div>

      </div>

    </div>
  );
}
