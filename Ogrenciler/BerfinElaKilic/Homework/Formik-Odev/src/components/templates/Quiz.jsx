import React, { useState, useEffect } from "react";
import WrapperCard from "../atoms/cards/WrapperCard";
import PrimaryButton from "../atoms/Buttons/PrimaryButton";
import SuccessButton from "../atoms/Buttons/SuccessButton";
import SecondaryButton from "../atoms/Buttons/SecondaryButton";
import DangerButton from "../atoms/Buttons/DangerButton";

const questions = [
  {
    question: "Nesne (Object) nedir?",
    options: [
      "Sadece fiziksel varlıklardır.",
      "Özellikleri ve davranışları olan varlıklardır.",
      "Yalnızca programlama dillerinde kullanılır.",
      "Sadece veritabanında depolanan öğelerdir.",
    ],
    answer: "Özellikleri ve davranışları olan varlıklardır.",
  },
  {
    question: "Sınıf (Class) nedir?",
    options: [
      "Nesnelerin özelliklerinin depolandığı yerdir.",
      "Nesnelerin oluşturulduğu bir kalıptır.",
      "Sadece verileri tutar.",
      "Yalnızca metodları içerir.",
    ],
    answer: "Nesnelerin oluşturulduğu bir kalıptır.",
  },
  {
    question: "Kalıtım (Inheritance) nedir?",
    options: [
      "Sadece metodların paylaşılmasıdır.",
      "Bir sınıfın başka bir sınıftan özellikler almasıdır.",
      "Verilerin kopyalanmasıdır.",
      "Yalnızca temel sınıflarda kullanılır.",
    ],
    answer: "Bir sınıfın başka bir sınıftan özellikler almasıdır.",
  },
  {
    question: "Soyutlama (Abstraction) nedir?",
    options: [
      "Nesnenin tüm detaylarını gizlemek anlamına gelir.",
      "Önemli özelliklerin ön plana çıkarılmasıdır.",
      "Yalnızca metodların gizlenmesidir.",
      "Verilerin doğrudan erişilmesidir.",
    ],
    answer: "Önemli özelliklerin ön plana çıkarılmasıdır.",
  },
  {
    question: "Çok biçimlilik (Polymorphism) nedir?",
    options: [
      "Aynı metodun farklı şekillerde davranış göstermesidir.",
      "Nesnelerin kopyalanmasıdır.",
      "Yalnızca türetilmiş sınıflarda kullanılır.",
      "Metodların üzerine yazılmasıdır.",
    ],
    answer: "Aynı metodun farklı şekillerde davranış göstermesidir.",
  },
  {
    question: "Kapsülleme (Encapsulation) nedir?",
    options: [
      "Nesnenin iç detaylarının gizlenmesidir.",
      "Yalnızca metodların gizlenmesidir.",
      "Nesnelerin kopyalanmasıdır.",
      "Verilerin doğrudan erişilmesidir.",
    ],
    answer: "Nesnenin iç detaylarının gizlenmesidir.",
  },
  {
    question: "SOLID prensiplerinin amacı nedir?",
    options: [
      "Kodun okunabilirliğini azaltmak",
      "Nesne yönelimli tasarımı optimize etmek",
      "Sadece performansı artırmak",
      "Daha fazla kod yazmak",
    ],
    answer: "Nesne yönelimli tasarımı optimize etmek",
  },
];

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10);
  const [selectedOption, setSelectedOption] = useState(null);
  const [shuffledQuestions, setShuffledQuestions] = useState([]);
  const [quizStarted, setQuizStarted] = useState(false);

  useEffect(() => {
    setShuffledQuestions(shuffle(questions).slice(0, 5));
  }, []);

  useEffect(() => {
    if (!quizStarted || timeLeft === 0) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
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

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < shuffledQuestions.length) {
      setCurrentQuestion(nextQuestion);
      setTimeLeft(10);
      setSelectedOption(null);
    } else {
      setShowResult(true);
    }
  };

  const startQuiz = () => {
    setQuizStarted(true);
    setTimeLeft(10);
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
        <div>
          <h2 className="mb-2">
            {shuffledQuestions[currentQuestion]?.question}
          </h2>
          <div className="text-end text-muted mb-2">Süre: {timeLeft} sn</div>
          <div className="d-flex justify-content-between align-items-center gap-3">
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
        </div>
      )}
    </WrapperCard>
  );
};

export default Quiz;
