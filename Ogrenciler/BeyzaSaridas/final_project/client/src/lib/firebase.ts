import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  AuthError,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCqgXSpg1Zo2jGjYMnu5iUbCR0OBkNYrmY",
  authDomain: "finalproject-91c51.firebaseapp.com",
  projectId: "finalproject-91c51",
  storageBucket: "finalproject-91c51.appspot.com",
  messagingSenderId: "825656647950",
  appId: "1:825656647950:web:98f114bc01fe92d474775f",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const loginWithEmail = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    const authError = error as AuthError;
    console.error("Login Error:", authError.message);
    throw new Error(authError.message);
  }
};

export const registerWithEmail = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    const authError = error as AuthError;
    console.error("Register Error:", authError.message);
    throw new Error(authError.message);
  }
};

export const loginWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const userCredential = await signInWithPopup(auth, provider);
    return userCredential.user;
  } catch (error) {
    const authError = error as AuthError;
    console.error("Google Login Error:", authError.message);
    throw new Error(authError.message);
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    const authError = error as AuthError;
    console.error("Logout Error:", authError.message);
    throw new Error(authError.message);
  }
};

export const getCurrentUser = () => {
  return auth.currentUser;
};

export default auth;
