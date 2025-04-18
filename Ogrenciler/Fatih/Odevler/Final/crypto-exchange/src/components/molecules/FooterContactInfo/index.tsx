"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const FooterContactInfo = () => {
  const t = useTranslations("Footer");
  const theme = useSelector((state: RootState) => state.theme.mode);

  const logoSrc =
    theme === "dark" ? "/global/logo-dark.png" : "/global/logo.svg";

  return (
    <div className="d-flex flex-column gap-2">
      <Link
        className="navbar-brand d-flex align-items-center gap-2 mb-2"
        href="/"
      >
        <Image src={logoSrc} width={112} height={30} alt="Logo" />
      </Link>
      <span>{t("letsTalk")}</span>
      <span>+98 902 353 2926</span>
      <span>Sinahosseini379@gmail.com</span>
      <small className="mt-2">{t("copyright")}</small>
    </div>
  );
};

export default FooterContactInfo;
