import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "./firebase";

export const signInWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    console.log("User:", user);
    return user;
  } catch (error) {
    console.error("Error with Google Sign-In:", error);
    return null;
  }
};
export const registerWithGoogle = async (publisherId) => {
  const provider = new GoogleAuthProvider();
  const result = await signInWithPopup(auth, provider);
  const user = result.user;
  const userRef = doc(db, "users", user.uid);
  const userSnap = await getDoc(userRef);
  if (!userSnap.exists()) {
    await setDoc(userRef, {
      name: user.displayName,
      email: user.email,
      role: "editor",
      publisherId: publisherId,
    });
  }
  alert("Kaydınız tamamlandı!");
  return user;
};
export const signOut = async () => {
  return auth.signOut();
};
