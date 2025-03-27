import { useState, useEffect } from "react";
import questions from "../questions/question.json";
import useAdminTest from "./useAdminTest";
import { auth } from "../../firebase_config";

const useQuestions = () => {
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [showTest, setShowTest] = useState(false);
  const { totalQuestion, hardQuestion, mediumQuestion, fetchTestDetails } =
    useAdminTest();

  const handleStartTest = async (application) => {
    const testData = await fetchTestDetails(application.id);
    if (!testData) {
      console.error("Test verileri alınamadı", testData);
      return;
    }

    const totalQuestionCount = Number(testData.totalQuestion) || 5;
    const hardQuestionCount = Number(testData.hardQuestion) || 0;
    const mediumQuestionCount = Number(testData.mediumQuestion) || 0;

    const hardQuestions = questions.questions.filter(
      (q) => q.difficulty === "3"
    );
    const mediumQuestions = questions.questions.filter(
      (q) => q.difficulty === "2"
    );
    const easyQuestions = questions.questions.filter(
      (q) => q.difficulty === "1"
    );

    console.log(`Zor soru havuzu: ${hardQuestions.length}`);
    console.log(`Orta soru havuzu: ${mediumQuestions.length}`);
    console.log(`Kolay soru havuzu: ${easyQuestions.length}`);

    const selectedHardQuestions = hardQuestions
      .sort(() => Math.random() - 0.5)
      .slice(0, Math.min(hardQuestionCount, hardQuestions.length));

    const selectedMediumQuestions = mediumQuestions
      .sort(() => Math.random() - 0.5)
      .slice(0, Math.min(mediumQuestionCount, mediumQuestions.length));

    const remainingQuestionCount =
      totalQuestionCount -
      selectedHardQuestions.length -
      selectedMediumQuestions.length;

    const remainingQuestions = easyQuestions
      .sort(() => Math.random() - 0.5)
      .slice(0, Math.max(0, remainingQuestionCount));

    const randomQuestions = [
      ...selectedHardQuestions,
      ...selectedMediumQuestions,
      ...remainingQuestions,
    ];

    randomQuestions.sort(() => Math.random() - 0.5);

    console.log(`${totalQuestionCount} soru seçildi:`, randomQuestions);
    console.log(`Seçilen zor soru sayısı: ${selectedHardQuestions.length}`);
    console.log(`Seçilen orta soru sayısı: ${selectedMediumQuestions.length}`);
    console.log(`Seçilen diğer soru sayısı: ${remainingQuestions.length}`);

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
