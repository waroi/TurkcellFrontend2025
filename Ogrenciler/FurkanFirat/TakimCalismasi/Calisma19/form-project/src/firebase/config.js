import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyAmh81Jxlu7hxSy6GFoWkd_eNgyWO2tpgg',
  authDomain: 'form-project-532f3.firebaseapp.com',
  projectId: 'form-project-532f3',
  storageBucket: 'form-project-532f3.firebasestorage.app',
  messagingSenderId: '793791109769',
  appId: '1:793791109769:web:7b7b80b3d89d68d8e28458',
};

export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth();
