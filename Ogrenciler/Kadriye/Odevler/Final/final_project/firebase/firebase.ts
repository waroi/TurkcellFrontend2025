import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDdrDVYXJtN-zcvk2J-jV-OzQCPKZts220",
    authDomain: "frontend-bootcamp-final.firebaseapp.com",
    projectId: "frontend-bootcamp-final",
    storageBucket: "frontend-bootcamp-final.firebasestorage.app",
    messagingSenderId: "1098244604840",
    appId: "1:1098244604840:web:ae8b11306b33181e98939d",
    measurementId: "G-HEFHWQ7VJQ"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, app, db };
