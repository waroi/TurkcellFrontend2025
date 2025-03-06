import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const app = initializeApp({
  apiKey: "AIzaSyCEH-o7XYTLPB4tJ3Kc4SKsYKzxtB1pWAg",
  authDomain: "turkcell-library.firebaseapp.com",
  projectId: "turkcell-library",
  storageBucket: "turkcell-library.firebasestorage.app",
  messagingSenderId: "200620714261",
  appId: "1:200620714261:web:6f0641718d7a92d57f611c",
});

const auth = getAuth(app);

export function register(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}

export function logout() {
  return auth.signOut();
}

export function TEST() {
  console.log(app);
  console.log(auth);
}
