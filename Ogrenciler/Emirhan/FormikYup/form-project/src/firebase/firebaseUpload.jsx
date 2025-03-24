import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
} from "firebase/firestore";
import firebase, { db } from "./firebase";

export const uploadJobs = async (job) => {
  try {
    const jobsCollection = collection(db, "job");

    await addDoc(jobsCollection, job);

    console.log("İlan Siteye eklendi!");
  } catch (error) {
    console.error("Hata oluştu:", error);
  }
};

export const uploadUser = async (user, id) => {
  try {
    const userRef = doc(db, "users", id);

    await setDoc(userRef, user);

    console.log("Kullanıcı başarıyla eklendi!");
  } catch (error) {
    console.error("Hata oluştu:", error);
  }
};

export const fetchPosition = async (id) => {
  try {
    const docRef = doc(db, "job", id);
    const docSnap = await getDoc(docRef);
    return docSnap.data();
  } catch (error) {
    console.error("Veri çekme hatası:", error);
  }
};

export const fetchApplications = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "jobApplications"));
    const applications = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return applications;
  } catch (error) {
    console.error("Veri çekme hatası:", error);
    return [];
  }
};
export const fetchUser = async (id) => {
  try {
    console.log("Fetching user with ID:", id);
    const docRef = doc(db, "users", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      console.log("User data:", docSnap.data());
      return docSnap.data();
    } else {
      console.log("Belirtilen ID ile kullanıcı bulunamadı.");
      return null;
    }
  } catch (error) {
    console.error("Veri çekme hatası:", error);
    return null;
  }
};

export const uploadJobForm = async (job) => {
  try {
    const jobsCollection = collection(db, "jobApplications");

    await addDoc(jobsCollection, job);
  } catch (error) {
    console.error("Hata oluştu:", error);
  }
};
