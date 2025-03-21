import { useEffect, useState } from "react";
import {
  getAllApplications,
  getUser,
  getUserApplications,
  updateAppStatus,
} from "../../firebase/dbController";
import { auth } from "../../firebase/firebase";
import Button from "../components/atoms/buttons/Button";
import getApplications from "../hooks/getAplications";

const Applications = () => {
  const [apps, setApps] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getApplications(auth.currentUser.uid, setApps, setUser, setLoading);
  }, []);

  return loading ? (
    <div>Loading...</div>
  ) : (
    <div className="container py-4">
      <h1 className="mb-4 text-center text-primary">Tüm Başvurular</h1>
      <div className="accordion" id="applicationsAccordion">
        {apps.map((application, index) => (
          <div
            className="accordion-item border rounded shadow-sm mb-3"
            key={index}
          >
            <h2 className="accordion-header" id={`heading${index}`}>
              <button
                className="accordion-button bg-light text-dark fw-bold"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${index}`}
                aria-expanded="true"
                aria-controls={`collapse${index}`}
              >
                {application.fullname} - {application.education.university} -{" "}
                {application.experience.position}
              </button>
            </h2>
            <div
              id={`collapse${index}`}
              className="accordion-collapse collapse"
              aria-labelledby={`heading${index}`}
              data-bs-parent="#applicationsAccordion"
            >
              <div className="accordion-body bg-white p-4">
                <div className="row">
                  <div className="col-lg-4">
                    <h5 className="fw-bold text-secondary">Kişisel Bilgiler</h5>
                    <p>
                      <strong>Email:</strong> {application.email}
                    </p>
                    <p>
                      <strong>Telefon:</strong> {application.phone}
                    </p>
                    <p>
                      <strong>Doğum Tarihi:</strong> {application.birthDate}
                    </p>
                  </div>
                  <div className="col-lg-4">
                    <h5 className="fw-bold text-secondary">Eğitim Bilgileri</h5>
                    <p>
                      <strong>Üniversite:</strong>{" "}
                      {application.education.university}
                    </p>
                    <p>
                      <strong>Bölüm:</strong> {application.education.department}
                    </p>
                    <p>
                      <strong>Mezuniyet Yılı:</strong>{" "}
                      {application.education.graduationYear}
                    </p>
                    <p>
                      <strong>GPA:</strong> {application.education.gpa}
                    </p>
                  </div>
                  <div className="col-lg-4">
                    <h5 className="fw-bold text-secondary">
                      Deneyim & Beceriler
                    </h5>
                    <p>
                      <strong>Şirket:</strong>{" "}
                      {application.experience.currentCompany ||
                        "Mevcut şirket bilgisi yok."}
                    </p>
                    <p>
                      <strong>Pozisyon:</strong>{" "}
                      {application.experience.position ||
                        "Mevcut pozisyon bilgisi yok."}
                    </p>
                    <p>
                      <strong>Deneyim Yılı:</strong>{" "}
                      {application.experience.years ||
                        "Mevcut deneyim yılı bilgisi yok."}
                    </p>
                    <p>
                      <strong>Programming Languages:</strong>{" "}
                      {application.skills.programmingLanguages
                        ? Object.entries(
                            application.skills.programmingLanguages
                          )
                            .filter(([_, value]) => value)
                            .map(([key]) => key)
                            .join(", ")
                        : "Programlama dili becerisi yok."}
                    </p>
                    <p>
                      <strong>Languages:</strong>{" "}
                      {application.skills.languages
                        ? Object.entries(application.skills.languages)
                            .filter(([_, value]) => value)
                            .map(([key]) => key)
                            .join(", ")
                        : "Dil becerisi yok."}
                    </p>
                  </div>
                </div>
                <div className="mt-4 d-flex justify-content-end">
                  {user &&
                  application.status === "Beklemede" &&
                  user.role === "admin" ? (
                    <>
                      <Button
                        className="btn btn-success me-3 px-4 py-2 shadow"
                        onClick={() => {
                          {
                            application.status = "Onay";
                            updateAppStatus(application);
                          }
                        }}
                      >
                        Onayla
                      </Button>
                      <Button
                        className="btn btn-danger px-4 py-2 shadow"
                        onClick={() => {
                          {
                            application.status = "Red";
                            updateAppStatus(application);
                          }
                        }}
                      >
                        Reddet
                      </Button>
                    </>
                  ) : (
                    <>
                      {application.status === "Beklemede" && (
                        <span className="badge text-bg-primary">
                          Değerlendirme Aşamasında
                        </span>
                      )}
                      {application.status === "Onay" && (
                        <span className="badge text-bg-success">
                          Başvuru Onaylandı
                        </span>
                      )}
                      {application.status === "Red" && (
                        <span className="badge text-bg-danger">
                          Başvuru kabul edilmedi
                        </span>
                      )}
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Applications;
