import React, { useState, useEffect } from "react";
import WrapperCard from "../atoms/cards/WrapperCard";
import PrimaryButton from "../atoms/Buttons/PrimaryButton";
import SuccessButton from "../atoms/Buttons/SuccessButton";
import SecondaryButton from "../atoms/Buttons/SecondaryButton";
import DangerButton from "../atoms/Buttons/DangerButton";
import { updateQuizByExamID, updateUserExams } from "../../utils/services";

// Toplam süre
const Quiz = ({ jobId, shuffledQuestions }) => {
  const totalTime = shuffledQuestions.totalDuration || 90;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(totalTime);
  const [selectedOption, setSelectedOption] = useState(null);
  const [quizStarted, setQuizStarted] = useState(false);

  const finishExam = async () => {
    try {
      const updatedExam = { score: score };
      //nereye yazılacak düşünülecek.fetch Update
      console.log(data);
    } catch (error) {
      console.error("Sınav bulunamadı:", error);
    } finally {
      setLoading(false);
    }
  };

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

  const handleAnswer = (optionIndex) => {
    if (selectedOption) return;
    setSelectedOption(optionIndex);
    const correctAnswers = shuffledQuestions[currentQuestion]?.answers || [];
    if (correctAnswers.includes(optionIndex)) {
      setScore((prevScore) => prevScore + 1);
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
          <div className="text-end text-muted mb-2">
            Toplam Süre: {timeLeft} sn
          </div>
          <div className="d-flex justify-content-between align-items-center gap-2">
            {shuffledQuestions[currentQuestion]?.options.map(
              (option, index) => {
                const isCorrect =
                  option ===
                  shuffledQuestions[currentQuestion]?.answers.includes(index);
                const isSelected = selectedOption === index;
                return (
                  <div key={index}>
                    {isSelected ? (
                      isCorrect ? (
                        <SuccessButton
                          onClick={() => handleAnswer(index)}
                          disabled={!!selectedOption}
                        >
                          {option}
                        </SuccessButton>
                      ) : (
                        <DangerButton
                          onClick={() => handleAnswer(index)}
                          disabled={!!selectedOption}
                        >
                          {option}
                        </DangerButton>
                      )
                    ) : (
                      <PrimaryButton
                        onClick={() => handleAnswer(index)}
                        disabled={!!selectedOption}
                      >
                        {option}
                      </PrimaryButton>
                    )}
                  </div>
                );
              }
            )}
          </div>
          <div className="d-flex justify-content-between align-items-center gap-3 my-3">
            <SecondaryButton onClick={handlePreviousQuestion}>
              Önceki Soru
            </SecondaryButton>
            <PrimaryButton onClick={handleNextQuestion}>
              Sonraki Soru
            </PrimaryButton>
          </div>
        </div>
      )}
    </WrapperCard>
  );
};
export default Quiz;
