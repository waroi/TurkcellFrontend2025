import { api } from "./api";

export const fetchQuizQuestions = () => {
  return api.quiz.fetchQuestions();
};

export const fetchQuizSettings = () => {
  return api.quiz.fetchSettings();
};

export const saveQuizResult = (userId, email, score, totalQuestions) => {
  return api.quiz.saveResult(userId, email, score, totalQuestions);
};

export const checkUserTestEligibility = (userEmail) => {
  return api.quiz.checkEligibility(userEmail);
};

export const getUserTestStatus = (userId) => {
  return api.quiz.getUserStatus(userId);
};

export const updateQuizSettings = (settings) => {
  return api.quiz.updateSettings(settings);
};

// Utility functions to select questions based on difficulty
export const categorizeQuestions = (questions) => {
  const categorized = {
    easy: [],
    medium: [],
    hard: []
  };

  questions.forEach(question => {
    const level = (question.level || question.Level || '').toLowerCase().trim();
    switch(level) {
      case 'easy':
        categorized.easy.push(question);
        break;
      case 'medium':
        categorized.medium.push(question);
        break;
      case 'hard':
        categorized.hard.push(question);
        break;
      default:
        console.warn(`Question with unrecognized difficulty: ${question.question}`);
    }
  });

  return categorized;
};

export const getRandomQuestions = (array, count) => {
  if (array.length === 0) return [];
  if (array.length <= count) return array;

  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export const selectRandomQuestions = (questions, settings) => {
  const { easy, medium, hard } = categorizeQuestions(questions);

  const safeEasyCount = Math.min(settings.easyCount, easy.length);
  const safeMediumCount = Math.min(settings.mediumCount, medium.length);
  const safeHardCount = Math.min(settings.hardCount, hard.length);

  return [
    ...getRandomQuestions(easy, safeEasyCount),
    ...getRandomQuestions(medium, safeMediumCount),
    ...getRandomQuestions(hard, safeHardCount)
  ];
};

export const isValidQuestion = (question) => {
  return (
    question &&
    question.question &&
    question.Correct &&
    question.A &&
    question.B &&
    question.C &&
    question.D &&
    (question.Level || question.level)
  );
};
