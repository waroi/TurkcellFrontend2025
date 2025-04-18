"use client";

import { registerUser } from "@/firebase/firebaseService";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "@/components/Button";
import { useRouter } from "next/navigation";

export default function Register() {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      nickname: "",
      country: "South Korea (+82)",
      phone: "",
      uidCode: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(8, "Must be 8 characters or more")
        .required("Required"),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), undefined], "Passwords must match")
        .required("Required"),
      nickname: Yup.string()
        .matches(/^[^!@#$%^&*(),.?":{}|<>]+$/, "Excluding Special Characters")
        .required("Required"),
      phone: Yup.string()
        .matches(/^\d+$/, "Enter Numbers Only")
        .required("Required"),
      uidCode: Yup.string().required("Required"),
    }),
    onSubmit: async (values) => {
      setErrorMsg("");
      setSuccessMsg("");
      try {
        setLoading(true);
        const res = await registerUser(
          values.email,
          values.password,
          values.nickname,
          values.country,
          values.phone,
          values.uidCode
        );
        setSuccessMsg("Successfully registered!");
        router.push("/login");
      } catch (err) {
        if (err instanceof Error) {
          setErrorMsg(err.message || "Registration failed.");
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
        <h1 className="fs-1 fw-bold">Register</h1>
        <p className="text-muted fs-4">Home / Register</p>
      </div>

      <div className="container w-25">
        <h2 className="text-center">Register To Rockie</h2>
        <p className="text-center text-muted fs-3">
          Register in advance and enjoy the event benefits
        </p>

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
              Email
            </label>
            <div className="d-flex justify-content-between align-items-center">
              <input
                type="email"
                className="form-control rounded-end-0 me-0 fs-18"
                placeholder="Please fill in the email form."
                name="email"
                id="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />

              <button
                type="button"
                className="btn btn-primary rounded-start-0 ms-0 text-white fs-4 py-2"
              >
                Authenticate
              </button>
            </div>
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

          <div className="mb-3">
            <input
              type="password"
              className="form-control fs-18"
              placeholder="Please re-enter your password."
              name="confirmPassword"
              id="confirmPassword"
              value={formik.values.confirmPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.confirmPassword &&
              formik.errors.confirmPassword && (
                <div className="text-danger">
                  {formik.errors.confirmPassword}
                </div>
              )}
          </div>

          <div className="mb-3">
            <label htmlFor="nickname" className="fs-3">
              Nickname
            </label>
            <input
              type="text"
              className="form-control fs-18"
              placeholder="Enter Nickname"
              name="nickname"
              id="nickname"
              value={formik.values.nickname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.nickname && formik.errors.nickname && (
              <div className="text-danger">{formik.errors.nickname}</div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="country" className="fs-3">
              Country
            </label>
            <select
              className="form-select fs-18"
              name="country"
              id="country"
              value={formik.values.country}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            >
              <option>South Korea (+82)</option>
              <option>United States (+1)</option>
              <option>Turkey (+90)</option>
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="phone" className="fs-3">
              Phone
            </label>
            <input
              type="tel"
              className="form-control fs-18"
              placeholder="ex) 01012345678 (without ‘-’)"
              name="phone"
              id="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.phone && formik.errors.phone && (
              <div className="text-danger">{formik.errors.phone}</div>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="uidCode" className="fs-3">
              UID Code
            </label>
            <input
              type="text"
              className="form-control fs-18"
              placeholder="Please enter your invitation code."
              name="uidCode"
              id="uidCode"
              value={formik.values.uidCode}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.uidCode && formik.errors.uidCode && (
              <div className="text-danger">{formik.errors.uidCode}</div>
            )}
          </div>

          <div className="d-grid mb-3">
            <Button
              type="submit"
              className="btn-primary text-white fs-4"
              disabled={loading}
            >
              {loading ? "Registering..." : "Pre-Registration"}
            </Button>
          </div>

          <p className="text-center fs-4 pb-5">
            Already Have An Account? <a href="/login">Login</a>
          </p>
        </form>
      </div>
    </section>
  );
}
