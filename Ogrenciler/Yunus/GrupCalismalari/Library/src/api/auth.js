import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from '../firebase/firebase'
import { FireStore } from "./fireStore";
import { useNavigate } from "react-router";

export class Auth {
  static currentUser = null;

  static signIn(email, password) {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  }

  static signUp(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        const { uid } = user
        FireStore.addUser({ uid, email, password, publisherName: '', admin: false })
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  }

  static authOnStateChanged() {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log("Kullanıcı UID:", uid);
        Auth.currentUser = user;
      } else {
        console.log("Kullanıcı çıkış yaptı: FUHASIDFJASOK");
        Auth.currentUser = null;
      }
    });
    return unsubscribe;
  }

  static getCurrentUser() {
    Auth.authOnStateChanged()
    return Auth.currentUser;
  }

  static signout() {
    signOut(auth).then(() => {
      console.log('Çıkış yapıldı')
    }).catch((error) => {
      // An error happened.
    });
  }
}