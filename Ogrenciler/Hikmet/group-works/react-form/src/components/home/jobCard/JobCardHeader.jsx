import styles from "./jobCard.module.css";

const JobCardHeader = ({ job }) => {
	return (
		<>
			<div className="position-absolute top-0 end-0 p-3">
				<span className={`badge rounded-pill ${styles.badgeDate}`}>
					{job.jobDate ? new Date(job.jobDate).toLocaleDateString() : "New"}
				</span>
			</div>

			<div className="d-flex align-items-center p-3 border-bottom">
				<div className="company-logo me-3">
					<img
						src={job.logo}
						className={`rounded-3 ${styles.logo}`}
						alt={`${job.title} logo`}
					/>
				</div>
				<div>
					<h5 className="card-title mb-1 fw-bold text-primary">{job.title}</h5>
					<div className="d-flex align-items-center mb-1">
						<i className="bi bi-building me-2 text-primary"></i>
						<small className="text-muted">{job.company || "Turkcell"}</small>
					</div>
					<div className="d-flex align-items-center">
						<i className="bi bi-geo-alt me-2 text-primary"></i>
						<small className="text-muted">
							{job.location || "Istanbul, Turkey"}
						</small>
					</div>
				</div>
			</div>
		</>
	);
};

export default JobCardHeader;
