import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyChQ5GT-nEtBXFh84l5wVu5WfoQqOTQecM",
    authDomain: "formikapp-8593a.firebaseapp.com",
    projectId: "formikapp-8593a",
    storageBucket: "formikapp-8593a.firebasestorage.app",
    messagingSenderId: "294081387801",
    appId: "1:294081387801:web:ee405ea71da2aa5900f988",
    measurementId: "G-LN3N1H8GRV"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, app, db };
