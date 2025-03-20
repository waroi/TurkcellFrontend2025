import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD9yKXHUgUygpGrkhAMijrua7V7qvG6bM8",
  authDomain: "job-app-b1e9c.firebaseapp.com",
  projectId: "job-app-b1e9c",
  storageBucket: "job-app-b1e9c.firebasestorage.app",
  messagingSenderId: "657180557289",
  appId: "1:657180557289:web:5d9bea942c44077b2ed578"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


