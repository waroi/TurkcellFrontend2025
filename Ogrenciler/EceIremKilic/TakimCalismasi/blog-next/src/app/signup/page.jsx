"use client";
import { useState } from "react";
import styles from "./signup.module.css";
import { createWithEmailAndPassword } from "@/controller/AuthController";
import { useRouter } from "next/navigation";

const SignUpPage = () => {
  const Router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const handleLoginIn = async (e) => {
    e.preventDefault();
    const dbUser = await createWithEmailAndPassword(email, password);
    if (dbUser !== null) {
      console.log("Giriş Başarılı", dbUser);
      if (typeof window === "undefined") return null;
      Router.push("/");
    } else {
      console.log("Giriş Başarısız");
    }
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <div className="sign-in-container container">
            <form onSubmit={handleLoginIn}>
              <div className="mb-3">
                <label htmlFor="signInEmail" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="signInEmail"
                  aria-describedby="emailHelp"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div id="emailHelp" className="form-text">
                  Lütfen geçerli bir mail adresi giriniz.
                </div>
              </div>
              <div className="mb-3">
                <label htmlFor="signUpPassword" className="form-label">
                  Şifre
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="signUpPassword"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="signUpRePassword" className="form-label">
                  Şifre
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="signUpRePassword"
                  value={rePassword}
                  onChange={(e) => setRePassword(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Kayıt Ol
              </button>
            </form>
          </div>
        </div>
        <div className="col-md-6 container p-0">
          <div className={`${styles.imgContainer} `}></div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
