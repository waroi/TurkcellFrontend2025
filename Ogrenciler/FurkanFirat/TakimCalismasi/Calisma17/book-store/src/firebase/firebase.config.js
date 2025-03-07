import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "bookstoreturkcell.firebaseapp.com",
  projectId: "bookstoreturkcell",
  storageBucket: "bookstoreturkcell.firebasestorage.app",
  messagingSenderId: "370322976078",
  appId: "1:370322976078:web:9e5fc31b0874276fe6021f",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
