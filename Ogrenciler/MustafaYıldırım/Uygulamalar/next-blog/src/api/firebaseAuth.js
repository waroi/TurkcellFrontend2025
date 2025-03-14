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
  apiKey: "AIzaSyBDb2IM0hagH2x6mAp0mBIviAzkdW7G8Pk",
  authDomain: "melam-1433d.firebaseapp.com",
  projectId: "melam-1433d",
  storageBucket: "melam-1433d.firebasestorage.app",
  messagingSenderId: "150330077437",
  appId: "1:150330077437:web:a9c58fc98fd698dec7ce94",
  measurementId: "G-D2ZW09JT6G",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
