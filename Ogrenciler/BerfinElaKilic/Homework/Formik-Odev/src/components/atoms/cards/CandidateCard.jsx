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
      <Card className="mb-3 p-3 bg-dark text-light">
        <Card.Body className="d-flex flex-column" >
          <Row className="align-items-center" >
            <Col xs={12} sm={8} className="d-flex flex-wrap align-items-center justify-content-space-evenly">
              <Card.Title className='my-0'>{candidate?.firstName} {candidate?.lastName}</Card.Title>
              <span className="mx-2">|</span>
              <Card.Text className='my-0'>Email: {candidate?.email}</Card.Text>
              <span className="mx-2">|</span>
              <Card.Text className='my-0' >Phone: {applicant?.appliedAt}</Card.Text>
              <span className="mx-2">|</span>
              <Card.Text className='my-0'>Resume: <a href={applicant?.status}>View Resume</a></Card.Text>
              <span className="mx-2">|</span>
            </Col>
            <Col xs={12} sm={4} className="d-flex justify-content-end align-items-center">
              <Link to={`/user/${applicant.id}/profile`}>
                <SuccessButton className="btn-sm">Profili Görüntüle</SuccessButton>
              </Link>
              <div className="d-flex align-items-center">
                <input type="radio" className="mx-2" id={`approve-${applicant.id}`} name={`approval-${applicant.id}`} value="approve" onChange={() => onChangeApproval(applicant.id, 'approve')} />
                <label htmlFor={`approve-${applicant.id}`} className="mx-2">Onayla</label>
                <input type="radio" className="mx-2" id={`reject-${applicant.id}`} name={`approval-${applicant.id}`} value="reject" onChange={() => onChangeApproval(applicant.id, 'reject')} />
                <label htmlFor={`reject-${applicant.id}`} className="mx-2">Reddet</label>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </WrapperCard>
  );
};

export default CandidateCard;