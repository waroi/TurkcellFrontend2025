import { getApplication } from "@/services/firebase";
import { useEffect, useState } from "react";
import Button from "#/atoms/Button";

export default function Exam({ app }) {
  const [application, setApplication] = useState({});

  useEffect(() => {
    getApplication(app.application).then(setApplication);
  }, []);

  return (
    <div className="card" key={app.application}>
      <div className="card-body">
        <h5 className="card-title">Sınav | {application.name}</h5>
        <p className="card-text">
          <b>Departman:</b> {application.department}
        </p>
        <p className="card-text">
          {app.name} {app.surname}
        </p>
        <Button to={`/exam/${app.exam}`}>Sınavı Başlat</Button>
      </div>
    </div>
  );
}
