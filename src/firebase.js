// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDUdCo3j7VOXoJMwwW18eDgnEqFPuGUHFk",
  authDomain: "team-telecom2.firebaseapp.com",
  projectId: "team-telecom2",
  storageBucket: "team-telecom2.firebasestorage.app",
  messagingSenderId: "745922149738",
  appId: "1:745922149738:web:f0e92f91a9dd5fd5c37913"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
