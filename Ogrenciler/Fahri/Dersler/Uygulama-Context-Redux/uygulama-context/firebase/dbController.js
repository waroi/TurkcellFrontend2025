import { addDoc, collection, query, where } from "firebase/firestore";
import { db } from "./firebase";
import { doc, getDoc, getDocs, deleteDoc, updateDoc } from "firebase/firestore";
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
  return books;
}
export async function getBook(id) {
  const bookRef = doc(db, "books", id);
  const bookSnap = await getDoc(bookRef);
  return bookSnap.data();
}
export async function deleteBook(id) {
  const bookRef = doc(db, "books", id);
  await deleteDoc(bookRef);
}
export async function addedBook(book) {
  const bookRef = await addDoc(collection(db, "books"), book);
}
export async function getPublisherId() {
  const user = auth.currentUser;
  const userRef = doc(db, "users", user.uid);
  const userSnap = await getDoc(userRef);
  const publisherId = userSnap.data().publisherId;
  return publisherId;
}

export async function updateBook(id, book) {
  try {
    const bookRef = doc(db, "books", id);
    await updateDoc(bookRef, book);
  } catch (error) {
    console.error("Güncelleme hatası:", error);
  }
}
export async function getBooks() {
  try {
    const booksRef = collection(db, "books");
    const q = query(booksRef, where("publisherId", "!=", ""));
    const querySnapshot = await getDocs(q);
    const books = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return books;
  } catch (error) {
    console.error("Güncelleme hatası:", error);
  }
}
export async function getUser() {
  const user = auth.currentUser;
  if (user) {
    const userRef = doc(db, "users", user.uid);
    const userSnap = await getDoc(userRef);
    return userSnap.data();
  } else {
    return null;
  }
}
