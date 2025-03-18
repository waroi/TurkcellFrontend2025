import { initializeApp } from "firebase/app";

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
import { redirect } from "next/navigation";

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

export async function register(formData) {
  const data = {
    email: formData.get("email"),
		password: formData.get("password"),
  }
  const user = await createUserWithEmailAndPassword(auth, data.email, data.password);
  setDoc(doc(collection(db, "users"), user.user.uid), {blogs:[]})
  redirect("/");
}

export async function login(email, password, remember, navigate) {

  return signInWithEmailAndPassword(auth, email, password).then(
    (credentials) => {
      console.log(collection(db, credentials.user.uid))
      if (remember) localStorage.setItem("user", credentials.user.uid);
      redirect("/");
      return credentials;
    }
  ).catch((err)=>alert(err));
}

// setDoc(doc(collection(db, "cars"), "kW0oGpik6LcikXCJfJ2p"), cars)


export async function logout() {
  localStorage.removeItem("user");
  return auth.signOut();
}

