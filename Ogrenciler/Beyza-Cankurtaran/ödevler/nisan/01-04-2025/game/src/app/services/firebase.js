import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDqMlrR_2Gjg1gJzIy8bO-1UJIN9riKyGo",
    authDomain: "game-99aaf.firebaseapp.com",
    databaseURL: "https://game-99aaf-default-rtdb.firebaseio.com/",
    projectId: "game-99aaf",
    storageBucket: "game-99aaf.firebasestorage.app",
    messagingSenderId: "187850600098",
    appId: "1:187850600098:web:00fdd57f34841ddc0571fb"
  };
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const db = getFirestore(app);
export const auth = getAuth(app);

const realtimeDb = getDatabase(app);
export {realtimeDb}; 
export default app;