import React from "react";

const ApplicationItem = ({
	application,
	onView,
	showActionButton = true,
	variant = "pending",
}) => {
	const getVariantStyles = () => {
		switch (variant) {
			case "approved":
				return {
					avatarClass: "bg-success bg-opacity-10",
					iconClass: "text-success",
				};
			case "rejected":
				return {
					avatarClass: "bg-danger bg-opacity-10",
					iconClass: "text-danger",
				};
			default:
				return {
					avatarClass: "bg-light",
					iconClass: "text-primary",
				};
		}
	};

	const styles = getVariantStyles();

	return (
		<tr>
			<td>
				<div className="d-flex align-items-center">
					<div
						className={`avatar ${styles.avatarClass} rounded-circle p-2 me-2`}>
						<i className={`bi bi-person ${styles.iconClass}`}></i>
					</div>
					<div>
						<div className="fw-semibold">
							{application.name} {application.surname}
						</div>
						<small className="text-muted">
							{application.gender || "Belirtilmemiş"}
						</small>
					</div>
				</div>
			</td>
			<td>
				<div className="small text-truncate" style={{ maxWidth: "150px" }}>
					<div>{application.email}</div>
					<div className="text-muted">{application.phoneNumber}</div>
				</div>
			</td>
			{showActionButton && (
				<td>
					<div className="btn-group btn-group-sm">
						<button
							className="btn btn-outline-primary"
							onClick={() => onView(application)}>
							<i className="bi bi-eye me-1"></i>İncele
						</button>
					</div>
				</td>
			)}
		</tr>
	);
};

export default ApplicationItem;
