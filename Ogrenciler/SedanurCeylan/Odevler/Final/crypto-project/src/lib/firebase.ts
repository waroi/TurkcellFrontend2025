
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB13P6jVzi0RriSj6LajMxcDB7z8bvVQ2E",
    authDomain: "cyripto-4c48e.firebaseapp.com",
    projectId: "cyripto-4c48e",
    storageBucket: "cyripto-4c48e.firebasestorage.app",
    messagingSenderId: "724181951061",
    appId: "1:724181951061:web:d243a588b59bd2cbfeeadc",
    measurementId: "G-FZT5ECWZPX",
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
