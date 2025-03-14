import { create } from "zustand";
import { auth, db } from "../firebase_config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { setDoc, doc, getDoc } from "firebase/firestore";

const useAuthStore = create((set) => ({
  user: null,
  loading: false,
  error: null,
  setUser: (user) => set({ user }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),

  signup: async (email, password, fullName) => {
    set({ loading: true, error: null });
    try {
      console.log("Kayıt e-postası:", email);
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        fullName: fullName,
        email: user.email,
        createdAt: new Date(),
      });

      console.log("Kullanıcı başarıyla kaydedildi:", user);

      set({
        user: { uid: user.uid, email: user.email, fullName },
        loading: false,
      });
    } catch (error) {
      console.error("Signup hatası:", error.message);
      set({ error: error.message, loading: false });
    }
  },

  login: async (email, password) => {
    set({ loading: true, error: null });
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      const userDocRef = doc(db, "users", user.uid);
      const userSnapshot = await getDoc(userDocRef);

      if (userSnapshot.exists()) {
        set({
          user: { uid: user.uid, email: user.email, ...userSnapshot.data() },
          loading: false,
        });
      } else {
        set({ user: { uid: user.uid, email: user.email }, loading: false });
      }
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },

  signout: async () => {
    set({ loading: true, error: null });
    try {
      await signOut(auth);
      set({ user: null, loading: false });
    } catch (error) {
      set({ error: error.message, loading: false });
    }
  },
}));

export default useAuthStore;
