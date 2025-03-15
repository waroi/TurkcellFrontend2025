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
  apiKey: "AIzaSyC_4ypNnyS9yoABCNhjbkoB6b0wyA_IkNU",
  authDomain: "car-rental-app-85606.firebaseapp.com",
  projectId: "car-rental-app-85606",
  storageBucket: "car-rental-app-85606.firebasestorage.app",
  messagingSenderId: "171938002059",
  appId: "1:171938002059:web:7d6c1c6d1b86ba9e90108e",
  measurementId: "G-4J2V5FW0BW"
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