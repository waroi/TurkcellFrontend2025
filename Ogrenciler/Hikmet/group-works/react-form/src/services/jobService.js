import { api } from "./api";

export const fetchJobs = () => {
  return api.jobs.fetchAll();
};
