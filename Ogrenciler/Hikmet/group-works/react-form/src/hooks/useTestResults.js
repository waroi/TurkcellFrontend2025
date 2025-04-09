import { useState, useEffect } from "react";
import { fetchTestResults } from "../services/testResultsService";

export const useTestResults = () => {
  const [passedCandidates, setPassedCandidates] = useState([]);
  const [failedCandidates, setFailedCandidates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Removed useCallback - React 19 doesn't need it for this function
  async function getTestResults() {
    try {
      setLoading(true);
      const { passed, failed } = await fetchTestResults();
      setPassedCandidates(passed);
      setFailedCandidates(failed);
      setError(null);
    } catch (err) {
      console.error("Error in useTestResults:", err);
      setError("Failed to load test results");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getTestResults();
  }, []); // Dependency array remains empty as getTestResults is now defined inside the component

  return {
    passedCandidates,
    failedCandidates,
    loading,
    error,
    refreshTestResults: getTestResults
  };
};
