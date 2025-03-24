import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";

export const fetchJobById = async (jobId) => {
	try {
		if (!jobId) {
			throw new Error("Job ID is required");
		}

		const jobDoc = doc(db, "jobs", jobId);
		const jobSnapshot = await getDoc(jobDoc);

		if (!jobSnapshot.exists()) {
			throw new Error(`No job found with ID: ${jobId}`);
		}

		return {
			id: jobSnapshot.id,
			...jobSnapshot.data(),
		};
	} catch (error) {
		console.error("Error fetching job details:", error);
		throw error;
	}
};
