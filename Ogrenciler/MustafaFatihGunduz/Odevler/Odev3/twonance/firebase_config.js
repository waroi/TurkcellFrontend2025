import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBSdvJYSTz0KwxQSYkytOe8C_cEAUfPFyw",
  authDomain: "twonance.firebaseapp.com",
  projectId: "twonance",
  storageBucket: "twonance.firebasestorage.app",
  messagingSenderId: "656185426216",
  appId: "1:656185426216:web:3f44065749475cf525901d",
  measurementId: "G-HCQSNE56RD"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);