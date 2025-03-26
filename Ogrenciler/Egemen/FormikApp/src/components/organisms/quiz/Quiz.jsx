import React, { useEffect, useState } from "react";
import questionData from "../../../constants/questions.json";
import { useNavigate, useParams } from "react-router";
import { setQuizPoint } from "../../../../firebase/dbController";
import { getShuffledQuestions } from "../../../services/QuestionService";
import QuizComponent from "./QuizComponent";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [totalPoint, setTotalPoint] = useState(0);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setQuestions(getShuffledQuestions());
  }, [id]);

  const handleAnswerClick = (selectedIndex) => {
    const correctAnswerIndex = questions[activeIndex]?.correctAnswer;
    if (selectedIndex === correctAnswerIndex) {
      setTotalPoint((prev) => prev + 20);
    }

    if (activeIndex === 4) {
      setQuizPoint(id, totalPoint);
      navigate("/quizCompleted");
    } else {
      setActiveIndex(activeIndex + 1);
    }
  };

  return (
    <QuizComponent
      question={questions[activeIndex]?.question}
      options={questions[activeIndex]?.options}
      activeIndex={activeIndex}
      handleAnswerClick={handleAnswerClick}
    />
  );
};

export default Quiz;
