// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import {
  getFirestore,
  collection,
  getDocs,
  doc,
  deleteDoc,
  setDoc,
  updateDoc,
  getDoc,
} from "firebase/firestore";
import cars from "./cars";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export async function register(email, password, name) {
  const user = await createUserWithEmailAndPassword(auth, email, password);
  setDoc(doc(collection(db, "users"), user.user.uid), {rentedCars:[],userName:name})
  console.log(user)
  return user
}

export async function login(email, password, remember, navigate) {

  return signInWithEmailAndPassword(auth, email, password).then(
    (credentials) => {
      console.log(collection(db, credentials.user.uid))
      localStorage.setItem("user", credentials.user.uid);
      navigate("/carstore");
      return credentials;
    }
  ).catch((err)=>alert(err));
}

// setDoc(doc(collection(db, "cars"), "kW0oGpik6LcikXCJfJ2p"), cars)


export function logout() {
  localStorage.removeItem("user");
  return auth.signOut();
}

