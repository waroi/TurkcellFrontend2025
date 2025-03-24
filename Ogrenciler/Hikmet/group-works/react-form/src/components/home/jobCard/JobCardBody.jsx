import styles from "./jobCard.module.css";

const JobCardBody = ({ job }) => {
	return (
		<>
			<div className="d-flex flex-wrap mb-3">
				<span className={`me-2 mb-2 ${styles.badgePrimary}`}>
					{job.jobType || "Full-time"}
				</span>
				<span className={`me-2 mb-2 ${styles.badgeSuccess}`}>
					{job.workLocation || "Remote"}
				</span>
				<span className={`mb-2 ${styles.badgeInfo}`}>
					{job.experienceLevel || "Senior"}
				</span>
			</div>

			<p className="card-text">{job.description}</p>
		</>
	);
};

export default JobCardBody;
