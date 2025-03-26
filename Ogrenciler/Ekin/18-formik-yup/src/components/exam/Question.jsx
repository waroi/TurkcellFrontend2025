import { getQuestion } from "@/services/firebase";
import { useEffect, useState } from "react";

import Radio from "#/atoms/Radio";

import { shuffle } from "@/util/random";

export default function Question({ id, answer }) {
  const [question, setQuestion] = useState();

  useEffect(() => {
    getQuestion(id).then((question) => {
      shuffle(question.answers);
      setQuestion(question);
    });
  }, []);

  if (question)
    return (
      <div className="fs-5">
        <p className="text-center mb-4">{question.question}</p>
        <hr className="mb-4" />
        <div className="row row-cols-2 px-2 mb-4">
          {question.answers.map((value, index) => (
            <Radio
              key={value}
              value={value}
              name={id}
              onClick={() => answer(value)}
            >
              {{ 0: "A)", 1: "B)", 2: "C)", 3: "D)" }[index]} {value}
            </Radio>
          ))}
        </div>
      </div>
    );
}
