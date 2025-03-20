import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ApplicationService } from "../../services/ApplicationService";
import "./ApplicationDetailView.css";

const ApplicationDetailView = () => {
  const { applicationId } = useParams();
  const [application, setApplication] = useState(null);

  useEffect(() => {
    const fetchApplication = async () => {
      const response = await ApplicationService.getApplicationById(applicationId)
      console.log(response)
      if (response.success) {
        setApplication(response.data)
      } else {
        console.log(response.message)
      }
    }

    fetchApplication()
  }, [applicationId])

  return (
    <div className="container mt-4">
      <div className="application-detail">
        <h2>Başvuru Detayları</h2>
        {application ? (
          <>
            <div className="detail-section">
              <div className="detail-item">
                <div className="detail-label">Ad Soyad</div>
                <div className="detail-value">{application.firstName} {application.lastName}</div>
              </div>

              <div className="detail-item">
                <div className="detail-label">Email</div>
                <div className="detail-value">{application.email}</div>
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
                  <span className={`graduation-status ${application.graduationStatus ? 'graduated' : 'not-graduated'}`}>
                    {application.graduationStatus ? "Mezun" : "Henüz Mezun Değil"}
                  </span>
                </div>
              </div>

              <div className="detail-item">
                <div className="detail-label">Mezuniyet Yılı</div>
                <div className="detail-value">{application.graduationYear || "Belirtilmemiş"}</div>
              </div>

              <div className="detail-item">
                <div className="detail-label">GPA</div>
                <div className="detail-value">{application.gpa}</div>
              </div>
            </div>
            <div className="detail-item mx-auto rate-block">
              <div className="detail-label">Değerlendirme</div>
              <div className="detail-value">{application.rate == 0 ? application.rate : <strong>
                <small>Değerlendirilmemiş</small>
              </strong>}</div>
            </div>
          </>
        ) : (
          <div className="loading-container">
            <p className="loading-text">Detaylar yükleniyor...</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default ApplicationDetailView