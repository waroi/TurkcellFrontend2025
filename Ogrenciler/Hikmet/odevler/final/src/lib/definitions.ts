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
		.oneOf([yup.ref("password")], "Passwords must match")
		.required("Confirm Password is required")
		.trim(),
	nickName: yup
		.string()
		.min(3, "Nickname must be at least 3 characters")
		.max(20, "Nickname must be at most 20 characters")
		.matches(nickNameRegex, "Nickname can only contain letters and numbers")
		.required("Nickname is required")
		.trim(),
	country: yup.string().required("Country is required"),
	phone: yup
		.string()
		.matches(phoneRegex, "Phone number must be 10 digits")
		.required("Phone number is required")
		.trim(),
});

export type RegisterFormData = yup.InferType<typeof registerSchema>;

export const loginSchema = yup.object().shape({
	email: yup
		.string()
		.email("Please enter a valid email address")
		.required("Email is required")
		.trim(),
	password: yup.string().required("Password is required").trim(),
});

export type LoginFormData = yup.InferType<typeof loginSchema>;

export const profileUpdateSchema = yup.object().shape({
	nickname: yup
		.string()
		.required("Nickname is required")
		.min(3, "Nickname must be at least 3 characters"),
	phone: yup
		.string()
		.matches(phoneRegex, "Phone number must be 10 digits")
		.required("Phone number is required"),
});

export type ProfileUpdateFormData = yup.InferType<typeof profileUpdateSchema>;

export const changePasswordSchema = yup.object({
	currentPassword: yup.string().required("Current password is required"),
	newPassword: yup
		.string()
		.required("New password is required")
		.min(8, "Password must be at least 8 characters long")
		.matches(/[a-z]/, "Password must contain at least one lowercase letter")
		.matches(/[A-Z]/, "Password must contain at least one uppercase letter")
		.matches(/[0-9]/, "Password must contain at least one number")
		.matches(/[\W_]/, "Password must contain at least one special character"),
	confirmNewPassword: yup
		.string()
		.required("Please confirm your new password")
		.oneOf([yup.ref("newPassword")], "Passwords must match"),
});

export type ChangePasswordFormData = yup.InferType<typeof changePasswordSchema>;
