"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: false,
  });

  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeTerms: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...formErrors };

    // Validate first name
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
      valid = false;
    }

    // Validate last name
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
      valid = false;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      valid = false;
    }

    // Validate password
    if (!formData.password) {
      newErrors.password = "Password is required";
      valid = false;
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
      valid = false;
    }

    // Validate confirm password
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Please confirm your password";
      valid = false;
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
      valid = false;
    }

    // Validate terms agreement
    if (!formData.agreeTerms) {
      newErrors.agreeTerms = "You must agree to the terms and conditions";
      valid = false;
    }

    setFormErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Simulate form submission
      console.log("Form submitted:", formData);
      setFormSubmitted(true);

      // Reset form after successful submission
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        agreeTerms: false,
      });
    }
  };

  return (
    <div className="bg-light min-vh-100 d-flex align-items-center py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card border-0 shadow-lg overflow-hidden">
              <div className="row g-0">
                <div className="col-lg-6 bg-dark d-none d-lg-block">
                  <div className="d-flex flex-column h-100 p-5 text-white justify-content-center">
                    <div className="text-center mb-5">
                      <h1 className="display-6 fw-bold mb-3">
                        Welcome to ModernBlog
                      </h1>
                      <p className="lead">
                        Join our community of developers, designers, and digital
                        enthusiasts.
                      </p>
                    </div>
                    <Image
                      src="https://cdn3.vectorstock.com/i/1000x1000/71/92/sign-up-icon-registration-symbol-vector-10637192.jpg"
                      alt="Sign up illustration"
                      width={300}
                      height={300}
                      className="img-fluid mt-auto mx-auto"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="p-4 p-lg-5">
                    <div className="text-center mb-4">
                      <h2 className="h3 fw-bold">Create an Account</h2>
                      <p className="text-muted">
                        Get access to exclusive content and features
                      </p>
                    </div>

                    {formSubmitted && (
                      <div className="alert alert-success mb-4">
                        Your account has been created successfully!{" "}
                        <Link href="/sign/signIn" className="alert-link">
                          Login now
                        </Link>
                      </div>
                    )}

                    <form onSubmit={handleSubmit}>
                      <div className="row g-3">
                        <div className="col-md-6">
                          <label htmlFor="firstName" className="form-label">
                            First Name
                          </label>
                          <input
                            type="text"
                            className={`form-control ${
                              formErrors.firstName ? "is-invalid" : ""
                            }`}
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                          />
                          {formErrors.firstName && (
                            <div className="invalid-feedback">
                              {formErrors.firstName}
                            </div>
                          )}
                        </div>
                        <div className="col-md-6">
                          <label htmlFor="lastName" className="form-label">
                            Last Name
                          </label>
                          <input
                            type="text"
                            className={`form-control ${
                              formErrors.lastName ? "is-invalid" : ""
                            }`}
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                          />
                          {formErrors.lastName && (
                            <div className="invalid-feedback">
                              {formErrors.lastName}
                            </div>
                          )}
                        </div>
                        <div className="col-12">
                          <label htmlFor="email" className="form-label">
                            Email Address
                          </label>
                          <input
                            type="email"
                            className={`form-control ${
                              formErrors.email ? "is-invalid" : ""
                            }`}
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                          />
                          {formErrors.email && (
                            <div className="invalid-feedback">
                              {formErrors.email}
                            </div>
                          )}
                        </div>
                        <div className="col-12">
                          <label htmlFor="password" className="form-label">
                            Password
                          </label>
                          <input
                            type="password"
                            className={`form-control ${
                              formErrors.password ? "is-invalid" : ""
                            }`}
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                          />
                          {formErrors.password && (
                            <div className="invalid-feedback">
                              {formErrors.password}
                            </div>
                          )}
                        </div>
                        <div className="col-12">
                          <label
                            htmlFor="confirmPassword"
                            className="form-label"
                          >
                            Yazar
                          </label>
                          <input
                            type="text"
                            className={`form-control ${
                              formErrors.confirmPassword ? "is-invalid" : ""
                            }`}
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                          />
                          {formErrors.confirmPassword && (
                            <div className="invalid-feedback">
                              {formErrors.confirmPassword}
                            </div>
                          )}
                        </div>
                        <div className="col-12">
                          <div className="form-check">
                            <input
                              className={`form-check-input ${
                                formErrors.agreeTerms ? "is-invalid" : ""
                              }`}
                              type="checkbox"
                              id="agreeTerms"
                              name="agreeTerms"
                              checked={formData.agreeTerms}
                              onChange={handleChange}
                            />
                            <label
                              className="form-check-label"
                              htmlFor="agreeTerms"
                            >
                              I agree to the{" "}
                              <Link
                                href="/terms"
                                className="text-decoration-none"
                              >
                                Terms of Service
                              </Link>{" "}
                              and{" "}
                              <Link
                                href="/privacy"
                                className="text-decoration-none"
                              >
                                Privacy Policy
                              </Link>
                            </label>
                            {formErrors.agreeTerms && (
                              <div className="invalid-feedback">
                                {formErrors.agreeTerms}
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="col-12">
                          <button
                            type="submit"
                            className="btn btn-dark w-100 py-2"
                          >
                            Create Account
                          </button>
                        </div>
                      </div>
                    </form>

                    <div className="text-center mt-4">
                      <p className="text-muted mb-4">Or sign up with</p>
                      <div className="d-flex justify-content-center gap-2 mb-4">
                        <button className="btn btn-outline-secondary">
                          <i className="bi bi-google me-2"></i>Google
                        </button>
                        <button className="btn btn-outline-secondary">
                          <i className="bi bi-facebook me-2"></i>Facebook
                        </button>
                        <button className="btn btn-outline-secondary">
                          <i className="bi bi-github me-2"></i>GitHub
                        </button>
                      </div>
                      <p className="mb-0">
                        Already have an account?{" "}
                        <Link
                          href="/sign/signIn"
                          className="text-decoration-none fw-medium"
                        >
                          Log in
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
