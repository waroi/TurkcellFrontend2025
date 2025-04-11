// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9mWrzqSs0Yov-7pAK_BV3_KXaAlxC-Z8",
  authDomain: "dtictactoe-a97d2.firebaseapp.com",
  projectId: "dtictactoe-a97d2",
  storageBucket: "dtictactoe-a97d2.firebasestorage.app",
  messagingSenderId: "439054483305",
  appId: "1:439054483305:web:a19fb1cc6bcdb7904607f8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
