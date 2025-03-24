import fetchService from "./genericFetch";

const url = import.meta.env.VITE_BASE_URL;

export const getAllJobs = async () => {
  return await fetchService(`${url}/jobs`);
};

export const getJobById = async (id) => {
  return await fetchService(`${url}/jobs/${id}`);
};

export const addJob = async (jobDetails) => {
  return await fetchService(`${url}/jobs`, "POST", jobDetails);
};

export const updateJob = async (id, jobDetails) => {
  return await fetchService(`${url}/jobs/${id}`, "PUT", jobDetails);
};

export const deleteJob = async (id) => {
  await fetchService(`${url}/jobs/${id}`, "DELETE");
};

export const getCandidatesByJobId = async (jobId ) => {
  return await fetchService(`${url}/jobs/${jobId}/applicants`);
};

export const addCandidateInfo = async (id, userInfo) => {
  return await fetchService(`${url}/candidates/${id}`, "PATCH", userInfo);
};

export const addAdmin = async (userDetail) => {
  return await fetchService(`${url}/admins`, "POST", userDetail);
};
export const addCandidate = async (userDetail) => {
  return await fetchService(`${url}/candidates`, "POST", userDetail);
};
export const getAdmin = async (id) => {
  return await fetchService(`${url}/admins/${id}`);
};
export const getCandidate = async (id) => {
  return await fetchService(`${url}/candidates/${id}`);
};
