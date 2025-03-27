import React from "react";

const QuizComponent = ({
  question,
  options,
  activeIndex,
  handleAnswerClick,
}) => {
  return (
    <div className="quiz-container container-sm w-50 pt-5">
      <div className="question py-3">
        <p>{`Soru ${activeIndex + 1}:`}</p>
        <div className="card p-3 mt-3 rounded-pill">
          <p className="mb-0">{question}</p>
        </div>
      </div>

      <div className="options">
        {options?.map((option, index) => (
          <div
            key={index}
            className="card rounded-pill p-3 mt-2"
            onClick={() => handleAnswerClick(index)}
          >
            <p className="mb-0">{option}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizComponent;
