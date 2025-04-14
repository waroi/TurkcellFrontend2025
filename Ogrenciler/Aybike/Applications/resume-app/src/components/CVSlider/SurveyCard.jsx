import styles from './SurveyCard.module.css';

const SurveyCard = ({ survey, renderStars, getStatusClass }) => {
    return (
        <div className={styles.surveyCard}>
            <div className={styles.surveyHeader}>
                <h2 className={styles.surveyTitle}>{survey.title}</h2>
                <span className={styles.surveyId}>Anket #{survey.id}</span>
            </div>

            <div className={styles.surveyContent}>
                <p className={styles.companyName}><strong>Şirket:</strong> {survey.company}</p>

                <div className={styles.ratingContainer}>
                    <div className={styles.starsContainer}>
                        {renderStars(survey.rating)}
                    </div>
                    <span className={styles.ratingValue}>{survey.rating}/5</span>
                </div>

                <div className={styles.progressBarContainer}>
                    <div
                        className={styles.progressBar}
                        style={{ width: `${(survey.rating / 5) * 100}%` }}
                    ></div>
                </div>
            </div>

            <div className={styles.surveyFooter}>
                <span className={`${styles.statusBadge} ${styles[getStatusClass(survey.status)]}`}>
                    {survey.status}
                </span>
            </div>
        </div>
    )
}

export default SurveyCard