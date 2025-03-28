import { useEffect, useState } from "react";
import { fetchJobs } from "../services/jobService";

export const useJobs = () => {
	const [jobList, setJobList] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		async function getJobs() {
			try {
				setLoading(true);
				const jobs = await fetchJobs();
				setJobList(jobs);
				setError(null);
			} catch (err) {
				console.error("Error in useJobs hook:", err);
				setError(err.message || "Failed to load job listings");
			} finally {
				setLoading(false);
			}
		}

		getJobs();
	}, []);

	return { jobList, loading, error };
};
