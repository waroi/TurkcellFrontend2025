import { useState } from "react";
import { useApplications } from "../hooks/useApplications";
import {useAdminDashboard} from "../hooks/useAdminDashboard";
import AdminHeader from "./AdminHeader";
import AdminQuizSettings from "./AdminQuizSettings";
import ApplicationList from "./ApplicationList";
import ApplicationModal from "./ApplicationModal";
import QuestionManagementForm from "./QuestionManagementForm";
import CandidatesTable from "./ui/CandidatesTable";
import LoadingSpinner from "./ui/LoadingSpinner";
import TabNavigator from "./ui/TabNavigator";

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
    return <LoadingSpinner />;
  }

  const tabs = [
    { id: "applications", label: "Başvurular" },
    { id: "questions", label: "Soru Yönetimi" },
  ];

  return (
    <div className="container-fluid py-4">
      <AdminQuizSettings />
      <AdminHeader onRefresh={refreshData} />

      <TabNavigator
        activeTab={activeTab}
        onTabChange={setActiveTab}
        tabs={tabs}
      />

      {activeTab === "applications" ? (
        <>
          <div className="row g-4">
            <CandidatesTable
              title="Geçen Adaylar"
              candidates={passedCandidates}
              status="Geçti"
            />
            <CandidatesTable
              title="Kalan Adaylar"
              candidates={failedCandidates}
              status="Kaldı"
            />
          </div>

          <div className="row g-4">
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