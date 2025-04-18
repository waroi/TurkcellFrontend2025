"use client";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import {updatePassword, reauthenticateWithCredential, EmailAuthProvider} from "firebase/auth";
import { db } from "../firebase/firebaseConfig";
import { useAuth } from "../context/AuthContext";
import { useTheme } from "../context/ThemeContext";
import Navbar from "../components/Navbar";
import { Footer } from "../components/Footer";
import { profileSchema, passwordSchema } from "../schemas/schemas";

export default function UserProfile() {
  const { user } = useAuth();
  const { theme } = useTheme();
  const [activeTab, setActiveTab] = useState<"profile" | "password">("profile");
  const [initialValues, setInitialValues] = useState({
    email: "",
    nickname: "",
    phone: "",
    country: "",
  });

  useEffect(() => {
    const fetchProfile = async () => {
      if (user?.uid) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setInitialValues({
            email: data.email || "",
            nickname: data.nickname || "",
            phone: data.phone || "",
            country: data.country || "",
          });
        }
      }
    };
    fetchProfile();
  }, [user]);

  const profileFormik = useFormik({
    enableReinitialize: true,
    initialValues,
    validationSchema: profileSchema, 
    onSubmit: async (values) => {
      if (user?.uid) {
        const docRef = doc(db, "users", user.uid);
        await updateDoc(docRef, values);
        alert("Profile updated successfully!");
      }
    },
  });

  const passwordFormik = useFormik({
    initialValues: { oldPassword: "", newPassword: "" },
    validationSchema: passwordSchema, 
    onSubmit: async (values) => {
      try {
        if (user && user.email) {
          const credential = EmailAuthProvider.credential(user.email, values.oldPassword);
          await reauthenticateWithCredential(user, credential);
          await updatePassword(user, values.newPassword);
          alert("Password changed successfully!");
          passwordFormik.resetForm();
        }
      } catch (error) {
        console.error("Password update error:", error);
        alert("Failed to change password. Please verify your current password.");
      }
    },
  });

  return (
    <>
      <Navbar />
      <div className={`min-vh-100 profile-page ${theme}`}>
        <div className="container py-5 mt-5">
          <div className="row">
            <div className="col-md-3">
              <div className="text-center mb-4">
                <div className="position-relative d-inline-block">
                  <img
                    src="/images/user.png"
                    alt="Profile"
                    className="rounded-circle"
                    width="120"
                    height="120"
                  />
                </div>
                <h5 className="mt-3 mb-1">{user?.displayName || user?.email}</h5>
                <p className="text-secondary small">{user?.email}</p>

                <div className="d-flex flex-column gap-2">
                  <button
                    className={`btn rounded-pill ${activeTab === "profile" ? "btn-primary" : "btn-outline-primary"}`}
                    onClick={() => setActiveTab("profile")}
                  >
                    <i className="me-2"></i> User Profile
                  </button>
                  <button
                    className={`btn rounded-pill ${activeTab === "password" ? "btn-primary" : "btn-outline-primary"}`}
                    onClick={() => setActiveTab("password")}
                  >
                    <i className="me-2"></i> Change Password
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="p-4">
                {activeTab === "profile" ? (
                  <>
                    <h4 className="mb-4">User Profile</h4>
                    <h6 className="text-secondary mb-4">Information</h6>

                    <form onSubmit={profileFormik.handleSubmit}>
                      <div className="row g-3 mb-4">
                        <div className="col-md-6">
                          <input
                            type="email"
                            name="email"
                            className={`form-control ${theme === "dark" ? "bg-dark text-white" : "bg-light text-dark"}`}
                            placeholder="Email"
                            onChange={profileFormik.handleChange}
                            onBlur={profileFormik.handleBlur}
                            value={profileFormik.values.email}
                          />
                          <p className="text-danger small">{profileFormik.touched.email && profileFormik.errors.email}</p>
                        </div>

                        <div className="col-md-6">
                          <input
                            type="text"
                            name="nickname"
                            className={`form-control ${theme === "dark" ? "bg-dark text-white" : "bg-light text-dark"}`}
                            placeholder="Nickname"
                            onChange={profileFormik.handleChange}
                            onBlur={profileFormik.handleBlur}
                            value={profileFormik.values.nickname}
                          />
                          <p className="text-danger small">{profileFormik.touched.nickname && profileFormik.errors.nickname}</p>
                        </div>

                        <div className="col-md-6">
                          <input
                            type="tel"
                            name="phone"
                            className={`form-control ${theme === "dark" ? "bg-dark text-white" : "bg-light text-dark"}`}
                            placeholder="Phone"
                            onChange={profileFormik.handleChange}
                            onBlur={profileFormik.handleBlur}
                            value={profileFormik.values.phone}
                          />
                          <p className="text-danger small">{profileFormik.touched.phone && profileFormik.errors.phone}</p>
                        </div>

                        <div className="col-md-6">
                          <select
                            name="country"
                            className={`form-select ${theme === "dark" ? "bg-dark text-white" : "bg-light text-dark"}`}
                            onChange={profileFormik.handleChange}
                            onBlur={profileFormik.handleBlur}
                            value={profileFormik.values.country}
                          >
                            <option value="">Select Country</option>
                            <option value="Turkish">Turkish</option>
                            <option value="South Korean">South Korean</option>
                            <option value="American">American</option>
                            <option value="British">British</option>
                          </select>
                          <p className="text-danger small">{profileFormik.touched.country && profileFormik.errors.country}</p>
                        </div>
                      </div>

                      <button type="submit" className="btn btn-primary">
                        Update Profile
                      </button>
                    </form>
                  </>
                ) : (
                  <>
                    <h4 className="mb-4">Change Password</h4>
                    <form onSubmit={passwordFormik.handleSubmit}>
                      <div className="row g-3 mb-4">
                        <div className="col-md-6">
                          <input
                            type="password"
                            name="oldPassword"
                            className={`form-control ${theme === "dark" ? "bg-dark text-white" : "bg-light text-dark"}`}
                            placeholder="Current Password"
                            onChange={passwordFormik.handleChange}
                            onBlur={passwordFormik.handleBlur}
                            value={passwordFormik.values.oldPassword}
                          />
                          <p className="text-danger small">{passwordFormik.touched.oldPassword && passwordFormik.errors.oldPassword}</p>
                        </div>

                        <div className="col-md-6">
                          <input
                            type="password"
                            name="newPassword"
                            className={`form-control ${theme === "dark" ? "bg-dark text-white" : "bg-light text-dark"}`}
                            placeholder="New Password"
                            onChange={passwordFormik.handleChange}
                            onBlur={passwordFormik.handleBlur}
                            value={passwordFormik.values.newPassword}
                          />
                          <p className="text-danger small">{passwordFormik.touched.newPassword && passwordFormik.errors.newPassword}</p>
                        </div>
                      </div>

                      <button type="submit" className="btn btn-primary">
                        Change Password
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
