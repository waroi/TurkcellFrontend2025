import styles from './../../../recipes/Recipes.module.css'

const Stats = () => {
    return (
        <div className={styles.stats}>
            <div className={styles.statItem}>
                <span className={styles.statValue}>10K+</span>
                <span className={styles.statLabel}>Tarif</span>
            </div>
            <div className={styles.statItem}>
                <span className={styles.statValue}>5K+</span>
                <span className={styles.statLabel}>Şef</span>
            </div>
            <div className={styles.statItem}>
                <span className={styles.statValue}>50K+</span>
                <span className={styles.statLabel}>Üye</span>
            </div>
        </div>
    )
}

export default Stats