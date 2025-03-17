import styles from "./footer.module.css";
import React from "react";
import Image from "next/image";
import mef from "../../assets/logo.png";
import SocialIcons from "./components/social_icons";
import Title from "./atoms/title";

const Footer = () => {
  return (
    <footer className={`${styles.bgColor} footer`} id="foot">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-8">
            <Title
              child={
                "@2025 by MEF Turizm. Powered and security by Turkcell Atmosware"
              }
            />
          </div>
          <div className="col-md-2">
            <a href="#">
              <Image src={mef} alt="logo" width={75} height={75} />{" "}
            </a>
          </div>
          <div className="col-md-2">
            <SocialIcons />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
