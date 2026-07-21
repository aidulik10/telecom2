import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

// Импорт всех страниц
import Home from './pages/Home';
import MobileServices from './pages/MobileServices';
import FixedServices from './pages/FixedServices';
import Devices from './pages/Devices';
import News from './pages/News';
import About from './pages/About';
import Support from './pages/Support';
import Profile from './pages/Profile';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Логика отображения нужной страницы
  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home setCurrentPage={setCurrentPage} />;
      case 'mobile':
        return <MobileServices />;
      case 'fixed':
        return <FixedServices />;
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
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header setCurrentPage={setCurrentPage} />
      <main className="flex-grow">
        {renderPage()}
      </main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}