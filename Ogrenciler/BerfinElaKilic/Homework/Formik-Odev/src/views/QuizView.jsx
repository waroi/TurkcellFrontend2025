import React, { useEffect, useState } from "react";
import Quiz from "../components/templates/Quiz";
import { useParams } from "react-router";
import { getAllJobsQuiz } from "../utils/services";

const QuizView = () => {
  const { jobId } = useParams();
  const [exam, setExam] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExam = async () => {
      try {
        const data = await getAllJobsQuiz();
        setExam(data);
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
      <Quiz jobId={jobId} questions={exam}  />
    </div>
  );
};

export default QuizView;
