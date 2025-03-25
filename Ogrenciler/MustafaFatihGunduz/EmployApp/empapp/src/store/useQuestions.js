import { useState } from "react";
import questions from "../questions/question.json";

const useQuestions = () => {
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [showTest, setShowTest] = useState(false);

  const handleStartTest = () => {
    const randomQuestions = questions.questions
      .sort(() => Math.random() - 0.5) //! arrayi rastgele sıralamak için
      .slice(0, 5);
    setSelectedQuestions(randomQuestions);
    setShowTest(true);
  };

  return {
    selectedQuestions,
    showTest,
    setShowTest,
    handleStartTest,
  };
};

export default useQuestions;
