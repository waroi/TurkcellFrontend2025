import styles from './Question.module.css';

const Question = ({ question, onAnswer, isLoading, error }) => {
    if (isLoading) return (
        <p>Sorular yükleniyor...</p>
    )
    if (error) return (
        <p className="error-message">Bir hata oluştu: {error}</p>
    )
    return (
        <div className={styles.questionContainer}>
            {question && <>
                <h2 className={styles.questionText}>{question.text || "Soru"}</h2>
                <div className={styles.optionsContainer}>
                    {question.options.map((option, index) => (
                        <button
                            key={index}
                            className={styles.optionButton}
                            onClick={() => onAnswer(option)}
                        >
                            <span className={styles.optionLetter}>{String.fromCharCode(65 + index)}</span>
                            <span className={styles.optionText}>{option}</span>
                        </button>
                    ))}
                </div>
            </>}
        </div>
    )
}

export default Question