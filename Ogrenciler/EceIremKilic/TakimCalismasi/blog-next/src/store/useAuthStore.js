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

      const defaultAvatarUrl =
        "https://p16-common-sign-sg.tiktokcdn-us.com/tos-alisg-avt-0068/dd1a8f11d81bfce05f7811b8f74ba955~tplv-tiktokx-cropcenter:100:100.jpeg?dr=9640&refresh_token=78d2dd18&x-expires=1742022000&x-signature=J9ChCtVvW3el/XrMT3ScFy73njU=&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=b59d6b55&idc=useast5";

      await setDoc(doc(db, "users", user.uid), {
        fullName: fullName,
        email: user.email,
        avatar: defaultAvatarUrl,
        createdAt: new Date(),
      });

      console.log("Kullanıcı başarıyla kaydedildi:", user);

      set({
        user: {
          uid: user.uid,
          email: user.email,
          fullName,
          avatar: defaultAvatarUrl,
        },
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
          user: {
            uid: user.uid,
            email: user.email,
            fullName: userSnapshot.data().fullName,
            avatar: userSnapshot.data().avatarUrl,
          },
          loading: false,
        });
      } else {
        set({
          user: {
            uid: user.uid,
            email: user.email,
            avatar:
              "https://p16-common-sign-sg.tiktokcdn-us.com/tos-alisg-avt-0068/dd1a8f11d81bfce05f7811b8f74ba955~tplv-tiktokx-cropcenter:100:100.jpeg?dr=9640&refresh_token=78d2dd18&x-expires=1742022000&x-signature=J9ChCtVvW3el/XrMT3ScFy73njU=&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=b59d6b55&idc=useast5",
          },
          loading: false,
        });
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
