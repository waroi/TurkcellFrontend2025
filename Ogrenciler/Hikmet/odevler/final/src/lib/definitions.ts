import * as yup from "yup";

const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*+])/;
const phoneRegex = /^[0-9]{10}$/;
const nickNameRegex = /^[a-zA-Z0-9]+$/;

export const registerSchema = yup.object().shape({
	email: yup
		.string()
		.email("Please enter a valid email address")
		.required("Email is required")
		.trim(),

	password: yup
		.string()
		.min(8, "Password must be at least 8 characters")
		.matches(
			passwordRegex,
			"Password must contain at least one number and one special character"
		)
		.required("Password is required")
		.trim(),
	confirmPassword: yup
		.string()
		.oneOf([yup.ref("password"), undefined], "Passwords must match")
		.required("Confirm Password is required")
		.trim(),

	nickName: yup
		.string()
		.min(3, "NickName must be at least 3 characters")
		.max(20, "NickName must be at most 20 characters")
		.matches(nickNameRegex, "NickName can only contain letters and numbers")
		.required("NickName is required")
		.trim(),

	country: yup.string().required("Country is required"),

	phone: yup
		.string()
		.matches(phoneRegex, "Phone number must be 10 digits")
		.required("Phone number is required")
		.trim(),
});

export const loginSchema = yup.object().shape({
	email: yup
		.string()
		.email("Please enter a valid email address")
		.required("Email is required")
		.trim(),
	password: yup
		.string()
		.min(8, "Password or email is incorrect")
		.matches(
			passwordRegex,
			"Password must contain at least one number and one special character"
		)
		.required("Password is required")
		.trim(),
	rememberMe: yup.boolean(),
});

export const profileUpdateSchema = yup.object().shape({
	nickname: yup
		.string()
		.required("Nickname is required")
		.min(3, "Nickname must be at least 3 characters"),

	phone: yup
		.string()
		.matches(phoneRegex, "Phone number must be 10 digits")
		.required("Phone number is required"),

	country: yup.string().required("Country is required"),
});
