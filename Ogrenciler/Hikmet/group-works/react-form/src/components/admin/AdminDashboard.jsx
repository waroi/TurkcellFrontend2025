import { useState } from "react";

import { useApplications } from "../../hooks/useApplication";
import AdminHeader from "./AdminHeader";
import ApplicationList from "./ApplicationList";
import ApplicationModal from "./ApplicationModal";

const AdminDashboard = () => {

	const [selectedApplication, setSelectedApplication] = useState(null);
	const {
		reviewList,
		positiveList,
		negativeList,
		passedCandidates,
		failedCandidates,
		loading,
		refreshData,
		handleApprove,
		handleReject,
	} = useApplications();

	const handleViewApplication = (application) => {
		setSelectedApplication(application);
	};

	const handleCloseModal = () => {
		setSelectedApplication(null);
	};

	const handleApproveApplication = async (application) => {
		await handleApprove(application);
		setSelectedApplication(null);
	};

	const handleRejectApplication = async (application) => {
		await handleReject(application);
		setSelectedApplication(null);
	};

	if (loading) {
		return (
			<div
				className="d-flex justify-content-center align-items-center"
				style={{ height: "100vh" }}>
				<div className="spinner-border text-primary" role="status">
					<span className="visually-hidden">Loading...</span>
				</div>
			</div>
		);
	}

	return (
		<div className="container-fluid py-4">
			<AdminHeader onRefresh={refreshData} />
			<div className="row g-4">
				{/* Geçen Adaylar Tablosu */}
				<div className="col-lg-6 mb-5">
					<h4>Geçen Adaylar</h4>
					<table className="table table-bordered">
						<thead>
							<tr>
								<th>Ad</th>
								<th>Email</th>
								<th>Skor</th>
							</tr>
						</thead>
						<tbody>
							{passedCandidates.map((candidate) => (
								<tr key={candidate.id}>
									<td>{candidate.name}</td>
									<td>{candidate.email}</td>
									<td>{candidate.score}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>

				{/* Kalan Adaylar Tablosu */}
				<div className="col-lg-6 mb-5">
					<h4>Kalan Adaylar</h4>
					<table className="table table-bordered">
						<thead>
							<tr>
								<th>Ad</th>
								<th>Email</th>
								<th>Skor</th>
							</tr>
						</thead>
						<tbody>
							{failedCandidates.map((candidate) => (
								<tr key={candidate.id}>
									<td>{candidate.name}</td>
									<td>{candidate.email}</td>
									<td>{candidate.score}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>

			</div>
			<div className="row g-4">
				{/* İncelenecek Başvurular */}
				<div className="col-lg-4">
					<ApplicationList
						title="İncelenecek Başvurular"
						icon="bi-hourglass"
						badgeColor="bg-warning"
						applications={reviewList}
						onViewApplication={handleViewApplication}
						emptyMessage="İncelenecek başvuru bulunmamaktadır."
						emptyIcon="bi-inbox-fill"
						variant="pending"
					/>
				</div>

				{/* Onaylanan Başvurular */}
				<div className="col-lg-4"><button className="btn btn-primary">Test Gönder</button>
					<ApplicationList
						title="Onaylanan Başvurular"
						icon="bi-check-circle"
						badgeColor="bg-success"
						applications={positiveList}
						onViewApplication={handleViewApplication}
						emptyMessage="Onaylanan başvuru bulunmamaktadır."
						emptyIcon="bi-check-circle"
						showActions={false}
						variant="approved"
					/>

				</div>

				{/* Reddedilen Başvurular */}
				<div className="col-lg-4">
					<ApplicationList
						title="Reddedilen Başvurular"
						icon="bi-x-circle"
						badgeColor="bg-danger"
						applications={negativeList}
						onViewApplication={handleViewApplication}
						emptyMessage="Reddedilen başvuru bulunmamaktadır."
						emptyIcon="bi-x-circle"
						showActions={false}
						variant="rejected"
					/>
				</div>
			</div>

			{/* Başvuru Detay Modalı */}
			{selectedApplication && (
				<ApplicationModal
					application={selectedApplication}
					onClose={handleCloseModal}
					onApprove={handleApproveApplication}
					onReject={handleRejectApplication}
				/>
			)}
		</div>
	);
};

export default AdminDashboard;
