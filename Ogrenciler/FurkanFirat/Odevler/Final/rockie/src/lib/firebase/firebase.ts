import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAdVivYHCekFiF-HSa9tyb_GJuiZPkJfVY',
  authDomain: 'upndown-f5cf8.firebaseapp.com',
  projectId: 'upndown-f5cf8',
  storageBucket: 'upndown-f5cf8.firebasestorage.app',
  messagingSenderId: '720504682550',
  appId: '1:720504682550:web:1843f5c9b5e7128874c097',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
