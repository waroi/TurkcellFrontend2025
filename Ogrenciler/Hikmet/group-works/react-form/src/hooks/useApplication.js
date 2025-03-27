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

  // Test sonuçlarını getirme fonksiyonu
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

      // Tamamlanmış ve aktif testleri filtrele
      const completedAttempts = attempts.filter(
        (attempt) => attempt.completed && attempt.attempted
      );

      // Geçen ve kalan adayları ayır
      const passed = completedAttempts.filter((attempt) => attempt.score >= 7);
      const failed = completedAttempts.filter((attempt) => attempt.score < 7);

      setPassedCandidates(passed);
      setFailedCandidates(failed);
    } catch (err) {
      console.error("Test sonuçları getirilirken hata oluştu:", err);
      setPassedCandidates([]);
      setFailedCandidates([]);
    }
  };

  // İlk yüklemede test sonuçlarını getir
  useEffect(() => {
    fetchTestResults();
  }, []);

  // Tüm başvuruları getir
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

  // Başvuruyu onayla
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

  // Başvuruyu reddet
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

  // İlk yüklemede tüm verileri getir
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
