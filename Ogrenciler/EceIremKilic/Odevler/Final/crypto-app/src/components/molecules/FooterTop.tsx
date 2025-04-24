"use client";
import React from "react";
import { Container, Image, NavLink } from "react-bootstrap";
import { useQuickLinks } from "../organisms/Footer/QuickLinks";
import { useTranslations } from "next-intl";

const FooterTop = () => {
  const t = useTranslations();
  const QuickLinks = useQuickLinks();
  return (
    <Container className="py-5">
      <div className="row">
        <div className="col-lg-4">
          <Image src="/Logo.png" className="mb-3" />
          <h4 className="mb-3">{t("contact.subtitle")} 🤙</h4>
          <p>+98 902 353 2926</p>
          <p>sinahosseini379@gmail.com</p>
          <p>{t("contact.copyright")}</p>
        </div>
        <div className="col-lg-8">
          <div className="row">
            <div className="col-md-3 col-sm-6 col-12">
              <h6 className="mb-3 fw-bold">
                {t("contact.sections.products.title")}
              </h6>
              {QuickLinks[0].links.map((link, index) => (
                <NavLink key={index}>
                  <p>{link}</p>
                </NavLink>
              ))}
            </div>
            <div className="col-md-3 col-sm-6 col-12">
              <h6 className="mb-3 fw-bold">{QuickLinks[1].header}</h6>
              {QuickLinks[1].links.map((link, index) => (
                <NavLink key={index}>
                  <p>{link}</p>
                </NavLink>
              ))}
            </div>
            <div className="col-md-3 col-sm-6 col-12">
              <h6 className="mb-3 fw-bold">{QuickLinks[2].header}</h6>
              {QuickLinks[2].links.map((link, index) => (
                <NavLink key={index}>
                  <p>{link}</p>
                </NavLink>
              ))}
            </div>
            <div className="col-md-3 col-sm-6 col-12">
              <h6 className="mb-3 fw-bold">{QuickLinks[3].header}</h6>
              {QuickLinks[3].links.map((link, index) => (
                <NavLink key={index}>
                  <p>{link}</p>
                </NavLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default FooterTop;
