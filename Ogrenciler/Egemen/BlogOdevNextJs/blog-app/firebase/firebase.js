import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCbenUkXz9-tJgfLHmjfjXSCxQMUOOzCmE",
  authDomain: "blog-app-46c0c.firebaseapp.com",
  projectId: "blog-app-46c0c",
  storageBucket: "blog-app-46c0c.firebasestorage.app",
  messagingSenderId: "886658156542",
  appId: "1:886658156542:web:351d149950f990ce6222af",
  measurementId: "G-GHVY74QQYT",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, app, db };
