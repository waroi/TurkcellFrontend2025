import { useState } from "react";
import { useApplications } from "../../hooks/useApplication";
import AdminHeader from "./AdminHeader";
import ApplicationList from "./ApplicationList";
import ApplicationModal from "./ApplicationModal";
import QuestionManagementForm from "./QuestionManagementForm";

const AdminDashboard = () => {
  const [selectedApplication, setSelectedApplication] = useState(null);
  const [activeTab, setActiveTab] = useState("applications");
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
        style={{ height: "100vh" }}
      >
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Yükleniyor...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid py-4">
      <AdminHeader onRefresh={refreshData} />

      {/* Navigation Tabs */}
      <ul className="nav nav-tabs mb-4">
        <li className="nav-item">
          <button
            className={`nav-link ${
              activeTab === "applications" ? "active" : ""
            }`}
            onClick={() => setActiveTab("applications")}
          >
            Başvurular
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "questions" ? "active" : ""}`}
            onClick={() => setActiveTab("questions")}
          >
            Soru Yönetimi
          </button>
        </li>
      </ul>

      {/* Conditional Rendering Based on Active Tab */}
      {activeTab === "applications" ? (
        <>
          <div className="row g-4">
            {/* Geçen Adaylar Tablosu */}
            <div className="col-lg-6 mb-5">
              <h4>Geçen Adaylar</h4>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th>Email</th>
                    <th>Doğru Sayısı</th>
                    <th>Durum</th>
                  </tr>
                </thead>
                <tbody>
                  {passedCandidates.map((candidate) => (
                    <tr key={candidate.id}>
                      <td>{candidate.email}</td>
                      <td>{candidate.score}/10</td>
                      <td>Geçti</td>
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
                    <th>Email</th>
                    <th>Doğru Sayısı</th>
                    <th>Durum</th>
                  </tr>
                </thead>
                <tbody>
                  {failedCandidates.map((candidate) => (
                    <tr key={candidate.id}>
                      <td>{candidate.email}</td>
                      <td>{candidate.score}/10</td>
                      <td>Kaldı</td>
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
            <div className="col-lg-4">
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
        </>
      ) : (
        <QuestionManagementForm />
      )}

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
