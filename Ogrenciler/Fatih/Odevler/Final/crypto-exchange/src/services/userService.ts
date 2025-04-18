import { doc, setDoc } from "firebase/firestore";
import { db } from "@/firebase/firebase.config";
import { UserProfile } from "@/types/user";

export const saveUserProfile = async (uid: string, profile: UserProfile) => {
  try {
    await setDoc(doc(db, "users", uid), profile);
  } catch (error) {
    throw new Error("Profil kaydedilemedi: " + (error as Error).message);
  }
};
