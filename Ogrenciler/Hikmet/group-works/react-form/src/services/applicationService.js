import { api } from "./api";

export const fetchApplications = (collectionName) => {
  return api.applications.fetchByCollection(collectionName);
};

export const approveApplication = async (application) => {
  return api.applications.move(application, "incelenecek", "olumlu");
};

export const rejectApplication = async (application) => {
  return api.applications.move(application, "incelenecek", "olumsuz");
};

export const submitApplication = async (formData, jobInfo) => {
  try {
    const formDataWithJob = {
      ...formData,
      jobId: jobInfo.id,
      jobTitle: jobInfo.title || "Unknown Job",
      jobAppliedDate: new Date().toISOString(),
    };

    await api.applications.add("incelenecek", formDataWithJob);
    console.log("Application successfully submitted");
    return true;
  } catch (error) {
    console.error("Error submitting application:", error);
    return false;
  }
};
