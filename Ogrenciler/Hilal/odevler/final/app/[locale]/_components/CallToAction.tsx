"use client"
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Container } from "react-bootstrap";
import { useThemeStore } from "../store/ThemeStore";
import MainSurfaceButton from "@/app/_components/ui/Buttons/MainSurfaceButton";

const CallToAction = () => {
  const t = useTranslations("HomePage");
  const {theme}=useThemeStore()

  return (
    <div className="position-relative call-to-action overflow-hidden py-4 d-flex text-main-surface flex-column flex-md-row align-items-center justify-content-between gap-4">
     {theme !=="dark" &&  <Image
        src="/bg-gradient.svg"
        alt="decoration"
        fill
        className="position-absolute top-0 bottom-0 end-0 start-0 w-100 h-100"
      />}
      <Image
        src="/decor-bottom-left.svg"
        alt="decoration"
        width={110}
        height={150}
        className="position-absolute bottom-0 start-0 opacity-25"
      />
      <Image
        src="/decor-top-right.svg"
        alt="decoration"
        width={42}
        height={56}
        className="position-absolute top-0 end-0 opacity-25"
      />
      <Container className="position-relative d-flex justify-content-between align-items-center">
        <div className="flex-1">
          <h3 className="fw-bold">{t("testimonials.cta.title")}</h3>
          <p className="body3 m-0">{t("testimonials.cta.subtitle")}</p>
        </div>
        <MainSurfaceButton className="px-6 py-3">
          {t("testimonials.cta.button")}
        </MainSurfaceButton>
      </Container>
    </div>
  );
};

export default CallToAction;
