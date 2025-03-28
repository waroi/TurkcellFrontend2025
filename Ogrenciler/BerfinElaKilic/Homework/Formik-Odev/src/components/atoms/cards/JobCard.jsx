import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useNavigate } from "react-router";
import WrapperCard from "./WrapperCard";
import PrimaryButton from "../Buttons/PrimaryButton";
import SuccessButton from "../Buttons/SuccessButton";
import WarningButton from "../Buttons/WarningButton";
import { useActions } from "../../../context/ActionsContext";

const JobCard = ({ job, user, jobId }) => {
  const navigate = useNavigate();
  const { applyJob } = useActions();
  const [hasApplied, setHasApplied] = useState(false);
  const [jobStatus, setJobStatus] = useState("pending");

  const appliedBefore = () => {
    if (user && user.appliedJobs) {
      const appliedJob = user.appliedJobs.find(
        (appliedJob) => appliedJob.id === job.id
      );
      if (appliedJob) {
        setHasApplied(true);
        setJobStatus(appliedJob.status);
      }
    }
  };
  const filteredExam = () => {
    const result2 = job.exams
      .flatMap((exam) => console.log("Exams", exam) )
      
      // .find((sentExam) => sentExam?.id === user?.id);
    console.log("exam", result2);

    return result2;
  };

  useEffect(() => {
    if (user && user.role !== "admin") {
      appliedBefore();
    }
    filteredExam();
  }, [user, job.id]);

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
              <WarningButton
                onClick={() => navigate(`/jobs/${job.id}/candidates`)}
              >
                Başvuran Adaylar
              </WarningButton>
            ) : jobStatus === "test" ? (
              <SuccessButton
                onClick={() => navigate(`/jobs/${job.id}/exam/${user.id}`)}
              >
                Test aşamasına geçtiniz, testi çözmek için tıklayınız
              </SuccessButton>
            ) : (
              <SuccessButton
                onClick={() => applyJob(job.id)}
                disabled={hasApplied}
              >
                {hasApplied ? "Başvuruldu" : "Başvur"}
              </SuccessButton>
            )}
          </div>
        </Card.Body>
      </Card>
    </WrapperCard>
  );
};

export default JobCard;
