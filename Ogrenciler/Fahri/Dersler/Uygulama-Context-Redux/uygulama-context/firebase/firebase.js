import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAbxDZ_mWhcogSdnynuAH2XmjUw0XMyyhg",
  authDomain: "book-app-5a486.firebaseapp.com",
  projectId: "book-app-5a486",
  storageBucket: "book-app-5a486.firebasestorage.app",
  messagingSenderId: "911756959339",
  appId: "1:911756959339:web:2bdaf7cf35ca18af135b2e",
  measurementId: "G-RJDZKD43X6",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, app, db };
