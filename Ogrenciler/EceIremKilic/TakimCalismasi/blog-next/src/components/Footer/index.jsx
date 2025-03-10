import styles from "./footer.module.css";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer mt-5">
      <div className="container ">
        <div className="row ">
          <div className="col-md-6 align-items-center">
            @2025 by MEF Turizm. Powered and security by Turkcell Atmosware{" "}
          </div>
          <div className="col-md-3">
            <h1>MEF Turizm</h1>
          </div>
          <div className="col-md-3">
            <div className="social-icons d-flex justify-content-around gap-2">
              <i className={`${styles.brands} fa-brands fa-instagram`}></i>
              <i className={`${styles.brands} fa-brands fa-linkedin`}></i>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
