// app/page.tsx
"use client";

import { useEffect } from "react";
import useStore from "../app/store/useCryptoStore";
import Image from "next/image";
import CoinCard from "@/components/CoinCard";
import CategoryButtons from "@/components/CategoryButtons";
import Button from "@/components/Button";
import Footer from "@/components/Footer";

type Coin = {
  id: number;
  name: string;
  symbol: string;
  quote: {
    USD: {
      price: number;
      volume_change_24h: number;
      market_cap: number;
      percent_change_24h: number;
    };
  };
};

async function getCryptoData(): Promise<Coin[]> {
  const res = await fetch("/api/coins");
  return await res.json();
}

export default function HomePage() {
  const { coins, setCoins } = useStore();
  // const t = useTranslations();

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
                Buy & Sell Digital Assets In The Rocket
              </h1>
              <p className="muted-text">
                Coin rocket is the easiest, safest, and fastest way to buy &
                sell crypto asset exchange.
              </p>
              <div className="d-flex align-items-center my-3">
                <Button className="btn-primary text-white fs-4">
                  Get started now
                </Button>
              </div>

              <h4 className="fs-4 fw-bold">Our Partners</h4>
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
        <div className="container pb-6 mt-10-sm">
          <div className="d-flex justify-content-between align-items-center pt-6">
            <h1 className="market-update-title">Market Update</h1>
            <Button
              className="btn-white border-bottom fs-4"
              rounded="rounded-0"
            >
              See All Coins
            </Button>
          </div>

          <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 my-3">
            <div className="d-flex align-items-center gap-2 flex-wrap">
              {["Hot", "New", "DeFi", "NFT"].map((category, index) => (
                <Button
                  key={category}
                  px="px-3"
                  py="py-1"
                  className={`fs-4 ${
                    index === 0
                      ? "btn-primary text-white"
                      : "btn-white text-muted"
                  }`}
                >
                  {category}
                </Button>
              ))}
            </div>
            <input
              type="text"
              className="form-control border-start-0 w-25 rounded-pill"
              placeholder="Search Coin"
              aria-label="Search Coin"
            />
          </div>

          <div className="table-responsive mt-4">
            <table className="table align-middle table-borderless">
              <thead>
                <tr>
                  <th className="text-muted"></th>
                  <th className="text-muted">#</th>
                  <th className="text-muted">Name</th>
                  <th className="text-muted">Last Price</th>
                  <th className="text-muted">24h %</th>
                  <th className="text-muted d-none d-md-flex">Market Cap</th>
                  <th className="text-muted d-none d-lg-flex">Last 7 Days</th>
                  <th className="text-muted d-none d-lg-flex"></th>
                </tr>
              </thead>
              <tbody>
                {coins.map((coin, index) => (
                  <tr key={coin.id}>
                    <td>
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
                    <td className="fw-bold d-none d-md-flex">
                      ${Math.floor(coin.quote.USD.market_cap).toLocaleString()}
                    </td>
                    <td className="d-none d-lg-flex">
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
                    <td className="d-none d-lg-flex">
                      <Button className="btn-white border" px="px-3" py="py-1">
                        Trade
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
          <h2 className="fw-bold">How It Work</h2>
          <p className="text-muted mb-5">
            Stacks is a production-ready library of stackable content blocks
            built in React Native.
          </p>
          <div className="row">
            {[
              {
                step: "STEP 1",
                title: "Download",
                icon: "/bitcoincloud.png",
              },
              {
                step: "STEP 2",
                title: "Connect Wallet",
                icon: "/bitcoinwallet.png",
              },
              {
                step: "STEP 3",
                title: "Start Trading",
                icon: "/bitcoinmining.png",
              },
              {
                step: "STEP 4",
                title: "Earn Money",
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
                    Stacks is a production-ready library of stackable content
                    blocks built in React Native.
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
              <h3 className="fw-bold mb-3">What Is Rockie</h3>
              <p className="text-muted mb-4">
                Experience a variety of trading on Bitcoast. You can use various
                types of coin transactions such as Spot Trade, Futures Trade,
                P2P, Staking, Mining and margin.
              </p>

              <div className="mb-4">
                <h6 className="text-black fw-semibold mb-1 d-flex align-items-center gap-2">
                  <Image src="/badge.svg" width={15} height={15} alt="badge" />
                  View real-time cryptocurrency prices
                </h6>
                <p className="text-muted mb-3 small">
                  Experience a variety of trading on Bitcoast. You can use
                  various types of coin transactions such as Spot Trade, Futures
                  Trade, P2P, Staking, Mining and Margin.
                </p>

                <h6 className="text-black fw-semibold mb-1 d-flex align-items-center gap-2">
                  <Image src="/badge.svg" width={15} height={15} alt="badge" />
                  Buy and sell BTC, ETH, XRP, OKB, Etc...
                </h6>
                <p className="text-muted small">
                  Experience a variety of trading on Bitcoast. You can use
                  various types of coin transactions such as Spot Trade, Futures
                  Trade, P2P, Staking, Mining and Margin.
                </p>
              </div>

              <Button className="btn-primary text-white">Explore More</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="free-money-section pt-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 mb-4 mb-md-0">
              <h2 className="fw-bold mb-3">
                Free Your Money & Invest <br />
                With Confident
              </h2>
              <p className="text-muted mb-4">
                With Cryptor Trade, you can be sure your trading skills are
                matched
              </p>

              <div className="mb-3">
                <h6 className="text-black fw-semibold mb-1 d-flex align-items-center gap-2">
                  <Image src="/badge.svg" width={15} height={15} alt="badge" />
                  Buy, Sell, And Trade On The Go
                </h6>
                <p className="text-muted small">
                  Manage your holdings from your mobile device
                </p>
              </div>

              <div className="mb-4">
                <h6 className="text-black fw-semibold mb-1 d-flex align-items-center gap-2">
                  <Image src="/badge.svg" width={15} height={15} alt="badge" />
                  Take Control Of Your Wealth
                </h6>
                <p className="text-muted small">
                  Rest assured you (and only you) have access to your funds
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

            <div className="col-md-6 position-relative text-center d-flex align-items-center justify-content-center phone-container">
              <img
                src="/freemoney.png"
                alt="Mobile App"
                className="img-fluid main-phone"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-section container py-6 bg-white">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0 pe-5">
            <h1 className="fw-bold">
              Our Customers Love
              <br />
              What We Do
            </h1>
            <h6 className="text-black mt-3">
              Transform Your Ideas Into Reality With Finsweet
            </h6>
            <p className="muted-text mt-3">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
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
                10k+ <span className="text-black">Customer Reviews</span>
              </span>
            </div>
          </div>

          <div className="col-md-6 pe-5">
            <div className="testimonial-box p-4 rounded position-relative">
              <p className="mt-3 fs-5 fw-bold">
                “Great course I really enjoyed it and the course was way easy to
                learn with very good explanations of the code, I could easily
                understand and develop applications with the knowledge gathered
                during the course.”
              </p>
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
                  <div className="text-muted small">Director, Company</div>
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
