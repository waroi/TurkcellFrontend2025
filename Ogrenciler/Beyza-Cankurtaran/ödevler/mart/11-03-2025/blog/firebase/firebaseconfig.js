import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyCR06AEjrfVRPcGFUZ3FpS84ZJyJlJLG34',
  authDomain: 'blog-9d400.firebaseapp.com',
  projectId: 'blog-9d400',
  storageBucket: 'blog-9d400.firebasestorage.app',
  messagingSenderId: '440497353183',
  appId: '1:440497353183:web:c2097b405af4bcbe65146a',
  measurementId: 'G-8VJSZPF0X4',
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth();
