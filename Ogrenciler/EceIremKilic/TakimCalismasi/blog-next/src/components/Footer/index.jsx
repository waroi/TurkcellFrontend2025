import styles from "./footer.module.css";
import React from "react";
import Image from "next/image";
import mef from '../../assets/logo.png'

const Footer = () => {
  return (
    <footer className={`${styles.bgColor} footer mt-5 py-2`} id="foot">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-md-5">
            <h6>
              @2025 by MEF Turizm. Powered and security by Turkcell Atmosware
            </h6>
          </div>
          <div className="col-md-5">
            <a href="#"><Image src={mef} alt="logo" width={75} height={75} />  </a>
          </div>
          <div className="col-md-2">
            <div className="social-icons d-flex gap-2">
              <i
                aria-hidden="true"
                className={`${styles.brands} fa-brands fa-instagram`}
              ></i>
              <i
                aria-hidden="true"
                className={`${styles.brands} fa-brands fa-linkedin`}
              ></i>
              <i
                aria-hidden="true"
                className={`${styles.brands} fa-brands fa-facebook`}
              ></i>
              <i
                aria-hidden="true"
                className={`${styles.brands} fa-brands fa-github`}
              ></i>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
