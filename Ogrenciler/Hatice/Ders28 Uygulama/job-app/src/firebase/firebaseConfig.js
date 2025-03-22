import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD9yKXHUgUygpGrkhAMijrua7V7qvG6bM8",
  authDomain: "job-app-b1e9c.firebaseapp.com",
  projectId: "job-app-b1e9c",
  storageBucket: "job-app-b1e9c.firebasestorage.app",
  messagingSenderId: "657180557289",
  appId: "1:657180557289:web:5d9bea942c44077b2ed578"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


export { auth, app, db };