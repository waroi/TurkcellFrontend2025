"use client";

import React from "react";
import Link from "next/link";
import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { useTranslations } from "next-intl";
import EmailInput from "@/components/molecules/EmailInput";
import styles from "./FooterNewsletter.module.css";

const FooterNewsletter = () => {
  const t = useTranslations("Footer");

  return (
    <div className={styles.column}>
      <span className={styles.title}>Newsletter</span>
      <p className="mb-2">
        {t("newsletterDescription", {
          defaultValue:
            "Subscribe our newsletter to get more free design courses and resources.",
        })}
      </p>
      <EmailInput />
      <ul className="list-unstyled d-flex gap-3 mt-3">
        <li>
          <Link href="https://facebook.com">
            <FaFacebookF className={styles.icon} />
          </Link>
        </li>
        <li>
          <Link href="https://instagram.com">
            <FaInstagram className={styles.icon} />
          </Link>
        </li>
        <li>
          <Link href="https://youtube.com">
            <FaYoutube className={styles.icon} />
          </Link>
        </li>
        <li>
          <Link href="https://twitter.com">
            <FaTwitter className={styles.icon} />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterNewsletter;
