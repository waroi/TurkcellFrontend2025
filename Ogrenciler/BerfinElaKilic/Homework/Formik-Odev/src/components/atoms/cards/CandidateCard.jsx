import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { getCandidate } from '../../../utils/services';
import { Link } from 'react-router';
import SuccessButton from '../Buttons/SuccessButton';
import WrapperCard from './WrapperCard';
const CandidateCard = ({ applicant }) => {
  const [candidate, setCandidate] = useState(null);

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const data = await getCandidate(applicant.id);
        setCandidate(data);
      } catch (error) {
        console.error("Error fetching candidates:", error);
      }
    };

    fetchCandidates();
  }, [applicant.id]);
  return (
    <WrapperCard className="mt-4">
      <Card className="mb-3 p-3 d-flex justify-content-between align-items-center bg-dark text-light">
        <Card.Body>
          <Row>
            <Col xs={12} sm={6} className="d-flex flex-direction-row align-items-center justify-content-space-between">
              <Card.Title className='me-2'>{candidate?.firstName} {candidate?.lastName}</Card.Title>
              <span className="mx-2">|</span>
              <Card.Text>Email: {candidate?.email}</Card.Text>
              <span className="mx-2">|</span>
              <Card.Text>Phone: {applicant?.appliedAt}</Card.Text>
              <span className="mx-2">|</span>
              <Card.Text>Resume: <a href={applicant?.status}>View Resume</a></Card.Text>
              <span className="mx-2">|</span>
              <Link to={`/user/${applicant.id}/profile`}>
                <SuccessButton title="View Profile">Profili Görüntüle</SuccessButton>
              </Link>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </WrapperCard>
  );
};

export default CandidateCard;