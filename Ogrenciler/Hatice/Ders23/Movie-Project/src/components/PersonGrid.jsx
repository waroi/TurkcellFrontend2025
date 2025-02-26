import React from "react";
import { Row, Col } from "react-bootstrap";
import PersonCard from "./PersonCard";

const PersonGrid = ({ persons }) => {
  return (
    <Row className="g-3 justify-content-center mb-5">
      {persons.map((person) => (
        <Col key={person.id} xs={12} sm={6} md={4}>
          <PersonCard person={person} />
        </Col>
      ))}
    </Row>
  );
};

export default PersonGrid;
