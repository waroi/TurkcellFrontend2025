"use client";
import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
const Testimonials = () => {
  const { translations } = useLanguage();
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-26 mb-21 ourCostumers">
            <h2 className="text-dark fs-1 fw-bold  mb-11">
              {translations.ourCustomersLove} <br /> {translations.whatWeDo}
            </h2>
            <h6 className="text-dark fs-4 fw-bold mb-93">
              {translations.transformYourIdea}
            </h6>
            <p className="text-secondary fs-6 fw-normal mb-97">
              {translations.establishedFact}
            </p>
            <div className="d-flex mb-16">
              <div className="circleAvatar me-93"></div>
              <div className="circleAvatar me-93"></div>
              <div className="circleAvatar me-93"></div>
            </div>
            <div className="d-flex align-items-center">
              <p className="fs-6 fw-bold text-primary pe-99">30+</p>
              <p className="display-3 text-dark fw-normal">
                {" "}
                {translations.customersReviews}
              </p>
            </div>
          </div>
          <div className="col-md-6 mt-21 mb-21">
            <blockquote className="blockquoteCol fs-3 text-dark fw-bold ps-91  pt-13 pb-91 mb-91 ">
              {translations.blockquoteText}
              <div className="d-flex align-items-center justify-content-between">
                <div className="left-side d-flex mt-91">
                  <div className="circleAvatar me-11"></div>
                  <div className="d-flex flex-column">
                    <h6 className="fs-4 fw-bold text-dark pb-99">
                      Mustafa Fatih Gündüz
                    </h6>
                    <p className="display-2 fw-normal text-secondary">
                      Software Engineer
                    </p>
                  </div>
                </div>
                <div className="right-side">
                  <Image
                    src={"/assets/blockquoteLogo.svg"}
                    width={112}
                    height={25}
                    unoptimized
                    alt="blockquote-logo"
                  />
                </div>
              </div>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
