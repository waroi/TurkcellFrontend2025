import { collection, query, where } from "firebase/firestore";
import { db } from "./firebase";
import { doc, getDoc, getDocs } from "firebase/firestore";
import { auth } from "../firebase/firebase";

export async function getUserBooks() {
  const user = auth.currentUser;
  if (!user) {
    console.error("Kullanıcı oturum açmamış!");
    return;
  }
  const userRef = doc(db, "users", user.uid);
  const userSnap = await getDoc(userRef);
  if (!userSnap.exists()) {
    console.error("Kullanıcı bilgisi bulunamadı!");
    return;
  }
  const publisherId = userSnap.data().publisherId;
  const booksRef = collection(db, "books");
  const q = query(booksRef, where("publisherId", "==", publisherId));
  const querySnapshot = await getDocs(q);
  const books = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  console.log("Kullanıcının yayınevine ait kitaplar:", books);
}
