import React from "react";

import styles from "./jobCard/jobCard.module.css";
import JobCardBody from "./jobCard/JobCardBody";
import JobCardFooter from "./jobCard/JobCardFooter";
import JobCardHeader from "./jobCard/JobCardHeader";

const JobCard = ({ job }) => {
	if (!job) return null;

	return (
		<div
			className={`card shadow-sm border-0 h-100 position-relative ${styles.jobCard}`}>
			<JobCardHeader job={job} />
			<div className="card-body">
				<JobCardBody job={job} />
				<JobCardFooter job={job} />
			</div>
		</div>
	);
};

export default JobCard;
