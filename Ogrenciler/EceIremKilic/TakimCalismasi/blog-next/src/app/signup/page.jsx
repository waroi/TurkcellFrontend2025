"use client";
import { useState } from "react";
import styles from "./signup.module.css";
import { createWithEmailAndPassword } from "@/controller/AuthController";
import { useRouter } from "next/navigation";
import useAuthStore from "@/store/useAuthStore";
import Link from "next/link";

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
          <div
            className="p-5 shadow-lg rounded-4 bg-white"
            style={{ maxWidth: "400px", width: "100%" }}
          >
            <h2 className="text-center mb-4 text-success">Kayıt Ol</h2>
            <form onSubmit={handleLoginIn}>
              <div className="mb-3">
                <label htmlFor="signUpFullName" className="form-label fw-bold">
                  Ad Soyad
                </label>
                <input
                  type="text"
                  className="form-control form-control-lg"
                  id="signUpFullName"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="signInEmail" className="form-label fw-bold">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control form-control-lg"
                  id="signInEmail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="signUpPassword" className="form-label fw-bold">
                  Şifre
                </label>
                <input
                  type="password"
                  className="form-control form-control-lg"
                  id="signUpPassword"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="signUpRePassword"
                  className="form-label fw-bold"
                >
                  Şifre Tekrar
                </label>
                <input
                  type="password"
                  className="form-control form-control-lg"
                  id="signUpRePassword"
                  value={rePassword}
                  onChange={(e) => setRePassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="btn btn-success btn-lg w-100 mb-4"
              >
                Kayıt Ol
              </button>
              <Link href="/login" className="text-decoration-none text-dark">
                Zaten hesabınız var mı? Oturum açın
              </Link>
            </form>
          </div>
        </div>
        <div className="col-md-6 container p-0">
          <div className={styles.imgContainer}></div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
