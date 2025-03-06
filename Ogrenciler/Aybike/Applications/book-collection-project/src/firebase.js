import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Firebase yapılandırmasını buraya ekle
const firebaseConfig = {
  apiKey: "AIzaSyAbpg0vQ35O4g9kK7_NVbW5p4AQ6R1c-RU",
  authDomain: "my-project-182d7.firebaseapp.com",
  projectId: "my-project-182d7",
  storageBucket: "my-project-182d7.firebasestorage.app",
  messagingSenderId: "22778947805",
  appId: "1:22778947805:web:b58472da1935c314f4d334",
  measurementId: "G-DZBL5RLF49"
};

// Firebase uygulamasını başlat
const app = initializeApp(firebaseConfig);

// Auth ve DB'yi başlat
export const auth = getAuth(app);
export const db = getFirestore(app);
