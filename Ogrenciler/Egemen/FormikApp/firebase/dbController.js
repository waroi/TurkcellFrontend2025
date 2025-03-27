import {
  addDoc,
  collection,
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
    console.error("Error updating doc:", error);
  }
}
export async function updateMessage(id, userMessage, adminMessage) {
  try {
    const docRef = doc(db, "applications", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      await updateDoc(docRef, { userMessage, adminMessage });
      return true;
    } else {
      console.warn("Belirtilen başvuru bulunamadı.");
      return false;
    }
  } catch (error) {
    console.error("Başvuru mesajı güncellenirken hata oluştu:", error);
    return false;
  }
}

export async function setQuizPoint(appId, point) {
  const docRef = doc(db, "applications", appId);
  setDoc(docRef, { quiz: point, status: "Test Kontrol" }, { merge: true });
}

export async function setStatus(appId, status) {
  const docRef = doc(db, "applications", appId);
  setDoc(docRef, { status: status }, { merge: true });
}

export async function setMessage(appId, status, userMessage, adminMessage) {
  const docRef = doc(db, "applications", appId);
  setDoc(
    docRef,
    { status: status, userMessage: userMessage, adminMessage: adminMessage },
    { merge: true }
  );
}

export async function setQuestionCount(appId, count) {
  const docRef = doc(db, "applications", appId);
  setDoc(docRef, { questions: count }, { merge: true });
}
export async function getQuestionCount(appId) {
  const docRef = doc(db, "applications", appId);
  const docSnap = await getDoc(docRef);
  const data = docSnap.data();
  return data.questions;
}
