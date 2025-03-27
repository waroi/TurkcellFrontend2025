import React from "react";
import ApplicationCard from "#/atoms/ApplicationCard";

export default function CompletedApplications({ applications }) {
  const completed = applications.filter((a) => a.status);

  if (completed.length === 0) {
    return <p>Tamamlanmış başvuru bulunamadı.</p>;
  }

  return (
    <>
      {completed.map((app, index) => (
        <ApplicationCard
          key={index}
          application={app}
          showUniversityInfo={true}
          showPreferences={false}
          showStatus={true}
        />
      ))}
    </>
  );
}
