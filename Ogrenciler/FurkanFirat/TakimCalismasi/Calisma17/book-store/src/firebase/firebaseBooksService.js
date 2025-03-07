import { db } from './firebase.config';
import {
  doc,
  setDoc,
  updateDoc,
  collection,
  getDocs,
} from 'firebase/firestore';

export async function addSingleBookToFirestore(book) {
  try {
    const docRef = doc(db, 'books', String(book.id));
    await setDoc(docRef, book);

    console.log('kitap eklendi');
    return true;
  } catch (error) {
    console.error('addSingleBookToFirestore hata', error);
  }
}

export async function editSingleBookToFirestore(book) {
  try {
    const docRef = doc(db, 'books', String(book.id));
    await updateDoc(docRef, book, { merge: true });

    console.log('kitap editlendi');
    return true;
  } catch (error) {
    console.error('editSingleBookToFirestore hata', error);
  }
}

export async function fetchBooksFromFirestore() {
  try {
    const booksCollection = collection(db, 'books');
    const booksSnapshot = await getDocs(booksCollection);
    const booksList = booksSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return booksList;
  } catch (error) {
    console.error('fetchBooksFromFirestore hata', error);
  }
}
