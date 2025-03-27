import { useCallback, useEffect, useState } from "react";
import {
  approveApplication,
  fetchApplications,
  rejectApplication,
} from "../services/applicationService";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

export const useAdminDashboard = () => {
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
      const attempts = attemptsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      const completedAttempts = attempts.filter((attempt) => attempt.completed && attempt.attempted);
      setPassedCandidates(completedAttempts.filter((attempt) => attempt.score >= 7));
      setFailedCandidates(completedAttempts.filter((attempt) => attempt.score < 7));
    } catch (err) {
      console.error("Test sonuçları getirilirken hata oluştu:", err);
    }
  };

  useEffect(() => {
    fetchTestResults();
  }, []);

  const fetchAllData = useCallback(async () => {
    try {
      setLoading(true);
      const [reviewData, positiveData, negativeData] = await Promise.all([
        fetchApplications("incelenecek"),
        fetchApplications("olumlu"),
        fetchApplications("olumsuz"),
      ]);
      setReviewList(reviewData);
      setPositiveList(positiveData);
      setNegativeList(negativeData);
    } catch (err) {
      console.error("Başvuru verileri getirilirken hata oluştu:", err);
    } finally {
      setLoading(false);
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
    handleApprove: approveApplication,
    handleReject: rejectApplication,
  };
};
