// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpBz2Um_r5w4bh6fqYXmnt_0qoW_zXm5o",
  authDomain: "library-8c4de.firebaseapp.com",
  projectId: "library-8c4de",
  storageBucket: "library-8c4de.firebasestorage.app",
  messagingSenderId: "25409662930",
  appId: "1:25409662930:web:eef31e8b0813401bb7e20b",
  measurementId: "G-4JJ69300PW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export default auth