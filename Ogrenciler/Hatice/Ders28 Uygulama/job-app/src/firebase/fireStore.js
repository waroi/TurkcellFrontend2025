import { addDoc, collection, query, where } from "firebase/firestore";
import { db } from "./firebase/firebaseConfig";
import { doc, getDoc, getDocs, deleteDoc, updateDoc } from "firebase/firestore";
import { auth } from "../firebase/firebase";

const approved = []
const canceled = []
const progress = []

setDoc(doc(collection(db, "applications"), "kW0oGpik6LcikXCJfJ2p"),
 {
    applications : [approved,canceled,progress]

 }
)