import './ProgressBar.css';

const ProgressBar = ({ current, total, timer }) => {
    const progress = (current / total) * 100

    return (
        <div className="progress-container">
            <div className="progress-info">
                <span className="question-counter">{current}/{total}</span>
                <span className="timer">{timer} saniye</span>
            </div>
            <div className="progress">
                <div
                    className="progress-bar"
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