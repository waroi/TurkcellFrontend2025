"use client";
import React from "react";
import { useEffect, useState } from "react";
import "./loginpage.scss";
import Image from "next/image";
import Link from "next/link";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../firebase/firebase";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  const [login, setLogin] = useState({ email: "", password: "" });
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setLogin((prev) => ({
      ...prev,
      [id.replace("validationCustom", "").toLowerCase()]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        login.email,
        login.password
      );

      alert("Login successful!");
      router.push("/homepage");
    } catch (err: any) {
      setError(err.message || "Login failed");
      alert("Email or Password is wrong !");
    }
  };

  useEffect(() => {
    const forms = document.querySelectorAll(".needs-validation");

    Array.from(forms).forEach((form) => {
      form.addEventListener(
        "submit",
        (event) => {
          if (!(form as HTMLFormElement).checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
          }

          form.classList.add("was-validated");
        },
        false
      );
    });

    return () => {
      Array.from(forms).forEach((form) => {
        form.removeEventListener("submit", () => {});
      });
    };
  }, []);

  return (
    <div className="form-container">
      <div className="register-heading text-center">
        <p className="register-header">Login To Rockie</p>
        <p className="register-subheader">
          Welcome back! Log In now to start trading
        </p>
        <div className="group-11038 d-flex align-items-center justify-content-center">
          <div className="circle d-flex justify-content-center align-items-center">
            <Image
              src="/assets/header/kilit.png"
              alt="kilit"
              height={20}
              width={20}
            ></Image>
          </div>
          <Link href="/login">
            <span className="fw-bold text-light">
              https://accounts.rockie.com/login
            </span>
          </Link>
        </div>
        <div className="tabs mt-4">
          <button className="btn btn-primary rounded-pill mx-3">Email</button>
          <button className="btn btn-secondary rounded-pill">Mobile</button>
        </div>
      </div>
      <form className="row needs-validation" noValidate onSubmit={handleSubmit}>
        <div className="col-12">
          <label htmlFor="validationCustomEmail" className="form-label">
            <p className="text">Email/ID</p>
          </label>
          <div className="authdiv d-flex">
            <input
              type="email"
              className="form-control"
              id="validationCustomEmail"
              required
              value={login.email}
              onChange={handleInputChange}
              placeholder="Please fill in the email form"
            />
          </div>
          <div className="invalid-feedback">Please enter valid e-mail !!</div>
        </div>
        <div className="col-12">
          <label htmlFor="validationCustomPassword" className="form-label">
            <p className="text">Password</p>
          </label>
          <input
            placeholder="Please enter a password"
            type="password"
            className="form-control"
            id="validationCustomPassword"
            required
            value={login.password}
            onChange={handleInputChange}
          />
          <div className="invalid-feedback">
            (8 or more characters, including numbers and special characters)
          </div>
        </div>
        <div className="col-12">
          <div className="form-check mt-5 mb-5">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="invalidCheck"
            />
            <div className="links d-flex justify-content-between">
              <label className="form-check-label" htmlFor="invalidCheck">
                Remember me
              </label>
              <a href="#" className="text-danger">
                Forgot Password?
              </a>
            </div>
          </div>
        </div>
        {error && (
          <div className="col-12">
            <div className="alert alert-danger">{error}</div>
          </div>
        )}
        <div className="col-12">
          <button className="register-btn" type="submit">
            Login
          </button>
        </div>
        <div className="col-12 text-center">
          <p className="text ">
            Not A Member?
            <Link href="/register">
              <span className="text-primary">Register</span>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
