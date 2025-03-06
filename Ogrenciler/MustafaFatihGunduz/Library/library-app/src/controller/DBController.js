import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";
console.log("Firestore bağlantısı:", db);
export const readUser = async (userID) => {
  try {
    const userRef = doc(db, "users", userID);
    const userSnap = await getDoc(userRef);
    if (userSnap.exists()) {
      return userSnap.data();
    } else {
      console.log("Böyle bir kullanıcı bulunamadı!");
      return null;
    }
  } catch (error) {
    console.error("Firestore'dan kullanıcı okuma hatası:", error);
    return null;
  }
};
export const saveUser = async (user) => {
  try {
    const userRef = doc(db, "users", user.uid);
    await setDoc(userRef, user);
    console.log("✅ Kullanıcı başarıyla kaydedildi:", user);
    return user;
  } catch (error) {
    console.error("❌ Kullanıcı kaydedilirken hata oluştu:", error.message);
    return null;
  }
};