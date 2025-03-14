"use client";
import { useState } from "react";
import styles from "./signup.module.css";
import { createWithEmailAndPassword } from "@/controller/AuthController";
import { useRouter } from "next/navigation";
import useAuthStore from "@/store/useAuthStore";

const SignUpPage = () => {
  const Router = useRouter();
  const { signup } = useAuthStore();
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  const handleLoginIn = async (e) => {
    e.preventDefault();
    const dbUser = await signup(email, password, fullName);
    if (dbUser !== null) {
      console.log("Giriş Başarılı", dbUser);
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
                <label htmlFor="signInName" className="form-label">
                  İsim
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="signInName"
                  aria-describedby="nameHelp"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
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
                  Şifreyi Tekrar Giriniz
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
