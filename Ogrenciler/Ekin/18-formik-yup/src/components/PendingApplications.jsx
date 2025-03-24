import React from "react";
import ApplicationCard from "./ApplicationCard";

export default function PendingApplications({ applications, onSelect }) {
  const pending = applications.filter((a) => !a.status);

  if (pending.length === 0) {
    return <p>Bekleyen başvuru bulunamadı.</p>;
  }

  return (
    <>
      {pending.map((app) => (
        <ApplicationCard
          key={app.id}
          application={app}
          showUniversityInfo={true}
          showPreferences={false}
          onSelect={onSelect}
        />
      ))}
    </>
  );
}
