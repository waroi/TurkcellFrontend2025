import { create } from 'zustand';
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyC_4ypNnyS9yoABCNhjbkoB6b0wyA_IkNU",
  authDomain: "car-rental-app-85606.firebaseapp.com",
  projectId: "car-rental-app-85606",
  storageBucket: "car-rental-app-85606.firebasestorage.app",
  messagingSenderId: "171938002059",
  appId: "1:171938002059:web:7d6c1c6d1b86ba9e90108e",
  measurementId: "G-4J2V5FW0BW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const useUserStore = create((set) => ({
    user: {},
    fetchUser: async () => {
        const userRef = doc(db, "user", "vls8uXOxKhzFnQNXk6Ps"); // users koleksiyonundaki ID
        const userSnap = await getDoc(userRef);
        set({ user: userSnap.data() }); // Firestore'dan veriyi çek
        return userSnap.data()
    }
}));

export default useUserStore;
