"use client";

import React from "react";
import Image from "next/image";
import Button from "@/components/atoms/Button";
import { useTranslations } from "next-intl";
import styles from "./WhatIsRockie.module.css";

const WhatIsRockie = () => {
  const t = useTranslations("Home.WhatIsRockie");

  return (
    <section
      className={`container my-5 d-flex flex-column flex-lg-row align-items-center justify-content-between gap-5 ${styles.wrapper}`}
    >
      <div className="position-relative">
        <Image
          src="/whatIsRockie/IMG (1).png"
          width={600}
          height={400}
          alt="What is Rockie"
          className="img-fluid"
        />
        <Image
          src="/whatIsRockie/Graphic.png"
          width={460}
          height={325}
          alt="Graphic Overlay"
          className={`position-absolute top-0 start-0 ${styles.overlayImage}`}
        />
      </div>

      <div className="flex-grow-1">
        <h2 className="fw-bold">{t("title")}</h2>
        <p className="text">{t("description")}</p>

        {["realtime", "buyandsell"].map((key) => (
          <div className="mb-3" key={key}>
            <div className="d-flex gap-2 align-items-center">
              <Image
                src="/global/Frame.png"
                width={20}
                height={20}
                alt="Frame"
              />
              <h6 className="fw-semibold m-0">{t(`features.${key}.title`)}</h6>
            </div>
            <p className="text ms-4">{t(`features.${key}.desc`)}</p>
          </div>
        ))}

        <div style={{ maxWidth: 200 }}>
          <Button variant="primary">{t("cta")}</Button>
        </div>
      </div>
    </section>
  );
};

export default WhatIsRockie;
