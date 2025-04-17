"use client";

import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Mail } from "lucide-react";
import "./Footer.scss";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__grid">
          <div className="footer__column">
            <div className="footer__logo">
              <svg className="footer__logo-icon" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
              <span className="footer__logo-text">Rocket</span>
            </div>
            <p className="footer__description">
              <strong>Let's talk! 🤙</strong>
              <br /><br />
              +98 902 353 2926
              <br /><br />
              saridas.beyzaa@gmail.com
              <br /><br />
              Copyright © 2023 Free For Earth’s people
            </p>
            <div className="footer__social">
              <a href="#" className="footer__social-link" aria-label="Twitter">
                <svg viewBox="0 0 24 24" className="footer__social-icon">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a href="https://github.com/beyzasaridas" className="footer__social-link" aria-label="GitHub">
                <svg viewBox="0 0 24 24" className="footer__social-icon">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/beyza-saridas/" className="footer__social-link" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" className="footer__social-icon">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer__column">
            <h3 className="footer__heading">{t("common.menu")}</h3>
            <ul className="footer__links">
              <li>
                <Link href="/market" className="footer__links-item">
                  {t("market.title")}
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="footer__links-item">
                  {t("portfolio.title")}
                </Link>
              </li>
              <li>
                <Link href="/watchlist" className="footer__links-item">
                  {t("watchlist.title")}
                </Link>
              </li>
              <li>
                <Link href="/buy-crypto" className="footer__links-item">
                  {t("buySell.buyTitle")}
                </Link>
              </li>
              <li>
                <Link href="/sell-crypto" className="footer__links-item">
                  {t("buySell.sellTitle")}
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer__column">
            <h3 className="footer__heading">{t("footer.aboutUs")}</h3>
            <ul className="footer__links">
              <li>
                <a href="#" className="footer__links-item">
                  {t("footer.aboutUs")}
                </a>
              </li>
              <li>
                <a href="#" className="footer__links-item">
                  {t("footer.contactUs")}
                </a>
              </li>
              <li>
                <a href="#" className="footer__links-item">
                  {t("footer.termsOfService")}
                </a>
              </li>
              <li>
                <a href="#" className="footer__links-item">
                  {t("footer.privacyPolicy")}
                </a>
              </li>
            </ul>
          </div>

          <div className="footer__column">
            <h3 className="footer__heading">{t("footer.newsletter")}</h3>
            <p className="footer__description">{t("footer.subscribeText")}</p>
            <form className="footer__newsletter">
              <div className="footer__newsletter-form">
                <div className="footer__newsletter-input-container">
                  <input
                    type="email"
                    className="footer__newsletter-input"
                    placeholder={t("footer.email")}
                    aria-label={t("footer.email")}
                  />
                  <Mail className="footer__newsletter-icon" />
                </div>
                <button type="submit" className="footer__newsletter-button">
                  {t("footer.subscribe")}
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; Copyright 2023 Free For World People
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
