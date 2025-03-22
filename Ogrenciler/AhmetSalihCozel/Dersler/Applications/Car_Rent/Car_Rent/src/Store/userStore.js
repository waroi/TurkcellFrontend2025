import { create } from 'zustand';
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const useUserStore = create((set) => ({
    user: {},
    cars: [],
    fetchUser: async () => {
        const userRef = doc(db, "user", "vls8uXOxKhzFnQNXk6Ps");
        const userSnap = await getDoc(userRef);
        set({ user: userSnap.data() });
        return userSnap.data()
    },
    getCars: async () => {
      const docRef = doc(db, "cars", "kW0oGpik6LcikXCJfJ2p");
      const docSnap = await getDoc(docRef);
      set({ cars: docSnap.data() || [] });
    }
}));

export default useUserStore;
