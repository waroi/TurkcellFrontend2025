import React from "react";

const QuizStatus = ({ message, testStatus }) => {
  return (
    <div className="alert alert-warning text-center">
      {message}
      {testStatus && testStatus.completed
        ? ` Your previous test score was: ${testStatus.score} / ${testStatus.totalQuestions}`
        : " You cannot start a new test."}
    </div>
  );
};

export default QuizStatus;
