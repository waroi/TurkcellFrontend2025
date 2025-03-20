import { initializeApp } from "firebase/app";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  getDoc,
  updateDoc,
  setDoc,
} from "firebase/firestore";

const app = initializeApp({
  apiKey: "AIzaSyDMM8W4sM5DnkXwczvtKtJb0kx3Qa8uvL4",
  authDomain: "formik-yup-bbc7d.firebaseapp.com",
  projectId: "formik-yup-bbc7d",
  storageBucket: "formik-yup-bbc7d.firebasestorage.app",
  messagingSenderId: "152546404685",
  appId: "1:152546404685:web:fbcd7a0db185164dceaf04",
});

const auth = getAuth(app);
const database = getFirestore(app);

export function submitForm(form) {
  delete form["email-again"];
  delete form["terms-and-conditions"];
  delete form["kvkk"];
  return addDoc(collection(database, "application-forms"), form);
}
