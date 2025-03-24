import React, { useEffect, useState } from "react";
import { Card, Button, CardText } from "react-bootstrap";
import { useNavigate } from "react-router";
import WrapperCard from "./WrapperCard";
import PrimaryButton from "../Buttons/PrimaryButton";
import SuccessButton from "../Buttons/SuccessButton";
import WarningButton from "../Buttons/WarningButton";

const JobCard = ({ job, user }) => {
  const navigate = useNavigate();

  return (
    <WrapperCard className="mt-4">
      <Card className="border-0 bg-transparent">
        <Card.Body>
          <Card.Title className="fw-bold">{job.position}</Card.Title>
          <Card.Subtitle className="mb-2 text-secondary">
            {job.company} - {job.location}
          </Card.Subtitle>
          <Card.Text className="badge bg-secondary rounded-pill px-2 py-1">
            {job.employmentType}
          </Card.Text>
          <Card.Text className="text-truncate">{job.description}</Card.Text>
          <Card.Text className="fw-semibold d-inline-block px-2 bg-light badge bg-success rounded-pill">
            💰 Salary: {job.salaryRange}
          </Card.Text>

          <div className="d-flex gap-2 align-items-center mt-3">
            <PrimaryButton onClick={() => navigate(`/jobs/${job.id}`)}>
              Görüntüle
            </PrimaryButton>
            {user?.role === "admin" ? (
              ""
            ) : (
              <SuccessButton>Başvur</SuccessButton>
            )}
          </div>
        </Card.Body>
      </Card>
    </WrapperCard>
  );
};

export default JobCard;
