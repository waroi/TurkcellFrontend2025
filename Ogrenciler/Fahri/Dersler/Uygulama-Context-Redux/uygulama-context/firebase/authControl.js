import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "./firebase";

export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    const userRef = doc(db, "users", user.uid);
    const userSnap = await getDoc(userRef);

    if (!userSnap.exists()) {
      await setDoc(userRef, {
        name: user.displayName || "Anonim Kullanıcı",
        email: user.email || "Bilinmeyen E-posta",
        role: "editor", 
        category: "xx", 
      });
      console.log("Yeni kullanıcı Firestore'a kaydedildi.");
      const newUserSnap = await getDoc(userRef);
      if (newUserSnap.exists()) {
        console.log("Yeni Kullanıcı Verisi:", newUserSnap.data());
      } else {
        console.log("Kullanıcı verisi kaydedilemedi!");
      }
    } else {
      console.log("Kullanıcı zaten kayıtlı:", userSnap.data());
    }
  } catch (error) {
    console.error("Google ile giriş hatası:", error);
  }
};


async function getUserRole() {
  const user = auth.currentUser;
  if (user) {
    const userRef = doc(db, "users", user.uid);
    const userSnap = await getDoc(userRef);
    if (userSnap.exists()) {
      const userData = userSnap.data();
      console.log("Kullanıcı Rolü:", userData.role);
      return userData;
    } else {
      console.log("Kullanıcı Firestore'da bulunamadı.");
      return null;
    }
  } else {
    console.log("Henüz giriş yapılmadı.");
    return null;
  }
}

signInWithGoogle().then((user) => {
  if (user) {
    getUserRole().then((userData) => {
      if (userData) {
        if (userData.role === "admin") {
          console.log("Admin yetkisi var, tüm kategorilere erişebilir.");
        } else {
          console.log(
            `Editor yetkisi var, sadece ${userData.category} kategorisini yönetebilir.`
          );
        }
      }
    });
  }
});


export const signOut = async () => {
  return auth.signOut();
};
