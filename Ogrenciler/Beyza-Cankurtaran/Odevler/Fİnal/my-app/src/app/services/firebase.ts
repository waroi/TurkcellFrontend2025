import { initializeApp ,getApps} from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9RiPieNSTCKSPAeJygJjjf8tIZPQLHxY",
  authDomain: "final-ee629.firebaseapp.com",
  projectId: "final-ee629",
  storageBucket: "final-ee629.firebasestorage.app",
  messagingSenderId: "191403400190",
  appId: "1:191403400190:web:301ad12540f384e908feaf"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth(app);
export const db = getFirestore(app);
export { app, auth };