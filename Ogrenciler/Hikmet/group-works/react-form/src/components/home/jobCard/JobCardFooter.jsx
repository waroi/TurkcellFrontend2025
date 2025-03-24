import { Link } from "react-router";
import styles from "./jobCard.module.css";

const JobCardFooter = ({ job }) => {
	const getPostedDate = () => {
		if (!job.jobDate) return "Posted recently";

		const postDate = new Date(job.jobDate);
		const now = new Date();
		const diffDays = Math.floor((now - postDate) / (1000 * 60 * 60 * 24));

		if (diffDays === 0) return "Posted today";
		if (diffDays === 1) return "Posted yesterday";
		return `Posted ${diffDays} days ago`;
	};

	return (
		<div className="d-flex justify-content-between align-items-center mt-4">
			<div className="d-flex">
				<i className="bi bi-clock me-2 text-primary"></i>
				<small className="text-muted">{getPostedDate()}</small>
			</div>
			<Link
				to={`/apply-job/${job.id}`}
				className={`btn btn-primary ${styles.applyButton}`}>
				Apply Now
			</Link>
		</div>
	);
};

export default JobCardFooter;
