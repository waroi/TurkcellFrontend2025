import {
  approveApplication,
  rejectApplication,
} from "../services/applicationService";

export const useApplicationManagement = (onApplicationProcessed) => {
  async function handleApprove(application) {
    try {
      await approveApplication(application);
      if (onApplicationProcessed) {
        onApplicationProcessed("approve", application);
      }
      return true;
    } catch (error) {
      console.error("Error approving application:", error);
      return false;
    }
  }

  async function handleReject(application) {
    try {
      await rejectApplication(application);
      if (onApplicationProcessed) {
        onApplicationProcessed("reject", application);
      }
      return true;
    } catch (error) {
      console.error("Error rejecting application:", error);
      return false;
    }
  }

  return { handleApprove, handleReject };
};
