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

const app = initializeApp({
  apiKey: "AIzaSyCEH-o7XYTLPB4tJ3Kc4SKsYKzxtB1pWAg",
  authDomain: "turkcell-library.firebaseapp.com",
  projectId: "turkcell-library",
  storageBucket: "turkcell-library.firebasestorage.app",
  messagingSenderId: "200620714261",
  appId: "1:200620714261:web:6f0641718d7a92d57f611c",
});

const auth = getAuth(app);

const database = getFirestore(app);

export function register(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}

export function login(email, password, remember) {
  return signInWithEmailAndPassword(auth, email, password).then(
    (credendials) => {
      if (remember) localStorage.setItem("user", credendials.user.uid);
      return credendials;
    }
  );
}

export function logout() {
  localStorage.removeItem("user");
  return auth.signOut();
}

export function getBooks(user) {
  return getDocs(collection(database, user)).then((snapshot) =>
    snapshot.docs.map((book) => {
      return { ...book.data(), id: book.id };
    })
  );
}

export function addBook(user, book) {
  return setDoc(doc(collection(database, user), book.id), book);
}

export function editBook(user, book) {
  return updateDoc(doc(database, user, book.id), book);
}

export function deleteBook(user, id) {
  return deleteDoc(doc(database, user, id));
}
