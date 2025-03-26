import { getExam } from "@/services/firebase";
import { useEffect, useRef, useState } from "react";
import { Tab, Pane } from "#/atoms/Tab";
import Question from "#/exam/Question";
import Button from "#/atoms/Button";
import Progress from "#/atoms/Progress";
import { submitExam } from "@/services/firebase";
import { useNavigate } from "react-router-dom";

export default function Questions({ id }) {
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [index, setIndex] = useState(0);

  const tab = useRef();

  useEffect(() => {
    getExam(id).then((exam) => setQuestions(exam.questions));
  }, []);

  useEffect(() => {
    if (tab.current)
      new bootstrap.Tab(
        tab.current.querySelectorAll(".nav-link")[index]
      ).show();
  }, [index]);

  function answer(answer) {
    setAnswers((answers) => {
      answers[index] = answer;
      return [...answers];
    });
  }

  if (questions.length)
    return (
      <>
        <Progress progress={parseInt(((index + 1) * 100) / questions.length)} />
        <h2>Sınav</h2>
        <Tab hidden ref={tab}>
          {questions.map((question) => (
            <Pane key={question} id={question}>
              <Question id={question} answer={answer} />
            </Pane>
          ))}
        </Tab>
        <div className="d-flex justify-content-between">
          <Button
            onClick={() => setIndex((index) => index - 1)}
            disabled={!index}
          >
            Önceki Soru
          </Button>
          <div className={index == questions.length - 1 ? "d-none" : ""}>
            <Button onClick={() => setIndex((index) => index + 1)}>
              Sonraki Soru
            </Button>
          </div>
          <div className={index == questions.length - 1 ? "" : "d-none"}>
            <Button
              variant="warning"
              onClick={() =>
                submitExam(id, { questions, answers }).then(() =>
                  navigate("/redirect/exam")
                )
              }
            >
              Sınavı Bitir
            </Button>
          </div>
        </div>
      </>
    );
}
