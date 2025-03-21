import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { db } from "../../firebase/config";
import JobInfoCard from "./JobInfoCard";
import RecruitmentForm from "./RecruitmentForm";

export default function JobInfo() {
	const { jobId } = useParams();
	const [jobDetails, setJobDetails] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchJobDetails = async () => {
			try {
				setLoading(true);
				const jobDoc = doc(db, "jobs", jobId);
				const jobSnapshot = await getDoc(jobDoc);

				if (jobSnapshot.exists()) {
					const data = {
						jobId: jobSnapshot.jobId,
						...jobSnapshot.data(),
					};
					setJobDetails(data);
				} else {
					setError("İş ilanı bulunamadı.");
				}
			} catch (err) {
				console.error("İş detayları yüklenirken hata oluştu:", err);
				setError(
					"İş detayları yüklenirken hata oluştu. Lütfen daha sonra tekrar deneyin."
				);
			} finally {
				setLoading(false);
			}
		};

		if (jobId) {
			fetchJobDetails();
		} else {
			setError("Geçersiz iş ID'si");
			setLoading(false);
		}
	}, [jobId]);

	if (loading) {
		return (
			<div className="container mt-5 pt-3 text-center">
				<div className="spinner-border text-primary" role="status">
					<span className="visually-hjobIdden">Yükleniyor...</span>
				</div>
				<p className="mt-3">İş detayları yükleniyor...</p>
			</div>
		);
	}

	if (error) {
		return (
			<div className="container mt-5 pt-3">
				<div className="alert alert-danger" role="alert">
					{error}
				</div>
			</div>
		);
	}

	return (
		<div className="container mt-4">
			<div className="row">
				<div className="col-md-4">
					<JobInfoCard jobDetails={jobDetails} />
				</div>
				<div className="col-md-8">
					<div className="card shadow-sm border-0">
						<div className="card-header bg-primary text-white">
							<h5 className="mb-0 text-start">Başvuru Formu</h5>
						</div>
						<div className="card-body text-start p-0">
							{/* JobDetails'i direkt olarak RecruitmentForm'a geçiriyoruz */}
							<RecruitmentForm jobId={jobId} jobDetails={jobDetails} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
