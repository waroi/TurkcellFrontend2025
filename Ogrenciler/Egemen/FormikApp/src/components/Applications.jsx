import React, { useEffect, useState } from "react";
import { getAllApplications } from "../../firebase/dbController";

const Applications = () => {
  const [apps, setApps] = useState([]);
  const getApplications = async () => {
    setApps(await getAllApplications());
    console.log("apps", apps);
  };
  useEffect(() => {
    getApplications();
  }, []);
  return (
    <div className="container py-3">
      <h1>Tüm Başvurular</h1>
      {apps &&
        apps.map((application) => (
          <div className="card">
            <div className="row">
              <div className="col-lg-4">
                <img src="..." className="card-img-top" alt="..." />
              </div>
              <div className="col-lg-4">
                <div className="card-body">
                  <h5 className="card-title">Kişisel Bilgiler</h5>
                  <p className="card-text">{application.fullname}</p>
                  <p className="card-text">{application.email}</p>
                  <p className="card-text">{application.phone}</p>
                  <p className="card-text">{application.birthDate}</p>
                  <h5 className="card-title">Eğitim Bilgileri</h5>
                  <p className="card-text">
                    {application.education.university}
                  </p>
                  <p className="card-text">
                    {application.education.department}
                  </p>
                  <p className="card-text">
                    {application.education.graduationYear}
                  </p>
                  <p className="card-text">{application.education.gpa}</p>
                </div>
              </div>
              <div className="col-lg-4">
                <h5 className="card-title">Deneyim Bilgileri</h5>
                <p className="card-text">
                  {application.experience.currentCompany ||
                    "Mevcut şirket bilgisi yok."}
                </p>
                <p className="card-text">
                  {application.experience.position ||
                    "Mevcut pozisyon bilgisi yok."}
                </p>
                <p className="card-text">
                  {application.experience.years ||
                    "Mevcut deneyim yılı bilgisi yok."}
                </p>
                <h5 className="card-title">Beceriler</h5>
                <p className="card-text">
                  {Object.values(application.skills.databases) ||
                    "Database becerisi yok."}
                </p>
                <p className="card-text">
                  {Object.values(application.skills.frameworks) ||
                    "Frameworks becerisi yok."}
                </p>

                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Applications;
