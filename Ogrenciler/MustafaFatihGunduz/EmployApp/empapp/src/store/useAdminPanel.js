import { useState } from "react";
import { updateApplicationStatus } from "../services/applicationService";
import { db } from "../../firebase_config";
import { setDoc,doc } from "firebase/firestore";

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

  const handleApprove = async (application, total, hard, medium) => {
    try {
        await updateApplicationStatus(application.id, {
            status: "approved",
            isTestAvailable: true,
        });
        await setDoc(doc(db, "tests", application.id), {
            totalQuestion: total,
            hardQuestion: hard,
            mediumQuestion: medium,
            userId: application.id,
        });

        alert("Başvuru onaylandı ve test bilgileri kaydedildi!");
    } catch (error) {
        console.error("Onaylama hatası:", error);
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
