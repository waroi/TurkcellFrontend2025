import React from 'react';
import { Card } from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { getCandidate } from '../../../utils/services';

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
  }, []);
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{candidate?.firstName} {candidate?.lastName}</Card.Title>
        <Card.Text>Email: {candidate?.email}</Card.Text>
        <Card.Text>Phone: {applicant?.appliedAt}</Card.Text>
        <Card.Text>Resume: <a href={applicant?.status}>View Resume</a></Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CandidateCard;