import styles from './RatingSection.module.css';

const RatingSection = ({ selectedRate, handleRateChange, handleEvaluateClick }) => {
    return (
        <div className={styles.rateBlock}>
            <div className={styles.detailLabel}>Değerlendirme</div>
            <div className="w-100">
                <select
                    className={styles.customSelect}
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
    )
}

export default RatingSection