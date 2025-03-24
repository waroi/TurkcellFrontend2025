import { auth } from "../firebase/firebase";

export function unsubscribe(setUserAuth) {
  auth.onAuthStateChanged((userAuth) => {
    if (userAuth) {
      setUserAuth(userAuth);
    } else {
      setUserAuth(null);
    }
  });
}
