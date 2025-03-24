import React from "react";
import { useParams } from "react-router";
import { useJobDetails } from "../../hooks/useJobDetails";
import FormContainer from "./form/FormContainer";
import JobInfoContainer from "./job/JobInfoContainer";
import ApplicationLayout from "./layout/ApplicationLayout";
import ErrorDisplay from "./layout/ErrorDisplay";
import LoadingIndicator from "./layout/LoadingIndicator";

export default function JobInfo() {
	const { jobId } = useParams();
	const { jobDetails, loading, error } = useJobDetails(jobId);

	if (loading) {
		return <LoadingIndicator message="İş detayları yükleniyor..." />;
	}

	if (error) {
		return <ErrorDisplay message={error} />;
	}

	return (
		<ApplicationLayout
			jobInfoComponent={<JobInfoContainer jobDetails={jobDetails} />}
			formComponent={<FormContainer jobDetails={jobDetails} />}
		/>
	);
}
