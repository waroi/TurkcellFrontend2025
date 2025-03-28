import { useState, useEffect } from "react";
import { fetchApplications } from "../services/applicationService";

export const useApplicationList = () => {
  const [reviewList, setReviewList] = useState([]);
  const [positiveList, setPositiveList] = useState([]);
  const [negativeList, setNegativeList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchAllData() {
    try {
      setLoading(true);

      const [reviewData, positiveData, negativeData] = await Promise.all([
        fetchApplications("incelenecek").catch(() => []),
        fetchApplications("olumlu").catch(() => []),
        fetchApplications("olumsuz").catch(() => []),
      ]);

      setReviewList(reviewData || []);
      setPositiveList(positiveData || []);
      setNegativeList(negativeData || []);
      setError(null);
    } catch (err) {
      console.error("Error fetching application lists:", err);
      setError("Failed to load applications");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchAllData();
  }, []);

  function updateApplicationLists(action, application) {
    if (action === "approve") {
      setPositiveList(prev => [...prev, application]);
      setReviewList(prev => prev.filter(item => item.id !== application.id));
    } else if (action === "reject") {
      setNegativeList(prev => [...prev, application]);
      setReviewList(prev => prev.filter(item => item.id !== application.id));
    }
  }

  return {
    reviewList,
    positiveList,
    negativeList,
    loading,
    error,
    refreshData: fetchAllData,
    updateApplicationLists
  };
};
