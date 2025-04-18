"use client";
import Button from "@/components/components/Button";
import Image from "next/image";
import useGetCryptos from "@/hooks/useGetCryptos";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { safeParseFloat } from "../../../utils/safeParseFloat";
const MarketCryptoBox = () => {
  const { onlyFourCrypto } = useGetCryptos();
  return (
    <div>
      <div className="d-flex">
        <Button label="Crypto" />
        <Button label="DeFi" color="white" isBold="true" />
        <Button label="BSC" color="white" isBold="true" />
        <Button label="NFT" color="white" isBold="true" />
        <Button label="Metaverse" color="white" isBold="true" />
        <Button label="Polkadot" color="white" isBold="true" />
        <Button label="Solana" color="white" isBold="true" />
        <Button label="Opensea" color="white" isBold="true" />
        <Button label="Makersplace" color="white" isBold="true" />
      </div>
      <hr />
      <div className="row">
        {onlyFourCrypto.length !== 0 ? (
          onlyFourCrypto.map((c, index) =>
            c && c.symbol && c.image ? (
              <div className="col-md-3 border-right" key={index}>
                <div className="d-flex align-items-center justify-content-between gap-5">
                  <Image src={c.image} width={44} height={44} alt={c.symbol} />
                  <Sparklines
                    data={c.weeklyChange.map((week) => safeParseFloat(week[4]))}
                    width={100}
                    height={20}
                  >
                    <SparklinesLine
                      color={
                        safeParseFloat(c.weeklyChange[6][4]) >
                        safeParseFloat(c.weeklyChange[0][4])
                          ? "green"
                          : "red"
                      }
                    />
                  </Sparklines>
                </div>
                <div className="d-flex align-items-center justify-content-between pt-16 pb-98">
                  <p className="text-dark fs-6 fw-bold px-98">{c.name}</p>
                  <span
                    className={`fw-bold text-white fs-6 badge rounded-pill py-98 px-93 ${
                      c.dailyPercent < 0 ? "bg-danger" : "bg-success"
                    }`}
                  >
                    <div className="d-flex">
                      {c.dailtPercent < 0 ? (
                        <Image
                          src={"/assets/arrowDown.svg"}
                          width={16}
                          height={16}
                          alt="arrow-down"
                        />
                      ) : (
                        <Image
                          src={"/assets/arrowUp.svg"}
                          width={16}
                          height={16}
                          alt="arrow-up"
                        />
                      )}
                      {` ${
                        parseFloat(c.dailyPercent) > 0 ? `+` : ""
                      }${parseFloat(c.dailyPercent).toFixed(2)}%`}
                    </div>
                  </span>
                </div>
                <div className="d-flex algin-items-center justify-content-between">
                  <p className="text-dark fs-3 fw-bold">
                    {`$${
                      c.price ? Number(Number(c.price).toFixed(2)) : "Price yok"
                    }`}
                  </p>
                  <p className="text-secondary fs-6 fw-bold">
                    {c.symbol.split("USDT")}
                  </p>
                </div>
              </div>
            ) : null
          )
        ) : (
          <div className="errorMesage">
            Şu anda herhangi bir kripto para gözükmemektedir, lütfen daha sonra
            tekrar deneyiniz.
          </div>
        )}
      </div>
    </div>
  );
};
export default MarketCryptoBox;
