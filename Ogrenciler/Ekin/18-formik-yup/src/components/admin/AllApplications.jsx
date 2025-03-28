import { getApplications } from "@/services/firebase";
import { useEffect, useState } from "react";
import ApplicationQuestion from "#/admin/ApplicationQuestion";

export default function AllApplications() {
  const [allApplications, setAllApplications] = useState([]);

  useEffect(() => {
    getApplications().then(setAllApplications);
  }, []);

  return allApplications.map((application, index) => (
    <div className="card mb-3 border-0 shadow mb-5" key={index}>
      <div className="row g-0">
        <div className="col-md-6">
          <img
            src={application.image}
            className="img-fluid rounded-start h-100 object-fit-cover pe-0 pe-md-3"
          />
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <p className="card-text mb-2 fw-bold opacity-50">
              {application.department}
            </p>
            <h5 className="card-title mb-3">{application.name}</h5>
            <ApplicationQuestion
              id={application.id}
              difficulty={application.difficulty}
            />
          </div>
        </div>
      </div>
    </div>
  ));
}
