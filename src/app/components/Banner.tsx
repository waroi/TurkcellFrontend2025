import Image from 'next/image';
import Link from 'next/link';

const Banner = () => {
  return (
    <div className="banner-wrapper py-5">
      <div className="container">
        <div className="bg-card rounded-4 p-5">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-3">
                Buy & Sell
                <br />
                <span className="text-primary">Crypto Instant</span>
              </h1>
              <p className="lead mb-4">
                Join world's biggest & trusted Exchange. Trade in Bitcoin, Ethereum,
                Ripple and many more currencies.
              </p>
              <Link href="/register" className="btn btn-primary btn-lg px-4">
                Start Trading
              </Link>

              <div className="mt-5">
                <div className="row g-2">
                  <div className="col">
                    <Image
                      src="/images/Profitwell.png"
                      alt="Partner Logo"
                      width={100}
                      height={30}
                      className="img-fluid"
                    />
                  </div>
                  <div className="col">
                    <Image
                      src="/images/ShipBop.png"
                      alt="Partner Logo"
                      width={100}
                      height={30}
                      className="img-fluid"
                    />
                  </div>
                  <div className="col">
                    <Image
                      src="/images/Subbly.png"
                      alt="Partner Logo"
                      width={100}
                      height={30}
                      className="img-fluid"
                    />
                  </div>
                  <div className="col">
                    <Image
                      src="/images/Demio.png"
                      alt="Partner Logo"
                      width={100}
                      height={30}
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="position-relative">
                <Image
                  src="/images/pc.png"
                  alt="Trading Platform"
                  width={800}
                  height={600}
                  className="img-fluid rounded-4 shadow-lg"
                />
                <div
                  className="position-absolute"
                  style={{
                    bottom: '-30px',
                    right: '-30px',
                    zIndex: -1,
                    width: '200px',
                    height: '200px',
                    background: 'rgba(13, 110, 253, 0.1)',
                    borderRadius: '50%',
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
