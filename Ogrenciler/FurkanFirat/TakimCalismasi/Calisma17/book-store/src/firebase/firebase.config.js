// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC351ItKlMSMyxekpnwJNC2rgKhIDGd5mQ",
  authDomain: "bookstoreturkcell.firebaseapp.com",
  projectId: "bookstoreturkcell",
  storageBucket: "bookstoreturkcell.firebasestorage.app",
  messagingSenderId: "370322976078",
  appId: "1:370322976078:web:9e5fc31b0874276fe6021f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
