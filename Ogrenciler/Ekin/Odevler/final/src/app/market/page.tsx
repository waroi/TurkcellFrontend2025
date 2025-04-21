"use client";

import Image from "next/image";
import imageMarket from "@/images/market.png";
import imageMarket2 from "@/images/market2.png";
import imageMarket3 from "@/images/market3.png";
import Container from "@/components/Container";
import MarketTable from "@/components/MarketTable";

export default function Market() {
  return (
    <main>
      <section
        style={{ backgroundColor: "#3772ff25" }}
        className="dark-black py-5 m5-4"
      >
        <div className="container">
          <div className="row pt-3 pb-5">
            <div className="col-12 col-md-6">
              <h1 className="mb-4">Today’s Cryptocurrency prices</h1>
              <p>
                The global crypto market cap is{" "}
                <span className="fw-semibold text-black">$1.86T</span>
              </p>
            </div>
            <div className="col-12 col-md-6 center pb-5 mb-4">
              <Image src={imageMarket} alt="Market" width={478} height={339} />
            </div>
          </div>
        </div>
        <Image
          src={imageMarket2}
          alt="Crypto List"
          width={1442}
          height={282}
          className="position-absolute start-50"
          style={{ transform: "translate(-50%, -3rem)" }}
        />
      </section>
      <div style={{ height: "15rem" }}></div>
      <Container className="">
        <Image src={imageMarket3} alt="Table" width={1440} height={164} />
        <div className="sell-wallet-table market-table">
          <MarketTable />
        </div>
      </Container>
    </main>
  );
}
