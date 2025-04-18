"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Typography from "@/app/components/Atoms/Typography/Typography";
import "./page.scss";
import Button from "@/app/components/Atoms/Button/Button";
import Link from "next/link";

interface FormValues {
  emailOrId: string;
  password: string;
  confirmPassword: string;
  nickname: string;
  country: string;
  phone: string;
  uidCode: string;
  invitationCode: string;
}

const fromObject = [
  {
    name: "emailOrId",
    label: "Email/ID",
    placeholder: "Enter your email or ID",
    type: "text",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Create a password",
    type: "password",
  },
  {
    name: "confirmPassword",
    label: "Confirm Password",
    placeholder: "Repeat your password",
    type: "password",
  },
  {
    name: "nickname",
    label: "Nickname",
    placeholder: "Choose a nickname",
    type: "text",
  },
  {
    name: "country",
    label: "Country",
    placeholder: "Enter your country",
    type: "text",
  },
  {
    name: "phone",
    label: "Phone",
    placeholder: "Enter your phone number",
    type: "text",
  },
  {
    name: "uidCode",
    label: "UID Code",
    placeholder: "6-digit UID code",
    type: "text",
  },
  {
    name: "invitationCode",
    label: "Invitation Code",
    placeholder: "Got an invitation code?",
    type: "text",
  },
];

function RegisterForm() {
  const formik = useFormik<FormValues>({
    initialValues: {
      emailOrId: "",
      password: "",
      confirmPassword: "",
      nickname: "",
      country: "",
      phone: "",
      uidCode: "",
      invitationCode: "",
    },
    validationSchema: Yup.object({
      emailOrId: Yup.string()
        .email("Please enter a valid email address.")
        .required("This field is required."),
      password: Yup.string()
        .min(8, "Password must be at least 8 characters.")
        .matches(
          /[A-Z]/,
          "Password must contain at least one uppercase letter."
        )
        .matches(
          /[a-z]/,
          "Password must contain at least one lowercase letter."
        )
        .matches(/[0-9]/, "Password must contain at least one number.")
        .matches(
          /[!@#$%^&.*_-]/,
          "Password must contain at least one special character."
        )
        .required("This field is required."),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password")], "Passwords must match.")
        .required("This field is required."),
      nickname: Yup.string()
        .matches(
          /^[a-zA-Z0-9_]+$/,
          "Nickname must not contain special characters."
        )
        .min(3, "Nickname must be at least 3 characters.")
        .max(15, "Nickname must be no more than 15 characters.")
        .required("This field is required."),
      country: Yup.string().required("This field is required."),
      phone: Yup.string()
        .matches(/^\d+$/, "Phone must contain only digits.")
        .min(7, "Phone must be at least 7 digits.")
        .max(15, "Phone must be no more than 15 digits.")
        .required("This field is required."),
      uidCode: Yup.string()
        .length(6, "UID Code must be exactly 6 characters.")
        .required("This field is required."),
      invitationCode: Yup.string().min(
        4,
        "Invitation Code must be at least 4 characters."
      ),
    }),
    onSubmit: () => {
    },
  });

  return (
    <div className="">
      <div className="theme-bg-smooth">
        <div className="container">
          <div className="flex items-center justify-between py-56">
            <Typography variant="head-3">Register</Typography>
            <Typography variant="body-2">Home / Register</Typography>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center formHeader gap-16">
        <Typography variant="head-2">Register To Rockie</Typography>
        <Typography variant="body-1">
          Register in advance and enjoy the event benefits
        </Typography>
      </div>
      <div className="flex items-center justify-center gap-8 mt-28 mb-40">
        <Button variant="primary-button" className="px-24 py-8">Email</Button>
        <Typography variant="free" className="px-24 py-8">Mobile</Typography>
      </div>
      <div className="w-full flex justify-center">
        <form onSubmit={formik.handleSubmit} className="registerForm">
          {fromObject.map((item) => (
              <div key={item.name} className="flex flex-col mb-28">
                <div className="flex gap-12 items-center">
                  <label
                    htmlFor={item.name}
                    className="fs-20 f-bold color-secondary"
                  >
                    {item.label}
                  </label>
                  {formik.touched[item.name as keyof FormValues] &&
                    formik.errors[item.name as keyof FormValues] && (
                      <Typography
                        variant="free"
                        className="color-critical f-normal"
                      >
                        ({formik.errors[item.name as keyof FormValues]})
                      </Typography>
                    )}
                </div>
                <input
                  id={item.name}
                  name={item.name}
                  type={item.type}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values[item.name as keyof FormValues]}
                  placeholder={item.placeholder}
                  className="registerInput px-8 fs-18 f-normal color-onSurface border-rad-8"
                />
              </div>
          ))}

          <Button
            type="submit"
            variant="primary-button"
            className="w-full py-16 flex items-center justify-center"
          >
            Pre-Registiration
          </Button>
          <div className="flex items-center justify-center mt-24 gap-8">
            <Typography variant="free" className="">Already Have An Account?</Typography>
            <Link href="/login" className="color-primary f-bold fs-16">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;
