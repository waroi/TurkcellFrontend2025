"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  })

  const [formErrors, setFormErrors] = useState({
    email: "",
    password: "",
    general: "",
  })

  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))

    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const validateForm = () => {
    let valid = true
    const newErrors = { ...formErrors }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
      valid = false
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address"
      valid = false
    }

    // Validate password
    if (!formData.password) {
      newErrors.password = "Password is required"
      valid = false
    }

    setFormErrors(newErrors)
    return valid
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await doSignInWithEmailAndPassword(formData.email, formData.password);
      setFormSubmitted(true);
      setTimeout(() => {
        window.location.href = "/";
      }, 2000);
    } catch (error) {
      setFormErrors((prev) => ({ ...prev, general: error.message }));
    }
  };
  return (
    <div className="bg-light min-vh-100 d-flex align-items-center py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card border-0 shadow-lg overflow-hidden">
              <div className="row g-0">
                <div className="col-lg-6 d-none d-lg-block">
                  <div className="bg-dark h-100 p-5 text-white d-flex flex-column justify-content-center">
                    <div className="text-center mb-5">
                      <h1 className="display-6 fw-bold mb-3">Welcome Back!</h1>
                      <p className="lead">Log in to access your account and continue your journey with ModernBlog.</p>
                    </div>
                    <Image
                      src="https://cdn1.vectorstock.com/i/1000x1000/57/25/sign-in-with-arrow-icon-login-symbol-vector-10825725.jpg"
                      alt="Login illustration"
                      width={300}
                      height={300}
                      className="img-fluid mt-auto mx-auto"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="p-4 p-lg-5">
                    <div className="text-center mb-4">
                      <h2 className="h3 fw-bold">Log In to Your Account</h2>
                      <p className="text-muted">Access all your favorite content</p>
                    </div>

                    {formSubmitted && (
                      <div className="alert alert-success mb-4">
                        Login successful! Redirecting you to the homepage...
                      </div>
                    )}

                    {formErrors.general && <div className="alert alert-danger mb-4">{formErrors.general}</div>}

                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label htmlFor="email" className="form-label">
                          Email Address
                        </label>
                        <input
                          type="email"
                          className={`form-control ${formErrors.email ? "is-invalid" : ""}`}
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                        {formErrors.email && <div className="invalid-feedback">{formErrors.email}</div>}
                      </div>
                      <div className="mb-3">
                        <div className="d-flex justify-content-between align-items-center mb-1">
                          <label htmlFor="password" className="form-label mb-0">
                            Password
                          </label>
                          <Link href="/forgot-password" className="text-decoration-none small">
                            Forgot password?
                          </Link>
                        </div>
                        <input
                          type="password"
                          className={`form-control ${formErrors.password ? "is-invalid" : ""}`}
                          id="password"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                        />
                        {formErrors.password && <div className="invalid-feedback">{formErrors.password}</div>}
                      </div>
                      <div className="mb-4">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="rememberMe"
                            name="rememberMe"
                            checked={formData.rememberMe}
                            onChange={handleChange}
                          />
                          <label className="form-check-label" htmlFor="rememberMe">
                            Remember me
                          </label>
                        </div>
                      </div>
                      <button type="submit" className="btn btn-dark w-100 py-2 mb-4">
                        Log In
                      </button>
                    </form>

                    <div className="text-center">
                      <p className="text-muted mb-4">Or log in with</p>
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
                        Don't have an account?{" "}
                        <Link href="/sign/signUp" className="text-decoration-none fw-medium">
                          Sign up
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
  )
}

