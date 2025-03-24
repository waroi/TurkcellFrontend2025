import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase/config";

export const submitApplication = async (formData, jobInfo) => {
	try {
		const formDataWithJob = {
			...formData,
			jobId: jobInfo.id,
			jobTitle: jobInfo.title || "Unknown Job",
			jobAppliedDate: new Date().toISOString(),
		};

		await addDoc(collection(db, "incelenecek"), formDataWithJob);
		console.log("Application successfully submitted to Firestore");
		return true;
	} catch (error) {
		console.error("Error submitting application:", error);
		return false;
	}
};
