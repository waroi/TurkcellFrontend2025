import { initializeApp } from "firebase/app";
import games from "../Store/games";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import {
  getFirestore,
  collection,
  doc,
  setDoc,
} from "firebase/firestore";



const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
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

export async function login(email, password, navigate) {

  return signInWithEmailAndPassword(auth, email, password).then(
    (credentials) => {
      console.log(collection(db, credentials.user.uid))
      localStorage.setItem("user", credentials.user.uid);
      navigate("/carstore");
      return credentials;
    }
  ).catch((err)=>alert(err));
}

export function writeData(){
    setDoc(doc(db, "games", "vwSZNuVZetl6fwPEIrkE"), { games });
  }
  

export function logout() {
  localStorage.removeItem("user");
  return auth.signOut();
}

