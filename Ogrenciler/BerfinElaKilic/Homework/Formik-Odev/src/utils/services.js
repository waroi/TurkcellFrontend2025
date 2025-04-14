import fetchService from "./genericFetch";
const url = import.meta.env.VITE_BASE_URL;
export const getAllJobs = async () => {
  return await fetchService(`${url}/jobs`);
};
export const getAllJobsWithExams = async () => {
  return await fetchService(`${url}/jobs?_embed=exams`);
};
export const getJobById = async (id) => {
  return await fetchService(`${url}/jobs/${id}`);
};
export const addJob = async (jobDetails) => {
  return await fetchService(`${url}/jobs`, "POST", jobDetails);
};
export const updateJob = async (id, jobDetails) => {
  return await fetchService(`${url}/jobs/${id}`, "PATCH", jobDetails);
};
export const deleteJob = async (id) => {
  await fetchService(`${url}/jobs/${id}`, "DELETE");
};
export const getCandidatesByJobId = async (jobId) => {
  return await fetchService(`${url}/jobs/${jobId}/applicants`);
};
export const addCandidateInfo = async (id, userInfo) => {
  return await fetchService(`${url}/candidates/${id}`, "PATCH", userInfo);
};
export const addAdmin = async (userDetail) => {
  return await fetchService(`${url}/admins`, "POST", userDetail);
};
export const addAdminInfo = async (id, adminInfo) => {
  return await fetchService(`${url}/admins/${id}`, "PATCH", adminInfo);
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
export const updateUserExams = async (id, score) => {
  return await fetchService(`${url}/candidates/${id}`, "PUT", { score });
};
export const getAllJobsQuiz = async () => {
  return await fetchService(`${url}/questions`);
};
export const postExam = async (newExam) => {
  return await fetchService(`${url}/exams`, "POST", newExam);
};
export const getQuizByExamID = async (id) => {
  return await fetchService(`${url}/exams/${id}`);
};
export const updateQuizByExamID = async (id, examDetail) => {
  return await fetchService(`${url}/exams/${id}`, "PATCH", examDetail);
};
export const getJobWithExams = async (jobId) => {
  return await fetchService(`${url}/jobs/${jobId}?_embed=exams`);
};
export const updateExam = async (id, examDetail) => {
  return await fetchService(`${url}/exams/${id}`, "PATCH", examDetail);
};
export const getExamsByAdminId = async (id) => { 
  return await fetchService(`${url}/exams?adminId=${id}`);
}