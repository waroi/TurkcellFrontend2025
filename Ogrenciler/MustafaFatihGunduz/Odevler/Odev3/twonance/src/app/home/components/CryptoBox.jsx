"use client";
import Button from "@/components/components/Button";
import Image from "next/image";
import useGetCryptos from "@/hooks/useGetCryptos";
const CryptoBox = () => {
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
              <div className="col-md-3" key={index}>
                <div className="d-flex">
                  <Image src={c.image} width={24} height={24} alt={c.symbol} />
                  <p className="text-dark fs-6 fw-bold px-98">{c.name}</p>
                  <p className="text-secondary fs-6 fw-bold">
                    {c.symbol.replace("USDT", "/USDT")}
                  </p>
                </div>
                <div className="d-flex">
                  <p className="text-dark fs-3 fw-bold pe-98">USD</p>
                  <p className="text-dark fs-3 fw-bold">
                    {c.price ? Number(Number(c.price).toFixed(2)) : "Price yok"}{" "}
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

//! NEXT.JS CONFİG Dosyasından yapılandırma yapman gerekiyor IMAGE İçin
//! toFixed . dan sonra 2 değer veriyor değeri istediğin gibi düzelt
export default CryptoBox;
