import React from "react";
import { Card, ListGroup, Badge, Button } from "react-bootstrap";
import SuccessButton from "../Buttons/SuccessButton";
import WrapperCard from "./WrapperCard";

const JobDetailPage = ({ job, user }) => {
  return (
    <WrapperCard className="m-3">
      <Card className="border-0 bg-transparent">
        <Card.Body className="bg-transparent">
          <h2 className="mb-3 fw-bold">{job.position}</h2>
          <h5 className="text-muted">
            {job.company} - {job.location}
          </h5>

          <div className="my-3">
            <Badge bg="primary" className="me-2 rounded-pill">
              {job.employmentType}
            </Badge>
            <Badge bg="secondary" className="me-2 rounded-pill">
              {job.term}
            </Badge>
          </div>

          <Card.Text className="mb-3">
            <strong>Salary: </strong>
            <span className="fw-semibold badge  rounded-pill bg-warning px-2 py-1 rounded">
              {job.salaryRange}
            </span>
          </Card.Text>

          <Card.Text>{job.description}</Card.Text>

          <ListGroup variant="flush" className="mb-3 bg-transparent">
            <ListGroup.Item className="fw-bold bg-transparent">
              Requirements:
            </ListGroup.Item>
            {job.requirements.map((req, index) => (
              <ListGroup.Item key={index} className="ps-4 bg-transparent">
                - {req}
              </ListGroup.Item>
            ))}
          </ListGroup>

          <ListGroup variant="flush" className="mb-3 bg-transparent">
            <ListGroup.Item className="fw-bold bg-transparent">
              Responsibilities:
            </ListGroup.Item>
            {job.responsibilities.map((res, index) => (
              <ListGroup.Item key={index} className="ps-4 bg-transparent">
                - {res}
              </ListGroup.Item>
            ))}
          </ListGroup>

          <ListGroup variant="flush" className="mb-3 bg-transparent">
            <ListGroup.Item className="fw-bold bg-transparent">
              Benefits:
            </ListGroup.Item>
            {job.benefits.map((benefit, index) => (
              <ListGroup.Item key={index} className="ps-4 bg-transparent">
                - {benefit}
              </ListGroup.Item>
            ))}
          </ListGroup>

          <Card.Text className="text-muted">
            <small>
              <strong>Deadline: </strong>
              {new Date(job.deadline).toLocaleDateString()}
            </small>
          </Card.Text>

          <SuccessButton className="mt-3">
            {user?.role === "admin" ? "Düzenle" : "Başvur"}
          </SuccessButton>
        </Card.Body>
      </Card>
    </WrapperCard>
  );
};

export default JobDetailPage;
