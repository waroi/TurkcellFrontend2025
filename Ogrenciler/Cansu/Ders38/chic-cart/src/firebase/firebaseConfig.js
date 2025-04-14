"use client";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC4ec4Z3dVgU8Z-GBzEMtgU_c6yrxqThYk",
  authDomain: "tendora-34fdd.firebaseapp.com",
  projectId: "tendora-34fdd",
  storageBucket: "tendora-34fdd.firebasestorage.app",
  messagingSenderId: "603684878795",
  appId: "1:603684878795:web:b625151efbf9aed5b4de4e",
  measurementId: "G-6GPG3771DR"
};


let app, analytics, auth, db;

if (typeof window !== "undefined") {
  app = initializeApp(firebaseConfig);
  analytics = getAnalytics(app);
  auth = getAuth(app);
  db = getFirestore(app);
}

export { auth, db };
