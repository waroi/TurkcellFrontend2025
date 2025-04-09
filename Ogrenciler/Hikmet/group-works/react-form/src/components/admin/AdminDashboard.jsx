import { useState } from "react";
import { useApplications } from "../hooks/useApplications";
import {useAdminDashboard} from "../hooks/useAdminDashboard";
import AdminHeader from "./AdminHeader";
import PassedCandidatesTable from "./PassedCandidatesTable";
import FailedCandidatesTable from "./FailedCandidatesTable";
import AdminQuizSettings from "./AdminQuizSettings";
import ApplicationSection from "./ApplicationSection";
import QuestionManagementForm from "./QuestionManagementForm";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("applications");
  const { loading, passedCandidates, failedCandidates, refreshData } = useApplications();

  if (loading) {
    return <div className="spinner-border text-primary" role="status"><span className="visually-hidden">Yükleniyor...</span></div>;
  }

  return (
    <div className="container-fluid py-4">
      <AdminQuizSettings />
      <AdminHeader onRefresh={refreshData} />

      <ul className="nav nav-tabs mb-4">
        <li className="nav-item">
          <button className={`nav-link ${activeTab === "applications" ? "active" : ""}`} onClick={() => setActiveTab("applications")}>
            Başvurular
          </button>
        </li>
        <li className="nav-item">
          <button className={`nav-link ${activeTab === "questions" ? "active" : ""}`} onClick={() => setActiveTab("questions")}>
            Soru Yönetimi
          </button>
        </li>
      </ul>

      {activeTab === "applications" ? (
        <>
          <div className="row g-4">
            <PassedCandidatesTable candidates={passedCandidates} />
            <FailedCandidatesTable candidates={failedCandidates} />
          </div>
          <ApplicationSection />
        </>
      ) : (
        <QuestionManagementForm />
      )}
    </div>
  );
};

export default AdminDashboard;