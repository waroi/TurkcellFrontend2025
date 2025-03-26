import { createContext, useState, useEffect, useContext } from "react";
import { auth } from "../utils/firebaseConfig";
import {
  addAdmin,
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

  return (
    <ActionsContext.Provider value={{ jobs, applyJob }}>
      {!loading && children}
    </ActionsContext.Provider>
  );
};

export const useActions = () => {
  const context = useContext(ActionsContext);
  if (!context) {
    throw new Error("useActions  must be used within an AuthProvider");
  }
  return context;
};
