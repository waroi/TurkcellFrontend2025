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
}

const fromObject = [
  {
    name: "emailOrId",
    label: "Email/ID",
    placeholder: "Please fill in the mail form.",
    type: "text",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Please enter a password",
    type: "password",
  }
];

function loginForm() {
  const formik = useFormik<FormValues>({
    initialValues: {
      emailOrId: "",
      password: "",
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
    }),
    onSubmit: (values) => {
      console.log("Form values:", values);
      alert("Form submitted successfully!");
    },
  });

  return (
    <div className="">
      <div className="theme-bg-smooth">
        <div className="container">
          <div className="flex items-center justify-between py-56">
            <Typography variant="head-3">Login</Typography>
            <Typography variant="body-2">Home / Login</Typography>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center formHeader gap-16">
        <Typography variant="head-2">Login to Rockie</Typography>
        <Typography variant="body-2">Welcome back! Log In now to start trading</Typography>
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
            Login
          </Button>
          <div className="flex items-center justify-center mt-24 gap-8">
            <Typography variant="free" className="">Not A Member?</Typography>
            <Link href="/register" className="color-primary f-bold fs-16">Register</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default loginForm;
