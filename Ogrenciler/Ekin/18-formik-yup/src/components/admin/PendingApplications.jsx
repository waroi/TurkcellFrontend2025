import React from "react";
import ApplicationCard from "#/atoms/ApplicationCard";

export default function PendingApplications({ applications, onSelect }) {
  if (applications.length)
    return (
      <>
        {applications.map((app) => (
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
  else return "Bekleyen başvuru bulunamadı.";
}
