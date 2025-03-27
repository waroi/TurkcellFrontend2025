import { useEffect, useState } from "react";
import { updateAppStatus } from "../../firebase/dbController";
import Button from "../components/atoms/buttons/Button";
import getApplications from "../hooks/getAplications";
import { unsubscribe } from "../../services/authServices";
import { NavLink } from "react-router";
import useApplicationStatus from "../hooks/useApplicationStatus";
import ApplicationDetails from "../components/molecules/ApplicationDetail/ApplicationDetails";

const Applications = () => {
  const [apps, setApps] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [userAuth, setUserAuth] = useState(null);
  const { sonrakiAsama } = useApplicationStatus(setApps);

  useEffect(() => {
    unsubscribe(setUserAuth);
    if (userAuth) {
      getApplications(userAuth.uid, setApps, setUser, setLoading);
    } else {
      setLoading(false);
    }
  }, [userAuth, apps]);

  return loading ? (
    <div>Loading...</div>
  ) : (
    <div className="container py-4">
      <h1 className="mb-4 text-center text-primary">Tüm Başvurular</h1>
      <div className="accordion" id="applicationsAccordion">
        {apps.map((application, index) => (
          <div
            className="accordion-item border rounded shadow-sm mb-3"
            key={index}
          >
            <h2 className="accordion-header" id={`heading${index}`}>
              <button
                className="accordion-button bg-light text-dark fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${index}`}
                aria-expanded="true"
                aria-controls={`collapse${index}`}
              >
                {application.fullname} - {application.education.university} -{" "}
                {application.experience.position}
              </button>
            </h2>
            <div
              id={`collapse${index}`}
              className="accordion-collapse collapse"
              aria-labelledby={`heading${index}`}
              data-bs-parent="#applicationsAccordion"
            >
              <ApplicationDetails
                application={application}
                user={user}
                onUpdateStatus={updateAppStatus}
                sonrakiAsama={sonrakiAsama}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Applications;
