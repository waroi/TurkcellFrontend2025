"use client";
import { useState } from "react";
import styles from "./login.module.css";
import { signWithEmailAndPassword } from "@/controller/AuthController";
import { useRouter } from "next/navigation";
import useAuthStore from "@/store/useAuthStore";

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
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <div className="sign-in-container">
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
                <label htmlFor="signInPassword" className="form-label">
                  Şifre
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="signInPassword"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="mb-3 form-check d-flex justify-content-between">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="signInRemember"
                  />
                  <label className="form-check-label" htmlFor="signInRemember">
                    Beni Hatırla
                  </label>
                </div>
                <button className="btn btn-primary">Şifreni mi unuttun?</button>
              </div>
              <button type="submit" className="btn btn-primary">
                Giriş Yap
              </button>
              <hr className="m-5" />
              <div className="social-buttons d-flex flex-column">
                <button className={`${styles.facebookBtn} btn`}>
                  <span className="text-white">
                    <i className="fa-brands fa-facebook text-white me-2"></i>
                    Facebook ile giriş yap
                  </span>
                </button>
                <button className={`${styles.googleBtn} btn`}>
                  <span className="text-white">
                    <i className="fa-brands fa-google text-white me-2"></i>
                    Google ile giriş yap
                  </span>
                </button>
                <button className={`${styles.githubBtn} btn`}>
                  <span className="text-white">
                    <i className="fa-brands fa-github text-white me-2"></i>
                    Github ile giriş yap
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-6">
          <div className={`${styles.imgContainer} `}></div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
