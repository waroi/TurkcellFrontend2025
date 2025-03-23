import React from "react";
import { useApplicationForm } from "../../../hooks/useApplicationForm";
import ContactInfoSection from "./ContactInfoSection";
import DemographicSection from "./DemographicSection";
import FormSubmitButton from "./FormSubmitButton";
import LegalSection from "./LegalSection";
import PersonalInfoSection from "./PersonalInfoSection";

const FormContainer = ({ jobDetails }) => {
	const formik = useApplicationForm(jobDetails);

	return (
		<form onSubmit={formik.handleSubmit}>
			<div className="card-body p-4">
				<h4 className="text-start mb-4 text-primary fw-bold">
					İş Başvuru Formu
				</h4>

				{/* İş Bilgisi Alanı */}
				<div className="form-floating mb-4">
					<input
						type="text"
						className="form-control bg-light"
						id="jobTitle"
						placeholder="Job Title"
						value={jobDetails?.title || "Yükleniyor..."}
						disabled
					/>
					<label htmlFor="jobTitle">Başvurulan Pozisyon</label>
				</div>

				<PersonalInfoSection
					values={formik.values}
					errors={formik.errors}
					touched={formik.touched}
					handleChange={formik.handleChange}
				/>

				<ContactInfoSection
					values={formik.values}
					errors={formik.errors}
					touched={formik.touched}
					handleChange={formik.handleChange}
				/>

				<DemographicSection
					values={formik.values}
					errors={formik.errors}
					touched={formik.touched}
					handleChange={formik.handleChange}
				/>

				<LegalSection
					values={formik.values}
					errors={formik.errors}
					handleChange={formik.handleChange}
				/>

				<FormSubmitButton isSubmitting={formik.isSubmitting} />
			</div>
		</form>
	);
};

export default FormContainer;
