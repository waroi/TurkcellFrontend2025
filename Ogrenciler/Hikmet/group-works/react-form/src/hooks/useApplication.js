import { useCallback } from "react";
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
    updateApplicationLists 
  } = useApplicationList();

  const { handleApprove, handleReject } = useApplicationManagement(updateApplicationLists);

  const { 
    passedCandidates, 
    failedCandidates, 
    loading: testResultsLoading, 
    error: testResultsError, 
    refreshTestResults,
  } = useTestResults();

  // Removed useCallback - React 19 doesn't need it for this function
  async function refreshAllData() {
    await Promise.all([refreshData(), refreshTestResults()]);
  }

  return {
    // Applications data
    reviewList,
    positiveList,
    negativeList,
    
    // Test results data
    passedCandidates,
    failedCandidates,
    
    // Status and actions
    loading: applicationsLoading || testResultsLoading,
    error: applicationsError || testResultsError,
    refreshData: refreshAllData,
    handleApprove,
    handleReject,
  };
};
