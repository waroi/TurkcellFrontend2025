import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ApplicationService } from "../../services/ApplicationService";
import "./ApplicationDetailView.css";

const ApplicationDetailView = () => {
  const { applicationId } = useParams();
  const [application, setApplication] = useState(null);
  const [selectedRate, setSelectedRate] = useState(0);

  useEffect(() => {
    const fetchApplication = async () => {
      const response = await ApplicationService.getApplicationById(
        applicationId
      );
      console.log(response);
      if (response.success) {
        setApplication(response.data);
        setSelectedRate(response.data.rate);
      } else {
        console.log(response.message);
      }
    };

    fetchApplication();
  }, [applicationId]);

  const handleRateChange = (event) => {
    setSelectedRate(Number(event.target.value));
  };

  const handleRateSubmit = async () => {
    const response = await ApplicationService.updateApplicationRate(
      applicationId,
      selectedRate
    );
    if (response.success) {
      alert("Puan güncellendi!");
      setApplication((prev) => ({ ...prev, rate: selectedRate }));
    } else {
      alert("Puan güncellenirken hata oluştu!");
    }
  };

  return (
    <div className="container mt-4">
      <div className="application-detail">
        <h2>Başvuru Detayları</h2>
        {application ? (
          <>
            <div className="detail-section">
              <div className="detail-item">
                <div className="detail-label">Ad Soyad</div>
                <div className="detail-value">
                  {application.firstName} {application.lastName}
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-label">Email</div>
                <div className="detail-value">{application.email}</div>
              </div>
              <div className="detail-item">
                <div className="detail-label">Telefon</div>
                <div className="detail-value">
                  {application.phone ? application.phone : "Belirtilmemiş"}
                </div>
              </div>
              <div className="detail-item">
                <div className="detail-label">Doğum Tarihi</div>
                <div className="detail-value">
                  {application.birthDate
                    ? application.birthDate
                    : "Belirtilmemiş"}
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-label">Ülke</div>
                <div className="detail-value">{application.country}</div>
              </div>

              <div className="detail-item">
                <div className="detail-label">Şehir</div>
                <div className="detail-value">{application.city}</div>
              </div>

              <div className="detail-item">
                <div className="detail-label">Üniversite</div>
                <div className="detail-value">{application.university}</div>
              </div>

              <div className="detail-item">
                <div className="detail-label">Bölüm</div>
                <div className="detail-value">{application.department}</div>
              </div>

              <div className="detail-item">
                <div className="detail-label">Mezuniyet Durumu</div>
                <div className="detail-value">
                  <span
                    className={`graduation-status ${
                      application.graduationStatus
                        ? "graduated"
                        : "not-graduated"
                    }`}
                  >
                    {application.graduationStatus
                      ? "Mezun"
                      : "Henüz Mezun Değil"}
                  </span>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-label">Mezuniyet Yılı</div>
                <div className="detail-value">
                  {application.graduationYear || "Belirtilmemiş"}
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-label">GPA</div>
                <div className="detail-value">{application.gpa}</div>
              </div>

              <div className="detail-item">
                <div className="detail-label">LinkedIn</div>
                <div className="detail-value">
                  <a
                    className="linkedIn"
                    href={application.linkedin}
                    target="_blank"
                  >
                    LinkedIn Profili
                  </a>
                </div>
              </div>
              <div className="detail-item">
                <div className="detail-label">Kariyer Hedefleri</div>
                <div className="detail-value">
                  {application.summary ? application.summary : "Belirtilmemiş"}
                </div>
              </div>
              <div className="detail-item">
                <div className="detail-label">Yetenekler</div>
                <div className="detail-value">
                  {application.skills && application.skills.length > 0
                    ? application.skills.join(", ")
                    : "Belirtilmemiş"}
                </div>
              </div>
              <div className="detail-item">
                <div className="detail-label">İş / Staj Deneyimleri</div>
                <div className="detail-value">
                  {application.experience
                    ? application.experience
                    : "Belirtilmemiş"}
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-label">Projeler</div>
                <div className="detail-value">
                  {" "}
                  {application.projects
                    ? application.projects
                    : "Belirtilmemiş"}
                </div>
              </div>
            </div>
            <div className="detail-item mx-auto rate-block">
              <div className="detail-label">Değerlendirme Puanı</div>
              <select
                className="custom-select"
                value={selectedRate}
                onChange={handleRateChange}
              >
                {[0, 1, 2, 3, 4, 5].map((rate) => (
                  <option key={rate} value={rate}>
                    {rate} ⭐
                  </option>
                ))}
              </select>

              <button
                onClick={handleRateSubmit}
                className="btn btn-primary ms-2"
              >
                Güncelle
              </button>
            </div>
          </>
        ) : (
          <div className="loading-container">
            <p className="loading-text">Detaylar yükleniyor...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApplicationDetailView;
