import { useCallback, useEffect, useState } from "react";
import {
	approveApplication,
	fetchApplications,
	rejectApplication,
} from "../services/applicationService";

export const useApplications = () => {
	const [reviewList, setReviewList] = useState([]);
	const [positiveList, setPositiveList] = useState([]);
	const [negativeList, setNegativeList] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

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
		loading,
		error,
		refreshData: fetchAllData,
		handleApprove,
		handleReject,
	};
};

//Todo: Apply form SOLID prensiplerine göre tekrardan düzenleme yapılacak
//todo: diğer componentlerin de SOLID prensiplerine göre düzenlenmesi yapılacak
//?to-do: state management yapısı eklenebilir
//?: admin paneli için sürükle bırak yapısı denenecek
