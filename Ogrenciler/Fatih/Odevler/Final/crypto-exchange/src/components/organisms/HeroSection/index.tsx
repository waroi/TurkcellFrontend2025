"use client";

import React from "react";
import Image from "next/image";
import Button from "@/components/atoms/Button";
import homeImg from "@/assets/homeImg.png";
import styles from "./HeroSection.module.css";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { useTranslations } from "next-intl";

const getImgPath = (name: string, theme: "light" | "dark") =>
  `/home/${name}${theme === "dark" ? "-dark" : ""}.svg`;

const HeroSection = () => {
  const theme = useSelector((state: RootState) => state.theme.mode);
  const t = useTranslations("Hero");

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.heroInner} container`}>
        <div className={styles.leftContent}>
          <h1 className="fw-bold display-6">{t("title")}</h1>

          <p className={`${styles.text} mb-4`}>{t("description")}</p>

          <div className="w-25">
            <Button variant="primary">{t("cta")}</Button>
          </div>

          <h5 className="fw-semibold mt-5">{t("partners")}</h5>
          <div className="d-flex flex-wrap gap-4 align-items-center justify-content-center justify-content-md-start">
            <Image
              src={getImgPath("profit", theme)}
              width={100}
              height={28}
              alt="Partner 1"
            />
            <Image
              src={getImgPath("ship", theme)}
              width={100}
              height={28}
              alt="Partner 2"
            />
            <Image
              src={getImgPath("subbly", theme)}
              width={100}
              height={28}
              alt="Partner 3"
            />
            <Image
              src={getImgPath("demio", theme)}
              width={100}
              height={28}
              alt="Partner 4"
            />
          </div>
        </div>

        <div className={styles.rightImage}>
          <Image src={homeImg} width={470} height={348} alt="Home Banner" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
