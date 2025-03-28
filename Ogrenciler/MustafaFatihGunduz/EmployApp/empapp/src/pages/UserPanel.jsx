import "../styles/variables.css";
import styles from "./UserPanel.module.css";
import { Link } from "react-router-dom";
import TestModal from "../components/TestModal/TestModal";
import useUserPanel from "../store/useUserPanel";
import useQuestions from "../store/useQuestions";
import { useState } from "react";
import useAdminTest from "../store/useAdminTest";
const UserPanel = () => {
  const [totalCount,setTotalCount] = useState();
  const {
    applications,
    loading,
    handleLogout,
    handleTestComplete,
    currentApplication,
    setCurrentApplication,
  } = useUserPanel();

  const {fetchTestDetails} = useAdminTest();

  const { handleStartTest, showTest, setShowTest, selectedQuestions } =
    useQuestions();
    const handleQuestionCount = async (application) => {
      const testData = await fetchTestDetails(application.id);
      setTotalCount(testData.totalQuestion);
    }
  if (loading) {
    return (
      <div className="container mt-4">
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Yükleniyor...</span>
          </div>
        </div>
      </div>
    );
  }
  const startTest = async (application) => {
    setCurrentApplication(application);
    await handleStartTest(application);
  };

  return (
    <div className={styles.userPanelContainer}>
      <div className="container">
        <div className={styles.header}>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h1>Başvuru Detayları</h1>
            <div className="d-flex gap-2">
              <Link to="/" className={styles.newApplicationButton}>
                <i className="bi bi-plus-circle"></i> Yeni Başvuru Yap
              </Link>
              <button onClick={handleLogout} className={styles.logoutButton}>
                <i className="bi bi-box-arrow-right"></i> Çıkış Yap
              </button>
            </div>
          </div>
          {applications && applications.length > 0 ? (
            <>
              <h4 className="mb-3 mt-5">Tüm Başvurularınız</h4>
              <div className="row">
                {applications.map((application) => (
                  <div className="col-md-4" key={application.id}>
                    <div
                      className={`${styles.applicationCard} card mb-3`}
                      key={application.id}
                    >
                      <div className="card-body">
                        <h5 className="card-title">
                          {application.name} {application.lastName}
                        </h5>
                        <p className="card-text">
                          <strong>Email:</strong> {application.email}
                        </p>
                        <p className="card-text">
                          <strong>Telefon:</strong> {application.phoneNumber}
                        </p>
                        <p className="card-text">
                          <strong>Adres:</strong> {application.adressFirst}
                        </p>
                        <p className="card-text">
                          <strong>Şehir:</strong> {application.city}
                        </p>
                        <p className="card-text">
                          <strong>Başvuru Durumu:</strong>{" "}
                          {application.status || "Değerlendirmede"}
                        </p>

                        {application.status === "approved" &&
                          !application.testResults && (
                            <button
                              className="btn btn-primary mt-2"
                              onClick={async () =>{ await startTest(application); await handleQuestionCount(application)}}
                            >
                              Testi Başlat
                            </button>
                          )}

                        {application.testResults && (
                          <div className="mt-3 p-3 border rounded">
                            <h6>Test Sonucu</h6>
                            <p className="mb-1">
                              Doğru Cevap:{" "}
                              {application.testResults.correctAnswers}
                              / {totalCount}
                            </p>
                            <p className="mb-0">
                              Durum:
                              <span
                                className={
                                  application.testPassed
                                    ? "text-success"
                                    : "text-danger"
                                }
                              >
                                {application.testPassed
                                  ? " Başarılı"
                                  : " Başarısız"}
                              </span>
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className="alert alert-info">
              Henüz bir başvurunuz bulunmamaktadır.
            </div>
          )}

          <TestModal
            show={showTest}
            handleClose={() => setShowTest(false)}
            questions={selectedQuestions}
            onComplete={handleTestComplete}
          />
        </div>
      </div>
    </div>
  );
};

export default UserPanel;
