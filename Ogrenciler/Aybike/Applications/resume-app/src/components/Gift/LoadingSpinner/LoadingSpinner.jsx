import styles from './LoadingSpinner.module.css';

const LoadingSpinner = () => (
    <div className={styles.loadingContainer}>
        <div className={styles.loadingSpinner}></div>
        <p>Yükleniyor...</p>
    </div>
)

export default LoadingSpinner