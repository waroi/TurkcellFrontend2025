import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  getDoc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD9yKXHUgUygpGrkhAMijrua7V7qvG6bM8",
  authDomain: "job-app-b1e9c.firebaseapp.com",
  projectId: "job-app-b1e9c",
  storageBucket: "job-app-b1e9c.firebasestorage.app",
  messagingSenderId: "657180557289",
  appId: "1:657180557289:web:5d9bea942c44077b2ed578"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


export { auth, app, db };

export function getUser(user) {
  return getDoc(doc(database, "users", user)).then((snapshot) =>
    snapshot.data()
  );
}

export function getJobs() {
  return getDocs(collection(database, "jobs")).then((snapshot) =>
    snapshot.docs
      .map((blog) => ({ ...blog.data(), id: blog.id }))
      .sort((current, next) => next.date - current.date)
  );
}

export function getJob(id) {
  return getDoc(doc(database, "jobs", id)).then((snapshot) => ({
    ...snapshot.data(),
    id: snapshot.id,
  }));
}

export function addJob(blog) {
  return addDoc(collection(database, "jobs"), blog).then(
    (response) => response.id
  );
}

export function deleteJob(id) {
  return deleteDoc(doc(database, "jobs", id));
}