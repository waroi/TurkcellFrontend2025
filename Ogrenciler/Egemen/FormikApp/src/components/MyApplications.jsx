import { useEffect, useState } from "react";
import { getUserApplications } from "../../firebase/dbController";

const MyApplications = () => {
  const [apps, setApps] = useState([]);

  const getApplications = async () => {
    setApps(await getUserApplications());
  };

  useEffect(() => {
    getApplications();
  }, []);
  return (
    <div className="container py-4">
      <h1 className="mb-4 text-center text-primary">Başvurularım</h1>
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
                  <div className="col-12"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyApplications;
