import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { auth, db } from "../firebase_config";

export const readUser = async (userID) => {
  try {
    const userRef = doc(db, "users", userID);
    const userSnap = await getDoc(userRef);
    if (userSnap.exists()) {
      return userSnap.data();
    } else {
      console.log("DBController readUser error!");
      return null;
    }
  } catch (error) {
    console.error("DBController readUser error!:", error);
    return null;
  }
};
export const saveUser = async (user) => {
  try {
    const userRef = doc(db, "users", user.uid);
    await setDoc(userRef, user);
    console.log("DBController saveUser error!:", user);
    return user;
  } catch (error) {
    console.error("DBController saveUser error!:", error.message);
    return null;
  }
};

export const checkIsHeAdmin = async () => {
  try {
    const q = query(collection(db, "users"), where("isAdmin", "==", true));
    const snaps = await getDocs(q);
    const currentID = auth.currentUser.uid;
    for (const doc of snaps.docs) {
      if (doc.id === currentID) {
        return doc.data().isAdmin;
      }
    }
  } catch (error) {
    console.log("checkIsHeAdmin DBController Error", error);
    return null;
  }
};

export const getProfileImageUrl = async () => {
  try {
    const currentUser = auth.currentUser.uid;
    const docRef = doc(db, "users", currentUser);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      const userData = docSnap.data();
      return userData.avatar;
    } else {
      console.log("Kullanıcı dökümanı bulunamadı.");
      return null;
    }
  } catch (error) {
    console.error("getProfileImageUrl Error: ", error);
    return null;
  }
};
