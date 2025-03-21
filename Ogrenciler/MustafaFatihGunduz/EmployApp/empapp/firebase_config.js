import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyClamsdPRw3r158qATJreSIbG5_KtJhe5s",
  authDomain: "employapp-accc7.firebaseapp.com",
  projectId: "employapp-accc7",
  storageBucket: "employapp-accc7.firebasestorage.app",
  messagingSenderId: "233102192240",
  appId: "1:233102192240:web:cd5060e01c402e1ff64eb5"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app)

export default app;