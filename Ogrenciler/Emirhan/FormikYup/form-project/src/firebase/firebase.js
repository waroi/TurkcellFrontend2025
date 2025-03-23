import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBKcEV_MvDJDyNsIADrF3x3kTwOJlJaE_A",
  authDomain: "zencode-3785e.firebaseapp.com",
  projectId: "zencode-3785e",
  storageBucket: "zencode-3785e.appspot.com", 
  messagingSenderId: "428656818463",
  appId: "1:428656818463:web:448b4d29e541c4f919d82a",
  measurementId: "G-J3Q77YS3Q4",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app); 

export default app;

