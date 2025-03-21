import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBKcEV_MvDJDyNsIADrF3x3kTwOJlJaE_A",
  authDomain: "zencode-3785e.firebaseapp.com",
  projectId: "zencode-3785e",
  storageBucket: "zencode-3785e.firebasestorage.app",
  messagingSenderId: "428656818463",
  appId: "1:428656818463:web:448b4d29e541c4f919d82a",
  measurementId: "G-J3Q77YS3Q4",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
const auth = getAuth(app);

export default app;
