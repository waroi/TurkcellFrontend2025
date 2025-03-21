import { useEffect, useState } from "react";
import { auth } from "../../firebase/firebase";
import getApplications from "../hooks/getAplications";
import Accordion from "../components/organisms/accordion/Accordion";
import ApplicationDetails from "../components/molecules/ApplicationDetails";
import { updateAppStatus } from "../../firebase/dbController";

const Applications = () => {
  const [apps, setApps] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getApplications(auth.currentUser.uid, setApps, setUser, setLoading);
  }, []);

  const handleUpdateStatus = (application, status) => {
    application.status = status;
    updateAppStatus(application);
  };

  const sections = apps.map((application, index) => ({
    title: `${application.fullname} - ${application.education.university} - ${application.experience.position}`,
    fields: (
      <ApplicationDetails
        application={application}
        user={user}
        onUpdateStatus={handleUpdateStatus}
      />
    ),
  }));

  return loading ? (
    <div>Loading...</div>
  ) : (
    <div className="container py-4">
      <h1 className="mb-4 text-center text-primary">Tüm Başvurular</h1>
      <Accordion sections={sections} />
    </div>
  );
};

export default Applications;
