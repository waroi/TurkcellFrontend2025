import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAY4Ls6IrpvcR_wvkDtKgGDnh7M0WVQeRM",
  authDomain: "crypto-web-3ce4b.firebaseapp.com",
  projectId: "crypto-web-3ce4b",
  storageBucket: "crypto-web-3ce4b.appspot.com",
  messagingSenderId: "1084644544681",
  appId: "1:1084644544681:web:d3cdcc3222a6901e8419b8",
  measurementId: "G-7RPJT82227"
};

const app = initializeApp(firebaseConfig);

let analytics: ReturnType<typeof getAnalytics> | undefined;

if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

export { app, analytics };
