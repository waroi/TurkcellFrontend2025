"use client";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { registerSchema } from "../../schemas/schemas";
import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTheme } from "../../context/ThemeContext";
import Navbar from "../../components/Navbar";
import { Footer } from "@/app/components/Footer";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import { useRouter } from "next/navigation";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseConfig";

export default function Register() {
    const [mounted, setMounted] = useState(false);
    const { theme } = useTheme();
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setMounted(true);
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            nickname: "",
            phone: "",
            country: "",
            uid: "",
        },
        validationSchema: registerSchema,
        onSubmit: async (values, { setSubmitting, resetForm }) => {
            try {
                const userCredential = await createUserWithEmailAndPassword(
                    auth,
                    values.email,
                    values.password
                );
                await setDoc(doc(db, "users", userCredential.user.uid), {
                    email: values.email,
                    nickname: values.nickname,
                    phone: values.phone,
                    country: values.country,
                    uid: values.uid,
                  });
                console.log("Kayıt başarılı:", userCredential.user);
                resetForm();
                router.push("/auth/login");
            } catch (error: any) {
                console.error("Kayıt hatası:", error.message);
                alert("Registration failed: " + error.message);
            } finally {
                setSubmitting(false);
            }
        },
    });

    if (!mounted) return null;

    return (
        <>
            <Navbar />
            <div className={`min-vh-100 d-flex align-items-center justify-content-center p-4 ${theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`}>
                <div
                    className={`p-4 shadow-none ${theme === 'dark' ? 'bg-dark text-light' : 'bg-light text-dark'}`}
                    style={{ maxWidth: '700px', width: '100%', border: 'none', boxShadow: 'none' }}
                >
                    <div className="card-body p-4">
                        <h2 className="text-center mb-1">Register To Rockie</h2>
                        <p className="text-center text-muted mb-4">Register in advance and enjoy the event benefits</p>

                        <form onSubmit={formik.handleSubmit}>
                            {(
                                [
                                    { label: "Email", id: "email", type: "email", placeholder: "Enter your email" },
                                    { label: "Nickname", id: "nickname", type: "text", placeholder: "Enter your nickname" },
                                    { label: "Phone", id: "phone", type: "tel", placeholder: "Enter your phone number" },
                                    { label: "UID Code", id: "uid", type: "text", placeholder: "Enter your invitation code" },
                                ] as const
                            ).map(({ label, id, type, placeholder }) => {
                                const field = id as keyof typeof formik.values;

                                return (
                                    <div className="mb-3" key={id}>
                                        <label htmlFor={id} className="form-label">{label}</label>
                                        <input
                                            type={type}
                                            className={`form-control ${theme === 'dark' ? 'bg-dark text-light' : ''}`}
                                            id={id}
                                            placeholder={placeholder}
                                            {...formik.getFieldProps(field)}
                                        />
                                        {formik.touched[field] && formik.errors[field] && (
                                            <div className="text-danger small mt-1">{formik.errors[field]}</div>
                                        )}
                                    </div>
                                );
                            })}

                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <div className="input-group">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        className={`form-control ${theme === 'dark' ? 'bg-dark text-light' : ''}`}
                                        id="password"
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

                            <div className="mb-3">
                                <label htmlFor="country" className="form-label">Country</label>
                                <select
                                    className={`form-select ${theme === 'dark' ? 'bg-dark text-light' : ''}`}
                                    id="country"
                                    {...formik.getFieldProps("country")}
                                >
                                    <option value="">Select your country</option>
                                    <option value="tr">Türkiye (+90)</option>
                                    <option value="kr">South Korea (+82)</option>
                                    <option value="us">United States (+1)</option>
                                    <option value="uk">United Kingdom (+44)</option>
                                </select>
                                {formik.touched.country && formik.errors.country && (
                                    <div className="text-danger small mt-1">{formik.errors.country}</div>
                                )}
                            </div>

                            <button type="submit" className="btn btn-primary w-100 mb-3" disabled={formik.isSubmitting}>
                                {formik.isSubmitting ? "Registering..." : "Register"}
                            </button>

                            <p className="text-center text-muted mb-0">
                                Already have an account?{" "}
                                <Link href="/auth/login" className="text-primary text-decoration-none">
                                    Login
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
