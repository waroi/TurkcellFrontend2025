import { useApplicationList } from "./useApplicationList";
import { useApplicationManagement } from "./useApplicationManagement";
import { useTestResults } from "./useTestResults";

export const useApplications = () => {
  const {
    reviewList,
    positiveList,
    negativeList,
    loading: applicationsLoading,
    error: applicationsError,
    refreshData,
    updateApplicationLists,
  } = useApplicationList();

  const { handleApprove, handleReject } = useApplicationManagement(
    updateApplicationLists
  );

  const {
    passedCandidates,
    failedCandidates,
    loading: testResultsLoading,
    error: testResultsError,
    refreshTestResults,
  } = useTestResults();

  async function refreshAllData() {
    await Promise.all([refreshData(), refreshTestResults()]);
  }

  return {
    reviewList,
    positiveList,
    negativeList,

    passedCandidates,
    failedCandidates,

    loading: applicationsLoading || testResultsLoading,
    error: applicationsError || testResultsError,
    refreshData: refreshAllData,
    handleApprove,
    handleReject,
  };
};
