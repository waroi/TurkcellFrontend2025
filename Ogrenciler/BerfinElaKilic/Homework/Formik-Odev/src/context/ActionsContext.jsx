import { createContext, useState, useEffect, useContext } from "react";
import { auth } from "../utils/firebaseConfig";
import {
  addAdmin,
  addAdminInfo,
  addCandidate,
  addCandidateInfo,
  getAdmin,
  getAllJobs,
  getCandidate,
  getJobById,
  updateJob,
} from "../utils/services";
import { useNavigate } from "react-router";
import { useAuth } from "./AuthContext";
const ActionsContext = createContext(null);
export const ActionsProvider = ({ children }) => {
  const [jobs, setJobs] = useState(null);
  const [exams, setExams] = useState(null);
  const [loading, setLoading] = useState(true);
  const { user, setUser } = useAuth();
  const navigate = useNavigate();
  const getJobs = async () => {
    const data = await getAllJobs();
    if (!data) {
      console.error("jobs not found");
      setLoading(false);
      return;
    }
    setJobs(data);
    setLoading(false);
  };
  useEffect(() => {
    getJobs();
  }, []);
  const applyJob = async (jobId) => {
    const job = await getJobById(jobId);
    if (job && user) {
      const newApplicant = {
        id: user.id,
        status: "pending",
        approvedByAdmin: "",
        applicationDate: new Date().toISOString(),
      };
      const newAppliedJob = {
        id: jobId,
        status: "pending",
        applicationDate: new Date().toISOString(),
      };
      const updatedApplicants = [...job.applicants, newApplicant];
      const updatedAppliedJobs = [...user.appliedJobs, newAppliedJob];
      console.log(user, updatedApplicants, updatedAppliedJobs);
      const jobResponse = await updateJob(jobId, {
        applicants: updatedApplicants,
      });
      if (jobResponse) {
        const jobFromDatabase = await getJobById(jobId);
        setUser(jobFromDatabase);
      }
      const userResponse = await addCandidateInfo(user.id, {
        appliedJobs: updatedAppliedJobs,
      });
      if (userResponse) {
        const userFromDatabase = await getCandidate(user.id);
        setUser(userFromDatabase);
      }
    }
  };
  const approveCandidate = async (candidateId, jobId, newStatus) => {
    const candidate = await getCandidate(candidateId);
    const appliedJobs = candidate.appliedJobs;
    const appliedJob = appliedJobs.find((job) => job.id === jobId);
    console.log(user, candidate, appliedJob, appliedJobs);
    if (user && appliedJob) {
      const existedUser = user.approvedCandidates.find(
        (candidate) =>
          candidate.userId === candidateId && candidate.jobId === jobId
      );
      let newApprovedCandidates;
      if (existedUser) {
        newApprovedCandidates = user.approvedCandidates.map((candidate) =>
          candidate.userId === candidateId && candidate.jobId === jobId
            ? { ...candidate, newStatus }
            : candidate
        );
      } else {
        newApprovedCandidates = [
          ...user.approvedCandidates,
          {
            userId: candidateId,
            jobId: jobId,
            approvedAt: new Date().toISOString(),
            newStatus,
          },
        ];
      }
      const newAppliedJobs = appliedJobs.map((job) =>
        job.id === jobId ? { ...job, status: newStatus } : job
      );
      // Job içindeki applicants'ı güncelle*
      const job = await getJobById(jobId);
      if (job.applicants && Array.isArray(job.applicants)) {
        const updatedJob = {
          ...job,
          applicants: job.applicants.map((applicant) =>
            applicant.id === candidateId
              ? { ...applicant, status: newStatus }
              : applicant
          ),
        };
        // Job güncelleme fonksiyonu çağrılıyor*
        await updateJob(jobId, updatedJob);
      }
      console.log(newAppliedJobs, newApprovedCandidates);
      // Verileri güncelle*
      await addAdminInfo(user.id, {
        approvedCandidates: newApprovedCandidates,
      });
      await addCandidateInfo(candidate.id, {
        appliedJobs: newAppliedJobs,
      });
    }
  };
  return (
    <ActionsContext.Provider value={{ jobs, applyJob, approveCandidate }}>
      {!loading && children}
    </ActionsContext.Provider>
  );
};
export const useActions = () => {
  const context = useContext(ActionsContext);
  if (!context) {
    throw new Error("useActions must be used within an AuthProvider");
  }
  return context;
};