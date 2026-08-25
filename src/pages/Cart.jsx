import React from 'react';
import { ShoppingCart, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function Cart({ setCurrentPage }) {
  const { cartItems, removeFromCart, totalCount } = useCart();

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-black text-[#004B6E] mb-6">
        Ձեր զամբյուղը {totalCount > 0 && `(${totalCount})`}
      </h1>

      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center py-20 bg-white rounded-xl border border-gray-200 shadow-sm">
          <ShoppingCart size={48} className="text-gray-300 mb-4" />
          <p className="text-gray-500 font-medium mb-6">Ձեր զամբյուղը դատարկ է</p>
          <button
            onClick={() => setCurrentPage('devices')}
            className="bg-[#004B6E] text-white font-bold px-6 py-2.5 rounded-lg hover:opacity-90 transition-opacity"
          >
            Անցնել խանութ
          </button>
        </div>
      ) : (
        <ul className="space-y-4">
          {cartItems.map((item, idx) => (
            <li key={idx} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-center gap-4">
              <img src={item.image} alt={item.title} className="w-20 h-20 object-contain" />
              <div className="flex-grow">
                <p className="font-bold text-slate-800">{item.title}</p>
                <p className="text-sm text-gray-500">Քանակ՝ {item.quantity}</p>
                <p className="font-black text-slate-900">{item.price}</p>
              </div>
              <button
                onClick={() => removeFromCart(item.title)}
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <Trash2 size={20} />
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}