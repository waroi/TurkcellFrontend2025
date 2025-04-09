import styles from './ApplicationDetailSection.module.css';

const ApplicationDetailSection = ({ application }) => {
    return (
        <div className={styles.detailSection}>
            {Object.entries(application).map(([key, value]) => {
                if (key === "linkedin" && value) {
                    value = (
                        <a
                            href={value}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.linkedIn}
                        >
                            LinkedIn Profili
                        </a>
                    );
                } else if (key === "skills" && Array.isArray(value)) {
                    value = value.length ? value.join(", ") : "Belirtilmemiş";
                }

                if (key === "graduationStatus") {
                    value = (
                        <span
                            className={`${styles.graduationStatus} ${value ? styles.graduated : styles.notGraduated
                                }`}
                        >
                            {value ? "Mezun" : "Henüz Mezun Değil"}
                        </span>
                    )
                }

                return (
                    <div key={key} className={styles.detailItem}>
                        <div className={styles.detailLabel}>{key}</div>
                        <div className={styles.detailValue}>{value || "Belirtilmemiş"}</div>
                    </div>
                )
            })}
        </div>
    )
}

export default ApplicationDetailSection