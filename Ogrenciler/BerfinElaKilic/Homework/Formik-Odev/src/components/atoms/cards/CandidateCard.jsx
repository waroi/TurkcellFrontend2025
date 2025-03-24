import React from 'react';
import { Card } from 'react-bootstrap';

const CandidateCard = ({ candidate }) => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{candidate.name}</Card.Title>
        <Card.Text>Email: {candidate.email}</Card.Text>
        <Card.Text>Phone: {candidate.phone}</Card.Text>
        <Card.Text>Resume: <a href={candidate.resumeUrl}>View Resume</a></Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CandidateCard;