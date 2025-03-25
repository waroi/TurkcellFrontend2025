import { useCallback, useEffect, useState } from "react";
import {
	approveApplication,
	fetchApplications,
	rejectApplication,
} from "../services/applicationService";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
export const useApplications = () => {
	const [reviewList, setReviewList] = useState([]);
	const [positiveList, setPositiveList] = useState([]);
	const [negativeList, setNegativeList] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [selectedApplication, setSelectedApplication] = useState(null);
	const [passedCandidates, setPassedCandidates] = useState([]);
	const [failedCandidates, setFailedCandidates] = useState([]);
  
	const fetchQuizResults = async () => {
	  try {
		const resultsRef = collection(db, "quizResults");
		const resultsSnapshot = await getDocs(resultsRef);
		const results = resultsSnapshot.docs.map((doc) => ({
		  id: doc.id,
		  ...doc.data(),
		}));
  
		const passed = results.filter((result) => result.score >= 4);
		const failed = results.filter((result) => result.score < 4);
  
		setPassedCandidates(passed);
		setFailedCandidates(failed);
	  } catch (err) {
		console.error("Error fetching quiz results:", err);
	  }
	};
  
	useEffect(() => {
	  fetchQuizResults();
	}, []);
	
	// Tüm listeleri getir
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
			setError(null);
		} catch (err) {
			console.error("Error fetching application data:", err);
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
			console.error("Error approving application:", error);
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
			console.error("Error rejecting application:", error);
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
		fetchQuizResults,
	};
};

