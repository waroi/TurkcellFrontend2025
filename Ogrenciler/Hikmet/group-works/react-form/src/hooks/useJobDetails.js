import { useEffect, useState } from "react";
import { fetchJobById } from "../services/firestore/jobService";

export const useJobDetails = (jobId) => {
	const [jobDetails, setJobDetails] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const getJobDetails = async () => {
			try {
				setLoading(true);

				if (!jobId) {
					setError("Geçersiz iş ID'si");
					return;
				}

				const data = await fetchJobById(jobId);
				setJobDetails(data);
				setError(null);
			} catch (err) {
				console.error("İş detayları yüklenirken hata oluştu:", err);
				setError(
					err.message ||
						"İş detayları yüklenirken hata oluştu. Lütfen daha sonra tekrar deneyin."
				);
			} finally {
				setLoading(false);
			}
		};

		getJobDetails();
	}, [jobId]);

	return { jobDetails, loading, error };
};
