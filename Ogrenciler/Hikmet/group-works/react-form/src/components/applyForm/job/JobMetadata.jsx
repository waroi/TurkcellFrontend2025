import React from "react";

const JobMetadata = ({
	company,
	location,
	jobType,
	experienceLevel,
	jobDate,
}) => {
	return (
		<>
			<p className="card-text">
				<strong>Company:</strong> {company || "Turkcell"}
			</p>
			<p className="card-text">
				<strong>Location:</strong> {location || "Istanbul, Turkey"}
			</p>
			<p className="card-text">
				<strong>Type:</strong> {jobType || "Full-time"}
			</p>
			<p className="card-text">
				<strong>Experience Level:</strong> {experienceLevel || "Senior"}
			</p>
			<p className="card-text">
				<strong>Posted:</strong>{" "}
				{jobDate ? new Date(jobDate).toLocaleDateString() : "Recent"}
			</p>
		</>
	);
};

export default JobMetadata;
