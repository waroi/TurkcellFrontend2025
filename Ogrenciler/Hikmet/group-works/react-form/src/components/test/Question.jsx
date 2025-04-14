import React from "react";

const Question = ({
  question,
  questionNumber,
  selectedAnswer,
  onAnswerSelected,
  onNextQuestion,
  isLastQuestion,
}) => {
  return (
    <div className="quiz-container">
      <h3>Question {questionNumber}</h3>
      <p>{question.question}</p>

      <div className="answer-options">
        {["A", "B", "C", "D"].map((option) => (
          <button
            key={option}
            className={`btn ${
              selectedAnswer === question[option]
                ? "btn-primary"
                : "btn-outline-secondary"
            } m-2`}
            onClick={() => onAnswerSelected(question[option])}
          >
            {question[option]}
          </button>
        ))}
      </div>

      <button
        className="btn btn-success mt-3"
        onClick={onNextQuestion}
        disabled={!selectedAnswer}
      >
        {isLastQuestion ? "Finish Quiz" : "Next Question"}
      </button>
    </div>
  );
};

export default Question;
