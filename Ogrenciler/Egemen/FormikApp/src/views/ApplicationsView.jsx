import { useEffect, useState } from "react";
import { updateAppStatus } from "../../firebase/dbController";
import getApplications from "../hooks/getAplications";
import { unsubscribe } from "../../services/authServices";
import useApplicationStatus from "../hooks/useApplicationStatus";
import AccordionItem from "../components/molecules/AccordionItem/AccordionItem";

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
  }, [userAuth]);

  return loading ? (
    <div>Loading...</div>
  ) : (
    <div className="container py-4">
      <h1 className="mb-4 text-center text-primary">Tüm Başvurular</h1>
      <div className="accordion" id="applicationsAccordion">
        {apps.map((application, index) => (
          <AccordionItem
            application={application}
            user={user}
            sonrakiAsama={sonrakiAsama}
            updateAppStatus={updateAppStatus}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};

export default Applications;
