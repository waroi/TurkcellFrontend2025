"use client";

import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import styles from "./DownloadApp.module.css";

const DownloadApp = () => {
  const t = useTranslations("Home.DownloadApp");
  return (
    <section className={`${styles.wrapper}`}>
      <div className="container d-flex flex-column flex-lg-row align-items-center justify-content-between gap-5 my-5">
        <div className="flex-grow-1">
          <h2 className="fw-bold">{t("title")}</h2>
          <p className="text">{t("description")}</p>

          <div className="mb-3">
            <div className="d-flex gap-2 align-items-center">
              <Image
                src="/global/Frame.png"
                width={20}
                height={20}
                alt="Frame"
              />
              <h6 className="fw-semibold m-0">{t("features.buySell.title")}</h6>
            </div>
            <p className="text ms-4">{t("features.buySell.desc")}</p>
          </div>

          <div>
            <div className="d-flex gap-2 align-items-center">
              <Image
                src="/global/Frame.png"
                width={20}
                height={20}
                alt="Frame"
              />
              <h6 className="fw-semibold m-0">{t("features.control.title")}</h6>
            </div>
            <p className="text ms-4">{t("features.control.desc")}</p>
          </div>

          <div className="d-flex gap-3 mt-3">
            <Image
              src="/downloadApp/googlePlay.png"
              alt={t("download.googlePlay")}
              width={135}
              height={40}
            />
            <Image
              src="/downloadApp/appStore.png"
              alt={t("download.appStore")}
              width={120}
              height={40}
            />
          </div>
        </div>

        <div className="position-relative">
          <Image
            src="/downloadApp/phone.png"
            alt="Phone"
            width={418}
            height={405}
          />
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
