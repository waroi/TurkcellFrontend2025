import styles from './Result.module.css';
import useTestResult from '../../../utils/hooks/useTestResult';

const Result = ({ questions, answers }) => {
    const { userMail, score, isResultSaved, error, retryResultSave } = useTestResult(questions, answers)

    return (
        <div className={styles.testResultContainer}>
            <div className={styles.resultCard}>
                <div className={styles.resultHeader}>
                    <div className={`${styles.resultBadge} ${score >= 60 ? styles.resultBadgeSuccess : styles.resultBadgeFailure}`}>
                        {score >= 60 ? (
                            <i className="bi bi-check-lg"></i>
                        ) : (
                            <i className="bi bi-x-lg"></i>
                        )}
                    </div>
                    <h2 className={styles.resultTitle}>Test Sonucu</h2>
                </div>

                <div className={styles.resultContent}>
                    {userMail && (
                        <div className={styles.resultInfo}>
                            <span className={styles.infoLabel}>E-posta:</span>
                            <span className={styles.infoValue}>{userMail}</span>
                        </div>
                    )}

                    <div className={`${styles.resultInfo} ${styles.scoreInfo}`}>
                        <span className={styles.infoLabel}>Puanınız:</span>
                        <span className={`${styles.infoValue} ${styles.scoreValue} ${score >= 60 ? styles.successScore : styles.failureScore}`}>
                            {score}%
                        </span>
                    </div>

                    {score >= 60 ? (
                        <p className={styles.successMessage}>
                            <i className="bi bi-trophy-fill"></i> Tebrikler! Testi başarıyla tamamladınız.
                        </p>
                    ) : (
                        <p className={styles.failureMessage}>
                            <i className="bi bi-exclamation-triangle-fill"></i> Üzgünüz, testi geçmek için en az 60% puan almanız gerekmektedir.
                        </p>
                    )}
                </div>

                <div className={styles.resultFooter}>
                    {isResultSaved ? (
                        <p className={styles.saveSuccess}>
                            <i className="bi bi-cloud-check-fill"></i> Sonucunuz başarıyla kaydedildi.
                        </p>
                    ) : error ? (
                        <div className={styles.saveError}>
                            <p><i className="bi bi-exclamation-circle-fill"></i> {error}</p>
                            <button className={styles.retryButton} onClick={retryResultSave}>
                                <i className="bi bi-arrow-repeat"></i> Tekrar Kaydetmeyi Dene
                            </button>
                        </div>
                    ) : (
                        <p className={styles.savingMessage}>
                            <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                            Sonucunuz kaydediliyor...
                        </p>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Result