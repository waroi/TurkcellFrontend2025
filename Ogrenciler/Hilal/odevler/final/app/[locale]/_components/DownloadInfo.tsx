import Image from "next/image";
import { useTranslations } from "next-intl";
import Icon from "@/app/_components/ui/Icon";

const DownloadInfo = () => {
  const t = useTranslations("HomePage");

  return (
    <section className="d-flex flex-column flex-xl-row align-items-center justify-content-between gap-5 py-3">
      <div className="d-flex flex-column gap-3 w-100 w-lg-50">
        <h2 className="fw-bold">
          {t("app.title")}
        </h2>
        <p className="text-secondary body3">{t("app.description")}</p>

        <div className="d-flex flex-column gap-3 pt-2">
          <div className="d-flex gap-3">
            <Icon name="check" size={"20"} className="text-primary mt-1" />
            <div>
              <p className="fw-bold m-0">{t("app.features.trade.title")}</p>
              <p className="caption1 text-secondary m-0">
                {t("app.features.trade.description")}
              </p>
            </div>
          </div>
          <div className="d-flex gap-3">
            <Icon name="check" size={"20"} className="text-primary mt-1" />
            <div>
              <p className="fw-bold m-0">{t("app.features.control.title")}</p>
              <p className="caption1 text-secondary m-0">
                {t("app.features.control.description")}
              </p>
            </div>
          </div>
        </div>

        <div className="d-flex gap-3 pt-3">
          <Image src="/google-play.svg" alt="Google Play" width={130} height={40} />
          <Image src="/app-store.svg" alt="App Store" width={130} height={40} />
        </div>
      </div>
      <div className="w-100 w-lg-50 position-relative d-flex justify-content-center">
        <Image
          src="/mobile.svg"
          alt="phone-img"
          width={618}
          height={512}
          className="img-fluid"
        />
      </div>
    </section>
  );
};

export default DownloadInfo;
