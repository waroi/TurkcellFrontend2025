"use client";
import styles from "./signup.module.css";
import SignUpForm from "./components/SignUpForm";

const SignUpPage = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <div
            className="p-5 shadow-lg rounded-4 bg-white"
            style={{ maxWidth: "400px", width: "100%" }}
          >
            <h2 className="text-center mb-4 text-success">Kayıt Ol</h2>
            <SignUpForm />
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
