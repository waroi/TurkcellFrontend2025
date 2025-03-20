// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCei3BgwYPGHWaNS5Zzmx6l98I4uOjW6Zg",
  authDomain: "resume-app-b7073.firebaseapp.com",
  projectId: "resume-app-b7073",
  storageBucket: "resume-app-b7073.firebasestorage.app",
  messagingSenderId: "322308604473",
  appId: "1:322308604473:web:7397a38877318a79ffc3e8",
  measurementId: "G-J107G4LFCK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
