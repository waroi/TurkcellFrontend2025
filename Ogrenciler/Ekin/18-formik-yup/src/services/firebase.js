import { initializeApp } from "firebase/app";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  doc,
  getDoc,
  updateDoc,
  setDoc,
} from "firebase/firestore";

const app = initializeApp({
  apiKey: "AIzaSyDMM8W4sM5DnkXwczvtKtJb0kx3Qa8uvL4",
  authDomain: "formik-yup-bbc7d.firebaseapp.com",
  projectId: "formik-yup-bbc7d",
  storageBucket: "formik-yup-bbc7d.firebasestorage.app",
  messagingSenderId: "152546404685",
  appId: "1:152546404685:web:fbcd7a0db185164dceaf04",
});

import { shuffle } from "@/util/random";

const auth = getAuth(app);
const database = getFirestore(app);

//* User ====================================================================================================

export function register(email, password, name, surname) {
  return createUserWithEmailAndPassword(auth, email, password).then(
    (response) => setUser(response.user.uid, email, name, surname)
  );
}

export function setUser(id, email, name, surname) {
  return setDoc(doc(database, "users", id), {
    id,
    email,
    name,
    surname,
    isAdmin: false,
  }).then(() => id);
}

export function login(email, password) {
  return signInWithEmailAndPassword(auth, email, password).then(
    (credendials) => credendials.user.uid
  );
}

export function logout() {
  return auth.signOut();
}

export function getUser(user) {
  return getDoc(doc(database, "users", user)).then((snapshot) =>
    snapshot.data()
  );
}

//* Application ====================================================================================================

export function getApplications() {
  return getDocs(collection(database, "applications")).then((snapshot) =>
    snapshot.docs.map((application) => ({
      id: application.id,
      ...application.data(),
    }))
  );
}

export function getApplication(id) {
  return getDoc(doc(database, "applications", id)).then((snapshot) => ({
    id,
    ...snapshot.data(),
  }));
}

export function submitForm(form) {
  delete form["email-again"];
  delete form["terms-and-conditions"];
  delete form["kvkk"];

  return addDoc(collection(database, "forms"), form);
}

export function getForms() {
  return getDocs(collection(database, "forms")).then(
    (snapshot) =>
      snapshot.docs.map((form) => ({
        ...form.data(),
        form: form.id,
      }))
    //   .sort((current, next) => next.date - current.date)
  );
}

export function setApplication(application, id, status) {
  return status == "accepted"
    ? getApplication(application).then(({ difficulty }) =>
        addExam(difficulty).then((exam) => {
          updateDoc(doc(database, "forms", id), {
            status,
            exam,
          }).then(() => id);
        })
      )
    : updateDoc(doc(database, "forms", id), {
        status,
      }).then(() => id);
}

// export function addQuestions(q) {
//   return addDoc(collection(database, "questions"), q);
// }

function addExam(difficulty) {
  return getQuestions(difficulty).then((questions) =>
    addDoc(collection(database, "exams"), {
      questions,
    }).then((exam) => exam.id)
  );

  function getQuestions(difficulty) {
    return getDocs(collection(database, "questions")).then((questions) => {
      questions = shuffle(
        questions.docs.map((question) => ({
          id: question.id,
          difficulty: question.data().difficulty,
        }))
      );

      return questions
        .filter((question) => !question.difficulty)
        .slice(0, difficulty[0])
        .concat(
          questions
            .filter((question) => question.difficulty == 1)
            .slice(0, difficulty[1])
            .concat(
              questions
                .filter((question) => question.difficulty == 2)
                .slice(0, difficulty[2])
            )
        )
        .map((question) => question.id);
    });
  }
}

export function getExam(id) {
  return getDoc(doc(database, "exams", id)).then((snapshot) => snapshot.data());
}

export function getQuestion(id) {
  return getDoc(doc(database, "questions", id)).then((snapshot) =>
    snapshot.data()
  );
}

export async function submitExam(id, exam) {
  //* Evaluation
  exam.questions
    .reduce(
      async (result, question, index) => {
        result = await result;
        question = await getQuestion(question);

        if (
          exam.answers[index]
            ? exam.answers[index] == question.answers[0]
            : false
        ) {
          result.score++;
        } else {
          result.wrongs.push({
            question: question.question,
            correct: question.answers[0],
            wrong: exam.answers[index],
          });
        }

        return result;
      },
      { score: 0, wrongs: [] }
    )
    .then((result) => ({
      score: parseInt((result.score * 100) / exam.questions.length),
      wrongs: result.wrongs,
    }))
    .then((result) =>
      getDocs(collection(database, "forms")).then((forms) =>
        forms.docs.map((form) =>
          id == form.data().exam
            ? updateDoc(doc(database, "forms", form.id), { result })
            : ""
        )
      )
    );
}

export function setDifficulty(id, difficulty) {
  return updateDoc(doc(database, "applications", id), {
    difficulty,
  });
}
