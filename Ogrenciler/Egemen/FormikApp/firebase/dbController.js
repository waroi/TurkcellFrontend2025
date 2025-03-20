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
  if (!user) {
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
export async function getAllApplications() {
  const querySnapshot = await getDocs(collection(db, "applications"));
  const applications = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return applications;
}
export async function saveApplication(application) {
  const { id, ...applicationData } = application;
  const applicationRef = await addDoc(
    collection(db, "applications"),
    applicationData
  );
}
export async function deleteFbBlog(id) {
  await deleteDoc(doc(db, "blogs", id));
}
export async function getUser(id) {
  const docRef = doc(db, "users", id);
  const docSnap = await getDoc(docRef);
  return docSnap.data();
}

export async function updateFbBlog(blog) {
  try {
    const { id, ...blogData } = blog;
    const docRef = doc(db, "blogs", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      await updateDoc(docRef, blogData);
      return true;
    } else {
      await setDoc(docRef, blogData);
      return true;
    }
  } catch (error) {
    console.error("Error updating blog:", error);
  }
}
