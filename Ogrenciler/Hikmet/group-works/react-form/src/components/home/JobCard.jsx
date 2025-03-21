import { Link } from "react-router";
import styles from "./jobCard.module.css";

function JobCard({ job }) {
	return (
		<div
			className={`card shadow-sm border-0 h-100 position-relative ${styles.jobCard}`}>
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
						<small className="text-muted">Turkcell</small>
					</div>
					<div className="d-flex align-items-center">
						<i className="bi bi-geo-alt me-2 text-primary"></i>
						<small className="text-muted">Istanbul, Turkey</small>
					</div>
				</div>
			</div>

			<div className="card-body">
				<div className="d-flex flex-wrap mb-3">
					<span className={`me-2 mb-2 ${styles.badgePrimary}`}>Full-time</span>
					<span className={`me-2 mb-2 ${styles.badgeSuccess}`}>Remote</span>
					<span className={`mb-2 ${styles.badgeInfo}`}>Senior</span>
				</div>

				<p className="card-text">{job.description}</p>

				<div className="d-flex justify-content-between align-items-center mt-4">
					<div className="d-flex">
						<i className="bi bi-clock me-2 text-primary"></i>
						<small className="text-muted">Posted 3 days ago</small>
					</div>
					<Link
						to={`/apply-job/${job.id}`}
						className={`btn btn-primary ${styles.applyButton}`}>
						Apply Now
					</Link>
				</div>
			</div>
		</div>
	);
}

export default JobCard;
