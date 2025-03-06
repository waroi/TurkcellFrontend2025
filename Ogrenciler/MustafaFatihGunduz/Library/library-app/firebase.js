import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCbpY9awbFIBhcB45nn6vlZfiaDikV5u0o",
  authDomain: "kitapdunyasi-4853e.firebaseapp.com",
  projectId: "kitapdunyasi-4853e",
  storageBucket: "kitapdunyasi-4853e.appspot.com",
  messagingSenderId: "778458505902",
  appId: "1:778458505902:web:122e1c56a7aeb72a58833f",
  measurementId: "G-W3K46KQGWB",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;
