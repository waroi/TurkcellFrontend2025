"use client";
import React from "react";
import { loginUser } from "../../../firebase/auth";

const SignIn = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser();
  };

  return (
    <div>
      <form className="container" onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <label for="basic-url" className="input-group-text">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
          <label for="basic-url" className="input-group-text">
            Şifre
          </label>
          <input
            type="password"
            className="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-default"
          />
        </div>
        <button type="submit" className="btn btn-primary"></button>
        <a href="/">Giriş Yap</a>
      </form>
    </div>
  );
};

export default SignIn;
