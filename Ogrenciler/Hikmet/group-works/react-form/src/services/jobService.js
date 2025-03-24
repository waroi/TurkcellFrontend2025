import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

export const fetchJobs = async () => {
	try {
		const jobsCollection = collection(db, "jobs");
		const jobsSnapshot = await getDocs(jobsCollection);
		const jobsData = jobsSnapshot.docs.map((doc) => ({
			id: doc.id,
			...doc.data(),
		}));
		return jobsData;
	} catch (error) {
		console.error("Error fetching jobs:", error);
		throw new Error("Failed to load job listings. Please try again later.");
	}
};
