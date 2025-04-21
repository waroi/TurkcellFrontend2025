"use client";

import Container from "@/components/Container";
import Image from "next/image";
import Marquee from "@/components/Marquee";
import Button from "@/components/Button";
import Breadcrumb from "@/components/Breadcrumb";
import { useRouter } from "next/navigation";

import imageSell from "@/images/sell.png";
import imageSell2 from "@/images/sell2.png";
import imageSell3 from "@/images/sell3.png";
import imageSell4 from "@/images/sell4.png";
import imageSell5 from "@/images/sell5.png";
import imageSell6 from "@/images/sell6.png";
import imageSell7 from "@/images/sell7.png";

import { useEffect, useState } from "react";

import CurrencySwap from "@/components/CurrencySwap";

export default function Sell() {
  const router = useRouter();

  const [wallet, setWallet] = useState<{ asset: string; free: number }[]>([]);
  const [symbol, setSymbol] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [currencies, setCurrencies] = useState<any>({});

  useEffect(() => {
    fetch("/api/user/wallet")
      .then((response) => response.json())
      .then((response) => setWallet(response.balances));
  }, []);

  useEffect(() => {
    if (!wallet.length) return;

    fetch(
      `/api/currency?symbol=${wallet
        .map((currency) => currency.asset)
        .join(",")}`
    )
      .then((response) => response.json())
      .then((response) => setCurrencies(response.data));
  }, [wallet]);

  const [phase, setPhase] = useState(0);

  return (
    <main>
      <Breadcrumb title="Sell Crypto" />
      <Container className="bg-white dark-black py-5">
        <div className="row py-5">
          <div className="col-3 pe-5">
            <div className="mb-1">
              <Button
                variant="white"
                className="py-2 w-100 text-start"
                onClick={() => router.push("/wallet")}
              >
                <span className="text-black fw-semibold">Overview</span>
              </Button>
            </div>
            <div className="mb-1">
              <Button
                variant="white"
                className="py-2 w-100 text-start"
                onClick={() => router.push("/buy-crypto")}
              >
                <span className="text-black fw-semibold">Buy Crypto</span>
              </Button>
            </div>
            <div>
              <Button
                className="py-2 w-100 text-start"
                onClick={() => router.push("/sell-crypto")}
              >
                <span className="fw-semibold">Sell Crypto</span>
              </Button>
            </div>
          </div>
          <div className="col-9 border-start border-terniary border-2 px-5">
            <div className="ps-5">
              <div className={`pb-3 mb-5 progress-${phase}`}>
                <div className="phase-0">
                  <Image
                    src={imageSell}
                    alt="Process"
                    width={990}
                    height={24}
                  />
                </div>
                <div className="phase-1">
                  <Image
                    src={imageSell2}
                    alt="Process"
                    width={988}
                    height={24}
                  />
                </div>
                <div className="phase-2">
                  <Image
                    src={imageSell3}
                    alt="Process"
                    width={989}
                    height={24}
                  />
                </div>
                <div className="phase-3">
                  <Image
                    src={imageSell4}
                    alt="Process"
                    width={990}
                    height={24}
                  />
                </div>
              </div>
              <div className={`progress-${phase}`}>
                <div className="phase-0">
                  <Image
                    src={imageSell7}
                    alt="Search"
                    width={904}
                    height={192}
                  />
                  <div className="sell-wallet-table mt-5">
                    <table className="table table-hover">
                      <thead>
                        <tr>
                          <th className="text-secondary">#</th>
                          <th className="text-secondary"></th>
                          <th className="text-secondary">Name</th>
                          <th className="text-secondary text-end">Price</th>
                          <th
                            className="text-secondary text-end"
                            style={{ width: "15rem" }}
                          >
                            24%
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {wallet.map(({ asset, free }, index) => (
                          <tr
                            key={index}
                            onClick={() => {
                              setSymbol(asset);
                              setPhase(1);
                            }}
                            style={{ cursor: "pointer" }}
                          >
                            <td>{index}</td>
                            <td>
                              <Image
                                src={`https://raw.githubusercontent.com/reddavis/Crypto-Icons-API/refs/heads/master/public/svg/icon/${(
                                  asset as string
                                ).toLowerCase()}.svg`}
                                alt="Logo"
                                width={32}
                                height={32}
                              />
                            </td>
                            <td>
                              <h5>{asset}</h5>
                              {currencies[asset] && (
                                <span className="text-secondary">
                                  {currencies[asset].name}
                                </span>
                              )}
                            </td>
                            <td className="text-end">
                              <h5>{free}</h5>
                              {currencies[asset] && (
                                <p className="small">
                                  $
                                  {(
                                    currencies[asset].quote.USDT.price + 0.0
                                  ).toFixed(2)}
                                </p>
                              )}
                            </td>
                            <td className="text-end">
                              {currencies[asset] && (
                                <span
                                  className={`text-${
                                    currencies[asset].quote.USDT
                                      .percent_change_24h >= 0
                                      ? "success"
                                      : "danger"
                                  }`}
                                >
                                  {(
                                    currencies[asset].quote.USDT
                                      .percent_change_24h || 0
                                  ).toFixed(2)}
                                  %
                                </span>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="phase-1">
                  <CurrencySwap
                    symbol={symbol}
                    sell
                    onContinue={(value: number) => {
                      setQuantity(value);
                      setPhase(2);
                    }}
                  />
                </div>
                <div className="phase-2">
                  <Image
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      fetch("/api/user/sell", {
                        method: "POST",
                        body: JSON.stringify({ symbol, quantity }),
                      })
                        .then(() => setPhase(3))
                        .catch(() =>
                          alert("Something went wrong, please try again.")
                        )
                    }
                    src={imageSell5}
                    alt="Confirm"
                    width={989}
                    height={1072}
                  />
                </div>
                <div className="phase-3">
                  <Image
                    style={{ cursor: "pointer" }}
                    onClick={() => router.push("/wallet")}
                    src={imageSell6}
                    alt="Complete"
                    width={990}
                    height={941}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Marquee />
    </main>
  );
}
