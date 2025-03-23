import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../firebase/firebase";

export const registerUser = async (email, password) => {
  const auth = getAuth();
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    console.error("Hata:", error.message);
    throw error;
  }
};

export const SignIn = async (email, password) => {
  const auth = getAuth();
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log("Kullanıcı giriş yaptı:", userCredential.user);
    return { uid: userCredential.user.uid, email: userCredential.user.email };
  } catch (error) {
    console.error("Hata:", error.message);
    throw error;
  }
};
