import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import {
  getQuestionCount,
  setMessage,
  setQuizPoint,
} from "../../../../firebase/dbController";
import { getShuffledQuestionsByCategory } from "../../../services/QuestionService";
import QuizComponent from "./QuizComponent";

const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [totalPoint, setTotalPoint] = useState(0);
  const { id } = useParams();
  const navigate = useNavigate();

  async function fetchCount() {
    const { easy, medium, hard } = await getQuestionCount(id);
    console.log("e", easy, " m", medium, " h", hard);
    setQuestions(getShuffledQuestionsByCategory(easy, medium, hard));
  }
  useEffect(() => {
    fetchCount();
  }, [id]);

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
    questions && (
      <QuizComponent
        question={questions[activeIndex]?.question}
        options={questions[activeIndex]?.options}
        activeIndex={activeIndex}
        handleAnswerClick={handleAnswerClick}
      />
    )
  );
};

export default Quiz;
