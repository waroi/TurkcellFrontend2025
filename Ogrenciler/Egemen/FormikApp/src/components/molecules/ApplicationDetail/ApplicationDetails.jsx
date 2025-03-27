import { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import Button from "../../atoms/buttons/Button";
import Modal from "react-bootstrap/Modal"; // Assuming you're using react-bootstrap for modals
import { getShuffledQuestionsByCategory } from "../../../services/QuestionService"; // Import the function
import questionData from "../../../constants/questions.json"; // Import question data
import { setQuestionCount } from "../../../../firebase/dbController";

const ApplicationDetails = ({ application, user, sonrakiAsama }) => {
  const [showModal, setShowModal] = useState(false);
  const [easyCount, setEasyCount] = useState(0);
  const [mediumCount, setMediumCount] = useState(0);
  const [hardCount, setHardCount] = useState(0);
  //const [quizCounts, setQuizCounts] = useState({});
  // Local state for quiz counts
  const [quizs, setQuizs] = useState([]);
  const navigate = useNavigate();

  const handleModalOpen = () => setShowModal(true);
  const handleModalClose = () => setShowModal(false);

  const handleSubmit = () => {
    setQuestionCount(application.id, {
      easy: easyCount,
      medium: mediumCount,
      hard: hardCount,
    });
    // console.log(easyCount);

    // setQuizCounts({
    //   easy: easyCount,
    //   medium: mediumCount,
    //   hard: hardCount,
    // });

    // const selectedQuestions = getShuffledQuestionsByCategory(
    //   easyCount,
    //   mediumCount,
    //   hardCount
    // );
    // setQuizs(selectedQuestions);
    // console.log(selectedQuestions);
    handleModalClose();
  };
  const startQuiz = () => {
    //console.log("qqq", quizCounts);
    navigate(`/quiz/${application.id}`);
  };

  return (
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
        (application.status === "Değerlendirme" ||
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
                application.status == "Değerlendirme" ? (
                  handleModalOpen()
                ) : (
                  <></>
                );
                sonrakiAsama(application);
              }}
            >
              {application.adminMessage}
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
            {application.status === "Değerlendirme" && (
              <span className="badge text-bg-primary">
                {application.userMessage}
              </span>
            )}
            {application.status === "Test" &&
              (user?.role === "admin" ? (
                <span className="badge text-bg-warning">
                  {application.adminMessage}
                </span>
              ) : (
                // <NavLink to={`/quiz/${application.id}`}>
                //   {application.userMessage}
                // </NavLink>
                <button onClick={startQuiz}>{application.userMessage}</button>
              ))}
            {application.status === "Test Kontrol" && (
              <span className="badge text-bg-primary">
                {user?.role === "user"
                  ? application.userMessage
                  : application.adminMessage}
              </span>
            )}
            {application.status === "Mülakat" && (
              <span className="badge text-bg-primary">
                {user?.role === "user"
                  ? application.userMessage
                  : application.adminMessage}
              </span>
            )}
            {application.status === "Red" && (
              <span className="badge text-bg-danger">
                {application.userMessage}
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
