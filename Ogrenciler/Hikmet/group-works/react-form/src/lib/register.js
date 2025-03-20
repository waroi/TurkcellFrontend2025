import * as yup from "yup";

export const registerSchema = yup.object().shape({
	email: yup
		.string()
		.email("Geçerli bir email giriniz")
		.required("Email girmek zorunludur"),
	password: yup
		.string()
		.required("Şifrenizi giriniz")
		.min(6, "Şifreniz en az 6 karakter olmalıdır"),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref("password"), null], "Şifreler eşleşmiyor"),
});
