import React from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from './firebase';

const ProtectedRoute = ({ children }) => {
  const user = auth.currentUser;

  if (!user) {
    // Если пользователь не авторизован, перенаправляем на страницу профиля/логина
    return <Navigate to="/profile" replace />;
  }

  return children;
};

export default ProtectedRoute;