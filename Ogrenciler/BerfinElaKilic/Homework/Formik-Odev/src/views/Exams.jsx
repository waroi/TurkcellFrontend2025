import React, { useEffect, useState } from "react";
import ExamCreationForm from "../components/organisms/ExamCreationForm";
import DataRender from "../components/HOCS/DataRender";
import { getAllJobsQuiz, getExamsByAdminId, getJobById } from "../utils/services";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router";
import SuccessButton from "../components/atoms/Buttons/SuccessButton";
import WrapperCard from "../components/atoms/cards/WrapperCard";
import { Card, Row, Col, CardTitle, CardBody } from "react-bootstrap";

const Exams = () => {
  const { user } = useAuth();
  const [exams, setExams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExams = async () => {
      try {
        const response = await getExamsByAdminId(user.id);
        const examsWithDetails = await Promise.all(response.map(async (exam) => {
          const job = await getJobById(exam.jobId);
          return {
            ...exam,
            relatedJob: job
          };
        }));
        setExams(examsWithDetails);
      } catch (err) {
        console.error("Sınavları yükleyemedi:", err);
        setError("Sınavları yükleyemedi");
      } finally {
        setLoading(false);
      }
    };

    fetchExams();
  }, [user.id]);

  const renderQuestionsData = (data) => {
    console.log("tüm sorular", data);
    if (!data) {
      return <p>Sınav oluşturma formu yükleniyor...</p>;
    } else {
      return <ExamCreationForm questions={data} />;
    }
  };

  if (loading) return <div>Sınav yükleniyor...</div>;
  if (error) return <div>{error}</div>;

  return (
    <>
      <DataRender fetchFunction={getAllJobsQuiz} render={renderQuestionsData} />

      <WrapperCard className="mt-4">
        <Card className="mb-3 p-3 bg-dark text-light">
          <Card.Body>
            <Card.Title className="mb-4">Oluşturduğum Tüm Sınavlar</Card.Title>
            {exams.length > 0 ? (
              exams.map((exam) => (
                <Card key={exam.id} className="mb-3 p-3 bg-dark text-light shadow-sm border border-secondary rounded-3">
                  <Card.Body className="d-flex flex-wrap align-items-center justify-content-space-evenly">
                    <Card.Title className="mb-1 p-3">Sınav Adı: {exam.name || exam.title}</Card.Title>
                    <span className="mx-2">|</span>
                    <Card.Text className="mb-1 p-3">İş: {exam.relatedJob.position}</Card.Text>
                    <span className="mx-2">|</span>
                    <Card.Text className="mb-1 p-3">Oluşturulma Tarihi: {new Date(exam.createdAt).toLocaleDateString()}</Card.Text>
                    <Link to={`${exam.id}`} className="text-decoration-none">
                      <SuccessButton className="btn-sm">Sınavı Görüntüle</SuccessButton>
                    </Link>
                  </Card.Body>
                </Card>
              ))
            ) : (
              <p>Henüz sınav oluşturulmadı.</p>
            )}
          </Card.Body>
        </Card>
      </WrapperCard>
    </>
  );
};

export default Exams;
