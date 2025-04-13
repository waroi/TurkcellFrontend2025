import * as yup from "yup";

const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*+])/;
const phoneRegex = /^[0-9]{10}$/;

export const registerSchema = yup.object().shape({
	email: yup
		.string()
		.email("Please enter a valid email address")
		.required("Email is required"),

	password: yup
		.string()
		.min(8, "Password must be at least 8 characters")
		.matches(
			passwordRegex,
			"Password must contain at least one number and one special character"
		)
		.required("Password is required"),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref("password"), undefined], "Passwords must match")
		.required("Confirm Password is required"),

	nickName: yup
		.string()
		.oneOf([yup.ref("email"), undefined], "NickName must be equal to email")
		.required("NickName is required"),

	phone: yup
		.string()
		.matches(phoneRegex, "Phone number must be 10 digits")
		.required("Phone number is required"),
});

export const loginSchema = yup.object().shape({
	email: yup
		.string()
		.email("Please enter a valid email address")
		.required("Email is required"),
	password: yup
		.string()
		.min(8, "Password or email is incorrect")
		.matches(
			passwordRegex,
			"Password must contain at least one number and one special character"
		)
		.required("Password is required"),
	rememberMe: yup.boolean(),
});
