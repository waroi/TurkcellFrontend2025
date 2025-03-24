import React from "react";
import ApplicationCard from "./ApplicationCard";

const MyApplications = ({ applications }) => {
  if (!applications || applications.length === 0) {
    return <p>Herhangi bir başvuru bulunamadı.</p>;
  }

  return (
    <div className="mt-3">
      {applications.map((app) => (
        <ApplicationCard
          key={app.id}
          application={app}
          showPreferences={true}
          showStatus={true}
        />
      ))}
    </div>
  );
};

export default MyApplications;
