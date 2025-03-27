import { useCallback, useEffect, useState } from "react";
import {
  approveApplication,
  fetchApplications,
  rejectApplication,
} from "../services/applicationService";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";

export const useApplications = () => {
  const [reviewList, setReviewList] = useState([]);
  const [positiveList, setPositiveList] = useState([]);
  const [negativeList, setNegativeList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [passedCandidates, setPassedCandidates] = useState([]);
  const [failedCandidates, setFailedCandidates] = useState([]);

  const fetchTestResults = async () => {
    try {
        const attemptsRef = collection(db, "test_attempts");
        const attemptsSnapshot = await getDocs(attemptsRef);

        if (attemptsSnapshot.empty) {
            setPassedCandidates([]);
            setFailedCandidates([]);
            return;
        }

        const attempts = attemptsSnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));

        console.log("Fetched test results:", attempts);

        const completedAttempts = attempts.filter(
            (attempt) => attempt.completed && attempt.attempted
        );

        console.log("Completed Attempts:", completedAttempts);

        const passed = completedAttempts.filter((attempt) => attempt.score >= 7);
        const failed = completedAttempts.filter((attempt) => attempt.score < 7);

        console.log("Passed Candidates:", passed);
        console.log("Failed Candidates:", failed);

        setPassedCandidates(passed);
        setFailedCandidates(failed);
    } catch (err) {
        console.error("Test sonuçları getirilirken hata oluştu:", err);
        setPassedCandidates([]);
        setFailedCandidates([]);
    }
};
  useEffect(() => {
    fetchTestResults();
  }, []);

  const fetchAllData = useCallback(async () => {
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
      console.error("Başvuru verileri getirilirken hata oluştu:", err);
      setError("Veri yüklenirken bir hata oluştu.");
    } finally {
      setLoading(false);
    }
  }, []);

  const handleApprove = useCallback(async (application) => {
    try {
      await approveApplication(application);
      setPositiveList((prev) => [...prev, application]);
      setReviewList((prev) =>
        prev.filter((item) => item.id !== application.id)
      );

      return true;
    } catch (error) {
      console.error("Başvuru onaylanırken hata oluştu:", error);
      return false;
    }
  }, []);

  const handleReject = useCallback(async (application) => {
    try {
      await rejectApplication(application);
      setNegativeList((prev) => [...prev, application]);
      setReviewList((prev) =>
        prev.filter((item) => item.id !== application.id)
      );

      return true;
    } catch (error) {
      console.error("Başvuru reddedilirken hata oluştu:", error);
      return false;
    }
  }, []);

  useEffect(() => {
    fetchAllData();
  }, [fetchAllData]);

  return {
    reviewList,
    positiveList,
    negativeList,
    passedCandidates,
    failedCandidates,
    loading,
    error,
    refreshData: fetchAllData,
    handleApprove,
    handleReject,
    fetchTestResults,
  };
};
