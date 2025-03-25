import { Link } from "react-router-dom";
import TestModal from "../components/TestModal/TestModal";
import useUserPanel from "../store/useUserPanel";
import useQuestions from "../store/useQuestions";

const UserPanel = () => {
  const { application, loading, handleLogout, handleTestComplete } =
    useUserPanel();

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
      {application ? (
        <div className="card">
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
          </div>
        </div>
      ) : (
        <div className="alert alert-info">
          Henüz bir başvurunuz bulunmamaktadır.
        </div>
      )}
      {application &&
        application.status === "approved" &&
        !application.testResults && (
          <div className="card mt-4">
            <div className="card-body text-center">
              <h5 className="card-title">Test Hazır!</h5>
              <p className="card-text">
                Başvurunuz onaylandı. Şimdi testi başlatabilirsiniz.
              </p>
              <button className="btn btn-primary" onClick={handleStartTest}>
                Testi Başlat
              </button>
            </div>
          </div>
        )}

      {application?.testResults && (
        <div
          className={`alert ${
            application.testPassed ? "alert-success" : "alert-danger"
          } mt-4`}
        >
          <h5>Test Sonucu</h5>
          <p>Doğru Cevap: {application.testResults.correctAnswers}/5</p>
          <p>Durum: {application.testPassed ? "Başarılı" : "Başarısız"}</p>
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
