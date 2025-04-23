import Image from "next/image";

const HowItWork = () => {
  return (
    <div className="container-fluid how-it-work-container">
      <div className="heading-how-it text-center ">
        <h2 className="fw-bold">How It Work</h2>
        <p>
          Stack is a production-ready library of stackable content blocks built
          in React Native
        </p>
      </div>
      <div className="howItImages position-relative">
        <div className="row">
          <div className="col col-md-3">
            <div className="cloud d-flex flex-column align-items-center">
              <Image
                src="/assets/header/cloud.svg"
                alt="cloud"
                width={96}
                height={96}
              />
              <p className="step-number">STEP 1</p>
              <p className="step-title">Download</p>
              <p className="step-description">
                Stacks is a production-ready library of stackable content blocks
                built in React Native.
              </p>
            </div>
          </div>

          <div className="col col-md-3">
            <div className="cloud d-flex flex-column align-items-center">
              <Image
                src="/assets/header/wallet.png"
                alt="wallet"
                width={96}
                height={96}
              />
              <p className="step-number">STEP 2</p>
              <p className="step-title">Connect Wallet</p>
              <p className="step-description">
                Stacks is a production-ready library of stackable content blocks
                built in React Native.
              </p>
            </div>
          </div>

          <div className="col col-md-3">
            <div className="cloud d-flex flex-column align-items-center">
              <Image
                src="/assets/header/mining.png"
                alt="trading"
                width={96}
                height={96}
              />
              <p className="step-number">STEP 3</p>
              <p className="step-title">Start Trading</p>
              <p className="step-description">
                Stacks is a production-ready library of stackable content blocks
                built in React Native.
              </p>
            </div>
          </div>

          <div className="col col-md-3">
            <div className="cloud d-flex flex-column align-items-center">
              <Image
                src="/assets/header/Bitcoin.png"
                alt="bitcoin"
                width={96}
                height={96}
              />
              <p className="step-number">STEP 4</p>
              <p className="step-title">Earn Money</p>
              <p className="step-description">
                Stacks is a production-ready library of stackable content blocks
                built in React Native.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWork;
