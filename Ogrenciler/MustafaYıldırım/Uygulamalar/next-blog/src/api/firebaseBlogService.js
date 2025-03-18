import {db} from "./firebaseAuth";
import {
  doc,
  setDoc,
  updateDoc,
  collection,
  getDocs,
  deleteDoc,
} from "firebase/firestore";

export async function addSingleBlogToFirestore(blog) {
  try {
    const docRef = doc(db, "blogs", String(blog.id));
    await setDoc(docRef, blog);

    console.log("kitap eklendi");
    return true;
  } catch (error) {
    console.error("addSingleBlogToFirestore hata", error);
  }
}

export async function editSingleBlogToFirestore(blog) {
  try {
    const docRef = doc(db, "blogs", String(blog.id));
    await updateDoc(docRef, blog, {merge: true});

    console.log("kitap editlendi");
    return true;
  } catch (error) {
    console.error("editSingleBlogToFirestore hata", error);
  }
}

export async function fetchBlogsFromFirestore() {
  try {
    const blogsCollection = collection(db, "blogs");
    const blogsSnapshot = await getDocs(blogsCollection);
    const blogsList = blogsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return blogsList;
  } catch (error) {
    console.error("fetchBlogsFromFirestore hata", error);
  }
}

export async function deleteBlogFromFirestore(blogId) {
  try {
    const docRef = doc(db, "blogs", blogId);
    await deleteDoc(docRef);

    console.log("Kitap silindi");
    return true;
  } catch (error) {
    console.error("deleteBlogFromFirestore hata", error);
  }
}
