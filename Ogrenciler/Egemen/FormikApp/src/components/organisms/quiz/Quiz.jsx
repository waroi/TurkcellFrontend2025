import React, { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router"; // Import useLocation
import {
  getQuestionCount,
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
  // const { quizCounts } = location.state || { easy: 0, medium: 0, hard: 0 };
  async function fetchCount() {
    const { easy, medium, hard } = await getQuestionCount(id);
    console.log("e", easy, " m", medium, " h", hard);
    setQuestions(getShuffledQuestionsByCategory(easy, medium, hard));
  }
  useEffect(() => {
    //console.log(location.state);
    fetchCount();
    // // hata burda question sayılarını gönderemedim.
    //console.log("sorular", questions);
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
