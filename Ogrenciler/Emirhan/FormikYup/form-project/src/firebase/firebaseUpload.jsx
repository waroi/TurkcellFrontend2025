import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  doc,
  getDoc,
  getDocs,
  setDoc,
  updateDoc,
  query,
  where,
} from "firebase/firestore";
import firebase, { db } from "./firebase";
import emailjs from "@emailjs/browser";

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

export const createQuestionDistribution = async (questionDistribution) => {
  try {
    const jobsCollection = collection(db, "questionDistributions");

    await addDoc(jobsCollection, questionDistribution);
  } catch (error) {
    console.error("Hata oluştu:", error);
  }
};

export const updateApplicationStatus = async (id, status, email, name) => {
  try {
    const applicationRef = doc(db, "jobApplications", id);
    await updateDoc(applicationRef, { status: status });

    sendEmail(email, status, name, id);
  } catch (error) {
    console.error("Durum güncelleme hatası:", error);
  }
};
export const testApplicationStatus = async (id, isSuccessful) => {
  try {
    const applicationRef = doc(db, "jobApplications", id);
    await updateDoc(applicationRef, {
      status: isSuccessful ? "Başarılı" : "Başarısız",
    });
  } catch (error) {
    console.error("Durum güncelleme hatası:", error);
  }
};
const sendEmail = (email, status, name, id) => {
  const templateParams = {
    user_id: String(id),
    user_email: email,
    user_name: name,
    status: status,
  };

  emailjs
    .send(
      "service_jj9bmas",
      "template_tezccql",
      templateParams,
      "EYT-ulWdaGXtFdUJ6"
    )
    .catch((error) => {
      console.error("Email Error:", error);
    });
};

export const fetchApplicationById = async (id) => {
  try {
    const docRef = doc(db, "jobApplications", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      return { id: docSnap.id, ...docSnap.data() };
    } else {
      console.error("Başvuru bulunamadı!");
      return null;
    }
  } catch (error) {
    console.error("Veri çekme hatası:", error);
    return null;
  }
};

export const fetchQuestionType = async (userId) => {
  try {
    const q = query(
      collection(db, "questionDistributions"),
      where("id", "==", userId)
    );

    const querySnapshot = await getDocs(q);
    const applications = [];

    querySnapshot.forEach((doc) => {
      applications.push({ id: doc.id, ...doc.data() });
    });

    return applications;
  } catch (error) {
    console.error("Veri çekme hatası:", error);
    return [];
  }
};
