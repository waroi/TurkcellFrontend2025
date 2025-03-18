import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD9cD1VsfFZpT-ctqNyiZ-suowRN_1OX0c",
  authDomain: "blog-2217a.firebaseapp.com",
  projectId: "blog-2217a",
  storageBucket: "blog-2217a.firebasestorage.app",
  messagingSenderId: "557088850004",
  appId: "1:557088850004:web:cea7d026d46aa4cf07edc1",
  measurementId: "G-K6T9V2X67H"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export default app;