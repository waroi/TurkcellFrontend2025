import questionData from "../constants/questions.json";

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
  return array;
};

export const getShuffledQuestionsByCategory = (easyCount, mediumCount, hardCount) => {
  const easyQuestions = shuffleArray(questionData.questions.easy).slice(0, easyCount);
  const mediumQuestions = shuffleArray(questionData.questions.medium).slice(0, mediumCount);
  const hardQuestions = shuffleArray(questionData.questions.hard).slice(0, hardCount);

  return shuffleArray([...easyQuestions, ...mediumQuestions, ...hardQuestions]);
};
