import React, { useEffect, useState } from "react";
import Quiz from "../components/templates/Quiz";
import { useParams } from "react-router";
import { getAllJobsQuiz, getQuizByExamID } from "../utils/services";

const QuizView = () => {
  const { jobId, examId } = useParams();
  const [exam, setExam] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExam = async () => {
      console.log("examId", examId);
      try {
        const data = await getQuizByExamID(examId);
        setExam(data.questionDetails);
        console.log(data);
      } catch (error) {
        console.error("Sınav bulunamadı:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchExam();
  }, []);

  if (loading) return <div>Sınav yükleniyor...</div>;

  return (
    <div>
      {" "}
      <Quiz jobId={jobId} shuffledQuestions={exam} />{" "}
    </div>
  );
};

export default QuizView;
