import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "./firebaseAuth";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  updatePassword,
} from "firebase/auth";

const saveUserToFirestore = async (user, publisher) => {
  if (!user) return;

  const userRef = doc(db, "users", user.uid);
  const userSnap = await getDoc(userRef);

  if (!userSnap.exists()) {
    const userData = {
      uid: user.uid,
      email: user.email,
      publisher: publisher || "Publisher",
      displayName: user.displayName || "Anonim",
      photoURL: user.photoURL || null,
      createdAt: new Date(),
      role: "admin",
    };

    await setDoc(userRef, userData);
  }
};

export const doCreateUserWithEmailAndPassword = async (
  email,
  password,
  publisher
) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  const user = userCredential.user;

  await saveUserToFirestore(user, publisher);
  return user;
};

export const doSignInWithEmailAndPassword = async (email, password) => {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
  const user = userCredential.user;
  await saveUserToFirestore(user);
  return user;
};

export const doSignOut = () => {
  return auth.signOut();
};
