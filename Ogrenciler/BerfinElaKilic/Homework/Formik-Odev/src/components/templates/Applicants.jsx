import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getCandidatesByJobId } from "../../utils/services"; 
import CandidateCard from "../atoms/cards/CandidateCard";

const Applicants = () => {
  const { jobId } = useParams(); 
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const data = await getCandidatesByJobId(jobId);
        setCandidates(data);
      } catch (error) {
        console.error("Error fetching candidates:", error);
      }
    };

    fetchCandidates();
  }, [jobId]);

  return (
    <div>
      <h2>Adaylar Listesi</h2>
      {candidates ? (
        candidates.map(candidate => (
          <CandidateCard key={candidate.id} candidate={candidate} />
        ))
      ) : (
        <p>Hiç başvuran yok.</p>
      )}
    </div>
  );
};

export default Applicants;
