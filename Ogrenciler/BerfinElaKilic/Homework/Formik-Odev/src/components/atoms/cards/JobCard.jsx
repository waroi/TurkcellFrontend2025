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
  const [examId, setExamId] = useState("");

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
    const foundExam = job.exams?.find((exam) =>
      exam.sentExams?.some((sentExam) => sentExam.id === user.id)
    );
    if (foundExam) {
      //   const matchingSentExam = foundExam.sentExams?.find(
      //     (sentExam) => sentExam.id === user.id
      //   ); Bunu totalScore manipule ederken kullanıcaz
      // console.log("Matching Exam:", matchingSentExam, foundExam);
      return foundExam;
    }
    return null;
  };

  useEffect(() => {
    if (user && user.role !== "admin") {
      appliedBefore();
    }
    if (jobStatus === "test") {
      const exam = filteredExam(); // Test aşamasındaki exam'ı buluyoruz
      if (exam) {
        setExamId(exam.id); // Bulduğumuz exam id'yi setliyoruz
        console.log("Exam ID Setted:", exam.id); // Debugging: Exam ID kontrolü
      } else {
        console.log("No matching exam found");
      }
    }
  }, [user, job.id, jobStatus]); // jobStatus ve job.id'yi bağımlılık olarak ekledik

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
                onClick={() => navigate(`/jobs/${job.id}/exam/${examId}`)}
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
