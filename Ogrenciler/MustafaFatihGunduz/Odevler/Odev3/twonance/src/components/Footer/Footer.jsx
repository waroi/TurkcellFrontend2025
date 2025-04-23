"use client";
import React from "react";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
const Footer = () => {
  const { translations } = useLanguage();
  return (
    <>
      <section className="upperFooter bg-primary py-12 mt-98">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between">
            <div className="d-flex flex-column">
              <h4 className="display-1 text-white fw-bold">
                {translations.earnUp}
              </h4>
              <p className="text-white fw-normal fs-6">
                {translations.discoverSpesific}
              </p>
            </div>
            <button className="createBtn d-flex align-items-center justify-content-center btn bg-white rounded-pill text-dark fs-6 fw-bold py-11 px-12 h-10 ">
              {translations.createAccount}
            </button>
          </div>
        </div>
      </section>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-4 pt-14 justify-content-center">
              <Image
                src="/assets/logo.svg"
                width={170}
                height={52}
                alt="logo"
              />
              <h6 className="fs-3 text-dark fw-bold mt-97 mb-11">
                {translations.letsTalk}
              </h6>
              <p className="text-dark fw-normal fs-6">+90 531 827 1217</p>
              <p className="text-dark fw-normal fs-6">
                mustafatihgunduz@gmail.com
              </p>
              <p className="text-dark fw-normal fs-6">
                Copyright © 2025 {translations.freeForAll}
              </p>
            </div>
            <div className="col-md-4 pt-14">
              <div className="row align-items-center justify-content-center">
                <div className="col-md-5">
                  <h6 className="display-2 text-dark fw-bold">
                    {translations.products}
                  </h6>
                  <p className="text-secondary fs-6 fw-normal">Spot</p>
                  <p className="text-secondary fs-6 fw-normal">
                    Inverse Perpetual
                  </p>
                  <p className="text-secondary fs-6 fw-normal">
                    USDT Perpetual
                  </p>
                  <p className="text-secondary fs-6 fw-normal">Exchange</p>
                  <p className="text-secondary fs-6 fw-normal">Launchpad</p>
                  <p className="text-secondary fs-6 fw-normal">Binance Pay</p>
                </div>
                <div className="col-md-5">
                  <h6 className="display-2 text-dark fw-bold">Services</h6>
                  <p className="text-secondary fs-6 fw-normal">Buy Crypto</p>
                  <p className="text-secondary fs-6 fw-normal">Markets</p>
                  <p className="text-secondary fs-6 fw-normal">Tranding Fee</p>
                  <p className="text-secondary fs-6 fw-normal">
                    Affiliate Program
                  </p>
                  <p className="text-secondary fs-6 fw-normal">
                    Referral Program
                  </p>
                  <p className="text-secondary fs-6 fw-normal">API</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 pt-14">
              <h6 className="display-1 text-dark fw-bold">
                {translations.newsletter}
              </h6>
              <p className="fs-6 text-secondary fw-normal">
                {translations.subscribeOurNewsletter}
              </p>
              <div className="position-relative w-100 h-auto">
                <input
                  type="text"
                  id="text"
                  placeholder={translations.pleaseEnterEmail}
                  className="form-control rounded-pill"
                />
                <button className="submitBtn btn btn-primary text-white fs-6 fw-bold position-absolute translate-middle-y px-97 py-95 rounded-pill my-99 d-flex align-items-center justify-content-center ">
                  {translations.submit}
                </button>
              </div>
              <div className="brands mt-96">
                <i className="fa-brands fa-facebook ms-97"></i>
                <i className="fa-brands fa-instagram ms-97"></i>
                <i className="fa-brands fa-youtube ms-97"></i>
                <i className="fa-brands fa-twitter ms-97"></i>
              </div>
            </div>
          </div>
          <div className="d-flex align-items-center justify-content-center">
            <p className="text-secondary fw-normal fs-6 py-94">
              Copyright © 2025 {translations.freeForAll}
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
