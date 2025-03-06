
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs, addDoc, deleteDoc, doc, query, orderBy, where} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCXFkP5MT5-gNmpXXc-6l_xY_Kk81f-tog",
  authDomain: "bookapp-b14f0.firebaseapp.com",
  projectId: "bookapp-b14f0",
  storageBucket: "bookapp-b14f0.firebasestorage.app",
  messagingSenderId: "283385945405",
  appId: "1:283385945405:web:a67772b8c0b2c4e395f954"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
export { auth, db, collection, getDocs, addDoc, deleteDoc, doc, query, orderBy, where };