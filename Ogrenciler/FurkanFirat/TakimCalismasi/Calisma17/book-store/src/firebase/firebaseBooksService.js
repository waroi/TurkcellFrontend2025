import {db} from "./firebase.config";
import {
  writeBatch,
  doc,
  collection,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import array from "../data.json";

export async function uploadBooksToFirestore() {
  try {
    const batch = writeBatch(db);

    for (const item of array) {
      const docRef = doc(db, "books", item.id.toString());
      const snapshot = await getDoc(docRef);

      if (!snapshot.exists()) {
        batch.set(docRef, item);
      } else {
        console.log(`ID'si ${item.id} olan doküman zaten var, atlanıyor.`);
      }
    }

    await batch.commit();
    console.log("Veriler, sadece yeni olanlar Firestore'a eklendi!");
  } catch (error) {
    console.error("Veri yükleme sırasında hata oluştu:", error);
    throw error;
  }
}

export async function addSingleBookToFirestore(book) {
  try {
    const docRef = doc(db, "books", String(book.id));
    await setDoc(docRef, book);

    console.log("Kitap Firestore'a eklendi!");
    return true;
  } catch (error) {
    console.error("Kitap eklenirken hata oluştu:", error);
    throw error;
  }
}

export async function editSingleBookToFirestore(book) {
  try {
    const docRef = doc(db, "books", String(book.id));
    await updateDoc(docRef, book, {merge: true});

    console.log("Kitap Firestore'da güncellendi!");
    return true;
  } catch (error) {
    console.error("Kitap eklenirken hata oluştu:", error);
    throw error;
  }
}
