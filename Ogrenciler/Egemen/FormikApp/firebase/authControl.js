import { signInWithPopup, GoogleAuthProvider, setPersistence, browserLocalPersistence } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "./firebase";

// Set authentication persistence
setPersistence(auth, browserLocalPersistence);

export const registerWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  const user = result.user;
  const userRef = doc(db, "users", user.uid);
  const userSnap = await getDoc(userRef);
  if (!userSnap.exists()) {
    await setDoc(userRef, {
      name: user.displayName,
      email: user.email,
      role: "user",
    });
  }
  return user;
};

export const signOut = async () => {
  return auth.signOut();
};

// Add an authentication state listener
auth.onAuthStateChanged((user) => {
  if (user) {
    console.log("User is signed in:", user.uid);
  } else {
    console.log("No user is signed in.");
  }
});
