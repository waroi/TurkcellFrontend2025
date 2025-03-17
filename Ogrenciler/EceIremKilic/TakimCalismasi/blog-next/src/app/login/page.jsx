"use client";
import styles from "./login.module.css";
import Title from "./atoms/Title";
import SignInForm from "./components/SignInForm";

const LoginPage = () => {
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
            <Title title={"Giriş Yap"} />
            <SignInForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
