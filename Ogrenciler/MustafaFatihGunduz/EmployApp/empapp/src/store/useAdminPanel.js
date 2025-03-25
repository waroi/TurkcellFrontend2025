import { useState } from "react";
import { updateApplicationStatus } from "../services/applicationService";

const useAdminPanel = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const getFilteredApplications = (applications) => {
    const lowerCaseSearch = searchTerm.toLowerCase();
    return applications.filter(
      (app) =>
        app.name.toLowerCase().includes(lowerCaseSearch) ||
        (app.skills && app.skills.toLowerCase().includes(lowerCaseSearch))
    );
  };

  const handleApprove = async (application) => {
    try {
      await updateApplicationStatus(application.id, {
        status: "approved", // "Onaylandı" yerine "approved" kullanılmalı
        isTestAvailable: true,
      });
      alert("Başvuru onaylandı!");
    } catch (error) {
      console.error("Onaylama hatası:", error);
      alert("Bir hata oluştu!");
    }
  };

  const handleReject = async (application) => {
    try {
      await updateApplicationStatus(application.id, {
        status: "rejected",
      });
      alert("Başvuru reddedildi!");
    } catch (error) {
      console.error("Reddetme hatası:", error);
      alert("Bir hata oluştu!");
    }
  };

  return {
    searchTerm,
    setSearchTerm,
    getFilteredApplications,
    handleApprove,
    handleReject,
  };
};

export default useAdminPanel;
