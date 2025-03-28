import { api } from "../api";

export const fetchJobById = (jobId) => {
  return api.jobs.fetchById(jobId);
};
