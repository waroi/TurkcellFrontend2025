import { useEffect, useState } from "react";
import { fetchApplications } from "../services/applicationService";
import "bootstrap/dist/css/bootstrap.min.css"; 
import { sendEmail, sendPasswordReset } from "../services/db_service";
import SignInModal from "../components/SignInModal/SignInModal";

const AdminPanel = () => {
  const [applications, setApplications] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  useEffect(() => {
    const getApplications = async () => {
      const data = await fetchApplications();
      setApplications(data);
    };

    getApplications();
  }, []);

  const handleLogin = ()=>{
    setShow(true);
  }

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Başvuruları Yönet</h1>
      <p className="text-center">
        Bu sayfada başvurular listelenecek ve admin tarafından
        değerlendirilecek.
      </p>
      <button className="btn btn-primary" onClick={() =>  handleLogin()}>Giriş yap</button>

      <div className="row">
        {applications.map((app) => (
          <div key={app.id} className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">
                  {app.name} {app.lastName}
                </h5>
                <p className="card-text">
                  <strong>Adres:</strong> {app.adressFirst}, {app.adressSecond}
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
                  <strong>Türk mü?</strong> {app.isTurkish ? "Evet" : "Hayır"}
                </p>
                <p className="card-text">
                  <strong>Üniversite:</strong> {app.university}
                </p>
                <p className="card-text">
                  <strong>Mezun mu?</strong> {app.isGraduate ? "Evet" : "Hayır"}
                </p>
              </div>
              <div className="card-footer">
                <button className="btn btn-primary" onClick={async () => await sendEmail() }>Onayla</button>
                <button className="btn btn-danger" onClick={async () => await sendPasswordReset() }>Reddet</button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <SignInModal show={show} handleClose={handleClose} />
    </div>
    
  );
};

export default AdminPanel;
