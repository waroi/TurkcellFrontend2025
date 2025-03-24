import { useState } from "react";
import { auth } from "../../firebase_config";
import useFetchApplication from "../store/useFetchApplication";
import SignInModal from "../components/SignInModal/SignInModal";
import { Link } from "react-router-dom";
import "./AdminPanel.css";

const AdminPanel = () => {
  const {
    applications,
    show,
    handleClose,
    handleLoginAndCheckAdmin,
    isAdmin,
    isLoading,
  } = useFetchApplication();
  const [searchTerm, setSearchTerm] = useState("");

  const filteredApplications = applications.filter((app) => {
    const lowerCaseSearch = searchTerm.toLowerCase();
    return (
      app.name.toLowerCase().includes(lowerCaseSearch) ||
      (app.skills && app.skills.toLowerCase().includes(lowerCaseSearch))
    );
  });

  if (isLoading) {
    return (
      <div className="container mt-4">
        <div className="text-center">
          <div className="spinner-border spinner" role="status">
            <span className="visually-hidden">Yükleniyor...</span>
          </div>
          <p className="mt-2">Yükleniyor...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mt-4 adminContainer">
      <div className=" d-flex justify-content-between align-items-center mb-4">
        <h1 className="fw-bolder">Başvuruları Yönet</h1>
        <Link to="/" className="btn btn-secondary ">
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
                className="form-control p-3 mb-4 border rounded shadow-sm"
                placeholder="İsim veya yetenek girin"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            {filteredApplications.map((app) => (
              <div key={app.id} className="col-md-4 mb-4 ">
                <div className="card cardAdmin shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title text-dark fw-semibold border-bottom pb-2 mb-3">
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
                        <span className="d-flex flex-wrap gap-2 mt-2">
                          {app.skills.split(",").map((skill, index) => (
                            <span
                              key={index}
                              className=" badge bg-dark rounded-pill"
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
                  <div className="card-footer  gap-4 d-flex justify-content-center">
                    <button
                      className="btn btn-success"
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
