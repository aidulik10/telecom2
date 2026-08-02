import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Твои конфигурационные данные из Firebase Console
const firebaseConfig = {
  apiKey: "AIzaSyDUdCo3j7VOXoJMwwW18eDgnEqFPuGUHFk",
  authDomain: "team-telecom2.firebaseapp.com",
  projectId: "team-telecom2",
  storageBucket: "team-telecom2.firebasestorage.app",
  messagingSenderId: "745922149738",
  appId: "1:745922149738:web:f0e92f91a9dd5fd5c37913",
  measurementId: "G-5ZQ2B6D4L9"
};

// Инициализация Firebase
const app = initializeApp(firebaseConfig);

// Экспортируем авторизацию и Realtime Database
export const auth = getAuth(app);
export const database = getDatabase(app);