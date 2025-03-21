import "bootstrap/dist/css/bootstrap.min.css";
import {
  sendEmail,
  sendPasswordReset,
  checkIsHeAdmin,
} from "../services/db_service";
import SignInModal from "../components/SignInModal/SignInModal";
import useFetchApplication from "../store/useFetchApplication";
import { useState, useEffect } from "react";
import { auth } from "../../firebase_config";
import { Link } from "react-router-dom";

const AdminPanel = () => {
  const { applications, show, handleClose, handleLogin } =
    useFetchApplication();
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const [searchTerm, setSearchTerm] = useState("");
  const filteredApplications = applications.filter((app) => {
    const lowerCaseSearch = searchTerm.toLowerCase();
    return (
      app.name.toLowerCase().includes(lowerCaseSearch) ||
      (app.skills && app.skills.toLowerCase().includes(lowerCaseSearch))
    );
  });

  const checkAdminStatus = async () => {
    setIsLoading(true);
    if (auth.currentUser) {
      try {
        const adminStatus = await checkIsHeAdmin();
        setIsAdmin(adminStatus === true);
      } catch (error) {
        console.error("Admin kontrolü sırasında hata:", error);
        setIsAdmin(false);
      }
    } else {
      setIsAdmin(false);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    checkAdminStatus();

    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        checkAdminStatus();
      } else {
        setIsAdmin(false);
        setIsLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLoginAndCheckAdmin = async () => {
    await handleLogin();
    await checkAdminStatus();
  };

  if (isLoading) {
    return (
      <div className="container mt-4">
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Yükleniyor...</span>
          </div>
          <p className="mt-2">Yükleniyor...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1>Başvuruları Yönet</h1>
        <Link to="/" className="btn btn-secondary">
          <i className="bi bi-arrow-left"></i> Başvuru Sayfasına Dön
        </Link>
      </div>
      <p className="text-center">
        Bu sayfada başvurular listelenecek ve admin tarafından
        değerlendirilecek.
      </p>

      {!auth.currentUser ? (
        <div className="text-center mb-4">
          <p className="alert alert-info">
            Başvuruları görüntülemek için lütfen giriş yapın
          </p>
          <button
            className="btn btn-primary"
            onClick={handleLoginAndCheckAdmin}
          >
            Giriş yap
          </button>
        </div>
      ) : !isAdmin ? (
        <div className="text-center mb-4">
          <p className="alert alert-warning">
            Bu sayfa sadece admin tarafından görüntülenebilir
          </p>
        </div>
      ) : (
        <>
          <div className="row my-3">
            <div className="col-md-12">
              <input
                type="text"
                className="form-control"
                placeholder="İsim veya yetenek girin"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            {filteredApplications.map((app) => (
              <div key={app.id} className="col-md-4 mb-4">
                <div className="card shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">
                      {app.name} {app.lastName}
                    </h5>
                    <p className="card-text">
                      <strong>Adres:</strong> {app.adressFirst},{" "}
                      {app.adressSecond}
                    </p>
                    <p className="card-text">
                      <strong>Şehir:</strong> {app.city} - {app.province}
                    </p>
                    <p className="card-text">
                      <strong>Posta Kodu:</strong> {app.postCode}
                    </p>
                    <p className="card-text">
                      <strong>Ülke:</strong> {app.country}
                    </p>
                    <p className="card-text">
                      <strong>Telefon:</strong> {app.phoneNumber}
                    </p>
                    <p className="card-text">
                      <strong>Email:</strong> {app.email}
                    </p>
                    <p className="card-text">
                      <strong>Doğum Tarihi:</strong> {app.birthday}
                    </p>
                    <p className="card-text">
                      <strong>Türk mü?</strong>{" "}
                      {app.isTurkish ? "Evet" : "Hayır"}
                    </p>
                    {app.skills && (
                      <p className="card-text">
                        <strong>Yetenekler:</strong>{" "}
                        <span className="badge bg-warning text-dark me-1">
                          {app.skills.split(",").map((skill, index) => (
                            <span
                              key={index}
                              className="badge bg-secondary me-1"
                            >
                              {skill.trim()}
                            </span>
                          ))}
                        </span>
                      </p>
                    )}
                    <p className="card-text">
                      <strong>Üniversite:</strong> {app.university}
                    </p>
                    <p className="card-text">
                      <strong>Mezun mu?</strong>{" "}
                      {app.isGraduate ? "Evet" : "Hayır"}
                    </p>
                  </div>
                  <div className="card-footer gap-4 d-flex justify-content-center">
                    <button
                      className="btn btn-primary "
                      onClick={async () => await sendEmail()}
                    >
                      Onayla
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={async () => await sendPasswordReset()}
                    >
                      Reddet
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
      <SignInModal show={show} handleClose={handleClose} />
    </div>
  );
};

export default AdminPanel;
