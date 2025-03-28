import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getJobById, getJobWithExams } from "../../utils/services";
import CandidateCard from "../atoms/cards/CandidateCard";
const Applicants = () => {
  const { jobId } = useParams();
  const [applicants, setApplicants] = useState([]);
  const [exams, setExams] = useState([]);
  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const data = await getJobWithExams(jobId);
        setApplicants(data.applicants);
        setExams(data.exams);
      } catch (error) {
        console.error("Error fetching candidates:", error);
      }
    };
    fetchCandidates();
  }, [jobId]);

  return (
    <div>
      <h2>Adaylar Listesi</h2>
      {applicants ? (
        applicants.map((applicant) => (
          <CandidateCard
            key={applicant.id}
            applicant={applicant}
            jobId={jobId}
            exams={exams}
          />
        ))
      ) : (
        <p>Hiç başvuran yok.</p>
      )}
    </div>
  );
};
export default Applicants;
