import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router"; // Import useLocation
import {
  setMessage,
  setQuizPoint,
  setStatus,
} from "../../../../firebase/dbController";
import { getShuffledQuestionsByCategory } from "../../../services/QuestionService"; // Import the correct function
import QuizComponent from "./QuizComponent";

const Quiz = () => {
  // Remove quizCounts from props
  const [questions, setQuestions] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [totalPoint, setTotalPoint] = useState(0);
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { quizCounts } = location.state || { easy: 0, medium: 0, hard: 0 };

  useEffect(() => {
    const { easy, medium, hard } = quizCounts;

    setQuestions(getShuffledQuestionsByCategory(easy, medium, hard)); // hata burda question sayılarını gönderemedim.
    console.log(questions);
  }, [id, quizCounts]);

  const handleAnswerClick = (selectedIndex) => {
    const correctAnswerIndex = questions[activeIndex]?.correctAnswer;
    if (selectedIndex === correctAnswerIndex) {
      setTotalPoint((prev) => prev + 20);
    }
    console.log(activeIndex);
    if (activeIndex === questions.length - 1) {
      setQuizPoint(id, totalPoint);
      setMessage(
        id,
        "Test Kontrol",
        "Testiniz Değerlendiriliyor",
        "Mülakat aşamasını başlat"
      );
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
