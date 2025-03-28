import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getQuizByExamID } from "../utils/services"; 
import { Container, Row, Col, Card, Button, ListGroup, CardSubtitle } from 'react-bootstrap';
import WrapperCard from "../components/atoms/cards/WrapperCard";

const ExamDetail = () => {
  const { examId } = useParams();
  const [exam, setExam] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchExam = async () => {
      try {
        const response = await getQuizByExamID(examId);
        setExam(response);
      } catch (err) {
        console.error("Sınav detayları yüklenemedi:", err);
        setError("Sınav detayları yüklenemedi");
      } finally {
        setLoading(false);
      }
    };

    fetchExam();
  }, [examId]);

  if (loading) return <div>Detaylar yükleniyor...</div>;
  if (error) return <div>{error}</div>;

  return (
    <WrapperCard className="mb-4">
      <Card className="mb-3 p-3 bg-dark text-light">
      <Card.Body>
        <Card.Title>{exam.title || exam.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Oluşturulma Tarihi: {new Date(exam.createdAt).toLocaleDateString()} 
          - Süre: {exam.totalDuration} dakika
        </Card.Subtitle>
        <Card.Text>
          <CardSubtitle className="mb-3">Sorular:</CardSubtitle>
          <ListGroup>
            {exam.questionDetails && exam.questionDetails.length > 0 ? (
              exam.questionDetails.map((question) => (
                <ListGroup.Item className="shadow-sm p-3 border border-secondary rounded-3 bg-transparent mb-3" key={question.id}>
                  <strong>Soru:</strong> {question.question} <br />
                  <strong>Seçenekler:</strong> {question.options.join(", ")} <br />
                  <strong>Kategori:</strong> {question.category} <br />
                  <strong>Alt Kategori:</strong> {question.subcategory} <br />
                  <strong>Zorluk Seviyesi:</strong> {question.difficultyLevel} <br />
                  <strong>Doğru Cevap:</strong> {question.answers.join(", ")}. seçenek
                </ListGroup.Item>
              ))
            ) : (
              <ListGroup.Item>Bu sınav için sorular bulunamadı.</ListGroup.Item>
            )}
          </ListGroup>
        </Card.Text>
        <Button variant="primary" onClick={() => window.history.back()}>Geri</Button>
      </Card.Body>
      </Card>
    </WrapperCard>
  );
};

export default ExamDetail;