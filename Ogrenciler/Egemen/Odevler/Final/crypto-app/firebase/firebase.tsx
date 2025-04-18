import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAy2vGB4eZPQy8EvNZKAw0iXTHyjYWqQRQ",
  authDomain: "crypto-app-19df5.firebaseapp.com",
  projectId: "crypto-app-19df5",
  storageBucket: "crypto-app-19df5.firebasestorage.app",
  messagingSenderId: "480821333006",
  appId: "1:480821333006:web:409e72c90d55c8d445805f",
  measurementId: "G-P1NXM9YEWZ",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, app, db };
