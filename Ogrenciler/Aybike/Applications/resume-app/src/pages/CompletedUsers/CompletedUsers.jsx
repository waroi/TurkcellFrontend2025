import useCompletedTests from '../../utils/hooks/useCompletedUsers';
import styles from './CompletedUsers.module.css';

const CompletedUsers = () => {
    const { completions, loading, error } = useCompletedTests()

    if (loading) return <div className={styles.loading}>Yükleniyor...</div>
    if (error) return <div className={styles.error}>Datayı çekerken bir hata oluştu {error}</div>

    return (
        <div className={styles.completionListContainer}>
            <h2 className={styles.completionListTitle}>Testi Tamamlayanlar</h2>
            <div className={styles.completionList}>
                {completions.map((completion) => (
                    <div key={completion.id} className={styles.completionItem}>
                        <div className={styles.completionInfo}>
                            <div className={styles.completionEmail}>{completion.email}</div>
                            <div className={styles.completionDate}>{completion.date}</div>
                        </div>
                        <div className={`${styles.completionScore} ${completion.score > 60 ? styles.scoreSuccess : styles.scoreInvalidValue}`}>
                            <span className={styles.scoreLabel}>Puan:</span>
                            <span className={styles.scoreValue}>{completion.score}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CompletedUsers