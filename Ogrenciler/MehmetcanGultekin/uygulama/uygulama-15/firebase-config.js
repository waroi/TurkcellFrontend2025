// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMaP86S-qVKfv8IJ-OZbHe8K6H4RvoQf8",
  authDomain: "bookstore-f209d.firebaseapp.com",
  projectId: "bookstore-f209d",
  storageBucket: "bookstore-f209d.firebasestorage.app",
  messagingSenderId: "599558278616",
  appId: "1:599558278616:web:ff5c10a43a3c33406a76ad",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore();
// Initialize Firebase
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export { auth, db };
