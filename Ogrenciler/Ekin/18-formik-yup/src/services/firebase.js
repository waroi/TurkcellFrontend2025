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
  console.log("firebase", email, password);

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

export function setApplication(id, status) {
  return status == "accepted"
    ? addExam().then((exam) => {
        updateDoc(doc(database, "forms", id), {
          status,
          exam,
        }).then(() => id);
      })
    : updateDoc(doc(database, "forms", id), {
        status,
      }).then(() => id);
}

// export function addQuestions(q) {
//   return addDoc(collection(database, "questions"), q);
// }

function addExam() {
  return getFiveRandomQuestions().then((questions) =>
    addDoc(collection(database, "exams"), {
      questions,
    }).then((exam) => exam.id)
  );

  function getFiveRandomQuestions() {
    return getDocs(collection(database, "questions")).then((questions) => {
      questions = questions.docs.map((question) => question.id);

      return shuffle(questions).slice(0, 5);
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
  exam.questions
    .reduce(
      async (result, question, index) =>
        (await result) +
        ((
          exam.answers[index]
            ? exam.answers[index] == (await getQuestion(question)).answers[0]
            : false
        )
          ? 1
          : 0),
      0
    )
    .then((count) =>
      getDocs(collection(database, "forms")).then((forms) =>
        forms.docs.map((form) =>
          id == form.data().exam
            ? updateDoc(doc(database, "forms", form.id), {
                result: parseInt((count * 100) / exam.questions.length),
              })
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
