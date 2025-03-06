// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCw0rVTZrBPk16BgH3eP3G1feSub_vGpSo",
  authDomain: "library-app-b276f.firebaseapp.com",
  projectId: "library-app-b276f",
  storageBucket: "library-app-b276f.firebasestorage.app",
  messagingSenderId: "46881622077",
  appId: "1:46881622077:web:8ba16f38d2c5fe58f84254",
  measurementId: "G-S9XZWVHYB7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const Auth =getAuth (app);
export {app, auth };