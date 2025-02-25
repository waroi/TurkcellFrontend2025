import React from "react";
import { Card } from "react-bootstrap";

const PersonCard = ({ person }) => {
  return (
    <Card className="shadow-sm border-0 text-center">
      <Card.Img
        variant="top"
        src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
        alt={person.name}
        className=" mx-auto mt-3 card-img-top"
      />
      <Card.Body>
        <Card.Title className="fw-bold">{person.name}</Card.Title>
        <Card.Text className="text-muted">Popülerlik: {Math.round(person.popularity)}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default PersonCard;
