import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: 'bookstoreturkcell.firebaseapp.com',
  projectId: 'bookstoreturkcell',
  storageBucket: 'bookstoreturkcell.firebasestorage.app',
  messagingSenderId: '370322976078',
  appId: '1:370322976078:web:9e5fc31b0874276fe6021f',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
