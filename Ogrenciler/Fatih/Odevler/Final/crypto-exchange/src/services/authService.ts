import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  User,
} from "firebase/auth";
import { auth } from "@/firebase/firebase.config";

export const registerWithEmail = async (
  email: string,
  password: string
): Promise<User> => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  return userCredential.user;
};

export const registerWithMobile = async (
  mobile: string,
  password: string
): Promise<User> => {
  const fakeEmail = `${mobile}@mobile.fake`;
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    fakeEmail,
    password
  );
  return userCredential.user;
};

export const loginWithEmail = async (
  email: string,
  password: string
): Promise<User> => {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
  return userCredential.user;
};

export const loginWithMobile = async (
  mobile: string,
  password: string
): Promise<User> => {
  const fakeEmail = `${mobile}@mobile.fake`;
  const userCredential = await signInWithEmailAndPassword(
    auth,
    fakeEmail,
    password
  );
  return userCredential.user;
};

export const logout = async (): Promise<void> => {
  await signOut(auth);
};
