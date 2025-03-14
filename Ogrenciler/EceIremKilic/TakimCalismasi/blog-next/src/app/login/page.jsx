"use client";
import { useState } from "react";
import styles from "./login.module.css";
import { signWithEmailAndPassword } from "@/controller/AuthController";
import { useRouter } from "next/navigation";
import useAuthStore from "@/store/useAuthStore";
import Link from "next/link";

const LoginPage = () => {
  const router = useRouter();
  const { login } = useAuthStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginIn = async (e) => {
    e.preventDefault();
    const dbUser = await login(email, password);
    if (dbUser !== null) {
      console.log("Giriş Başarılı", dbUser);
      router.push("/");
    } else {
      console.log("Giriş Başarısız");
    }
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 p-0">
          <div className={`${styles.imgContainer} `}></div>
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <div
            className="sign-in-container p-5 shadow-lg rounded-4 bg-white"
            style={{ maxWidth: "400px", width: "100%" }}
          >
            <h2 className="text-center mb-4 text-primary">Giriş Yap</h2>
            <form onSubmit={handleLoginIn}>
              <div className="mb-3">
                <label htmlFor="signInEmail" className="form-label fw-bold">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control form-control-lg"
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
                <label htmlFor="signInPassword" className="form-label fw-bold">
                  Şifre
                </label>
                <input
                  type="password"
                  className="form-control form-control-lg"
                  id="signInPassword"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary mb-4 btn-lg w-100"
              >
                Giriş Yap
              </button>
              <Link href="/signup" className="text-decoration-none text-dark">
                <p className="text-center"> Hesabınız yok mu? Oluşturun.</p>
              </Link>
              <hr className="m-5" />
              <div className="social-buttons d-flex flex-column gap-2">
                <button
                  className={`${styles.facebookBtn} btn btn-light btn-lg text-white`}
                >
                  <i className="fa-brands fa-facebook me-2"></i> Facebook ile
                  giriş yap
                </button>
                <button
                  className={`${styles.googleBtn} btn btn-light btn-lg text-white`}
                >
                  <i className="fa-brands fa-google me-2"></i> Google ile giriş
                  yap
                </button>
                <button
                  className={`${styles.githubBtn} btn btn-light btn-lg text-white`}
                >
                  <i className="fa-brands fa-github me-2"></i> Github ile giriş
                  yap
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
