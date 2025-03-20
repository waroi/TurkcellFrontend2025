import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDXKaKwWSNi_djK2uZWC3_Yd7P0gFbUPwE",
  authDomain: "formik-app-fb447.firebaseapp.com",
  projectId: "formik-app-fb447",
  storageBucket: "formik-app-fb447.firebasestorage.app",
  messagingSenderId: "227114621197",
  appId: "1:227114621197:web:2fdce395fb9d5492fb7844",
  measurementId: "G-KSXCL05RDZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
