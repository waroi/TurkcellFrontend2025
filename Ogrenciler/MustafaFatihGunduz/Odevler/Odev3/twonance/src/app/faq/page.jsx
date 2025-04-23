"use client";
import React from "react";
import AuthContainer from "../../components/components/AuthContainer";
import Button from "../../components/components/Button";
import { useLanguage } from "@/context/LanguageContext";
const FAQ = () => {
  const { translations } = useLanguage();
  return (
    <div>
      <AuthContainer authType={translations.faq} />
      <section>
        <div className="container">
          <div className="d-flex flex-column align-items-center justify-content-center">
            <h2 className="fs-1 fw-bold text-dark pt-21 pb-11">
              {translations.faqLong}
            </h2>
            <p className="fs-4 text-secondary fw-normal pb-15">
              {translations.learnHowToStart}
            </p>
            <div className="accordion accordion-flush" id="twonanceFAQ">
              <div className="accordion-item">
                <h2 className="accordion-header" id="whatIsTwonance">
                  <button
                    className="accordion-button text-dark fw-bold fs-3 py-91"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#whatIsTwonanceCollapse"
                    aria-expanded="true"
                    aria-controls="whatIsTwonanceCollapse"
                  >
                    {translations.whatIsTwonance}
                  </button>
                </h2>
                <div
                  id="whatIsTwonanceCollapse"
                  className="accordion-collapse collapse show"
                  aria-labelledby="whatIsTwonance"
                  data-bs-parent="#twonanceFAQ"
                >
                  <div className="accordion-body text-secondary fs-4 fw-normal pt-16">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Tellus aliquam parturient erat id vel, condimentum a,
                    hendrerit egestas. Auctor cras diam, dui pulvinar elit.
                    Egestas feugiat gravida in imperdiet facilisi tortor ac
                    ultrices venenatis.
                    <Button
                      label={"Learn More"}
                      padding={"px-11 py-93 mb-91"}
                      color="white"
                      textColor="text-dark"
                      isBold={true}
                    />
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="howToStart">
                  <button
                    className="accordion-button collapsed text-dark fw-bold fs-3 py-91"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#howToStartCollapse"
                    aria-expanded="false"
                    aria-controls="howToStartCollapse"
                  >
                    {translations.howToStartTwonance}
                  </button>
                </h2>
                <div
                  id="howToStartCollapse"
                  className="accordion-collapse collapse"
                  aria-labelledby="howToStart"
                  data-bs-parent="#twonanceFAQ"
                >
                  <div className="accordion-body text-secondary fs-4 fw-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Tellus aliquam parturient erat id vel, condimentum a,
                    hendrerit egestas. Auctor cras diam, dui pulvinar elit.
                    Egestas feugiat gravida in imperdiet facilisi tortor ac
                    ultrices venenatis.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="purchase">
                  <button
                    className="accordion-button collapsed text-dark fw-bold fs-3 py-91"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#purchaseCollapse"
                    aria-expanded="false"
                    aria-controls="purchaseCollapse"
                  >
                    {translations.whatCryptoCurrencies}
                  </button>
                </h2>
                <div
                  id="purchaseCollapse"
                  className="accordion-collapse collapse"
                  aria-labelledby="purchase"
                  data-bs-parent="#twonanceFAQ"
                >
                  <div className="accordion-body text-secondary fs-4 fw-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Tellus aliquam parturient erat id vel, condimentum a,
                    hendrerit egestas. Auctor cras diam, dui pulvinar elit.
                    Egestas feugiat gravida in imperdiet facilisi tortor ac
                    ultrices venenatis.
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="buyAndSell">
                  <button
                    className="accordion-button collapsed text-dark fw-bold fs-3 py-91 mb-21"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#buyAndSellCollapse"
                    aria-expanded="true"
                    aria-controls="buyAndSellCollapse"
                  >
                    {translations.howToBuyAndSell}
                  </button>
                </h2>
                <div
                  id="buyAndSellCollapse"
                  className="accordion-collapse collapse"
                  aria-labelledby="buyAndSell"
                  data-bs-parent="#twonanceFAQ"
                >
                  <div className="accordion-body text-secondary fs-4 fw-normal">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Tellus aliquam parturient erat id vel, condimentum a,
                    hendrerit egestas. Auctor cras diam, dui pulvinar elit.
                    Egestas feugiat gravida in imperdiet facilisi tortor ac
                    ultrices venenatis.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
