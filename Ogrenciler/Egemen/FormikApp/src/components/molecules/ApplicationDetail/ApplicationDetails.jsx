import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Button from "../../atoms/buttons/Button";
import Modal from "react-bootstrap/Modal";
import {
  setMessage,
  setQuestionCount,
} from "../../../../firebase/dbController";
import AppSection from "./AppSection";

const ApplicationDetails = ({
  application,
  user,
  updateAppStatus,
  sonrakiAsama,
}) => {
  const [app, setApp] = useState(application);
  const [showModal, setShowModal] = useState(false);
  const [easyCount, setEasyCount] = useState(0);
  const [mediumCount, setMediumCount] = useState(0);
  const [hardCount, setHardCount] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    console.log("abc");
  }, [app]);

  const handleModalOpen = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);

  const handleSubmit = () => {
    setQuestionCount(app.id, {
      easy: easyCount,
      medium: mediumCount,
      hard: hardCount,
    });

    handleModalClose();
  };
  const startQuiz = () => {
    navigate(`/quiz/${app.id}`);
  };

  return (
    <div className="accordion-body bg-white p-4">
      <div className="row">
        <AppSection title="Kişisel Bilgiler" sections={app?.personal} />
        {/* <div className="col-lg-4">
          <h5 className="fw-bold text-secondary">Kişisel Bilgiler</h5>
          <p>
            <strong>Email:</strong> {app.email}
          </p>
          <p>
            <strong>Telefon:</strong> {app.phone}
          </p>
          <p>
            <strong>Doğum Tarihi:</strong> {app.birthDate}
          </p>
        </div> */}
        <div className="col-lg-4">
          <h5 className="fw-bold text-secondary">Eğitim Bilgileri</h5>
          <p>
            <strong>Üniversite:</strong> {app.education.university}
          </p>
          <p>
            <strong>Bölüm:</strong> {app.education.department}
          </p>
          <p>
            <strong>Mezuniyet Yılı:</strong> {app.education.graduationYear}
          </p>
          <p>
            <strong>GPA:</strong> {app.education.gpa}
          </p>
        </div>
        <div className="col-lg-4">
          <h5 className="fw-bold text-secondary">Deneyim & Beceriler</h5>
          <p>
            <strong>Şirket:</strong>{" "}
            {app.experience.currentCompany || "Mevcut şirket bilgisi yok."}
          </p>
          <p>
            <strong>Pozisyon:</strong>{" "}
            {app.experience.position || "Mevcut pozisyon bilgisi yok."}
          </p>
          <p>
            <strong>Deneyim Yılı:</strong>{" "}
            {app.experience.years || "Mevcut deneyim yılı bilgisi yok."}
          </p>
          <p>
            <strong>Programming Languages:</strong>{" "}
            {app.skills.programmingLanguages
              ? Object.entries(app.skills.programmingLanguages)
                  .filter(([_, value]) => value)
                  .map(([key]) => key)
                  .join(", ")
              : "Programlama dili becerisi yok."}
          </p>
          <p>
            <strong>Languages:</strong>{" "}
            {app.skills.languages
              ? Object.entries(app.skills.languages)
                  .filter(([_, value]) => value)
                  .map(([key]) => key)
                  .join(", ")
              : "Dil becerisi yok."}
          </p>
        </div>
      </div>
      <div className="mt-4 d-flex justify-content-end">
        {user &&
        (app.status === "Değerlendirme" || app.status === "Test Kontrol") &&
        user.role === "admin" ? (
          <>
            {app.status === "Test Kontrol" && (
              <span className="badge text-bg-primary p-2 me-3">
                <p className="mb-1 fs-6">Test İçeriği: </p>
                {"Kolay: " +
                  app.questions.easy +
                  " Orta: " +
                  app.questions.medium +
                  " Zor: " +
                  app.questions.hard}
              </span>
            )}
            {app.status === "Test Kontrol" && (
              <span className="badge text-bg-primary me-3">
                <p className="mb-1 fs-6">Test Skoru: </p>
                {app.quiz}
              </span>
            )}
            <Button
              className="btn btn-success me-3 px-4 py-2 shadow"
              onClick={() => {
                app.status == "Değerlendirme" ? handleModalOpen() : <></>;
                sonrakiAsama(app);
              }}
            >
              {app.adminMessage}
            </Button>
            <Button
              className="btn btn-danger px-4 py-2 shadow"
              onClick={() => {
                setMessage(
                  app.id,
                  "Red",
                  "Başvurunuz reddedildi",
                  "Başvuru reddedildi"
                );
              }}
            >
              Reddet
            </Button>
          </>
        ) : (
          <>
            {app.status === "Değerlendirme" && (
              <span className="badge text-bg-primary">{app.userMessage}</span>
            )}
            {app.status === "Test" &&
              (user?.role === "admin" ? (
                <span className="badge text-bg-warning">
                  {app.adminMessage}
                </span>
              ) : (
                <button onClick={startQuiz}>{app.userMessage}</button>
              ))}
            {app.status === "Test Kontrol" && (
              <span className="badge text-bg-primary">
                {user?.role === "user" ? app.userMessage : app.adminMessage}
              </span>
            )}
            {app.status === "Mülakat" && (
              <span className="badge text-bg-primary">
                {user?.role === "user" ? app.userMessage : app.adminMessage}
              </span>
            )}
            {app.status === "Red" && (
              <span className="badge text-bg-danger">
                {user?.role === "user" ? app.userMessage : app.adminMessage}
              </span>
            )}
          </>
        )}
      </div>

      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Test Hazırlayın</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <label htmlFor="easyCount">Kolay Soru Adedi:</label>
              <input
                type="number"
                className="form-control"
                id="easyCount"
                value={easyCount}
                onChange={(e) => setEasyCount(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="mediumCount">Orta Soru Adedi:</label>
              <input
                type="number"
                className="form-control"
                id="mediumCount"
                value={mediumCount}
                onChange={(e) => setMediumCount(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label htmlFor="hardCount">Zor Soru Adedi:</label>
              <input
                type="number"
                className="form-control"
                id="hardCount"
                value={hardCount}
                onChange={(e) => setHardCount(e.target.value)}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button variant="secondary" onClick={handleModalClose}>
            Close
          </button>
          <button variant="primary" onClick={handleSubmit}>
            Submit
          </button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ApplicationDetails;
