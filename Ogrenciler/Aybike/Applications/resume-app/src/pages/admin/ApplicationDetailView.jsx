import { useApplicationDetail } from "../../utils/hooks/useApplicationDetail";
import ApplicationDetailSection from "../../components/ApplicationDetailView/ApplicationDetailSection/ApplicationDetailSection";
import RatingSection from "../../components/ApplicationDetailView/RatingSection/RatingSection";
import QuestionSettingsModal from "../../components/QuestionSettingsModal/QuestionSettingsModal ";
import styles from './ApplicationDetailView.module.css';

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
  } = useApplicationDetail()

  return (
    <div className={`container mt-4`}>
      <div className={styles.applicationDetail}>
        <h2>Başvuru Detayları</h2>
        {application ? (
          <>
            <ApplicationDetailSection application={application} />
            <RatingSection
              selectedRate={selectedRate}
              handleRateChange={handleRateChange}
              handleEvaluateClick={handleEvaluateClick}
            />
          </>
        ) : (
          <div className={styles.loadingContainer}>
            <p className={styles.loadingText}>Detaylar yükleniyor...</p>
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