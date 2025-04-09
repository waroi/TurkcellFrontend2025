import React from "react";

const QuizCompleted = ({ score, totalQuestions }) => {
  return (
    <div className="text-center">
      <h2>Quiz Completed!</h2>
      <p>
        Your Score: {score} / {totalQuestions}
      </p>
    </div>
  );
};

export default QuizCompleted;
