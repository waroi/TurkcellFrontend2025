import { useEffect, useRef } from "react";
import styles from './ProgressBar.module.css';

const ProgressBar = () => {
    const progressBarRef = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            if (progressBarRef.current) {
                progressBarRef.current.style.width = "100%";
            }
        }, 300);
    }, []);

    return (
        <div className={styles.progressContainer}>
            <div className={styles.progressBar} ref={progressBarRef}></div>
        </div>
    )
}

export default ProgressBar