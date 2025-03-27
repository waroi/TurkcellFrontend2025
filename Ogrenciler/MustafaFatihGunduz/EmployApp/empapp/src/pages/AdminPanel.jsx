import { auth } from "../../firebase_config";
import useFetchApplication from "../store/useFetchApplication";
import useAdminPanel from "../store/useAdminPanel";
import SignInModal from "../components/SignInModal/SignInModal";
import { Link } from "react-router-dom";
import AdminTestModal from "../components/AdminTestModal/AdminTestModal";
import useAdminTest from "../store/useAdminTest";
import styles from "./AdminPanel.module.css";

const AdminPanel = () => {
  const {
    applications,
    show,
    handleClose,
    handleLoginAndCheckAdmin,
    isAdmin,
    isLoading,
  } = useFetchApplication();

  const {
    searchTerm,
    setSearchTerm,
    getFilteredApplications,
    handleApprove,
    handleReject,
  } = useAdminPanel();

  const { showModal, setShowModal, handleCloseModal, openModal } =
    useAdminTest();

  const filteredApplications = getFilteredApplications(applications);

  if (isLoading) {
    return (
      <div className={`container mt-4`}>
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
    <>
      <div className="container">
        <div className=" d-flex justify-content-between align-items-center pt-5 mb-4">
          <h1 className="fw-bolder">Başvuruları Yönet</h1>
          <Link
            to="/"
            className={`${styles.buttonColor} ${styles.fontPrimary} btn text-white mt-2`}
          >
            Başvuru Sayfasına Dön
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
                <div className={`${styles.searchContainer} position-relative`}>
                  <input
                    type="text"
                    className={`form-control ${styles.searchInput}`}
                    placeholder="İsim veya yetenek ara..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <i className={`bi bi-search ${styles.searchIcon}`}></i>
                </div>
              </div>
            </div>
            <div className="row">
              {filteredApplications.map((app) => (
                <div key={app.id} className="col-md-4 mb-4">
                  <div className={`card`}>
                    <div
                      className={`card-body rounded border-0 text-white ${styles.fontPrimary} ${styles.cardBackGround}`}
                    >
                      <h5
                        className={`card-title border-bottom pb-2 mb-3 ${styles.fontHeading}`}
                      >
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
                      <div
                        className={`card-footer gap-4 d-flex justify-content-center ${styles.fontPrimary} ${styles.cardBackGround}`}
                      >
                        <button
                          className={`${styles.buttonColor} ${styles.fontPrimary} btn text-white mt-2`}
                          onClick={() => openModal(app)}
                        >
                          Onayla
                        </button>
                        <AdminTestModal
                          show={showModal}
                          handleClose={handleCloseModal}
                          app={app}
                        />
                        <button
                          className={` ${styles.fontPrimary} btn btn-light text-dark mt-2`}
                          onClick={() => handleReject(app)}
                        >
                          Reddet
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        <SignInModal show={show} handleClose={handleClose} />
      </div>
    </>
  );
};

export default AdminPanel;
