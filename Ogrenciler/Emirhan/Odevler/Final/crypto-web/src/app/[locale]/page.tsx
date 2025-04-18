"use client";

import { useEffect } from "react";
import useStore from "@/store/useCryptoStore";
import Image from "next/image";
import CoinCard from "@/components/CoinCard";
import CategoryButtons from "@/components/CategoryButtons";
import Button from "@/components/Button";
import Footer from "@/components/Footer";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Coin } from "@/types/types";

async function getCryptoData(): Promise<Coin[]> {
  const res = await fetch("/api/coins");
  return await res.json();
}

export default function HomePage() {
  const { coins, setCoins } = useStore();
  const t = useTranslations();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCryptoData();
      setCoins(data);
      console.log(data);
    };

    fetchData();
  }, [setCoins]);

  return (
    <main>
      <section className="bg-secondary d-flex py-6 pb-10">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6 mb-5 mb-lg-0">
              <h1 className="home-page-title mt-5">
                {t("Buy & Sell Digital Assets In The Rocket")}
              </h1>
              <p className="muted-text">
                {t(
                  "Coin rocket is the easiest, safest, and fastest way to buy & sell crypto asset exchange"
                )}
              </p>
              <div className="d-flex align-items-center my-3">
                <Button className="btn-primary text-white fs-4">
                  {t("Get started now")}
                </Button>
              </div>

              <h4 className="fs-4 fw-bold">{t("Our Partners")}</h4>
              <div className="d-flex flex-wrap gap-3">
                <Image
                  src="/profitwell.svg"
                  width={130}
                  height={28}
                  alt="partner"
                />
                <Image
                  src="/shipbob.svg"
                  width={130}
                  height={28}
                  alt="partner"
                />
                <Image
                  src="/subbly.svg"
                  width={130}
                  height={28}
                  alt="partner"
                />
                <Image src="/demio.svg" width={130} height={28} alt="partner" />
              </div>
            </div>

            <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
              <Image
                src="/buy-sell.png"
                width={570}
                height={450}
                alt="Buy & Sell Illustration"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="position-relative bg-white py-6">
        <div className="buy-sell-absolute w-100 position-absolute start-50 translate-middle-x">
          <div className="container">
            <div className="rounded-4 shadow-lg overflow-hidden">
              <CategoryButtons />
              <div className="row p-4 bg-white">
                {coins.slice(0, 4).map((coin) => (
                  <CoinCard key={coin.id} coin={coin} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="market-update-section">
        <div className="container pb-6 mt-10-sm mt-35-sm">
          <div className="d-flex justify-content-between align-items-center pt-6">
            <h1 className="market-update-title">{t("Market Update")}</h1>
            <Link
              href="/market"
              className="btn rounded-0 btn-white border-bottom fs-4"
            >
              {t("See All Coins")}
            </Link>
          </div>

          <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 my-3">
            <div className="d-flex align-items-center gap-2 flex-wrap">
              <Button
                px="px-3"
                py="py-1"
                className="fs-4 btn-primary text-white"
              >
                {t("Hot")}
              </Button>
              <Button px="px-3" py="py-1" className="fs-4 btn-white text-muted">
                {t("New")}
              </Button>
              <Button
                px="px-3"
                py="py-1"
                className="fs-4 btn-white text-muted d-none d-md-flex"
              >
                DeFi
              </Button>
              <Button
                px="px-3"
                py="py-1"
                className="fs-4 btn-white text-muted d-none d-md-flex"
              >
                NFT
              </Button>
            </div>
            <input
              type="text"
              className="form-control border-start-0 w-25 rounded-pill"
              placeholder={t("Search Coin")}
              aria-label="Search Coin"
            />
          </div>

          <div className="table-responsive mt-4">
            <table className="table align-middle table-borderless">
              <thead>
                <tr>
                  <th className="text-muted d-none d-md-table-cell"></th>
                  <th className="text-muted">#</th>
                  <th className="text-muted">{t("Name")}</th>
                  <th className="text-muted">{t("Last Price")}</th>
                  <th className="text-muted">{t("24h %")}</th>
                  <th className="text-muted d-none d-lg-table-cell">
                    {t("Market Cap")}
                  </th>
                  <th className="text-muted d-none d-lg-table-cell">
                    {t("Last 7 Days")}
                  </th>
                  <th className="text-muted d-none d-lg-table-cell"></th>
                </tr>
              </thead>
              <tbody>
                {coins.map((coin, index) => (
                  <tr key={coin.id}>
                    <td className="d-none d-md-table-cell">
                      <Image
                        src="/star.svg"
                        width={20}
                        height={20}
                        alt="favorite"
                      />
                    </td>
                    <td>{index + 1}</td>
                    <td className="d-flex align-items-center gap-2">
                      <Image
                        src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${coin.id}.png`}
                        width={30}
                        height={30}
                        alt={coin.name}
                      />
                      <div className="d-flex align-items-center gap-3">
                        <span className="fw-semibold">{coin.name}</span>
                        <span
                          className="text-muted text-uppercase"
                          style={{ fontSize: "0.85rem" }}
                        >
                          {coin.symbol}
                        </span>
                      </div>
                    </td>
                    <td className="fw-bold">
                      ${coin.quote.USD.price.toFixed(2)}
                    </td>
                    <td
                      className={
                        coin.quote.USD.volume_change_24h > 0
                          ? "text-success"
                          : coin.quote.USD.volume_change_24h < 0
                          ? "text-danger"
                          : ""
                      }
                    >
                      {coin.quote.USD.volume_change_24h.toFixed(2)}%
                    </td>
                    <td className="fw-bold d-none d-lg-table-cell">
                      ${Math.floor(coin.quote.USD.market_cap).toLocaleString()}
                    </td>
                    <td className="d-none d-lg-table-cell">
                      {coin.quote.USD.volume_change_24h !== 0 && (
                        <Image
                          src={
                            coin.quote.USD.volume_change_24h > 0
                              ? "/market-update-green-chart.png"
                              : "/market-update-red-chart.png"
                          }
                          alt="chart"
                          width={130}
                          height={30}
                        />
                      )}
                    </td>
                    <td className="d-none d-lg-table-cell">
                      <Button className="btn-white border" px="px-3" py="py-1">
                        {t("Trade")}
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="how-it-works-section py-5 text-center">
        <div className="container">
          <h2 className="fw-bold">{t("How It Work")}</h2>
          <p className="text-muted mb-5">
            {t(
              "Stacks is a production-ready library of stackable content blocks built in React Native"
            )}
          </p>
          <div className="row">
            {[
              {
                step: t("STEP 1"),
                title: t("Download"),
                icon: "/bitcoincloud.png",
              },
              {
                step: t("STEP 2"),
                title: t("Connect Wallet"),
                icon: "/bitcoinwallet.png",
              },
              {
                step: t("STEP 3"),
                title: t("Start Trading"),
                icon: "/bitcoinmining.png",
              },
              {
                step: t("STEP 4"),
                title: t("Earn Money"),
                icon: "/bitcoincomparison.png",
              },
            ].map((item, index) => (
              <div className="col-md-3 mb-4" key={index}>
                <div className="step-block p-3">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="mb-3 step-icon"
                  />
                  <h6 className="text-uppercase text-secondary-emphasis">
                    {item.step}
                  </h6>
                  <h5 className="fw-semibold mb-2">{item.title}</h5>
                  <p className="text-muted small">
                    {t(
                      "Stacks is a production-ready library of stackable content blocks built in React Native"
                    )}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="what-is-rockie-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0 text-center">
              <img
                src="/whatisrockie.png"
                alt="Rockie Demo"
                className="img-fluid"
              />
            </div>

            <div className="col-md-6">
              <h3 className="fw-bold mb-3">{t("What Is Rockie")}</h3>
              <p className="text-muted mb-4">
                {t("experience_variety_of_trading_on_bitcoast")}
              </p>

              <div className="mb-4">
                <h6 className="text-black fw-semibold mb-1 d-flex align-items-center gap-2">
                  <Image src="/badge.svg" width={15} height={15} alt="badge" />
                  {t("View real-time cryptocurrency prices")}
                </h6>
                <p className="text-muted mb-3 small">
                  {t("experience_variety_of_trading_on_bitcoast")}
                </p>

                <h6 className="text-black fw-semibold mb-1 d-flex align-items-center gap-2">
                  <Image src="/badge.svg" width={15} height={15} alt="badge" />
                  {t("buy_and_sell_BTC")}
                </h6>
                <p className="text-muted small">
                  {t("experience_variety_of_trading_on_bitcoast")}
                </p>
              </div>

              <Button className="btn-primary text-white">
                {t("Explore More")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="free-money-section pt-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <h2 className="fw-bold mb-3">
                {t("Free Your Money & Invest")} <br />
                {t("With Confident")}
              </h2>
              <p className="text-muted mb-4">
                {t(
                  "With Cryptor Trade, you can be sure your trading skills are matched"
                )}
              </p>

              <div className="mb-3">
                <h6 className="text-black fw-semibold mb-1 d-flex align-items-center gap-2">
                  <Image src="/badge.svg" width={15} height={15} alt="badge" />
                  {t("Buy, Sell, And Trade On The Go")}
                </h6>
                <p className="text-muted small">
                  {t("Manage your holdings from your mobile device")}
                </p>
              </div>

              <div className="mb-4">
                <h6 className="text-black fw-semibold mb-1 d-flex align-items-center gap-2">
                  <Image src="/badge.svg" width={15} height={15} alt="badge" />
                  {t("Take Control Of Your Wealth")}
                </h6>
                <p className="text-muted small">
                  {t(
                    "Rest assured you (and only you) have access to your funds"
                  )}
                </p>
              </div>

              <div className="d-flex gap-2">
                <img
                  src="/playstore.png"
                  alt="Google Play"
                  className="store-badge"
                />
                <img
                  src="/appstore.png"
                  alt="App Store"
                  className="store-badge"
                />
              </div>
            </div>

            <div className="col-md-6 position-relative text-center d-flex align-items-end justify-content-center phone-container">
              <img
                src="/freemoney.png"
                alt="Mobile App"
                className="img-fluid main-phone"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-section container py-6 px-3 bg-white">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0 pe-5">
            <h1 className="fw-bold">
              {t("Our Customers Love")}
              <br />
              {t("What We Do")}
            </h1>
            <h6 className="text-black mt-3">
              {t("Transform Your Ideas Into Reality With Finsweet")}
            </h6>
            <p className="muted-text mt-3">
              {t(
                "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout"
              )}
            </p>
            <div className="d-flex flex-column gap-3">
              <div className="d-flex gap-1">
                <Image
                  src="/pp.jpg"
                  width={40}
                  height={40}
                  alt="Customer"
                  className="rounded-circle me-3"
                />
                <Image
                  src="/pp.jpg"
                  width={40}
                  height={40}
                  alt="Customer"
                  className="rounded-circle me-3"
                />
                <Image
                  src="/pp.jpg"
                  width={40}
                  height={40}
                  alt="Customer"
                  className="rounded-circle me-3"
                />
              </div>
              <span className="text-primary fw-semibold">
                10k+ <span className="text-black">{t("Customer Reviews")}</span>
              </span>
            </div>
          </div>

          <div className="col-md-6 pe-5">
            <div className="testimonial-box p-4 rounded position-relative">
              <p className="mt-3 fs-5 fw-bold">{t("great_course_i_really")}</p>
              <div className="d-flex align-items-center mt-4">
                <Image
                  src="/pp.jpg"
                  width={40}
                  height={40}
                  alt="Customer"
                  className="rounded-circle me-3"
                />
                <div>
                  <strong>Johnny Andro</strong>
                  <div className="text-muted small">
                    {t("Director, Company")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
