import './Question.css';

const Question = ({ question, onAnswer }) => {
    return (
        <div className="question-container">
            <h2 className="question-text">{question.text || "Soru"}</h2>
            <div className="options-container">
                {question.options.map((option, index) => (
                    <button
                        key={index}
                        className="option-button"
                        onClick={() => onAnswer(option)}
                    >
                        <span className="option-letter">{String.fromCharCode(65 + index)}</span>
                        <span className="option-text">{option}</span>
                    </button>
                ))}
            </div>
        </div>
    )
}

export default Question