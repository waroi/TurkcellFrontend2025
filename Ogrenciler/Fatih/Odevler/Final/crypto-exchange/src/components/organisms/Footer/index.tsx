"use client";

import styles from "./Footer.module.css";
import Link from "next/link";
import { useTranslations } from "next-intl";
import Image from "next/image";
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import Frame from "@/assets/Frame.svg";
import Rocket from "@/assets/Rocket.svg";

const Footer = () => {
  const t = useTranslations("Footer");

  return (
    <footer className={`${styles.footer}`}>
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
        <div className="d-flex flex-column align-items-start">
          <Link
            className="navbar-brand d-flex align-items-center gap-2"
            href="/"
          >
            <Image src={Frame} width={31} height={28} alt="Logo" />
            <Image src={Rocket} width={81} height={30} alt="Logo" />
          </Link>
          <span>{t("letsTalk")}</span>
          <span>+98 902 353 2926</span>
          <span>Sinahosseini379@gmail.com</span>
          <small>{t("copyright")}</small>
        </div>

        <ul className={`list-unstyled d-flex gap-4 mb-0 ${styles.nav}`}>
          <li>
            <span className={styles.title}>{t("products")}</span>
            <ul className={`list-unstyled gap-4 mb-0 ${styles.nav}`}>
              <li>{t("productList.spot")}</li>
              <li>{t("productList.inverse")}</li>
              <li>{t("productList.usdt")}</li>
              <li>{t("productList.exchange")}</li>
              <li>{t("productList.launchpad")}</li>
              <li>{t("productList.pay")}</li>
            </ul>
          </li>
          <li>
            <span className={styles.title}>{t("services")}</span>
            <ul className={`list-unstyled gap-4 mb-0 ${styles.nav}`}>
              <li>{t("serviceList.buy")}</li>
              <li>{t("serviceList.markets")}</li>
              <li>{t("serviceList.fee")}</li>
              <li>{t("serviceList.affiliate")}</li>
              <li>{t("serviceList.referral")}</li>
              <li>{t("serviceList.api")}</li>
            </ul>
          </li>
          <li>
            <span className={styles.title}>{t("support")}</span>
            <ul className={`list-unstyled gap-4 mb-0 ${styles.nav}`}>
              <li>{t("supportList.learn")}</li>
              <li>{t("supportList.help")}</li>
              <li>{t("supportList.feedback")}</li>
              <li>{t("supportList.submit")}</li>
              <li>{t("supportList.doc")}</li>
              <li>{t("supportList.rules")}</li>
            </ul>
          </li>
          <li>
            <span className={styles.title}>{t("about")}</span>
            <ul className={`list-unstyled gap-4 mb-0 ${styles.nav}`}>
              <li>{t("aboutList.about")}</li>
              <li>{t("aboutList.auth")}</li>
              <li>{t("aboutList.careers")}</li>
              <li>{t("aboutList.business")}</li>
              <li>{t("aboutList.blog")}</li>
            </ul>
          </li>
        </ul>
      </div>
      <div
        className={`d-flex justify-content-between align-items-center ${styles.footerTab}`}
      >
        <div className="d-flex container justify-content-between align-items-center">
          <span>{t("copyright")}</span>
          <ul className="list-unstyled d-flex gap-3 m-0">
            <li>
              <Link
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF size={16} color="#777E90" />
              </Link>
            </li>
            <li>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter size={16} color="#777E90" />
              </Link>
            </li>
            <li>
              <Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={16} color="#777E90" />
              </Link>
            </li>
            <li>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn size={16} color="#777E90" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
