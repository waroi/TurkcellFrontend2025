import * as yup from "yup";

const phoneNumberRegExp = /^[0-9]{10}$/;

export const recruitmentSchema = yup.object().shape({
	name: yup
		.string()
		.required("Adınızı giriniz")
		.min(3, "Adınız en az 3 karakter olmalıdır"),
	surname: yup
		.string()
		.required("Soyadınızı giriniz")
		.min(3, "Soyadınız en az 3 karakter olmalıdır"),
	email: yup
		.string()
		.email("Geçerli bir email giriniz")
		.required("Email girmek zorunludur"),
	phoneNumber: yup
		.string()
		.required("Telefon numaranızı giriniz")
		.matches(phoneNumberRegExp, "Telefon numaranızı doğru giriniz"),
	birthDate: yup
		.date()
		.required("Doğum tarihinizi giriniz")
		.max(new Date(), "Geçerli bir tarih giriniz"),
	gender: yup
		.string()
		.required("Cinsiyetinizi giriniz")
		.oneOf(["erkek", "kadın"], "Cinsiyetinizi doğru giriniz"),
	city: yup.string().required("Şehrinizi giriniz"),

	isAccepted: yup.boolean().oneOf([true], "Kullanım koşullarını kabul ediniz"),
	securityPolicy: yup
		.boolean()
		.oneOf([true], "Gizlilik politikasını kabul ediniz"),
});
