import { create } from "zustand";
import { auth, db } from "../../firebase_config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { setDoc, doc, getDoc, updateDoc } from "firebase/firestore";

const useAuthStore = create((set) => ({
  user: null,
  loading: true,
  error: null,
  wallet: [],
  totalBalance: 0,
  setWallet: (wallet) => set({ wallet }),
  setTotalBalance: (balance) => set({ totalBalance: balance }),
  setUser: (user) => set({ user }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
  signup: async (email, password, nickName,phone,uidCode) => {
    set({ loading: true, error: null });
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      if (!userCredential || !userCredential.user) {
        throw new Error("User credential or user is undefined.");
      }
      const defaultAvatarUrl =
        "https://p16-common-sign-sg.tiktokcdn-us.com/tos-alisg-avt-0068/dd1a8f11d81bfce05f7811b8f74ba955~tplv-tiktokx-cropcenter:100:100.jpeg?dr=9640&refresh_token=78d2dd18&x-expires=1742022000&x-signature=J9ChCtVvW3el/XrMT3ScFy73njU=&t=4d5b0474&ps=13740610&shp=a5d48078&shcp=b59d6b55&idc=useast5";
      await setDoc(doc(db, "users", user.uid), {
        nickName: nickName,
        email: user.email,
        avatar: defaultAvatarUrl,
        phone : phone,
        uidCode: uidCode,
        createdAt: new Date(),
        wallet: [],
        totalBalance: 0, 
      });

      set({
        user: {
          uid: user.uid,
          email: user.email,
          fullName: nickName,
          avatar: defaultAvatarUrl,
        },
        loading: false,
      });
    } catch (error) {
      console.error("Firebase signup error:", error.message);
      set({ error: error.message, loading: false });
      return;
    }
  },
  changePassword: async (newPassword) => {
    const { user } = useAuthStore.getState();

    if (!user) {
      set({ error: "Kullanıcı oturumu bulunamadı." });
      return;
    }

    set({ loading: true, error: null });
    try {
      await updatePassword(auth.currentUser, newPassword);
      set({ loading: false });
    } catch (error) {
      console.error("Şifre değiştirme hatası:", error.message);
      set({ error: error.message, loading: false });
    }
  },
  login: async (email, password) => {
    set({ loading: true, error: null });
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const userDocRef = doc(db, "users", user.uid);
      const userSnapshot = await getDoc(userDocRef);
      if (userSnapshot.exists()) {
        set({
          user: {
            uid: user.uid,
            email: user.email,
            fullName: userSnapshot.data().fullName,
            avatar: userSnapshot.data().avatar,
          },
          wallet: userSnapshot.data().wallet || [],
          totalBalance: userSnapshot.data().totalBalance || 0,
          loading: false,
        });
      } else {
        set({ error: "User does not exist", loading: false });
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
  addCryptoToWallet: async (crypto) => {
    const { user, wallet, setWallet, setTotalBalance } = useAuthStore.getState();
    if (user && user.uid) {
      const updatedWallet = [...wallet, crypto];
      setWallet(updatedWallet);
      const newTotalBalance = calculateTotalBalance(updatedWallet);
      setTotalBalance(newTotalBalance);
      const userDocRef = doc(db, "users", user.uid);
      await updateDoc(userDocRef, {
        wallet: updatedWallet,
        totalBalance: newTotalBalance,
      });
    } else {
      console.error("Kullanıcı bilgisi henüz yüklenmedi veya oturum yok.");
      // Kullanıcıya bir hata mesajı gösterebilir veya işlemi engelleyebilirsiniz.
    }
  },
  removeCryptoFromWallet: async (cryptoSymbol) => {
    const { user, wallet, setWallet, setTotalBalance } = useAuthStore.getState();
    const updatedWallet = wallet.filter((crypto) => crypto.symbol !== cryptoSymbol);
    setWallet(updatedWallet);
    const newTotalBalance = calculateTotalBalance(updatedWallet);
    setTotalBalance(newTotalBalance);
    const userDocRef = doc(db, "users", user.uid);
    await updateDoc(userDocRef, {
      wallet: updatedWallet,
      totalBalance: newTotalBalance,
    });
  },
  
}));
const calculateTotalBalance = (wallet) => {
  return wallet.reduce((total, crypto) => {
    const priceInBTC = crypto.priceInBTC; 
    const amount = crypto.amount;
    return total + priceInBTC * amount;
  }, 0);
};

export default useAuthStore;
