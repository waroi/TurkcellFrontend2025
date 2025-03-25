import React, { useEffect, useState } from "react";
import questionData from "../../../constants/questions.json";
import { useNavigate } from "react-router";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [totalPoint, setTotalPoint] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    setQuestions(questionData.questions);
  }, []);

  const nextQuestion = () => {
    if (activeIndex < 4) {
      setActiveIndex(activeIndex + 1);
    } else {
      navigate("/quizCompleted");
    }
  };
  const calcPoint = (selectedIndex) => {
    const correctAnswerIndex = questions[activeIndex]?.correctAnswer;
    if (selectedIndex === correctAnswerIndex) {
      setTotalPoint((prev) => prev + 25);
    }
    nextQuestion();
  };
  return (
    <div className="quiz-container container-sm w-50 pt-5">
      <div className="question py-3">
        <p>{`Soru ${activeIndex + 1}:`}</p>
        <div className="card p-3 mt-3 rounded-pill">
          <p className="mb-0">{questions[activeIndex]?.question}</p>
        </div>
      </div>

      <div className="options">
        {questions[activeIndex]?.options.map((option, index) => (
          <div
            key={index}
            className="card rounded-pill p-3 mt-2"
            onClick={() => calcPoint(index)}
          >
            <p className="mb-0">{option}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
