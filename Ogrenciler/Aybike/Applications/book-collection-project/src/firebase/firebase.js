
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyCw0rVTZrBPk16BgH3eP3G1feSub_vGpSo",
  authDomain: "library-app-b276f.firebaseapp.com",
  projectId: "library-app-b276f",
  storageBucket: "library-app-b276f.firebasestorage.app",
  messagingSenderId: "46881622077",
  appId: "1:46881622077:web:8ba16f38d2c5fe58f84254",
  measurementId: "G-S9XZWVHYB7"
};

let app;
if (getApps().length === 0) {

  app = initializeApp(firebaseConfig);
} else {

  app = getApp();
}


const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);


export { app, auth, db, analytics };





