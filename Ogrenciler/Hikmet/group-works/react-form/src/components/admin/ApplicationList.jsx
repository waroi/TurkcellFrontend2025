import React from "react";

import ApplicationItem from "./ApplicationItem";

const ApplicationList = ({
	title,
	icon,
	badgeColor = "bg-warning",
	applications = [],
	onViewApplication,
	emptyMessage = "Başvuru bulunmamaktadır.",
	emptyIcon = "bi-inbox-fill",
	showActions = true,
	variant = "pending",
}) => {
	return (
		<div className="card shadow-sm border-0 h-100">
			<div className="card-header bg-white p-3 border-0">
				<h5 className="card-title mb-0">
					<i
						className={`bi ${icon} me-2 text-${badgeColor.replace(
							"bg-",
							""
						)}`}></i>
					{title}
					<span
						className={`badge ${badgeColor} ${
							badgeColor === "bg-warning" ? "text-dark" : ""
						} ms-2`}>
						{applications.length}
					</span>
				</h5>
			</div>
			<div className="card-body p-0">
				{applications.length === 0 ? (
					<div className="p-4 text-center text-muted">
						<i className={`bi ${emptyIcon} fs-1 d-block mb-3 text-light`}></i>
						<p>{emptyMessage}</p>
					</div>
				) : (
					<div className="table-responsive">
						<table className="table table-hover align-middle mb-0">
							<thead className="table-light">
								<tr>
									<th>Başvuran</th>
									<th>İletişim</th>
									{showActions && <th>İşlemler</th>}
								</tr>
							</thead>
							<tbody>
								{applications.map((item) => (
									<ApplicationItem
										key={item.id}
										application={item}
										onView={onViewApplication}
										showActionButton={showActions}
										variant={variant}
									/>
								))}
							</tbody>
						</table>
					</div>
				)}
			</div>
		</div>
	);
};

export default ApplicationList;
