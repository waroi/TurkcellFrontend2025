import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../../firebase/config";
import JobCard from "./JobCard";

export default function Home() {
	const [jobList, setJobList] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchJobs = async () => {
			try {
				setLoading(true);
				const jobsCollection = collection(db, "jobs");
				const jobsSnapshot = await getDocs(jobsCollection);
				const jobsData = jobsSnapshot.docs.map((doc) => ({
					id: doc.id,
					...doc.data(),
				}));
				setJobList(jobsData);
			} catch (err) {
				console.error("Error fetching jobs:", err);
				setError("Failed to load job listings. Please try again later.");
			} finally {
				setLoading(false);
			}
		};

		fetchJobs();
	}, []);

	if (loading) {
		return (
			<div className="container mt-5 pt-3 text-center">
				<div className="spinner-border text-primary" role="status">
					<span className="visually-hidden">Loading...</span>
				</div>
				<p className="mt-3">Loading job listings...</p>
			</div>
		);
	}

	if (error) {
		return (
			<div className="container mt-5 pt-3">
				<div className="alert alert-danger" role="alert">
					{error}
				</div>
			</div>
		);
	}

	return (
		<section className="container mt-5 pt-3">
			<h2 className="mb-4 text-primary">Available Job Positions</h2>
			{jobList.length === 0 ? (
				<div className="alert alert-info">
					No job positions available at the moment. Please check back later.
				</div>
			) : (
				<div className="row row-cols-1 row-cols-md-2 g-4">
					{jobList.map((jobInformation) => (
						<div className="col" key={jobInformation.id}>
							<JobCard job={jobInformation} />
						</div>
					))}
				</div>
			)}
		</section>
	);
}
