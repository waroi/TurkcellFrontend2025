import React from "react";
import "./listcrypto.scss";
import Image from "next/image";
const ListCrypto = () => {
  return (
    <div className="listcrypto-wrapper">
      <div className="row">
        <div
          className="btn-toolbar mb-2"
          role="toolbar"
          aria-label="Toolbar with button groups"
        >
          <div className="btn-group mr-2" role="group" aria-label="First group">
            <button
              type="button"
              className="btn btn-primary btn-active rounded-pill"
            >
              Crypto
            </button>
            <button type="button" className="mx-2 btn btn-white rounded-pill">
              Defi
            </button>
            <button type="button" className="mx-2 btn btn-white rounded-pill">
              BSC
            </button>
            <button type="button" className="mx-2 btn btn-white rounded-pill">
              NFT
            </button>
            <button type="button" className="mx-2 btn btn-white rounded-pill">
              Metaverse
            </button>
            <button type="button" className="mx-2 btn btn-white rounded-pill">
              Polkadot
            </button>
            <button type="button" className="mx-2 btn btn-white rounded-pill">
              Solana
            </button>
            <button type="button" className="mx-2 btn btn-white rounded-pill">
              Opensea
            </button>
            <button type="button" className="mx-2 btn btn-white rounded-pill">
              Makersplace
            </button>
          </div>
        </div>
        <div className="col col-md-6 col-lg-3 col-sm-12">
          <div className="market-live d-flex flex-column">
            <div className="market-live-icon flex-row ">
              <Image
                src="/assets/header/btc.svg"
                alt="Ethereum"
                width={44}
                height={44}
              />
              <h3 className="market-live-title">Bitcoin</h3>
            </div>

            <div className="market-live-value">$4,267.90</div>
          </div>
        </div>
        <div className="col col-md-6 col-lg-3 col-sm-12">
          <div className="market-live d-flex flex-column">
            <div className="market-live-icon  ">
              <Image
                src="/assets/header/eth.svg"
                alt="Ethereum"
                width={44}
                height={44}
              />
              <h3 className="market-live-title ">Ethereum</h3>
            </div>
            <div className="market-live-value">$4,267.90</div>
          </div>
        </div>
        <div className="col col-md-6 col-lg-3 col-sm-12">
          <div className="market-live d-flex flex-column">
            <div className="market-live-icon  ">
              <Image
                src="/assets/header/tether.svg"
                alt="Ethereum"
                width={44}
                height={44}
              />
              <h3 className="market-live-title ">Tether</h3>
            </div>

            <div className="market-live-value">$4,267.90</div>
          </div>
        </div>
        <div className="col col-md-6 col-lg-3 col-sm-12">
          <div className="market-live d-flex flex-column">
            <div className="market-live-icon flex-row ">
              <Image
                src="/assets/header/bnb.svg"
                alt="Ethereum"
                width={44}
                height={44}
              />
              <h3 className="market-live-title ">BNB BNB/USD</h3>
            </div>

            <div className="market-live-value">$4,267.90</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCrypto;
