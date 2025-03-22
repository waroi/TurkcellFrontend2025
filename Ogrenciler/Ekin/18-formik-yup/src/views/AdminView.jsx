import React, { useEffect, useState } from "react";
import useUserStore from "../store/useStore";
import { getForms } from "../services/firebase";
import Application from "../components/Application";
import ApplicationDetail from "../components/ApplicationDetail";

const AdminView = () => {
  const [detail, setDetail] = useState(null);

  const userStore = useUserStore();

  function goSelected(application) {
    setDetail(application);
    document.querySelector('[data-bs-target="#selected"]').click();
  }

  function goCompletedApplications() {
    document
      .querySelector('[data-bs-target="#completed-applications"]')
      .click();
  }

  useEffect(() => {
    getForms().then((applications) => userStore.setApplications(applications));
  }, []);

  return (
    <div className="container">
      <ul className="nav nav-tabs" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            data-bs-toggle="tab"
            data-bs-target="#applications"
            type="button"
            role="tab"
          >
            Bekleyen Başvurular
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            data-bs-toggle="tab"
            data-bs-target="#selected"
            type="button"
            role="tab"
          >
            Seçilen
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            data-bs-toggle="tab"
            data-bs-target="#completed-applications"
            type="button"
            role="tab"
          >
            Tamamlanmış Başvurular
          </button>
        </li>
      </ul>
      <div className="tab-content pt-4">
        <div
          className="tab-pane fade show active"
          id="applications"
          role="tabpanel"
        >
          {userStore.applications.map(
            (application, index) =>
              !application.status && (
                <Application
                  key={index}
                  application={application}
                  goSelected={goSelected}
                />
              )
          )}
        </div>
        <div className="tab-pane fade" id="selected" role="tabpanel">
          <ApplicationDetail
            application={detail}
            goCompletedApplications={goCompletedApplications}
            setDetail={setDetail}
          />
        </div>
        <div
          className="tab-pane fade"
          id="completed-applications"
          role="tabpanel"
        >
          {userStore.applications.map(
            (application, index) =>
              application.status && (
                <Application key={index} application={application} />
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminView;
