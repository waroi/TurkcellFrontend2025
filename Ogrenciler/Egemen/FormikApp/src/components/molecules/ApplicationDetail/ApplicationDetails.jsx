import Button from "../../atoms/buttons/Button";

const ApplicationDetails = ({ application, user, sonrakiAsama }) => {
  return (
    // <div className="accordion-body bg-white p-4">
    //   <div className="row">
    //     <div className="col-lg-4">
    //       <h5 className="fw-bold text-secondary">Kişisel Bilgiler</h5>
    //       <p>
    //         <strong>Email:</strong> {application.email}
    //       </p>
    //       <p>
    //         <strong>Telefon:</strong> {application.phone}
    //       </p>
    //       <p>
    //         <strong>Doğum Tarihi:</strong> {application.birthDate}
    //       </p>
    //     </div>
    //     <div className="col-lg-4">
    //       <h5 className="fw-bold text-secondary">Eğitim Bilgileri</h5>
    //       <p>
    //         <strong>Üniversite:</strong> {application.education.university}
    //       </p>
    //       <p>
    //         <strong>Bölüm:</strong> {application.education.department}
    //       </p>
    //       <p>
    //         <strong>Mezuniyet Yılı:</strong>{" "}
    //         {application.education.graduationYear}
    //       </p>
    //       <p>
    //         <strong>GPA:</strong> {application.education.gpa}
    //       </p>
    //     </div>
    //     <div className="col-lg-4">
    //       <h5 className="fw-bold text-secondary">Deneyim & Beceriler</h5>
    //       <p>
    //         <strong>Şirket:</strong>{" "}
    //         {application.experience.currentCompany ||
    //           "Mevcut şirket bilgisi yok."}
    //       </p>
    //       <p>
    //         <strong>Pozisyon:</strong>{" "}
    //         {application.experience.position || "Mevcut pozisyon bilgisi yok."}
    //       </p>
    //       <p>
    //         <strong>Deneyim Yılı:</strong>{" "}
    //         {application.experience.years || "Mevcut deneyim yılı bilgisi yok."}
    //       </p>
    //       <p>
    //         <strong>Programming Languages:</strong>{" "}
    //         {application.skills.programmingLanguages
    //           ? Object.entries(application.skills.programmingLanguages)
    //               .filter(([_, value]) => value)
    //               .map(([key]) => key)
    //               .join(", ")
    //           : "Programlama dili becerisi yok."}
    //       </p>
    //       <p>
    //         <strong>Languages:</strong>{" "}
    //         {application.skills.languages
    //           ? Object.entries(application.skills.languages)
    //               .filter(([_, value]) => value)
    //               .map(([key]) => key)
    //               .join(", ")
    //           : "Dil becerisi yok."}
    //       </p>
    //     </div>
    //   </div>
    //   <div className="mt-4 d-flex justify-content-end">
    //     {user && application.status === "Beklemede" && user.role === "admin" ? (
    //       <>
    //         <Button
    //           className="btn btn-success me-3 px-4 py-2 shadow"
    //           onClick={() => onUpdateStatus(application, "Onay")}
    //         >
    //           Onayla
    //         </Button>
    //         <Button
    //           className="btn btn-danger px-4 py-2 shadow"
    //           onClick={() => onUpdateStatus(application, "Red")}
    //         >
    //           Reddet
    //         </Button>
    //       </>
    //     ) : (
    //       <>
    //         {application.status === "Beklemede" && (
    //           <span className="badge text-bg-primary">
    //             Değerlendirme Aşamasında
    //           </span>
    //         )}
    //         {application.status === "Onay" && (
    //           <span className="badge text-bg-success">Başvuru Onaylandı</span>
    //         )}
    //         {application.status === "Red" && (
    //           <span className="badge text-bg-danger">
    //             Başvuru kabul edilmedi
    //           </span>
    //         )}
    //       </>
    //     )}
    //   </div>
    // </div>
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
            <strong>Üniversite:</strong> {application.education.university}
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
          <h5 className="fw-bold text-secondary">Deneyim & Beceriler</h5>
          <p>
            <strong>Şirket:</strong>{" "}
            {application.experience.currentCompany ||
              "Mevcut şirket bilgisi yok."}
          </p>
          <p>
            <strong>Pozisyon:</strong>{" "}
            {application.experience.position || "Mevcut pozisyon bilgisi yok."}
          </p>
          <p>
            <strong>Deneyim Yılı:</strong>{" "}
            {application.experience.years || "Mevcut deneyim yılı bilgisi yok."}
          </p>
          <p>
            <strong>Programming Languages:</strong>{" "}
            {application.skills.programmingLanguages
              ? Object.entries(application.skills.programmingLanguages)
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
        (application.status === "Beklemede" ||
          application.status === "Test Kontrol") &&
        user.role === "admin" ? (
          <>
            {application.status === "Test Kontrol" && (
              <span className="badge text-bg-primary">
                Test Skoru: {application.quiz}
              </span>
            )}
            <Button
              className="btn btn-success me-3 px-4 py-2 shadow"
              onClick={() => {
                sonrakiAsama(application);
              }}
            >
              {application.status} adıma geç
            </Button>
            <Button
              className="btn btn-danger px-4 py-2 shadow"
              onClick={() => {
                updateAppStatus({ ...application, status: "Red" });

                setApps((prevApps) =>
                  prevApps.map((app) =>
                    app.id === application.id ? { ...app, status: "Red" } : app
                  )
                );
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
            {application.status === "Test" &&
              (user?.role === "admin" ? (
                <span className="badge text-bg-warning">Test Gönderildi</span>
              ) : (
                <NavLink to={`/quiz/${application.id}`}>Teste Git</NavLink>
              ))}

            {user?.role === "user" && application.status === "Test Kontrol" && (
              <span className="badge text-bg-primary">
                Test sonuçlarınız değerlendiriliyor.
              </span>
            )}
            {application.status === "Mülakat" && (
              <span className="badge text-bg-primary">
                Tebrikler Mülakat adımına geçmeye hak kazandınız.
              </span>
            )}
            {application.status === "Onay" && (
              <span className="badge text-bg-success">Başvuru Onaylandı</span>
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
  );
};

export default ApplicationDetails;
