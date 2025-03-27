import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "./ApplicationDetailView.css";
import { useApplicationDetail } from "../../utils/hooks/useApplicationDetail";
import QuestionSettingsModal from "../../components/QuestionSettingsModal/QuestionSettingsModal ";

const ApplicationDetailView = () => {
  const {
    application,
    selectedRate,
    handleRateChange,
    showQuestionSettingsModal,
    setShowQuestionSettingsModal,
    questionSettings,
    handleQuestionSettingsChange,
    handleEvaluateClick,
    handleModalSubmit,
    handleRateSubmit
  } = useApplicationDetail()


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
                    className={`graduation-status ${application.graduationStatus
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
              <div className="detail-label">Değerlendirme</div>
              <div className="w-100">
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
                  onClick={handleEvaluateClick}
                  className="btn btn-primary ms-2"
                >
                  Değerlendir
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="loading-container">
            <p className="loading-text">Detaylar yükleniyor...</p>
          </div>
        )}
      </div>

      <QuestionSettingsModal
        showModal={showQuestionSettingsModal}
        onHide={() => setShowQuestionSettingsModal(false)}
        selectedRate={selectedRate}
        handleRateChange={handleRateChange}
        questionSettings={questionSettings}
        handleQuestionSettingsChange={handleQuestionSettingsChange}
        handleModalSubmit={handleModalSubmit}
      />
    </div>
  )
}

export default ApplicationDetailView