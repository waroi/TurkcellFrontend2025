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
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export async function register(email, password) {
  const user = await createUserWithEmailAndPassword(auth, email, password);
  setDoc(doc(collection(db, "users"), user.user.uid), {rentedCars:[]})
  console.log(user)
  return user
}

export async function login(email, password, remember) {
  return signInWithEmailAndPassword(auth, email, password).then(
    (credentials) => {
      console.log(collection(db, credentials.user.uid))
      if (remember) localStorage.setItem("user", credentials.user.uid);
      return credentials;
    }
  );
}

export function logout() {
  localStorage.removeItem("user");
  return auth.signOut();
}

// setDoc(userRef, { name: "Ahmet", age: 30 }, { merge: true })
//   .then(() => {
//     console.log("Document successfully written!");
//   })
//   .catch((error) => {
//     console.error("Error writing document: ", error);
//   });
// console.log(userRef)
// setDoc(cityRef, { capital: true }, { merge: true });