import React, { useState, useEffect } from "react";
import { Card, Col, Row, Form, Button } from "react-bootstrap";
import { getCandidate } from "../../../utils/services";
import { Link } from "react-router";
import SuccessButton from "../Buttons/SuccessButton";
import WrapperCard from "./WrapperCard";
import { useActions } from "../../../context/ActionsContext";
const CandidateCard = ({ applicant, jobId }) => {
  const [candidate, setCandidate] = useState(null);
  const [status, setStatus] = useState(applicant?.status || "pending");
  const { approveCandidate } = useActions();
  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const data = await getCandidate(applicant.id);
        setCandidate(data);
        setStatus(data?.status || "pending");
      } catch (error) {
        console.error("Error fetching candidate:", error);
      }
    };
    fetchCandidates();
  }, [applicant.id]);
  const onStatusSubmit = async (event) => {
    event.preventDefault();
    approveCandidate(candidate.id, jobId, status);
    try {
      setCandidate((prev) => ({ ...prev, status }));
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };
  return (
    <WrapperCard className="mt-4">
      <Card className="mb-3 p-3 bg-dark text-light">
        <Card.Body className="d-flex flex-column">
          <Row className="align-items-center">
            <Col
              xs={12}
              sm={8}
              className="d-flex flex-wrap align-items-center justify-content-space-evenly"
            >
              <Card.Title className="my-0">
                {candidate?.firstName} {candidate?.lastName}
              </Card.Title>
              <span className="mx-2">|</span>
              <Card.Text className="my-0">Email: {candidate?.email}</Card.Text>
              <span className="mx-2">|</span>
              <Card.Text className="my-0">
                Phone: {applicant?.appliedAt}
              </Card.Text>
              <span className="mx-2">|</span>
              <Card.Text className="my-0">
                Resume: <a href={applicant?.resumeUrl}>View Resume</a>
              </Card.Text>
              <span className="mx-2">|</span>
            </Col>
            <Col
              xs={12}
              sm={4}
              className="d-flex justify-content-end align-items-center"
            >
              <Link to={`/user/${applicant.id}/profile`}>
                <SuccessButton className="btn-sm">
                  Profili Görüntüle
                </SuccessButton>
              </Link>
              <Form
                onSubmit={onStatusSubmit}
                className="d-flex align-items-center"
              >
                <Form.Select
                  className="mx-3"
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                >
                  <option value="pending">Pending</option>
                  <option value="test">Test</option>
                  <option value="mülakat">Mülakat</option>
                  <option value="hired">Hired</option>
                </Form.Select>
                <Button type="submit" variant="success" className="btn-sm">
                  Güncelle
                </Button>
              </Form>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </WrapperCard>
  );
};
export default CandidateCard;