import { useEffect } from "react";
import { getForms } from "@/services/firebase";

import Exam from "#/user/Exam";

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
      {userApplications.map((app) => {
        if (app.exam && !app.result)
          return <Exam key={app.application} app={app} />;
      })}
    </div>
  );
};

export default MyApplications;
