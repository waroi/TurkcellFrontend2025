import React from "react";
import Quiz from "../components/templates/Quiz";
import { useParams } from "react-router";

const QuizView = () => {
    const { jobId } = useParams();
  return (
    <div>
      <Quiz jobId={jobId} />
    </div>
  );
};

export default QuizView;
