import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { CartProvider } from './context/CartContext';

import Home from './pages/Home';
import MobileServices from './pages/MobileServices';
import FixedServices from './pages/FixedServices';
import ComboServices from './pages/ComboServices';
import InternetServices from './pages/InternetServices';
import RoamingServices from './pages/RoamingServices';
import Services from './pages/Services';
import Devices from './pages/Devices';
import News from './pages/News';
import About from './pages/About';
import Support from './pages/Support';
import Profile from './pages/Profile';
import Cart from './pages/Cart';

// Ինտերնետ ենթակետեր
import InternetSmartphone from './pages/InternetSmartphone';
import InternetKosmo from './pages/InternetKosmo';
import InternetPcTablet from './pages/InternetPcTablet';
import Team5G from './pages/Team5G';

// Ծառայություններ ենթակետեր
import ServiceTeamTV from './pages/ServiceTeamTV';
import ServicePayment from './pages/ServicePayment';
import ServiceEntertainment from './pages/ServiceEntertainment';
import ServiceSecurity from './pages/ServiceSecurity';
import ServiceFixedPhone from './pages/ServiceFixedPhone';

// Ռոումինգ ենթակետեր
import RoamingInternational from './pages/RoamingInternational';
import RoamingInfo from './pages/RoamingInfo';
import RoamingAddons from './pages/RoamingAddons';

// Առցանց խանութ ենթակետեր
import EshopMain from './pages/EshopMain';
import OnlineCredit from './pages/OnlineCredit';
import Subscriptions from './pages/Subscriptions';

// Առաջարկներ ենթակետեր
import ShakeWin from './pages/ShakeWin';
import TeamBonus from './pages/TeamBonus';
import Promotions from './pages/Promotions';
import MobiBattle from './pages/MobiBattle';
import GeForceGames from './pages/GeForceGames';
import Koreez from './pages/Koreez';

// Օգնություն ենթակետեր
import Faq from './pages/Faq';
import DeviceSettings from './pages/DeviceSettings';
import CustomerService from './pages/CustomerService';
import Ussd from './pages/Ussd';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'mobile':
        return <MobileServices />;
      case 'fixed':
        return <FixedServices />;
      case 'combo':
        return <ComboServices />;
      case 'internet':
        return <InternetServices />;
      case 'roaming':
        return <RoamingServices />;
      case 'services':
        return <Services />;
      case 'devices':
        return <Devices />;
      case 'news':
        return <News />;
      case 'about':
        return <About />;
      case 'support':
        return <Support />;
      case 'profile':
        return <Profile />;
      case 'cart':
        return <Cart setCurrentPage={setCurrentPage} />;

      // Ինտերնետ
      case 'internet-smartphone':
        return <InternetSmartphone />;
      case 'internet-kosmo':
        return <InternetKosmo />;
      case 'internet-pc-tablet':
        return <InternetPcTablet />;
      case 'team-5g':
        return <Team5G />;

      // Ծառայություններ
      case 'service-teamtv':
        return <ServiceTeamTV />;
      case 'service-payment':
        return <ServicePayment />;
      case 'service-entertainment':
        return <ServiceEntertainment />;
      case 'service-security':
        return <ServiceSecurity />;
      case 'service-fixed-phone':
        return <ServiceFixedPhone />;

      // Ռոումինգ
      case 'roaming-international':
        return <RoamingInternational />;
      case 'roaming-info':
        return <RoamingInfo />;
      case 'roaming-addons':
        return <RoamingAddons />;

      // Առցանց խանութ
      case 'eshop':
        return <EshopMain />;
      case 'online-credit':
        return <OnlineCredit />;
      case 'subscriptions':
        return <Subscriptions />;

      // Առաջարկներ
      case 'shake-win':
        return <ShakeWin />;
      case 'team-bonus':
        return <TeamBonus />;
      case 'promotions':
        return <Promotions />;
      case 'mobibattle':
        return <MobiBattle />;
      case 'geforce-games':
        return <GeForceGames />;
      case 'koreez':
        return <Koreez />;

      // Օգնություն
      case 'faq':
        return <Faq />;
      case 'device-settings':
        return <DeviceSettings />;
      case 'customer-service':
        return <CustomerService />;
      case 'ussd':
        return <Ussd />;

      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <CartProvider>
      <div className="flex flex-col min-h-screen bg-gray-50">
        <Header setCurrentPage={setCurrentPage} />
        <main className="flex-grow">
          {renderPage()}
        </main>
        <Footer setCurrentPage={setCurrentPage} />
      </div>
    </CartProvider>
  );
}
