import { api } from "./api";

// Fetch applications from a specific collection
export const fetchApplications = (collectionName) => {
  return api.applications.fetchByCollection(collectionName);
};

// Approve an application by moving it from incelenecek to olumlu
export const approveApplication = async (application) => {
  return api.applications.move(application, "incelenecek", "olumlu");
};

// Reject an application by moving it from incelenecek to olumsuz
export const rejectApplication = async (application) => {
  return api.applications.move(application, "incelenecek", "olumsuz");
};

// Submit a new job application
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
