
import { collection, addDoc } from 'firebase/firestore';
import { db } from './firebase'; 
const quizQuestions = [
    // Science - Easy
    {
      question: "What is the chemical symbol for water?",
      options: ["H2O", "CO2", "O2", "N2"],
      correctAnswer: "H2O",
      category: "science",
      difficulty: "easy"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Mars", "Venus", "Jupiter", "Mercury"],
      correctAnswer: "Mars",
      category: "science",
      difficulty: "easy"
    },
    {
      question: "What is the hardest natural substance on Earth?",
      options: ["Diamond", "Gold", "Iron", "Titanium"],
      correctAnswer: "Diamond",
      category: "science",
      difficulty: "easy"
    },
    {
      question: "Which of these is not a state of matter?",
      options: ["Electricity", "Solid", "Liquid", "Gas"],
      correctAnswer: "Electricity",
      category: "science",
      difficulty: "easy"
    },
  
    // Science - Medium
    {
      question: "What is the largest organ in the human body?",
      options: ["Skin", "Liver", "Heart", "Brain"],
      correctAnswer: "Skin",
      category: "science",
      difficulty: "medium"
    },
    {
      question: "Which of these elements has the highest atomic number?",
      options: ["Uranium", "Gold", "Iron", "Oxygen"],
      correctAnswer: "Uranium",
      category: "science",
      difficulty: "medium"
    },
    {
      question: "What is the process by which plants make their own food called?",
      options: ["Photosynthesis", "Respiration", "Digestion", "Fermentation"],
      correctAnswer: "Photosynthesis",
      category: "science",
      difficulty: "medium"
    },
    {
      question: "Which scientist proposed the theory of general relativity?",
      options: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Stephen Hawking"],
      correctAnswer: "Albert Einstein",
      category: "science",
      difficulty: "medium"
    },
  
    // Science - Hard
    {
      question: "What is the atomic number of Zinc?",
      options: ["30", "20", "25", "35"],
      correctAnswer: "30",
      category: "science",
      difficulty: "hard"
    },
    {
      question: "What is the approximate speed of light in vacuum?",
      options: ["300,000 km/s", "150,000 km/s", "500,000 km/s", "100,000 km/s"],
      correctAnswer: "300,000 km/s",
      category: "science",
      difficulty: "hard"
    },
    {
      question: "What is the smallest unit of life?",
      options: ["Cell", "Atom", "Molecule", "Organelle"],
      correctAnswer: "Cell",
      category: "science",
      difficulty: "hard"
    },
    {
      question: "Which of these is not a fundamental force in physics?",
      options: ["Nuclear pressure", "Gravity", "Electromagnetic", "Strong nuclear"],
      correctAnswer: "Nuclear pressure",
      category: "science",
      difficulty: "hard"
    },
  
    // History - Easy
    {
      question: "Which ancient civilization built the pyramids?",
      options: ["Egyptians", "Romans", "Greeks", "Mayans"],
      correctAnswer: "Egyptians",
      category: "history",
      difficulty: "easy"
    },
    {
      question: "Who was the first President of the United States?",
      options: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "John Adams"],
      correctAnswer: "George Washington",
      category: "history",
      difficulty: "easy"
    },
    {
      question: "In which year did World War II end?",
      options: ["1945", "1939", "1942", "1950"],
      correctAnswer: "1945",
      category: "history",
      difficulty: "easy"
    },
    {
      question: "Who wrote the Declaration of Independence?",
      options: ["Thomas Jefferson", "George Washington", "Benjamin Franklin", "John Adams"],
      correctAnswer: "Thomas Jefferson",
      category: "history",
      difficulty: "easy"
    },
  
    // History - Medium
    {
      question: "Who was the first female Prime Minister of the United Kingdom?",
      options: ["Margaret Thatcher", "Queen Elizabeth II", "Theresa May", "Queen Victoria"],
      correctAnswer: "Margaret Thatcher",
      category: "history",
      difficulty: "medium"
    },
    {
      question: "The Renaissance period began in which country?",
      options: ["Italy", "France", "England", "Spain"],
      correctAnswer: "Italy",
      category: "history",
      difficulty: "medium"
    },
    {
      question: "In which year did the Berlin Wall fall?",
      options: ["1989", "1991", "1985", "1979"],
      correctAnswer: "1989",
      category: "history",
      difficulty: "medium"
    },
    {
      question: "Which empire was ruled by Genghis Khan?",
      options: ["Mongol Empire", "Roman Empire", "Ottoman Empire", "Byzantine Empire"],
      correctAnswer: "Mongol Empire",
      category: "history",
      difficulty: "medium"
    },
  
    // History - Hard
    {
      question: "In which year was the Treaty of Versailles signed?",
      options: ["1919", "1914", "1925", "1935"],
      correctAnswer: "1919",
      category: "history",
      difficulty: "hard"
    },
    {
      question: "Who discovered penicillin?",
      options: ["Alexander Fleming", "Louis Pasteur", "Marie Curie", "Joseph Lister"],
      correctAnswer: "Alexander Fleming",
      category: "history",
      difficulty: "hard"
    },
    {
      question: "The Battle of Hastings took place in which year?",
      options: ["1066", "1215", "956", "1154"],
      correctAnswer: "1066",
      category: "history",
      difficulty: "hard"
    },
    {
      question: "Who was the last Emperor of Russia?",
      options: ["Nicholas II", "Alexander III", "Peter the Great", "Ivan the Terrible"],
      correctAnswer: "Nicholas II",
      category: "history",
      difficulty: "hard"
    },
  
    // Geography - Easy
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Rome", "Berlin"],
      correctAnswer: "Paris",
      category: "geography",
      difficulty: "easy"
    },
    {
      question: "Which is the largest ocean on Earth?",
      options: ["Pacific", "Atlantic", "Indian", "Arctic"],
      correctAnswer: "Pacific",
      category: "geography",
      difficulty: "easy"
    },
    {
      question: "Which country is known as the Land of the Rising Sun?",
      options: ["Japan", "China", "South Korea", "Thailand"],
      correctAnswer: "Japan",
      category: "geography",
      difficulty: "easy"
    },
    {
      question: "Which is the longest river in the world?",
      options: ["Nile", "Amazon", "Mississippi", "Yangtze"],
      correctAnswer: "Nile",
      category: "geography",
      difficulty: "easy"
    },
  
    // Geography - Medium
    {
      question: "What is the capital of Canada?",
      options: ["Ottawa", "Toronto", "Vancouver", "Montreal"],
      correctAnswer: "Ottawa",
      category: "geography",
      difficulty: "medium"
    },
    {
      question: "Which is the smallest continent?",
      options: ["Australia", "Europe", "Antarctica", "South America"],
      correctAnswer: "Australia",
      category: "geography",
      difficulty: "medium"
    },
    {
      question: "The Great Barrier Reef is located near which country?",
      options: ["Australia", "Brazil", "Mexico", "Thailand"],
      correctAnswer: "Australia",
      category: "geography",
      difficulty: "medium"
    },
    {
      question: "Which mountain range separates Europe from Asia?",
      options: ["Ural Mountains", "Alps", "Himalayas", "Andes"],
      correctAnswer: "Ural Mountains",
      category: "geography",
      difficulty: "medium"
    },
  
    // Geography - Hard
    {
      question: "Which of these countries does NOT border Brazil?",
      options: ["Chile", "Peru", "Colombia", "Bolivia"],
      correctAnswer: "Chile",
      category: "geography",
      difficulty: "hard"
    },
    {
      question: "What is the capital of New Zealand?",
      options: ["Wellington", "Auckland", "Christchurch", "Sydney"],
      correctAnswer: "Wellington",
      category: "geography",
      difficulty: "hard"
    },
    {
      question: "Lake Baikal is located in which country?",
      options: ["Russia", "Canada", "China", "Mongolia"],
      correctAnswer: "Russia",
      category: "geography",
      difficulty: "hard"
    },
    {
      question: "Which country has the most time zones?",
      options: ["France", "Russia", "USA", "Australia"],
      correctAnswer: "France",
      category: "geography",
      difficulty: "hard"
    },
  
    // Sports - Easy
    {
      question: "In which sport would you perform a slam dunk?",
      options: ["Basketball", "Football", "Tennis", "Golf"],
      correctAnswer: "Basketball",
      category: "sports",
      difficulty: "easy"
    },
    {
      question: "How many players are on a standard soccer team?",
      options: ["11", "9", "10", "12"],
      correctAnswer: "11",
      category: "sports",
      difficulty: "easy"
    },
    {
      question: "Which country won the FIFA World Cup in 2018?",
      options: ["France", "Brazil", "Germany", "Argentina"],
      correctAnswer: "France",
      category: "sports",
      difficulty: "easy"
    },
    {
      question: "In which Olympic sport might you perform a vault?",
      options: ["Gymnastics", "Swimming", "Fencing", "Archery"],
      correctAnswer: "Gymnastics",
      category: "sports",
      difficulty: "easy"
    },
  
    // Sports - Medium
    {
      question: "How many Grand Slam tournaments are there in tennis?",
      options: ["4", "3", "5", "6"],
      correctAnswer: "4",
      category: "sports",
      difficulty: "medium"
    },
    {
      question: "What is the national sport of Japan?",
      options: ["Sumo", "Judo", "Karate", "Kendo"],
      correctAnswer: "Sumo",
      category: "sports",
      difficulty: "medium"
    },
    {
      question: "Which team has won the most Super Bowls?",
      options: ["New England Patriots", "Pittsburgh Steelers", "Dallas Cowboys", "San Francisco 49ers"],
      correctAnswer: "New England Patriots",
      category: "sports",
      difficulty: "medium"
    },
    {
      question: "In baseball, how many strikes constitute a strikeout?",
      options: ["3", "4", "2", "5"],
      correctAnswer: "3",
      category: "sports",
      difficulty: "medium"
    },
  
    // Sports - Hard
    {
      question: "In which year were the first modern Olympic Games held?",
      options: ["1896", "1900", "1924", "1856"],
      correctAnswer: "1896",
      category: "sports",
      difficulty: "hard"
    },
    {
      question: "How long is a marathon race in kilometers?",
      options: ["42.195", "40", "45", "50"],
      correctAnswer: "42.195",
      category: "sports",
      difficulty: "hard"
    },
    {
      question: "Which country won the first Cricket World Cup?",
      options: ["West Indies", "Australia", "England", "India"],
      correctAnswer: "West Indies",
      category: "sports",
      difficulty: "hard"
    },
    {
      question: "In fencing, what are the three weapons used?",
      options: ["Foil, épée, sabre", "Foil, dagger, sword", "Épée, cutlass, rapier", "Sabre, rapier, knife"],
      correctAnswer: "Foil, épée, sabre",
      category: "sports",
      difficulty: "hard"
    },
  
    // Pop Culture - Easy
    {
      question: "Who played Jack in the movie Titanic?",
      options: ["Leonardo DiCaprio", "Brad Pitt", "Tom Cruise", "Johnny Depp"],
      correctAnswer: "Leonardo DiCaprio",
      category: "popculture",
      difficulty: "easy"
    },
    {
      question: "Which band performed the song 'Hey Jude'?",
      options: ["The Beatles", "The Rolling Stones", "Led Zeppelin", "Queen"],
      correctAnswer: "The Beatles",
      category: "popculture",
      difficulty: "easy"
    },
    {
      question: "Who is the author of the Harry Potter series?",
      options: ["J.K. Rowling", "Stephen King", "George R.R. Martin", "J.R.R. Tolkien"],
      correctAnswer: "J.K. Rowling",
      category: "popculture",
      difficulty: "easy"
    },
    {
      question: "Which Disney movie features the song 'Let It Go'?",
      options: ["Frozen", "Moana", "The Lion King", "Beauty and the Beast"],
      correctAnswer: "Frozen",
      category: "popculture",
      difficulty: "easy"
    },
  
    // Pop Culture - Medium
    {
      question: "Who directed the movie 'Pulp Fiction'?",
      options: ["Quentin Tarantino", "Steven Spielberg", "Martin Scorsese", "Christopher Nolan"],
      correctAnswer: "Quentin Tarantino",
      category: "popculture",
      difficulty: "medium"
    },
    {
      question: "Which TV show features the character Walter White?",
      options: ["Breaking Bad", "Game of Thrones", "The Walking Dead", "Stranger Things"],
      correctAnswer: "Breaking Bad",
      category: "popculture",
      difficulty: "medium"
    },
    {
      question: "Who played Iron Man in the Marvel Cinematic Universe?",
      options: ["Robert Downey Jr.", "Chris Evans", "Chris Hemsworth", "Mark Ruffalo"],
      correctAnswer: "Robert Downey Jr.",
      category: "popculture",
      difficulty: "medium"
    },
    {
      question: "Which album did Michael Jackson release in 1982?",
      options: ["Thriller", "Bad", "Dangerous", "Off the Wall"],
      correctAnswer: "Thriller",
      category: "popculture",
      difficulty: "medium"
    },
  
    // Pop Culture - Hard
    {
      question: "Who won the first season of American Idol?",
      options: ["Kelly Clarkson", "Carrie Underwood", "Jennifer Hudson", "Adam Lambert"],
      correctAnswer: "Kelly Clarkson",
      category: "popculture",
      difficulty: "hard"
    },
    {
      question: "Which actor has won the most Academy Awards for Best Actor?",
      options: ["Daniel Day-Lewis", "Jack Nicholson", "Leonardo DiCaprio", "Tom Hanks"],
      correctAnswer: "Daniel Day-Lewis",
      category: "popculture",
      difficulty: "hard"
    },
    {
      question: "What was the first feature-length animated movie ever released?",
      options: ["Snow White and the Seven Dwarfs", "Pinocchio", "Steamboat Willie", "Fantasia"],
      correctAnswer: "Snow White and the Seven Dwarfs",
      category: "popculture",
      difficulty: "hard"
    },
    {
      question: "In what year was the first episode of the TV show Friends aired?",
      options: ["1994", "1992", "1996", "1998"],
      correctAnswer: "1994",
      category: "popculture",
      difficulty: "hard"
    }
  ];

const addQuestionsToFirestore = async () => {
  try {
    let count = 0;
    for (const question of quizQuestions) {
      await addDoc(collection(db, 'questions'), question);
      count++;
      console.log(`Added question ${count}/${quizQuestions.length}`);
    }
    console.log('All questions added successfully!');
  } catch (error) {
    console.error('Error adding questions: ', error);
  }
};

addQuestionsToFirestore();