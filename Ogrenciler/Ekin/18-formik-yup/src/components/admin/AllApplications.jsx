import { getApplications } from "@/services/firebase";
import { useEffect, useState } from "react";
import ApplicationQuestion from "#/admin/ApplicationQuestion";

export default function AllApplications() {
  const [allApplications, setAllApplications] = useState([]);

  useEffect(() => {
    getApplications().then(setAllApplications);
  }, []);

  return allApplications.map((application, index) => (
    <div className="card mb-3" key={index}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={application.image} className="img-fluid rounded-start" />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <p className="card-text mb-2 fw-bold opacity-50">
              {application.department}
            </p>
            <h5 className="card-title mb-3">{application.name}</h5>
            <ApplicationQuestion id={application.id} />
          </div>
        </div>
      </div>
    </div>
  ));
}
