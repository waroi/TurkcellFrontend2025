import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "./firebase";

export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  const result = signInWithPopup(auth, provider);
  const user = result.user;

  const userRef = doc(db, "users", user.uid);
  const userSnap = await getDoc(userRef);

  if (!userSnap.exists()) {
    // Kullanıcı yoksa, yeni kullanıcı olarak kaydet
    await setDoc(userRef, {
      name: user.displayName,
      email: user.email,
      role: "editor", // Varsayılan olarak 'editor' atıyoruz
      category: "books", // Örnek kategori
    });
    console.log("Yeni kullanıcı Firestore'a kaydedildi.", userSnap.data());
  } else {
    console.log("Kullanıcı zaten kayıtlı:", userSnap.data());
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

signInWithGoogle().then(() => {
  getUserRole().then((user) => {
    if (user) {
      if (user.role === "admin") {
        console.log("Admin yetkisi var, tüm kategorilere erişebilir.");
      } else {
        console.log(
          `Editor yetkisi var, sadece ${user.category} kategorisini yönetebilir.`
        );
      }
    }
  });
});

export const signOut = async () => {
  return auth.signOut();
};
