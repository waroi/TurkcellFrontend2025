import questionData from "../constants/questions.json";

export const getShuffledQuestions = (count = 5) => {
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
    }
    return array;
  };

  return shuffleArray(questionData.questions).slice(0, count);
};
