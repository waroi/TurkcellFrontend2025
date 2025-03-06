import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, writeBatch, collection, doc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import array from "../data.json";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "bookstoreturkcell.firebaseapp.com",
  projectId: "bookstoreturkcell",
  storageBucket: "bookstoreturkcell.firebasestorage.app",
  messagingSenderId: "370322976078",
  appId: "1:370322976078:web:9e5fc31b0874276fe6021f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const batch = writeBatch(db);

array.forEach((item) => {
  const docRef = doc(collection(db, "books"));
  batch.set(docRef, item);
});

batch.commit();

console.log("123");

export { app, auth, db };
