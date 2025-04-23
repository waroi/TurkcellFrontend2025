"use client";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation"; 
import { loginSchema } from "../../schemas/schemas";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTheme } from "../../context/ThemeContext";
import Navbar from "../../components/Navbar";
import { Footer } from "../../components/Footer";
import { useAuth } from "../../context/AuthContext";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/app/firebase/firebaseConfig";

export default function Login() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  const login = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      try {
        await login(values.email, values.password);
        router.push("/profile");
      } catch (error: any) {
        console.error("Login failed:", error.message);
        alert("Login failed: " + error.message);
      }
    }
  });

  if (!mounted) return null;

  return (
    <>
      <Navbar />
      <div className={`min-vh-100 d-flex align-items-center justify-content-center p-4 ${theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
        <div
          className={`p-4 shadow-none ${theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`}
          style={{ maxWidth: '500px', width: '100%', border: 'none', boxShadow: 'none' }}
        >
          <div className="card-body p-4">
            <h2 className="text-center mb-1">Login to Rockie</h2>
            <p className="text-center text-muted mb-4">Welcome back! Please enter your credentials.</p>

            <form onSubmit={formik.handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  className={`form-control ${theme === 'dark' ? 'bg-dark text-light' : ''}`}
                  placeholder="Enter your email"
                  {...formik.getFieldProps("email")}
                />
                {formik.touched.email && formik.errors.email && (
                  <div className="text-danger small mt-1">{formik.errors.email}</div>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <div className="input-group">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    className={`form-control ${theme === 'dark' ? 'bg-dark text-light' : ''}`}
                    placeholder="Enter your password"
                    {...formik.getFieldProps("password")}
                  />
                  <button
                    type="button"
                    className={`btn ${theme === 'dark' ? 'btn-outline-light' : 'btn-outline-dark'}`}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? '👁️' : '👁️‍🗨️'}
                  </button>
                </div>
                {formik.touched.password && formik.errors.password && (
                  <div className="text-danger small mt-1">{formik.errors.password}</div>
                )}
              </div>

              <button type="submit" className="btn btn-primary w-100 mb-3">
                Login 
              </button>

              <p className="text-center text-muted mb-0">
                Don't have an account?{" "}
                <Link href="/auth/register" className="text-primary text-decoration-none">
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
