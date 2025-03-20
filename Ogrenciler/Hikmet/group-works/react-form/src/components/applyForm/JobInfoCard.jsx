import React from "react";

export default function JobInfoCard({ jobDetails }) {
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
				<div className="d-flex align-items-center mb-3">
					{jobDetails.logo && (
						<img
							src={jobDetails.logo}
							alt={`${jobDetails.title} logo`}
							className="rounded me-3"
							style={{ width: "60px", height: "60px", objectFit: "cover" }}
						/>
					)}
					<h5 className="card-title mb-0">{jobDetails.title}</h5>
				</div>

				<p className="card-text">
					<strong>Company:</strong> {jobDetails.company || "Turkcell"}
				</p>
				<p className="card-text">
					<strong>Location:</strong> {jobDetails.location || "Istanbul, Turkey"}
				</p>
				<p className="card-text">
					<strong>Type:</strong> {jobDetails.jobType || "Full-time"}
				</p>
				<p className="card-text">
					<strong>Experience Level:</strong>{" "}
					{jobDetails.experienceLevel || "Senior"}
				</p>
				<p className="card-text">
					<strong>Posted:</strong>{" "}
					{jobDetails.jobDate
						? new Date(jobDetails.jobDate).toLocaleDateString()
						: "Recent"}
				</p>

				<p className="card-text">
					<strong>Description:</strong> {jobDetails.description}
				</p>

				{jobDetails.requirements && (
					<>
						<p className="card-text">
							<strong>Requirements:</strong>
						</p>
						<ul className="text-start">
							{Array.isArray(jobDetails.requirements) ? (
								jobDetails.requirements.map((req, index) => (
									<li key={index}>{req}</li>
								))
							) : (
								<li>{jobDetails.requirements}</li>
							)}
						</ul>
					</>
				)}
			</div>
		</div>
	);
}
