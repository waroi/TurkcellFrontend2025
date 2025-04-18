import Button from "@/components/Button";
import Image from "next/image";

export default function HeaderCrypto() {
  return (
    <div className="header-crypto position-absolute w-100">
      <div className="container bg-white dark-black rounded-4 py-3 px-4 shadow">
        <div className="px-2">
          <div className="center justify-content-start text-black fw-semibold">
            <Button className="px-3">Crypto</Button>
            <span>DeFi</span>
            <span>BSC</span>
            <span>NFT</span>
            <span>Metaverse</span>
            <span>Polkadot</span>
            <span>Solana</span>
            <span>Opensea</span>
            <span>Makersplace</span>
          </div>
          <hr />
          <div className="row row-cols-4 g-5">
            <div className="col">
              <div className="p-4">
                <div className="crypto-name mb-2">
                  <Image src="/btc.png" alt="BTC" width={24} height={24} />
                  Bitcoin
                  <span>BTC/USD</span>
                </div>
                <div className="fs-4 fw-bold mb-2">USD 46,168.95</div>
                <div>
                  36,641.20
                  <span className="badge text-bg-danger rounded-pill ms-2">
                    -0.79%
                  </span>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="p-4">
                <div className="crypto-name mb-2">
                  <Image
                    src="/ethereum.png"
                    alt="Ethereum"
                    width={24}
                    height={24}
                  />
                  Bitcoin
                  <span>BTC/USD</span>
                </div>
                <div className="fs-4 fw-bold mb-2">USD 46,168.95</div>
                <div>
                  36,641.20
                  <span className="badge text-bg-danger rounded-pill ms-2">
                    -0.79%
                  </span>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="p-4">
                <div className="crypto-name mb-2">
                  <Image
                    src="/tether.png"
                    alt="Tether"
                    width={24}
                    height={24}
                  />
                  Bitcoin
                  <span>BTC/USD</span>
                </div>
                <div className="fs-4 fw-bold mb-2">USD 46,168.95</div>
                <div>
                  36,641.20
                  <span className="badge text-bg-danger rounded-pill ms-2">
                    -0.79%
                  </span>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="p-4">
                <div className="crypto-name mb-2">
                  <Image src="/BNB.png" alt="BNB" width={24} height={24} />
                  Bitcoin
                  <span>BTC/USD</span>
                </div>
                <div className="fs-4 fw-bold mb-2">USD 46,168.95</div>
                <div>
                  36,641.20
                  <span className="badge text-bg-danger rounded-pill ms-2">
                    -0.79%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
