import React, { useEffect } from "react";
import ApplicationDetails from "../ApplicationDetail/ApplicationDetails";

const AccordionItem = ({
  application,
  user,
  updateAppStatus,
  sonrakiAsama,
}) => {
  return (
    <div
      className="accordion-item border rounded shadow-sm mb-3"
      key={application.id}
    >
      <h2 className="accordion-header" id={`heading${application.id}`}>
        <button
          className="accordion-button bg-light text-dark fw-bold"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse${application.id}`}
          aria-expanded="true"
          aria-controls={`collapse${application.id}`}
        >
          {application.fullname} - {application.education.university} -{" "}
          {application.experience.position}
        </button>
      </h2>
      <div
        id={`collapse${application.id}`}
        className="accordion-collapse collapse"
        aria-labelledby={`heading${application.id}`}
        data-bs-parent="#applicationsAccordion"
      >
        <ApplicationDetails
          application={application}
          user={user}
          updateAppStatus={updateAppStatus}
          sonrakiAsama={sonrakiAsama}
        />
      </div>
    </div>
  );
};

export default AccordionItem;
