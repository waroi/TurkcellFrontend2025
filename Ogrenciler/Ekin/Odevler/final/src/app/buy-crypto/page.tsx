"use client";

import Container from "@/components/Container";
import Image from "next/image";
import Marquee from "@/components/Marquee";
import Button from "@/components/Button";
import Breadcrumb from "@/components/Breadcrumb";
import { useRouter } from "next/navigation";

import imageBuy from "@/images/buy.png";
import imageBuy2 from "@/images/buy2.png";
import imageBuy3 from "@/images/buy3.png";
import imageBuy4 from "@/images/buy4.png";
import imageBuy5 from "@/images/buy5.png";

import { useState } from "react";

import CurrencySwap from "@/components/CurrencySwap";

export default function Buy() {
  const router = useRouter();

  const [phase, setPhase] = useState(0);

  const [quantity, setQuantity] = useState(0);
  const [symbol, setSymbol] = useState("");

  return (
    <main>
      <Breadcrumb title="Buy Crypto" />
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
                className="py-2 w-100 text-start"
                onClick={() => router.push("/buy-crypto")}
              >
                <span className="fw-semibold">Buy Crypto</span>
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
              <div className={`pb-3 mb-5 progress-${phase}`}>
                <div className="phase-0">
                  <Image
                    src={imageBuy}
                    alt="Process"
                    width={810}
                    height={24}
                    style={{ objectFit: "cover", objectPosition: "top" }}
                  />
                </div>
                <div className="phase-1">
                  <Image
                    src={imageBuy2}
                    alt="Process"
                    width={811}
                    height={24}
                  />
                </div>
                <div className="phase-2">
                  <Image
                    src={imageBuy3}
                    alt="Process"
                    width={810}
                    height={24}
                  />
                </div>
              </div>
              <div className={`progress-${phase}`}>
                <div className="phase-0">
                  <CurrencySwap
                    onContinue={({
                      value,
                      symbol,
                    }: {
                      value: number;
                      symbol: string;
                    }) => {
                      setQuantity(value);
                      setSymbol(symbol);
                      setPhase(1);
                    }}
                  />
                </div>
                <div className="phase-1">
                  <Image
                    style={{ cursor: "pointer" }}
                    onClick={() =>
                      fetch("/api/user/buy", {
                        method: "POST",
                        body: JSON.stringify({ symbol, quantity }),
                      })
                        .then(() => setPhase(2))
                        .catch(() =>
                          alert("Something went wrong, please try again.")
                        )
                    }
                    src={imageBuy4}
                    alt="Confirm"
                    width={811}
                    height={1072}
                  />
                </div>
                <div className="phase-2">
                  <Image
                    style={{ cursor: "pointer" }}
                    onClick={() => router.push("/wallet")}
                    src={imageBuy5}
                    alt="Complete"
                    width={810}
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
