import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { auth, db } from "./firebase";

export async function getUserBlogs() {
  const user = auth.currentUser;
  console.log(user);
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
  const blogsRef = collection(db, "blogs");
  const q = query(blogsRef, where("userId", "==", user.uid));
  const querySnapshot = await getDocs(q);
  const blogs = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return blogs;
}
export async function getAllBLogs() {
  const querySnapshot = await getDocs(collection(db, "blogs"));
  const blogs = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return blogs;
}
export async function addedBlog(blog) {
  const user = auth.currentUser;
  const blogRef = await addDoc(collection(db, "blogs"), blog);
}
export async function deleteFbBlog(id) {
  await deleteDoc(doc(db, "blogs", id));
}

export async function updateFbBlog(blog) {
  try {
    const docRef = doc(db, "blogs", blog.id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      await updateDoc(docRef, blog);
      return true;
    } else {
      await setDoc(docRef, blog);
      return true;
    }
  } catch (error) {
    console.error("Error updating blog:", error);
  }
}
