import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, doc, getDoc } from "firebase/firestore";
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

export const fetchPosition = async (id) => {
    try {
        const docRef = doc(db, "job", id);
        const docSnap = await getDoc(docRef);
        return docSnap.data();
    } catch (error) {
        console.error("Veri çekme hatası:", error);
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
