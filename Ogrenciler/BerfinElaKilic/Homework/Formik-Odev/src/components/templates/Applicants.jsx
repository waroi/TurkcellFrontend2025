import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getJobById} from "../../utils/services"; 
import CandidateCard from "../atoms/cards/CandidateCard";

const Applicants = () => {
  const { jobId } = useParams(); 
  const [applicants, setApplicants] = useState([]);

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const data = await getJobById(jobId);
        setApplicants(data.applicants);
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
        applicants.map(applicant => (
          <CandidateCard key={applicant.id} applicant={applicant} />
        ))
      ) : (
        <p>Hiç başvuran yok.</p>
      )}
    </div>
  );
};

export default Applicants;
