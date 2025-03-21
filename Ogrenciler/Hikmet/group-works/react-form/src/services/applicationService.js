import {
	addDoc,
	collection,
	deleteDoc,
	doc,
	getDocs,
} from "firebase/firestore";
import { db } from "../firebase/config";

// Başvuruları getiren servis fonksiyonları
export const fetchApplications = async (collectionName) => {
	try {
		const snapshot = await getDocs(collection(db, collectionName));
		return snapshot.docs.map((doc) => ({
			id: doc.id,
			...doc.data(),
		}));
	} catch (error) {
		console.error(`Error fetching ${collectionName}:`, error);
		throw error;
	}
};

// Başvuru onaylama servisi
export const approveApplication = async (application) => {
	try {
		const { id, ...cleanApplication } = application;

		// Olumlu koleksiyonuna ekle
		await addDoc(collection(db, "olumlu"), cleanApplication);

		// İncelenecek koleksiyonundan sil
		await deleteDoc(doc(db, "incelenecek", id));

		return true;
	} catch (error) {
		console.error("Error approving application:", error);
		throw error;
	}
};

// Başvuru reddetme servisi
export const rejectApplication = async (application) => {
	try {
		const { id, ...cleanApplication } = application;

		// Olumsuz koleksiyonuna ekle
		await addDoc(collection(db, "olumsuz"), cleanApplication);

		// İncelenecek koleksiyonundan sil
		await deleteDoc(doc(db, "incelenecek", id));

		return true;
	} catch (error) {
		console.error("Error rejecting application:", error);
		throw error;
	}
};
