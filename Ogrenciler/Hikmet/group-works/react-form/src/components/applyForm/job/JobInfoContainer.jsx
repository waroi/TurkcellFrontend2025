import React from "react";
import JobDescription from "./JobDescription";
import JobHeader from "./JobHeader";
import JobMetadata from "./JobMetadata";

const JobInfoContainer = ({ jobDetails }) => {
	if (!jobDetails) {
		return (
			<div className="card text-start">
				<div className="card-header bg-primary text-white">
					<h5 className="mb-0 text-start">Job Details</h5>
				</div>
				<div className="card-body text-start">
					<p>No job details available.</p>
				</div>
			</div>
		);
	}

	return (
		<div className="card text-start">
			<div className="card-header bg-primary text-white">
				<h5 className="mb-0 text-start">Job Details</h5>
			</div>
			<div className="card-body text-start">
				<JobHeader logo={jobDetails.logo} title={jobDetails.title} />
				<JobMetadata
					company={jobDetails.company}
					location={jobDetails.location}
					jobType={jobDetails.jobType}
					experienceLevel={jobDetails.experienceLevel}
					jobDate={jobDetails.jobDate}
				/>
				<JobDescription
					description={jobDetails.description}
					requirements={jobDetails.requirements}
				/>
			</div>
		</div>
	);
};

export default JobInfoContainer;
