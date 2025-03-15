import { db } from "./firebaseAuth";
import {
  collection,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

export async function fetchUsersFromFirestore() {
  try {
    const usersCollection = collection(db, "users");
    const snapshot = await getDocs(usersCollection);
    const usersList = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return usersList;
  } catch (error) {
    console.error("fetchUsersFromFirestore hata:", error);
    throw error;
  }
}

export async function updateUserInFirestore(userId, updatedData) {
  try {
    const userRef = doc(db, "users", userId);
    await updateDoc(userRef, updatedData);
    return true;
  } catch (error) {
    console.error("updateUserInFirestore hata:", error);
    throw error;
  }
}

export async function deleteUserFromFirestore(userId) {
  try {
    const userRef = doc(db, "users", userId);
    await deleteDoc(userRef);
    return true;
  } catch (error) {
    console.error("deleteUserFromFirestore hata:", error);
    throw error;
  }
}
