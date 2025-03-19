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
  apiKey: "AIzaSyBw0oe93vfQmjJaG7pTXOEU9Fwm2IXeSCQ",
  authDomain: "blog-33da4.firebaseapp.com",
  projectId: "blog-33da4",
  storageBucket: "blog-33da4.firebasestorage.app",
  messagingSenderId: "971967405029",
  appId: "1:971967405029:web:7b6374d0af6070ccf92d0c",
});

const auth = getAuth(app);
const database = getFirestore(app);

//* User ====================================================================================================

export function register(email, password, name, profile) {
  return createUserWithEmailAndPassword(auth, email, password).then(
    (response) => setUser(response.user.uid, name, profile)
  );
}

export function setUser(id, name, profile) {
  return setDoc(doc(database, "users", id), {
    id,
    name,
    profile,
  }).then(() => id);
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password).then(
    (credendials) => credendials.user.uid
  );
}

export function logout() {
  return auth.signOut();
}

export function getUser(user) {
  return getDoc(doc(database, "users", user)).then((snapshot) =>
    snapshot.data()
  );
}

//* Blog ====================================================================================================

export function getBlogs() {
  return getDocs(collection(database, "blogs")).then((snapshot) =>
    snapshot.docs
      .map((blog) => ({ ...blog.data(), id: blog.id }))
      .sort((current, next) => next.date - current.date)
  );
}

export function getBlog(id) {
  return getDoc(doc(database, "blogs", id)).then((snapshot) => ({
    ...snapshot.data(),
    id: snapshot.id,
  }));
}

export function addBlog(blog) {
  return addDoc(collection(database, "blogs"), blog).then(
    (response) => response.id
  );
}

export function editBlog(blog) {
  return updateDoc(doc(database, "blogs", blog.id), blog);
}

export function deleteBlog(id) {
  return deleteDoc(doc(database, "blogs", id));
}
