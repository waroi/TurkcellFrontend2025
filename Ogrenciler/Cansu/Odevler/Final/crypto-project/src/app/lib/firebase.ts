import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyD8Egf09nTArY6h0Ya7jQK0oJTnJhF50VU",
  authDomain: "crypto-change-d3d37.firebaseapp.com",
  projectId: "crypto-change-d3d37",
  storageBucket: "crypto-change-d3d37.firebasestorage.app",
  messagingSenderId: "783483461844",
  appId: "1:783483461844:web:ce1f36e44f774e23555b41",
  measurementId: "G-4F370DHBYK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Auth
export const auth = getAuth(app);

// Firebase Analytics only for client-side (browser)
if (typeof window !== "undefined") {
  import("firebase/analytics").then(({ getAnalytics }) => {
    const analytics = getAnalytics(app);
    // Firebase Analytics burada kullanılır
  }).catch((error) => {
    console.error("Firebase Analytics yükleme hatası:", error);
  });
}
export { app };