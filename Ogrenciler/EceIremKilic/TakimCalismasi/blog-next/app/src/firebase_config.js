import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyDufYBeA1KbGKI5pW4D09FpoGvXSt22zBI",
  authDomain: "mefturizm.firebaseapp.com",
  projectId: "mefturizm",
  storageBucket: "mefturizm.firebasestorage.app",
  messagingSenderId: "505692906742",
  appId: "1:505692906742:web:c049a3846c29426bd978d7"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);