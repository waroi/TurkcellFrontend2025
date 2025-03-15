// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_4ypNnyS9yoABCNhjbkoB6b0wyA_IkNU",
  authDomain: "car-rental-app-85606.firebaseapp.com",
  projectId: "car-rental-app-85606",
  storageBucket: "car-rental-app-85606.firebasestorage.app",
  messagingSenderId: "171938002059",
  appId: "1:171938002059:web:7d6c1c6d1b86ba9e90108e",
  measurementId: "G-4J2V5FW0BW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);