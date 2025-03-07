import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "./firebase";

// Google ile giriş yapma fonksiyonu
export const signInWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    console.log("User:", user); // Kullanıcı bilgilerini logluyoruz
    return user; // Kullanıcıyı geri döndürüyoruz
  } catch (error) {
    console.error("Error with Google Sign-In:", error);
    return null; // Eğer hata oluşursa null döndürüyoruz
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

// Google ile giriş yaptıktan sonra rolü kontrol etme
export const handleSignInAndGetRole = async () => {
  const user = await signInWithGoogle(); // Google ile giriş yapıyoruz
  if (user) {
    const userData = await getUserRole(user); // Kullanıcı rolünü alıyoruz
    console.log("user", userData);
    if (userData) {
      if (userData.role === "admin") {
        console.log("Admin yetkisi var, tüm kategorilere erişebilir.");
      } else {
        console.log(
          `Editor yetkisi var, sadece ${userData.category} kategorisini yönetebilir.`
        );
      }
    }
  }
};

export const signOut = async () => {
  return auth.signOut();
};
