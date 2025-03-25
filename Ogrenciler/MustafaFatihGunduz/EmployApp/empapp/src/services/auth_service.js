import { auth } from "../../firebase_config";
import { readUser, saveUser } from "./db_service";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const signWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    if (userCredential.user !== null) {
      const user = await readUser(userCredential.user.uid);
      if (user) {
        return {
          ...user,
          navigate: user.isAdmin ? "/admin" : "/user", //! doğrudan yönlendirme yapmak için
        };
      }
    }
  } catch (error) {
    console.log("Error in signWithEmailAndPassword: ", error);
  }
};

export const createWithEmailAndPassword = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    if (userCredential.user !== null) {
      const user = {
        uid: userCredential.user.uid,
        email: userCredential.user.email,
        isAdmin: false,
      };
      await saveUser(user);
      return user;
    }
  } catch (error) {
    console.log("Error in signWithEmailAndPassword: ", error);
  }
};

export const signOutFromApp = async () => {
  try {
    if (auth.currentUser !== null) {
      await signOut(auth);
    } else {
      console.log("Zaten giriş yapan kullanıcı yok");
    }
  } catch (error) {
    console.log("Error in signOutFromApp: ", error);
  }
};
