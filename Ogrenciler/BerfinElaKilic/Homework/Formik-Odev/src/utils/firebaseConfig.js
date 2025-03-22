// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBeJmpspaHApfrRUFISG5sA-azP2eylBc8",
  authDomain: "hr-portal-c120a.firebaseapp.com",
  projectId: "hr-portal-c120a",
  storageBucket: "hr-portal-c120a.firebasestorage.app",
  messagingSenderId: "906564024360",
  appId: "1:906564024360:web:116380708117a8bb2a5d1d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
