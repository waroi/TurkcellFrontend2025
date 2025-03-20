import { addDoc, collection } from "firebase/firestore";
import { useFormik } from "formik";
import { db } from "../../firebase/config";
import { recruitmentSchema } from "../../lib/schema";

// jobId yerine jobDetails props'unu direkt alıyoruz
export default function RecruitmentForm({ jobId, jobDetails }) {
	const addDataToFirestore = async (formData) => {
		try {
			// İş bilgilerini de form verilerine ekle
			const formDataWithJob = {
				...formData,
				jobId: jobId,
				jobTitle: jobDetails?.title || "Unknown Job",
				jobAppliedDate: new Date().toISOString(),
			};

			await addDoc(collection(db, "incelenecek"), formDataWithJob);
			console.log("Veri Firestore'a başarıyla eklendi!");
			return true;
		} catch (error) {
			console.error("Veri eklenirken hata oluştu:", error);
			return false;
		}
	};

	const {
		values,
		errors,
		touched,
		isSubmitting,
		handleChange,
		handleSubmit,
		setSubmitting,
	} = useFormik({
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
			const success = await addDataToFirestore(values);

			// Simüle edilmiş bir gecikme (gerçek projede kaldırılabilir)
			await new Promise((resolve) => setTimeout(resolve, 1000));

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

	return (
		<form onSubmit={handleSubmit}>
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

				{/* Diğer form alanları aynı kalacak */}
				{/* ... */}

				<h5 className="text-start mb-3 text-primary">Kişisel Bilgiler</h5>

				<div className="row g-3">
					<div className="col-md-6">
						<div className="form-floating mb-3">
							<input
								type="text"
								className={`form-control ${
									errors.name && touched.name ? "is-invalid" : ""
								}`}
								id="name"
								placeholder="Enter your name"
								value={values.name}
								onChange={handleChange}
							/>
							<label htmlFor="name">Ad</label>
							{errors.name && touched.name && (
								<div className="invalid-feedback">{errors.name}</div>
							)}
						</div>
					</div>

					<div className="col-md-6">
						<div className="form-floating mb-3">
							<input
								type="text"
								className={`form-control ${
									errors.surname && touched.surname ? "is-invalid" : ""
								}`}
								id="surname"
								placeholder="Enter your surname"
								value={values.surname}
								onChange={handleChange}
							/>
							<label htmlFor="surname">Soyad</label>
							{errors.surname && touched.surname && (
								<div className="invalid-feedback">{errors.surname}</div>
							)}
						</div>
					</div>
				</div>

				<div className="form-floating mb-3">
					<input
						type="email"
						className={`form-control ${
							errors.email && touched.email ? "is-invalid" : ""
						}`}
						id="email"
						placeholder="name@example.com"
						value={values.email}
						onChange={handleChange}
					/>
					<label htmlFor="email">E-posta Adresi</label>
					{errors.email && touched.email && (
						<div className="invalid-feedback">{errors.email}</div>
					)}
				</div>

				<div className="form-floating mb-3">
					<input
						type="text"
						className={`form-control ${
							errors.phoneNumber && touched.phoneNumber ? "is-invalid" : ""
						}`}
						id="phoneNumber"
						placeholder="Enter your phone number"
						value={values.phoneNumber}
						onChange={handleChange}
					/>
					<label htmlFor="phoneNumber">Telefon Numarası (5XXXXXXXXX)</label>
					{errors.phoneNumber && touched.phoneNumber && (
						<div className="invalid-feedback">{errors.phoneNumber}</div>
					)}
				</div>

				<div className="row g-3">
					<div className="col-md-6">
						<div className="form-floating mb-3">
							<input
								type="date"
								className={`form-control ${
									errors.birthDate && touched.birthDate ? "is-invalid" : ""
								}`}
								id="birthDate"
								value={values.birthDate}
								onChange={handleChange}
							/>
							<label htmlFor="birthDate">Doğum Tarihi</label>
							{errors.birthDate && touched.birthDate && (
								<div className="invalid-feedback">{errors.birthDate}</div>
							)}
						</div>
					</div>

					<div className="col-md-6">
						<div className="form-floating mb-3">
							<select
								className={`form-select ${
									errors.gender && touched.gender ? "is-invalid" : ""
								}`}
								id="gender"
								value={values.gender}
								onChange={handleChange}>
								<option value="" disabled>
									Cinsiyetinizi seçin
								</option>
								<option value="erkek">Erkek</option>
								<option value="kadın">Kadın</option>
								<option value="Other">Diğer</option>
								<option value="Prefer not to say">Belirtmek İstemiyorum</option>
							</select>
							<label htmlFor="gender">Cinsiyet</label>
							{errors.gender && touched.gender && (
								<div className="invalid-feedback">{errors.gender}</div>
							)}
						</div>
					</div>
				</div>

				<div className="form-floating mb-3">
					<input
						type="text"
						className={`form-control ${
							errors.city && touched.city ? "is-invalid" : ""
						}`}
						id="city"
						placeholder="Enter your city"
						value={values.city}
						onChange={handleChange}
					/>
					<label htmlFor="city">Şehir</label>
					{errors.city && touched.city && (
						<div className="invalid-feedback">{errors.city}</div>
					)}
				</div>

				<div className="card border-light mb-4 mt-4">
					<div className="card-header bg-light">
						<h5 className="mb-0 fs-6">Yasal Bilgilendirmeler</h5>
					</div>
					<div className="card-body">
						<div className="mb-3 form-check">
							<input
								type="checkbox"
								className={`form-check-input ${
									errors.securityPolicy ? "is-invalid" : ""
								}`}
								id="securityPolicy"
								checked={values.securityPolicy}
								onChange={handleChange}
							/>
							<label className="form-check-label" htmlFor="securityPolicy">
								Kişisel verilerimin işlenmesine onay veriyorum
							</label>
							{errors.securityPolicy && (
								<div className="invalid-feedback">{errors.securityPolicy}</div>
							)}
						</div>

						<div className="mb-0 form-check">
							<input
								type="checkbox"
								className={`form-check-input ${
									errors.isAccepted ? "is-invalid" : ""
								}`}
								id="isAccepted"
								checked={values.isAccepted}
								onChange={handleChange}
							/>
							<label className="form-check-label" htmlFor="isAccepted">
								Kullanım şartlarını kabul ediyorum
							</label>
							{errors.isAccepted && (
								<div className="invalid-feedback">{errors.isAccepted}</div>
							)}
						</div>
					</div>
				</div>

				<div className="d-grid gap-2 mt-4">
					<button
						type="submit"
						className="btn btn-primary btn-lg"
						disabled={isSubmitting}>
						{isSubmitting ? (
							<>
								<span
									className="spinner-border spinner-border-sm me-2"
									role="status"
									aria-hidden="true"></span>
								Gönderiliyor...
							</>
						) : (
							"Başvuruyu Tamamla"
						)}
					</button>
				</div>
			</div>
		</form>
	);
}
