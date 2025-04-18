import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDeFlyGmus-ETCP8BMy_DRZLyacyhdd980",
    authDomain: "denemeauth-17c98.firebaseapp.com",
    projectId: "denemeauth-17c98",
    databaseURL: "https://denemeauth-17c98-default-rtdb.firebaseio.com",
    storageBucket: "denemeauth-17c98",
    messagingSenderId: "808530128192",
    appId: "1:808530128192:web:ab611985d1a27b5cbc5ea5",
    measurementId: "G-QDMMQXZYCL"
}

const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
export const db = getFirestore(app)
export default app