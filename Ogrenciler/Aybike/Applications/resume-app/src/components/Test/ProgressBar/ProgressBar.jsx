import styles from './ProgressBar.module.css';

const ProgressBar = ({ current, total, timer }) => {
    const progress = (current / total) * 100;

    return (
        <div className={styles.progressContainer}>
            <div className={styles.progressInfo}>
                <span className={styles.questionCounter}>{current}/{total}</span>
                <span className={styles.timer}>{timer} saniye</span>
            </div>
            <div className={styles.progress}>
                <div
                    className={styles.progressBar}
                    role="progressbar"
                    style={{ width: `${progress}%` }}
                    aria-valuenow={progress}
                    aria-valuemin="0"
                    aria-valuemax="100"
                ></div>
            </div>
        </div>
    )
}

export default ProgressBar
