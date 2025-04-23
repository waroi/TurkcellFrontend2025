import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAwOutYL7cPeCoLNIBDWDelUiLyyDomXqI",
  authDomain: "coin-market-70fc2.firebaseapp.com",
  projectId: "coin-market-70fc2",
  storageBucket: "coin-market-70fc2.firebasestorage.app",
  messagingSenderId: "745715978839",
  appId: "1:745715978839:web:6ce1929bc69598a4ca4912"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };