import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBxwBOvRg63rCnSyqaywk-5dQPRUjbCn2k",
  authDomain: "form-32f02.firebaseapp.com",
  projectId: "form-32f02",
  storageBucket: "form-32f02.firebasestorage.app",
  messagingSenderId: "81934496531",
  appId: "1:81934496531:web:9ff7a434f18602d18d20e6"
};

const app = initializeApp(firebaseConfig);
export default app;
export const auth = getAuth(app);
export const db = getFirestore(app);

