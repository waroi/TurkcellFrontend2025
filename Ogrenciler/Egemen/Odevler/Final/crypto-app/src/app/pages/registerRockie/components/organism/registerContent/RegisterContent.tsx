"use client";
import React, { useEffect, useState } from "react";
import "./registercontent.scss";
import Link from "next/link";
import { registerWithEmail } from "../../../../../../../firebase/authControl";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../../../../../firebase/firebase";

const RegisterContent = () => {
  interface RegisterInfo {
    email: string;
    password: string;
    nickname: string;
    country: string;
    phone: string;
    uid: string;
  }
  const [register, setRegister] = useState<RegisterInfo>({
    email: "",
    password: "",
    nickname: "",
    country: "",
    phone: "",
    uid: "",
  });
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = event.target;
    setRegister((prev) => ({
      ...prev,
      [id.replace("validationCustom", "").toLowerCase()]: value,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    try {
      const user = await registerWithEmail(register.email, register.password);

      await setDoc(doc(db, "crypto-users", user.uid), {
        nickname: register.nickname,
        country: register.country,
        phone: register.phone,
        uid: register.uid,
        email: register.email,
        password: register.password,
      });
      alert("Registration successful!");
    } catch (err: any) {
      setError(err.message || "Registration failed");
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
        <p className="register-header">Register To Rockie</p>
        <p className="register-subheader">
          Register in advance and enjoy the event benefits
        </p>
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
              value={register.email}
              onChange={handleInputChange}
            />
            <button className="btn btn-primary" type="button">
              Authenticate
            </button>
          </div>
          <div className="invalid-feedback">Please enter valid e-mail !!</div>
        </div>
        <div className="col-12">
          <label htmlFor="validationCustomPassword" className="form-label">
            <p className="text">Password</p>
          </label>
          <input
            type="password"
            className="form-control"
            id="validationCustomPassword"
            value={register.password}
            onChange={handleInputChange}
            required
            pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
          />
          <div className="invalid-feedback">
            (8 or more characters, including numbers and special characters also
            both capital and small letters)
          </div>
        </div>
        <div className="col-12">
          <label htmlFor="validationCustomNickname" className="form-label">
            <p className="text">NickName</p>
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustomNickname"
            pattern="^[a-zA-Z0-9]+$"
            required
            value={register.nickname}
            onChange={handleInputChange}
          />
          <div className="invalid-feedback">(Excluding special characters)</div>
        </div>
        <div className="col-12">
          <label htmlFor="validationCustomCountry" className="form-label">
            <p className="text">Country</p>
          </label>
          <select
            className="form-select"
            id="validationCustomCountry"
            required
            value={register.country}
            onChange={handleInputChange}
          >
            <option value="">Select country...</option>
            <option value="UK">South Korea (+82)</option>
            <option value="CA">Canada (+1)</option>
            <option value="AU">Australia (+61)</option>
            <option value="TR">Turkey (+90)</option>
            <option value="DE">Germany (+49)</option>
            <option value="FR">France (+33)</option>
            <option value="JP">Japan (+81)</option>
            <option value="CN">China (+86)</option>
            <option value="IN">India (+91)</option>
          </select>
          <div className="invalid-feedback">Please select a country.</div>
        </div>
        <div className="col-12">
          <label htmlFor="validationCustomPhone" className="form-label">
            <p className="text">Phone</p>
          </label>
          <input
            type="tel"
            className="form-control"
            id="validationCustomPhone"
            pattern="[0-9]+"
            required
            value={register.phone}
            onChange={handleInputChange}
          />
          <div className="invalid-feedback">(Enter numbers only)</div>
        </div>
        <div className="col-12">
          <label htmlFor="validationCustomUID" className="form-label">
            <p className="text">UID Code</p>
          </label>
          <input
            type="text"
            className="form-control"
            id="validationCustomUID"
            value={register.uid}
            onChange={handleInputChange}
          />
        </div>
        {error && (
          <div className="col-12">
            <div className="alert alert-danger">{error}</div>
          </div>
        )}
        <div className="col-12">
          <button className="register-btn" type="submit">
            Pre-Registration
          </button>
        </div>
        <div className="col-12 text-center">
          <p className="text">
            Already have an account?{" "}
            <Link href="/login">
              <span className="text-primary">Log In</span>
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default RegisterContent;
