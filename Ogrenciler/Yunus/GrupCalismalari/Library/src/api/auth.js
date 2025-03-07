import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth, db } from '../firebase/firebase'
import { FireStore } from "./fireStore";
import { doc, getDoc } from "firebase/firestore";

export class Auth {
  static currentUser = null

  static signIn(email, password) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        // state geçilince state basıcaz inş3
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        // ekrana hata basılabilir
      });
  }

  static signUp(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        const { uid } = user
        FireStore.addUser({ uid, email, password, publisherName: '', state: 'user' })
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        // ekrana hata basılabilir
      });
  }

  static authOnStateChanged() {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid
        Auth.currentUser = user
      } else {
        console.log("çıkış FUHASIDFJASOK yapıldı")
        Auth.currentUser = null
      }
    });
    return Auth.currentUser
  }

  static getCurrentUser() {
    Auth.authOnStateChanged()
    return Auth.currentUser
  }

  static signout() {
    signOut(auth).then(() => {
      console.log('Çıkış yapıldı')
    }).catch((error) => {
      console.log('Çıkış yapılırken bir hata oluştu')
    });
  }

  static async fetchUserByUid(uid) {
    try {
      const userDocRef = doc(db, "users", uid);
      const userDoc = await getDoc(userDocRef)

      if (userDoc.exists()) {
        const userData = userDoc.data()
        return userData
      } else {
        console.log("Döküman yokk")
        return null
      }
    } catch (error) {
      console.error("Döküman alllınırken bir hata oluştu", error)
      return null
    }
  };
}