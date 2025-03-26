import React, { useState, useEffect } from "react";
import WrapperCard from "../atoms/cards/WrapperCard";
import PrimaryButton from "../atoms/Buttons/PrimaryButton";
import SuccessButton from "../atoms/Buttons/SuccessButton";
import SecondaryButton from "../atoms/Buttons/SecondaryButton";
import DangerButton from "../atoms/Buttons/DangerButton";
import { updateUserExams } from "../../utils/services";

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

const totalTime = 90; // Toplam süre
const Quiz = ({jobId, questions}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(totalTime);
  const [selectedOption, setSelectedOption] = useState(null);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [quizStarted, setQuizStarted] = useState(false);

  useEffect(() => {
    setShuffledQuestions(shuffle(questions).slice(0, 5));
  }, []);
  useEffect(() => {
    if (!quizStarted || timeLeft === 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleEndQuiz();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [timeLeft, quizStarted]);
  const handleAnswer = (option) => {
    if (selectedOption) return;
    setSelectedOption(option);
    if (option === shuffledQuestions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setTimeout(handleNextQuestion, 1000);
  };
  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(null);
    }
  };
  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < shuffledQuestions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedOption(null);
    } else {
      handleEndQuiz();
    }
  };
  const startQuiz = () => {
    setQuizStarted(true);
  };
  const handleEndQuiz = async () => {
    setShowResult(true);
    try {
      await updateUserExams(userId, score);
    } catch (error) {
      console.error("Sınav sonucu yüklenemedi:", error);
    }
  };
  return (
    <WrapperCard>
      {!quizStarted ? (
        <div className="d-flex justify-content-center align-items-center vh-100">
          <PrimaryButton className="p-3" onClick={startQuiz}>
            Sınava Başla
          </PrimaryButton>
        </div>
      ) : showResult ? (
        <div>
          <h2 className="mb-3">
            Sonuç: {score}/{shuffledQuestions.length}
          </h2>
          <p>
            {score / shuffledQuestions.length >= 0.7
              ? "Tebrikler! Mülakata çağrıldınız."
              : "Başarısız oldunuz. Tekrar deneyin."}
          </p>
        </div>
      ) : (
        <div className="vh-100 d-flex flex-column justify-content-center p-5 gap-5">
          <h2 className="mb-2 text-center">
            {shuffledQuestions[currentQuestion]?.question}
          </h2>
          <div className="text-end text-muted mb-2">Toplam Süre: {timeLeft} sn</div>
          <div className="d-flex justify-content-between align-items-center gap-2">
            {shuffledQuestions[currentQuestion]?.options.map((option) => {
              const isCorrect =
                option === shuffledQuestions[currentQuestion].answer;
              const isSelected = option === selectedOption;
              return (
                <div key={option}>
                  {isSelected ? (
                    isCorrect ? (
                      <SuccessButton
                        onClick={() => handleAnswer(option)}
                        disabled={!!selectedOption}
                      >
                        {option}
                      </SuccessButton>
                    ) : (
                      <DangerButton
                        onClick={() => handleAnswer(option)}
                        disabled={!!selectedOption}
                      >
                        {option}
                      </DangerButton>
                    )
                  ) : (
                    <PrimaryButton
                      onClick={() => handleAnswer(option)}
                      disabled={!!selectedOption}
                    >
                      {option}
                    </PrimaryButton>
                  )}
                </div>
              );
            })}
          </div>
          <div className="d-flex justify-content-between align-items-center gap-3 my-3">
            <SecondaryButton onClick={handlePreviousQuestion}>
              Önceki Soru
            </SecondaryButton>
            <PrimaryButton onClick={handleNextQuestion}>Sonraki Soru</PrimaryButton>
          </div>
        </div>
      )}
    </WrapperCard>
  );
};
export default Quiz;