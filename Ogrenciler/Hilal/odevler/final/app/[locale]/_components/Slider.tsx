"use client"
import PrimaryButton from "@/app/_components/ui/Buttons/PrimaryButton";
import React from "react";
import Partners from "./Partners";
import { useTranslations } from "next-intl";
import { useThemeStore } from "../store/ThemeStore";
import Image from "next/image";

const Slider = () => {
  const t = useTranslations("HomePage");
  const {theme} =useThemeStore()
  return (
    <div className="d-flex pb-3">
    <div className="d-flex flex-column gap-7 pt-9 w-75 w-xl-50">
      <div className="d-flex flex-column gap-2 align-items-start justify-content between">
        <h1>{t("slider.title")}</h1>
        <p className="text-secondary mb-4">{t("slider.content")}</p>
        <PrimaryButton className="px-5 py-3">{t("slider.start-button")}</PrimaryButton>
      </div>
      <div className="d-flex flex-column gap-4">
        {" "}
        <h5>{t("slider.partners")}</h5>
        <div className="d-flex gap-8 align-items-center">
          {" "}
          <Partners />
        </div>
      </div>
    </div>
    <div className="d-flex align-items-end justify-content-end  d-none d-xl-flex w-50">
    {theme === "light" ? (
        <Image src="/slider.svg" alt="slider-bg-img"  width="570"
        height="448"  />
      ) : (
        <Image
          src="/slider-dark.svg"
          alt="slider-bg-img"
       width="570"
        height="448"
        />
      )}
    </div>
    </div>);
};

export default Slider;
