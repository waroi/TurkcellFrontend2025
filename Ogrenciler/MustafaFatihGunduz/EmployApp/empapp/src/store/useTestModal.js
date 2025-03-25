import { useState } from "react";

const useTestModal = (questions, onComplete) => {
  const [answers, setAnswers] = useState({});

  //! bu fonksiyon soruya cevap verilince çalışıyor
  const handleAnswer = (index, key) => {
    setAnswers((prev) => ({
      ...prev,
      [index]: key,
      //! önceki cevapları korumak için kullanıldı
    }));
  };

  const handleSubmit = () => {
    const results = {
      answers,
      correctAnswers: questions.filter(
        (question, index) => answers[index] === question.answer
      ).length,
      //! doğru cevap sayısı, yani kullanıcı kaç doğru cevap verdi onu tuttuk
    };
    onComplete(results);
  };

  return {
    answers,
    handleAnswer,
    handleSubmit,
  };
};

export default useTestModal;
