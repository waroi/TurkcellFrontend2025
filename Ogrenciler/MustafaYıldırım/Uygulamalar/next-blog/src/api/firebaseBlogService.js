import { db } from './firebaseAuth';
import {
  doc,
  setDoc,
  updateDoc,
  collection,
  getDocs,
  deleteDoc,
} from 'firebase/firestore';

export async function addSingleBlogToFirestore(blog) {
  try {
    const docRef = doc(db, 'blogs', String(blog.id));
    await setDoc(docRef, blog);

    console.log('kitap eklendi');
    return true;
  } catch (error) {
    console.error('addSingleBookToFirestore hata', error);
  }
}

export async function editSingleBookToFirestore(blog) {
  try {
    const docRef = doc(db, 'blogs', String(blog.id));
    await updateDoc(docRef, blog, { merge: true });

    console.log('kitap editlendi');
    return true;
  } catch (error) {
    console.error('editSingleBookToFirestore hata', error);
  }
}

export async function fetchBooksFromFirestore() {
  try {
    const blogsCollection = collection(db, 'blogs');
    const blogsSnapshot = await getDocs(booksCollection);
    const blogsList = blogsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return blogsList;
  } catch (error) {
    console.error('fetchBooksFromFirestore hata', error);
  }
}

export async function deleteBookFromFirestore(blogId) {
  try {
    const docRef = doc(db, 'blogs', blogId);
    await deleteDoc(docRef);

    console.log('Kitap silindi');
    return true;
  } catch (error) {
    console.error('deleteBookFromFirestore hata', error);
  }
}
