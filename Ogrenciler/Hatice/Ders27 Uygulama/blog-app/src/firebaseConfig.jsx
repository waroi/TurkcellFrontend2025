import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBjkQmkCEBUa9J9dg6pgNM2e8ZQog3EW8c",
  authDomain: "blog-project-284b7.firebaseapp.com",
  projectId: "blog-project-284b7",
  storageBucket: "blog-project-284b7.firebasestorage.app",
  messagingSenderId: "916196174856",
  appId: "1:916196174856:web:5453d42f03e86c7c8535bd"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);