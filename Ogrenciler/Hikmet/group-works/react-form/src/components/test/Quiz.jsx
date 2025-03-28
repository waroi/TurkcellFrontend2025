import React, { useState, useEffect } from "react";
import { auth } from "../../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { useQuiz } from "../../hooks/useQuiz";
import Question from "./Question";
import QuizCompleted from "./QuizCompleted";
import QuizStatus from "./QuizStatus";

const Quiz = () => {
  const [user, setUser] = useState(null);
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);
  
  const {
    currentQuestion,
    currentQuestionIndex,
    totalQuestions,
    selectedAnswer,
    setSelectedAnswer,
    handleAnswer,
    isEligibleForTest,
    isLoading,
    testCompleted,
    score,
    errorMessage,
    testAttemptStatus
  } = useQuiz(user);

  const renderQuizContent = () => {
    if (isLoading) {
      return <div className="text-center">Loading...</div>;
    }

    if (testAttemptStatus) {
      return <QuizStatus message={errorMessage} testStatus={testAttemptStatus} />;
    }

    if (!isEligibleForTest) {
      return (
        <div className="alert alert-warning text-center">
          {errorMessage || "You are not eligible for the test."}
        </div>
      );
    }

    if (totalQuestions === 0) {
      return (
        <div className="alert alert-danger text-center">
          {errorMessage || "No questions could be loaded. Please contact support."}
        </div>
      );
    }

    if (testCompleted) {
      return <QuizCompleted score={score} totalQuestions={totalQuestions} />;
    }

    return (
      <Question 
        question={currentQuestion}
        questionNumber={currentQuestionIndex + 1}
        selectedAnswer={selectedAnswer}
        onAnswerSelected={setSelectedAnswer}
        onNextQuestion={handleAnswer}
        isLastQuestion={currentQuestionIndex === totalQuestions - 1}
      />
    );
  };

  return <div className="container mt-5">{renderQuizContent()}</div>;
};

export default Quiz;