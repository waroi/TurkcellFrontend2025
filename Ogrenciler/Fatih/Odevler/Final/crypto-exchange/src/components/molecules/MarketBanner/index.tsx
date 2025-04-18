import React from "react";
import Image from "next/image";

const MarketBanner = () => {
  return (
    <section className="bg-body-secondary py-5">
      <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between gap-4">
        <div className="text-center text-md-start">
          <h2 className="fw-bold mb-2">Today’s Cryptocurrency prices</h2>
          <p className="text-muted mb-0">
            The global crypto market cap is <strong>$1.86T</strong>
          </p>
        </div>

        <div className="flex-shrink-0">
          <Image
            src="/global/marketBanner.svg"
            alt="Market Banner"
            width={380}
            height={300}
            className="img-fluid"
          />
        </div>
      </div>
    </section>
  );
};

export default MarketBanner;
