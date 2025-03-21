import { onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase/Firebase";

class AuthService {
  static getRole() {
    const user = this.getUser();
    return user?.role || null;
  }

  static onAuthStateChange(setUser) {
    return onAuthStateChanged(auth, (user) => {
      setUser(user ? user.uid : null);
    });
  }

  static signOut() {
    signOut(auth).then(() => {
      return true
    }).catch((error) => {
      console.log("Çıkış yaparken bir sorun oluştu", error)
    });
  }

  static signIn(email, password) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        return { user, success: true, message: "Giriş başarıyla yapıldı yönlendiriliyorsunuz..." }
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        return { success: false, message: `Giriş yaparken bir hata oluştu: ${errorMessage}` }
      })
  }

}

export default AuthService;