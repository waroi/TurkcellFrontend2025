import { HOW_IT_WORKS_STEPS } from "@/constants";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Col, Row } from "react-bootstrap";

const HowItWorks = () => {
  const t = useTranslations("HomePage.How-it-works");

  return (
    <section className="text-center py-9">
      <div className="py-6">  <h2 className="fw-bold">How It Works</h2>
      <p className="text-secondary mb-5">
        Stacks is a production-ready library of stackable content blocks built in React Native.
      </p></div>
      <Row className="justify-content-center">
        {HOW_IT_WORKS_STEPS.map(({ key, icon }) => (
          <Col
            key={key}
            xs={12}
            sm={6}
            md={3}
            className="text-center d-flex flex-column align-items-center"
          >
            <div
              className="d-flex align-items-center justify-content-center mb-3"
            >
              <Image
                src={icon}
                alt={t(`${key}.title`)}
                width={96}
                height={96}
              />
            </div>
            <p className="text-secondary caption2 fw-bold">
              {t(`${key}.step`)}
            </p>
            <h5 className="fw-bold">{t(`${key}.title`)}</h5>
            <p className="text-secondary body3">{t(`${key}.content`)}</p>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default HowItWorks;
