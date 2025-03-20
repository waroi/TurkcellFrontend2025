import { useFormik } from "formik";
import { recruitmentSchema } from "../lib/schema";
import { db } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";
const onSubmit = async (values, actions) => {
	console.log(values);
	console.log(actions);
	await addDataToFirestore(values);
	await new Promise((resolve) => {
		setTimeout(resolve, 2000);
	});

	actions.resetForm();
};
const addDataToFirestore = async (formData) => {
	try {
		await addDoc(collection(db, "incelenecek"), formData);
		console.log("Veri Firestore'a başarıyla eklendi!");
	} catch (error) {
		console.error("Veri eklenirken hata oluştu:", error);
	}
};


export default function RecruitmentForm() {
	const { values, errors, isSubmitting, handleChange, handleSubmit } =
		useFormik({
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
			onSubmit,
		});

	return (
		<form onSubmit={handleSubmit} className="form">
			<h1 className="form-title">Personal Information</h1>
			<div className="form-group">
				<label htmlFor="name">Name</label>
				<input
					type="text"
					value={values.name}
					onChange={handleChange}
					id="name"
					placeholder="Enter your name"
					className={errors.name ? "input-error" : ""}
				/>
				{errors.name && <p className="error">{errors.name}</p>}
			</div>
			<div className="form-group">
				<label htmlFor="surname">Surname</label>
				<input
					type="text"
					value={values.surname}
					onChange={handleChange}
					id="surname"
					placeholder="Enter your surname"
					className={errors.surname ? "input-error" : ""}
				/>
				{errors.surname && <p className="error">{errors.surname}</p>}
			</div>
			<div className="form-group">
				<label htmlFor="email">Email</label>
				<input
					type="email"
					value={values.email}
					onChange={handleChange}
					id="email"
					placeholder="Enter your email"
					className={errors.email ? "input-error" : ""}
				/>
				{errors.email && <p className="error">{errors.email}</p>}
			</div>
			<div className="form-group">
				<label htmlFor="phoneNumber">Phone Number</label>
				<input
					type="text"
					value={values.phoneNumber}
					onChange={handleChange}
					id="phoneNumber"
					placeholder="Enter your phone number"
					className={errors.phoneNumber ? "input-error" : ""}
				/>
				{errors.phoneNumber && <p className="error">{errors.phoneNumber}</p>}
			</div>
			<div className="form-group">
				<label htmlFor="birthDate">Birth Date</label>
				<input
					type="date"
					value={values.birthDate}
					onChange={handleChange}
					id="birthDate"
					className={errors.birthDate ? "input-error" : ""}
				/>
				{errors.birthDate && <p className="error">{errors.birthDate}</p>}
			</div>
			<div className="form-group">
				<label htmlFor="gender">Gender</label>
				<input
					type="text"
					value={values.gender}
					onChange={handleChange}
					id="gender"
					placeholder="Cinsiyetinizi giriniz"
					className={errors.gender ? "input-error" : ""}
				/>
				{errors.gender && <p className="error">{errors.gender}</p>}
			</div>

			<div className="form-group">
				<label htmlFor="city">City</label>
				<input
					type="text"
					value={values.city}
					onChange={handleChange}
					id="city"
					placeholder="Enter your city"
					className={errors.city ? "input-error" : ""}
				/>
				{errors.city && <p className="error">{errors.city}</p>}
			</div>

			<div className="form-group">
				<label htmlFor="securityPolicy">Security Policy</label>
				<input
					type="checkbox"
					checked={values.securityPolicy}
					onChange={handleChange}
					id="securityPolicy"
					className={errors.securityPolicy ? "input-error" : ""}
				/>
				{errors.securityPolicy && (
					<p className="error">{errors.securityPolicy}</p>
				)}
			</div>

			<div className="form-group">
				<label htmlFor="isAccepted">Accept Terms</label>
				<input
					type="checkbox"
					checked={values.isAccepted}
					onChange={handleChange}
					id="isAccepted"
					className={errors.isAccepted ? "input-error" : ""}
				/>
				{errors.isAccepted && <p className="error">{errors.isAccepted}</p>}
			</div>

			<button disabled={isSubmitting} type="submit">
				Submit
			</button>

			
		</form>
	);
}
