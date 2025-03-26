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
        console.error("Error fetching quizzes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchExam();
  }, []);

  if (loading) return <div>Loading quizzes...</div>;

  return (
    <div>
      <Quiz jobId={jobId} quiz={exam}  />
    </div>
  );
};

export default QuizView;
