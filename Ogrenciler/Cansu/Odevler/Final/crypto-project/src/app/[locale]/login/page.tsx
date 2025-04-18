"use client";

import { SignIn } from "@/lib/firebaseService";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Image from "next/image";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(8, "Must be 8 characters or more")
        .required("Required"),
    }),
    onSubmit: async (values) => {
      setErrorMsg("");
      setSuccessMsg("");
      try {
        setLoading(true);
        await SignIn(values.email, values.password);
        setSuccessMsg("Successfully logged in!");
        router.push(`/dashboard/1`);
      } catch (err) {
        if (err instanceof Error) {
          setErrorMsg(err.message || "Login failed.");
        } else {
          setErrorMsg("An unexpected error occurred.");
        }
      } finally {
        setLoading(false);
      }
    },
  });

  return (
    <section className="auth-container">
      <div className="auth-flag py-5 bg-secondary d-flex align-items-center justify-content-between">
        <h1 className="fs-1 fw-bold">Login</h1>
        <p className="text-muted fs-4">Home / Login</p>
      </div>

      <div className="container w-25">
        <h2 className="text-center">Login To Rockie</h2>
        <p className="text-center text-muted fs-3">
          Welcome back! Log In now to start trading
        </p>
        <div className="w-100 d-flex align-items-center justify-content-center mb-4">
          <div className="bg-success bg-opacity-10 py-2 pe-4 rounded-pill">
            <span className="login-lock bg-success rounded-circle p-2 me-3">
              <Image
                src="/lock.svg"
                alt="Login Lock"
                width={20}
                height={20}
                className="img-fluid"
              />
            </span>
            <span className="text-success fw-semibold">https://</span>
            <span className="fw-semibold">accounts.rockie.com/login</span>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center gap-3 mb-3">
          <button className="btn btn-primary py-1 px-3 rounded-pill text-white fs-5">
            Email
          </button>
          <button className="btn btn-white text-muted fs-5">Mobile</button>
        </div>

        <form className="registerForm" onSubmit={formik.handleSubmit}>
          {errorMsg && <div className="alert alert-danger">{errorMsg}</div>}
          {successMsg && (
            <div className="alert alert-success">{successMsg}</div>
          )}

          <div className="mb-3">
            <label htmlFor="email" className="fs-3">
              Email/ID
            </label>
            <input
              type="email"
              className="form-control fs-18"
              placeholder="Please fill in the email form."
              name="email"
              id="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-danger">{formik.errors.email}</div>
            )}
          </div>

          <div className="mb-2">
            <label htmlFor="password" className="fs-3">
              Password
            </label>
            <input
              type="password"
              className="form-control fs-18"
              placeholder="Please enter a password."
              name="password"
              id="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="text-danger">{formik.errors.password}</div>
            )}
          </div>
          <div className="d-flex justify-content-between align-items-center py-3">
            <div className="form-check m-0">
              <input
                className="form-check-input fs-18"
                type="checkbox"
                id="rememberMe"
              />
              <label className="form-check-label fs-4" htmlFor="rememberMe">
                Remember me
              </label>
            </div>

            <span className="text-danger fs-4" role="button">
              Forgot Password?
            </span>
          </div>

          <div className="d-grid mb-3">
            <Button
              type="submit"
              className="btn-primary text-white fs-4"
              disabled={loading}
            >
              {loading ? "Registering..." : "Login"}
            </Button>
          </div>

          <p className="text-center fs-4 pb-5">
            Not a Member? <Link href="/register">Register</Link>
          </p>
        </form>
      </div>
    </section>
  );
}