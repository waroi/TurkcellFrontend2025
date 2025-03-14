import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "./firebaseAuth";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const saveUserToFirestore = async (
  user,
  firstName,
  lastName,
  avatar,
  publisher
) => {
  if (!user) return;

  const userRef = doc(db, "users", user.uid);
  const userSnap = await getDoc(userRef);

  if (!userSnap.exists()) {
    const userData = {
      uid: user.uid,
      email: user.email,
      firstName: firstName || "", // Eğer boşsa boş string ata
      lastName: lastName || "",
      avatar: avatar || "",
      publisher: publisher || "Publisher",
      role: "admin",
    };

    await setDoc(userRef, userData);
  }
};

export const doCreateUserWithEmailAndPassword = async (
  email,
  password,
  firstName,
  lastName,
  avatar,
  publisher
) => {
  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  const user = userCredential.user;

  await saveUserToFirestore(user, firstName, lastName, avatar, publisher);
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
