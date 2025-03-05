// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.VITE_FIREBASE_API_KEY,
  authDomain: "bookstore-f209d.firebaseapp.com",
  projectId: "bookstore-f209d",
  storageBucket: "bookstore-f209d.firebasestorage.app",
  messagingSenderId: "599558278616",
  appId: "1:599558278616:web:ff5c10a43a3c33406a76ad",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export {app};