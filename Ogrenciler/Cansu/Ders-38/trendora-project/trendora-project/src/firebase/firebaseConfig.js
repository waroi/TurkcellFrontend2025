
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyC4ec4Z3dVgU8Z-GBzEMtgU_c6yrxqThYk",
  authDomain: "tendora-34fdd.firebaseapp.com",
  projectId: "tendora-34fdd",
  storageBucket: "tendora-34fdd.firebasestorage.app",
  messagingSenderId: "603684878795",
  appId: "1:603684878795:web:b625151efbf9aed5b4de4e",
  measurementId: "G-6GPG3771DR"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);