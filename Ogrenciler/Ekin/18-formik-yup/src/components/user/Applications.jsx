import { useEffect } from "react";
import ApplicationCard from "#/atoms/ApplicationCard";
import { getForms } from "@/services/firebase";

import useStore from "@/store/useStore";

const MyApplications = () => {
  const { user, userApplications, setUserApplications } = useStore();

  useEffect(() => {
    getForms().then((userApplications) => {
      const filtered = userApplications.filter(
        (app) => app.email === user?.email
      );
      setUserApplications(filtered);
    });
  }, [user]);

  if (!userApplications || userApplications.length === 0) {
    return <p>Herhangi bir başvuru bulunamadı.</p>;
  }

  return (
    <div className="mt-3">
      {userApplications.map((app, index) => (
        <ApplicationCard
          key={index}
          application={app}
          showPreferences={true}
          showStatus={true}
        />
      ))}
    </div>
  );
};

export default MyApplications;
