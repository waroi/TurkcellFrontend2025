import Image from "next/image";
import Button from "./Button";
import { useTranslations } from "next-intl";

function Footer() {
  const t = useTranslations();
  return (
    <footer className="footer">
      <section className="crypto-banner d-flex align-items-center">
        <div className="container d-flex justify-content-between align-items-center flex-wrap text-white py-4">
          <div>
            <h2 className="fw-bold mb-2">
              {t("Earn up to $25 worth of crypto")}
            </h2>
            <p className="mb-0">
              {t(
                "Discover How Specific Cryptocurrencies Work — And Get A Bit Of Each Crypto To Try Out For Yourself"
              )}
            </p>
          </div>
          <div className="mt-4 mt-md-0">
            <Button className="btn-white">{t("Create Account")}</Button>
          </div>
        </div>
      </section>
      <div className="container pt-5">
        <div className="row">
          <div className="col-12 col-md-6 col-lg">
            <div className="mb-4">
              <div className="d-flex align-items-center mb-3">
                <Image src="/image.png" width={32} height={32} alt="logo" />
                <span className="ms-2 fw-bold fs-5">Rocket</span>
              </div>
              <p className="mb-1">{t("Lets talk")}</p>
              <p className="mb-1">{t("phone_number")}</p>
              <p className="mb-1">{t("email_sina_hoseini379_gmail_com")}</p>
              <p className="text-muted mb-0">
                {t("Copyright_2023_Free_For_Earths_People")}
              </p>
            </div>
          </div>

          <div className="col-6 col-md-3 col-lg">
            <h6 className="fw-semibold mb-3">{t("Products")}</h6>
            <ul className="list-unstyled muted-text">
              <li>{t("Spot")}</li>
              <li>{t("Inverse Perpetual")}</li>
              <li>{t("USDT Perpetual")}</li>
              <li>{t("Exchange")}</li>
              <li>{t("Launchpad")}</li>
              <li>{t("Binance Pay")}</li>
            </ul>
          </div>

          <div className="col-6 col-md-3 col-lg">
            <h6 className="fw-semibold mb-3">{t("Services")}</h6>
            <ul className="list-unstyled muted-text">
              <li>{t("Buy Crypto")}</li>
              <li>{t("Markets")}</li>
              <li>{t("Trading Fee")}</li>
              <li>{t("Affiliate Program")}</li>
              <li>{t("Referral Program")}</li>
              <li>{t("API")}</li>
            </ul>
          </div>

          <div className="col-6 col-md-3 col-lg">
            <h6 className="fw-semibold mb-3">{t("Support")}</h6>
            <ul className="list-unstyled muted-text">
              <li>{t("Bybit Learn")}</li>
              <li>{t("Help Center")}</li>
              <li>{t("User Feedback")}</li>
              <li>{t("Submit a Request")}</li>
              <li>{t("API Documentation")}</li>
              <li>{t("Trading Rules")}</li>
            </ul>
          </div>

          <div className="col-6 col-md-3 col-lg">
            <h6 className="fw-semibold mb-3">{t("About Us")}</h6>
            <ul className="list-unstyled muted-text">
              <li>{t("About Bybit")}</li>
              <li>{t("Authenticity Check")}</li>
              <li>{t("Careers")}</li>
              <li>{t("Business Contacts")}</li>
              <li>{t("Blog")}</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="footer-bottom mt-4 py-3">
        <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
          <span className="text-muted small">
            {t("Copyright_2023_Free_For_Earths_People")}
          </span>
          <div className="social-icons d-flex gap-3 mt-2 mt-md-0">
            <a href="#">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
