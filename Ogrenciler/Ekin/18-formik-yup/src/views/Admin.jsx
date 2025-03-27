import React, { useEffect, useState } from "react";
import useUserStore from "@/store/useStore";
import { getForms } from "@/services/firebase";
import ApplicationDetail from "#/admin/ApplicationDetail";
import PendingApplications from "#/admin/PendingApplications";
import CompletedApplications from "#/admin/CompletedApplications";
import AllApplications from "#/admin/AllApplications";
import { Tab, Pane } from "#/atoms/Tab";

export default function AdminView() {
  const [detail, setDetail] = useState(null);
  const { applications, setApplications } = useUserStore();

  useEffect(() => {
    getForms().then((applications) => setApplications(applications));
  }, []);

  const handleSelect = (application) => {
    setDetail(application);
    document.querySelector('[data-bs-target="#selected"]')?.click();
  };

  const goCompletedApplications = () => {
    document
      .querySelector('[data-bs-target="#completed-applications"]')
      ?.click();
  };

  return (
    <div className="container mt-4">
      <Tab>
        <Pane id="all-applications" tab="Başvuru İlanları">
          <AllApplications />
        </Pane>
        <Pane id="applications" tab="Bekleyen Başvurular">
          <PendingApplications
            applications={applications.filter(
              (application) => !application.status
            )}
            onSelect={handleSelect}
          />
        </Pane>
        <Pane id="selected" tab="Seçilen">
          <ApplicationDetail
            application={detail}
            goCompletedApplications={goCompletedApplications}
            setDetail={setDetail}
          />
        </Pane>
        <Pane id="completed-applications" tab="Tamamlanmış Başvurular">
          <CompletedApplications
            applications={applications.filter(
              (application) => application.status
            )}
          />
        </Pane>
      </Tab>
    </div>
  );
}
