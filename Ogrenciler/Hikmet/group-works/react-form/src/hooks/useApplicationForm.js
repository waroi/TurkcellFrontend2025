import { useFormik } from "formik";
import { recruitmentSchema } from "../lib/schema";
import { submitApplication } from "../services/firestore/applicationService";

export const useApplicationForm = (jobDetails) => {
	const formik = useFormik({
		initialValues: {
			name: "",
			surname: "",
			email: "",
			phoneNumber: "",
			birthDate: "",
			gender: "",
			city: "",
			isAccepted: false,
			securityPolicy: false,
		},
		validationSchema: recruitmentSchema,
		onSubmit: async (values, actions) => {
			const success = await submitApplication(values, jobDetails);

			if (success) {
				actions.resetForm();
				alert(
					"Başvurunuz başarıyla alındı! İnceleme sonrası sizinle iletişime geçilecektir."
				);
			} else {
				alert(
					"Başvuru gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin."
				);
			}

			actions.setSubmitting(false);
		},
	});

	return formik;
};
