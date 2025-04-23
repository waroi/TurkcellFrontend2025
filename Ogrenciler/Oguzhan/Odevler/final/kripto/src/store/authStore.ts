import { create } from "zustand";
import { auth, db } from "@/lib/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import { doc, getDoc, serverTimestamp, setDoc } from "@firebase/firestore";

type AuthState = {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string,name:string, surname:string) => Promise<void>;
  logout: () => Promise<void>;
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  loading: true,

  login: async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
  },

  register: async (email, password,name,surname) => {
    const userCredential =  await createUserWithEmailAndPassword(auth, email, password);
    const uid = userCredential.user.uid;

    await setDoc(doc(db,"users",uid),{
      uid,
      name,
      surname,
      email,
      createdAt:  serverTimestamp()
      
    })

    set({user:userCredential.user})
  },

  logout: async () => {
    await signOut(auth);
  },
}));

// onAuthStateChanged(auth, (user) => {
//   useAuthStore.setState({ user, loading: false });
// });

export const initializeAuth = () => {
  onAuthStateChanged(auth, async (user) => {

    if(user){
      const userDoc = await getDoc(doc(db,"users",user.uid))
      const userData=userDoc.data();

      useAuthStore.setState({user:{...user,...userData},loading:false});
    } else {
      useAuthStore.setState({ user:null, loading: false });
    }
   
  });
};

