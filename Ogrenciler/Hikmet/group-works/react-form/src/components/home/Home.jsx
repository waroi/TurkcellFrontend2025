import React from "react";
import { useJobs } from "../../hooks/useJobs";
import JobCard from "./JobCard";
import ErrorState from "./ui/ErrorState";
import LoadingState from "./ui/LoadingState";

const Home = () => {
	const { jobList, loading, error } = useJobs();

	if (loading) {
		return <LoadingState />;
	}

	if (error) {
		return <ErrorState message={error} />;
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
					{jobList.map((job) => (
						<div className="col" key={job.id}>
							<JobCard job={job} />
						</div>
					))}
				</div>
			)}
		</section>
	);
};

export default Home;
