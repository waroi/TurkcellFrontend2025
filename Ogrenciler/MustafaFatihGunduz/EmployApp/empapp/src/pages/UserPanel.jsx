import { Link } from "react-router-dom";
import TestModal from "../components/TestModal/TestModal";
import useUserPanel from "../store/useUserPanel";
import useQuestions from "../store/useQuestions";

const UserPanel = () => {
  const {
    applications,
    loading,
    handleLogout,
    handleTestComplete,
    currentApplication,
    setCurrentApplication,
  } = useUserPanel();

  const { handleStartTest, showTest, setShowTest, selectedQuestions } =
    useQuestions();

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
  const startTest = (application) => {
    setCurrentApplication(application);
    handleStartTest();
  };

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Başvuru Detayları</h1>
        <div className="d-flex gap-2">
          <Link to="/" className="btn btn-primary">
            <i className="bi bi-plus-circle"></i> Yeni Başvuru Yap
          </Link>
          <button onClick={handleLogout} className="btn btn-danger">
            <i className="bi bi-box-arrow-right"></i> Çıkış Yap
          </button>
        </div>
      </div>
      {applications.length > 0 ? (
        <>
          <h4 className="mb-3">Tüm Başvurularınız</h4>
          {applications.map((application) => (
            <div className="card mb-3" key={application.id}>
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
                      onClick={() => startTest(application)}
                    >
                      Testi Başlat
                    </button>
                  )}

                {application.testResults && (
                  <div className="mt-3 p-3 border rounded">
                    <h6>Test Sonucu</h6>
                    <p className="mb-1">
                      Doğru Cevap: {application.testResults.correctAnswers}/5
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
                        {application.testPassed ? " Başarılı" : " Başarısız"}
                      </span>
                    </p>
                  </div>
                )}
              </div>
            </div>
          ))}
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
  );
};

export default UserPanel;
