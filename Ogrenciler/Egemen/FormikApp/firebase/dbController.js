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

export async function getUserApplications() {
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
  const appRef = collection(db, "applications");
  const q = query(appRef, where("userId", "==", user.uid));
  const querySnapshot = await getDocs(q);
  const apps = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return apps;
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

export async function updateAppStatus(app) {
  try {
    const { id, ...appData } = app;
    const docRef = doc(db, "applications", id);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      await updateDoc(docRef, appData);
      return true;
    } else {
      await setDoc(docRef, appData);
      return true;
    }
  } catch (error) {
    console.error("Error updating blog:", error);
  }
}
