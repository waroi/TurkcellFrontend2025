import { useState } from "react";
import { useNavigate } from "react-router";
import Button from "../../atoms/buttons/Button";

import {
  setMessage,
  setQuestionCount,
} from "../../../../firebase/dbController";
import AppSection from "./AppSection";
import MyModal from "../../organisms/modal/myModal";

const ApplicationDetails = ({ app, setApp, user, sonrakiAsama }) => {
  const [showModal, setShowModal] = useState(false);
  const [easyCount, setEasyCount] = useState(0);
  const [mediumCount, setMediumCount] = useState(0);
  const [hardCount, setHardCount] = useState(0);
  const navigate = useNavigate();
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
  const updateStatus = (newStatus, newUserMessage, newAdminMessage) => {
    setApp((prevState) => ({
      ...prevState,
      status: newStatus,
      userMessage: newUserMessage,
      adminMessage: newAdminMessage,
    }));
  };
  return (
    <div className="accordion-body bg-white p-4">
      <div className="row">
        <AppSection section={app?.personal} id="personal" />
        <AppSection section={app?.education} id="education" />
        <AppSection section={app?.experience} id="experience" />
        <div className="col-lg-3">
          <h5 className="fw-bold text-secondary">Beceriler</h5>
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
                sonrakiAsama(app, updateStatus);
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
                <Button
                  className="btn btn-success me-3 px-4 py-2 shadow"
                  onClick={startQuiz}
                >
                  {app.userMessage}
                </Button>
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

      <MyModal
        showModal={showModal}
        easyCount={easyCount}
        mediumCount={mediumCount}
        hardCount={hardCount}
        setEasyCount={setEasyCount}
        setMediumCount={setMediumCount}
        setHardCount={setHardCount}
        handleSubmit={handleSubmit}
        setShowModal={setShowModal}
      ></MyModal>
    </div>
  );
};

export default ApplicationDetails;
