import { Link } from "wouter";
import { useContext } from "react";
import { LanguageContext } from "@/context/LanguageContext";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const { t } = useContext(LanguageContext);

  return (
    <footer className="bg-white dark:bg-neutral-900 border-t border-neutral-200 dark:border-neutral-800 pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M11.9997 2L5.88872 12.5004L11.9997 16.5004L18.1107 12.5004L11.9997 2ZM5.88872 13.5004L11.9997 22.0008L18.1107 13.5004L11.9997 17.5004L5.88872 13.5004Z"></path>
                </svg>
              </div>
              <span className="font-semibold text-lg dark:text-white">
                Rocket
              </span>
            </div>

            <div className="mb-4">
              <p className="flex items-center text-neutral-700 dark:text-neutral-300 font-medium mb-2">
                <span className="mr-1">{t("footer.letsTalk")}</span>
                <span className="text-yellow-500">👋</span>
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 mb-1">
                +98 902 353 2626
              </p>
              <p className="text-neutral-600 dark:text-neutral-400 mb-4">
                ShaNoosesh79@Gmail.Com
              </p>
              <p className="text-neutral-500 dark:text-neutral-500 text-sm">
                {t("footer.copyright")}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold uppercase text-neutral-500 dark:text-neutral-400 text-sm mb-4">
                {t("footer.products")}
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/spot"
                    className="text-neutral-600 dark:text-neutral-400 hover:text-primary dark:hover:text-primary"
                  >
                    Spot
                  </Link>
                </li>
                <li>
                  <Link
                    href="/inverse-perpetual"
                    className="text-neutral-600 dark:text-neutral-400 hover:text-primary dark:hover:text-primary"
                  >
                    {t("footer.inversePerpetual")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/usdt-perpetual"
                    className="text-neutral-600 dark:text-neutral-400 hover:text-primary dark:hover:text-primary"
                  >
                    USDT {t("footer.perpetual")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/exchange"
                    className="text-neutral-600 dark:text-neutral-400 hover:text-primary dark:hover:text-primary"
                  >
                    {t("footer.exchange")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/launchpad"
                    className="text-neutral-600 dark:text-neutral-400 hover:text-primary dark:hover:text-primary"
                  >
                    Launchpad
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pay"
                    className="text-neutral-600 dark:text-neutral-400 hover:text-primary dark:hover:text-primary"
                  >
                    Rocket Pay
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold uppercase text-neutral-500 dark:text-neutral-400 text-sm mb-4">
                {t("footer.services")}
              </h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/buy-crypto"
                    className="text-neutral-600 dark:text-neutral-400 hover:text-primary dark:hover:text-primary"
                  >
                    {t("footer.buyCrypto")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/market"
                    className="text-neutral-600 dark:text-neutral-400 hover:text-primary dark:hover:text-primary"
                  >
                    {t("footer.markets")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/trading-fee"
                    className="text-neutral-600 dark:text-neutral-400 hover:text-primary dark:hover:text-primary"
                  >
                    {t("footer.tradingFee")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/affiliate"
                    className="text-neutral-600 dark:text-neutral-400 hover:text-primary dark:hover:text-primary"
                  >
                    {t("footer.affiliateProgram")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/referral"
                    className="text-neutral-600 dark:text-neutral-400 hover:text-primary dark:hover:text-primary"
                  >
                    {t("footer.referralProgram")}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/api"
                    className="text-neutral-600 dark:text-neutral-400 hover:text-primary dark:hover:text-primary"
                  >
                    API
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-2 dark:text-white">
              {t("footer.newsletters")}
            </h4>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4">
              {t("footer.newsletterDesc")}
            </p>

            <form className="flex mb-4">
              <Input
                type="email"
                placeholder={t("footer.enterEmail")}
                className="flex-1 rounded-r-none focus-visible:ring-primary"
              />
              <Button
                type="submit"
                className="px-4 py-2 bg-primary hover:bg-primary/90 text-white font-medium rounded-l-none"
              >
                {t("footer.submit")}
              </Button>
            </form>

            <div className="flex space-x-4">
              <a
                href="#"
                className="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center text-neutral-500 dark:text-neutral-500 text-sm">
          ©2022 {t("footer.copyright")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
