"use client";

import Container from "@/components/Container";
import Image from "next/image";
import Marquee from "@/components/Marquee";
import Button from "@/components/Button";
import Breadcrumb from "@/components/Breadcrumb";
import { useRouter } from "next/navigation";

import imageWallet from "@/images/wallet.png";

import { useState, useEffect } from "react";

import CurrencySwap from "@/components/CurrencySwap";

export default function Buy() {
  const router = useRouter();

  const [wallet, setWallet] = useState<{ asset: string; free: number }[]>([]);
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

  return (
    <main>
      <Breadcrumb title="Wallet" />
      <Container className="bg-white dark-black py-5">
        <div className="row py-5">
          <div className="col-3 pe-5">
            <div className="mb-1">
              <Button
                className="py-2 w-100 text-start"
                onClick={() => router.push("/wallet")}
              >
                <span className="fw-semibold">Overview</span>
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
                variant="white"
                className="py-2 w-100 text-start"
                onClick={() => router.push("/sell-crypto")}
              >
                <span className="text-black fw-semibold">Sell Crypto</span>
              </Button>
            </div>
          </div>
          <div className="col-9 border-start border-terniary border-2 px-5">
            <div className="ps-5">
              <Image src={imageWallet} alt="Search" width={990} height={168} />
              <div className="sell-wallet-table mt-5">
                <table className="table table-hover">
                  <thead>
                    <tr>
                      <th className="text-secondary">#</th>
                      <th className="text-secondary"></th>
                      <th className="text-secondary">Asset</th>
                      <th className="text-secondary">Earn</th>
                      <th className="text-secondary text-end">On Orders</th>
                      <th className="text-secondary text-end">
                        Available Balance
                      </th>
                      <th className="text-secondary text-end">Total Balance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {wallet.map(({ asset, free }, index) => (
                      <tr key={index}>
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
                        <td>
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
                              % APR
                            </span>
                          )}
                        </td>
                        <td className="text-end">
                          <h5>{free}</h5>
                          {currencies[asset] && (
                            <p className="small">
                              $
                              {(
                                currencies[asset].quote.USDT.price * free
                              ).toFixed(2)}
                            </p>
                          )}
                        </td>
                        <td className="text-end">
                          <h5>{free}</h5>
                          {currencies[asset] && (
                            <p className="small">
                              $
                              {(
                                currencies[asset].quote.USDT.price * free
                              ).toFixed(2)}
                            </p>
                          )}
                        </td>
                        <td className="text-end">
                          <h5>{free}</h5>
                          {currencies[asset] && (
                            <p className="small">
                              $
                              {(
                                currencies[asset].quote.USDT.price * free
                              ).toFixed(2)}
                            </p>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Marquee />
    </main>
  );
}
