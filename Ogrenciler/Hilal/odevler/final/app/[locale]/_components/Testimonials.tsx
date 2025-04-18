import { useTranslations } from "next-intl";
import ButtonDefault from "@/app/_components/ui/Buttons/ButtonDefault";
import Image from "next/image";
import Avatar from "../../_components/ui/Logos/Avatar";
import Icon from "@/app/_components/ui/Icon";

const Testimonials = () => {
  const t = useTranslations("HomePage");

  return (
    <div className="row mt-9 pb-6">
      <div className="col-sm-12 col-lg-6 d-flex flex-column gap-3 h-100 ">
        <h2 className="display-5 fw-bold">{t("testimonials.title")}</h2>
        <p className="fw-bold">{t("testimonials.content")}</p>
        <p className="text-secondary body3">{t("testimonials.description")}</p>
        <div className="d-flex gap-2 align-items-center">
          {[...Array(3)].map((_, i) => (
            <Avatar key={i} size={32} />
          ))}
          <div>
            <ButtonDefault className="text-primary fw-bold px-2 py-1">
              30+
            </ButtonDefault>
            <span className="caption1 text-secondary ps-2">
              {t("testimonials.reviewsCount")}
            </span>
          </div>
        </div>
      </div>
      <div className="col-lg-6 col-sm-12 quote-card bg-body shadow-sm position-relative gap-3 p-5 rounded  h-100 overflow-hidden d-flex flex-column justify-content-between ">
        <span className="quote position-absolute translate-middle p-3">
          <Icon name="quote" size={"40"} />
        </span>
        <div className="divider position-absolute start-0 end-0 bg-primary bottom-0 h-100 "></div>
        <h5 className="lead fw-semibold">
          “{t("testimonials.testimonial.quote")}”
        </h5>
        <div className="d-flex justify-content-between align-items-center mt-4">
          <div className="d-flex gap-2 align-items-center">
            <Avatar size={48} />
            <div>
              <p className="m-0 fw-bold">
                {t("testimonials.testimonial.author")}
              </p>
              <p className="m-0 text-secondary caption1">
                {t("testimonials.testimonial.position")}
              </p>
            </div>
          </div>
          <Image src="/ipsum.svg" alt="company logo" width={112} height={25} />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
