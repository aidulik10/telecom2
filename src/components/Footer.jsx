import React from 'react';

export default function Footer({ setCurrentPage }) {
  return (
    <footer className="bg-slate-900 text-white mt-auto py-12 px-4 border-t border-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <h5 className="font-bold text-gray-400 mb-3 text-sm uppercase">Ծառայություններ</h5>
          <ul className="space-y-2 text-sm text-gray-300">
            <li onClick={() => setCurrentPage('mobile')} className="hover:text-white cursor-pointer">Բջջային կապ</li>
            <li onClick={() => setCurrentPage('fixed')} className="hover:text-white cursor-pointer">Տնային ինտերնետ</li>
            <li onClick={() => setCurrentPage('fixed')} className="hover:text-white cursor-pointer">Հեռուստատեսություն</li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-gray-400 mb-3 text-sm uppercase">Ընկերություն</h5>
          <ul className="space-y-2 text-sm text-gray-300">
            <li onClick={() => setCurrentPage('about')} className="hover:text-white cursor-pointer">Մեր մասին</li>
            <li onClick={() => setCurrentPage('news')} className="hover:text-white cursor-pointer">Մամուլի կենտրոն</li>
            <li className="hover:text-white cursor-pointer">Թափուր աշխատատեղեր</li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-gray-400 mb-3 text-sm uppercase">Աջակցություն</h5>
          <ul className="space-y-2 text-sm text-gray-300">
            <li onClick={() => setCurrentPage('support')} className="hover:text-white cursor-pointer">Օգնություն</li>
            <li onClick={() => setCurrentPage('support')} className="hover:text-white cursor-pointer">Վաճառքի գրասենյակներ</li>
            <li className="hover:text-white cursor-pointer">Կոնտակտային տվյալներ</li>
          </ul>
        </div>
        <div>
          <h5 className="font-bold text-gray-400 mb-3 text-sm uppercase">Հավելվածներ</h5>
          <ul className="space-y-2 text-sm text-gray-300">
            <li onClick={() => setCurrentPage('profile')} className="hover:text-white cursor-pointer">Անձնական հաշիվ</li>
            <li className="hover:text-white cursor-pointer">Քաշել My Team</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 pt-6 border-t border-slate-800 text-center text-xs text-gray-500">
         {new Date().getFullYear()} Телеком Провайдер Шаблон. Все права защищены.
      </div>
    </footer>
  );
}