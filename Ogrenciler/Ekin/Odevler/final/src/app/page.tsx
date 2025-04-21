"use client";

import Container from "@/components/Container";
import Image from "next/image";
import "@/styles/home.scss";
import Button from "@/components/Button";
import HeaderCrypto from "@/components/home/HeaderCrypto";
import MarketUpdate from "@/components/home/MarketUpdate";
import Marquee from "@/components/Marquee";

export default function Home() {
  return (
    <main>
      <Container className="bg-tertiary py-5 header position-relative dark-black">
        <div className="row">
          <div className="col-12 col-lg-6">
            <h1 className="fw-bold mb-3">
              Buy & Sell Digital Assets In The Rocket
            </h1>
            <p className="mb-5">
              Coin rocket is the easiest, safest, and fastest way to buy & sell
              crypto asset exchange.
            </p>
            <Button className="mb-5">Get started now</Button>
            <h3 className="mb-4">Our Partners</h3>
            <Image src="/partners.png" alt="Partners" width={608} height={28} />
          </div>
          <div className="col-12 col-lg-6">
            <Image src="/home.png" alt="Home" width={570} height={448} />
          </div>
        </div>
        <HeaderCrypto />
      </Container>
      <Container className="bg-white py-5 market-update dark-black">
        <h2 className="mb-3 d-flex align-items-center">
          Market Update
          <span className="ms-auto fs-5 border border-top-0 border-start-0 border-end-0 border-2">
            See All Coins
          </span>
        </h2>
        <MarketUpdate />
      </Container>
      <Container className="bg-tertiary py-5 dark-black">
        <h2 className="text-center mb-3">How It Work</h2>
        <p className="text-center mb-5">
          Stacks is a production-ready library of stackable <br /> content
          blocks built in React Native.
        </p>
        <Image
          src="/how-it-work.png"
          alt="How It Work"
          width={1410}
          height={244}
        />
      </Container>
      <Container className="bg-white py-5 dark-black">
        <div className="row py-5">
          <div className="col-12 col-lg-6 pe-5">
            <Image
              src="/what-is-rockie.png"
              alt="What Is Rockie"
              width={752}
              height={572}
            />
          </div>
          <div className="col-12 col-lg-6 ps-5">
            <div className="ps-5">
              <h2 className="mb-3">What Is Rockie</h2>
              <p className="mb-4">
                Experience a variety of trading on Bitcost. You can use various
                types of coin transactions such as Spot Trade, Futures Trade,
                P2P, Staking, Mining, and margin.
              </p>
              <h3 className="mb-3">
                <Image src="/check.png" alt="Check" width={20} height={20} />{" "}
                View real-time cryptocurrency prices
              </h3>
              <p className="small mb-4">
                Experience a variety of trading on Bitcost. You can use various
                types of coin transactions such as Spot Trade, Futures Trade,
                P2P, Staking, Mining, and margin.
              </p>
              <h3 className="mb-3">
                <Image src="/check.png" alt="Check" width={20} height={20} />{" "}
                Buy and sell BTC, ETH, XRP, OKB, Etc...
              </h3>
              <p className="small mb-4">
                Experience a variety of trading on Bitcost. You can use various
                types of coin transactions such as Spot Trade, Futures Trade,
                P2P, Staking, Mining, and margin.
              </p>
              <Button className="px-5 mt-2">Explore More</Button>
            </div>
          </div>
        </div>
      </Container>
      <Container className="bg-tertiary pt-5 dark-black">
        <div className="row pt-5">
          <div className="col-12 col-lg-6">
            <h2 className="mb-3">Free Your Money & Invest With Confident</h2>
            <p className="mb-4">
              With Cryptor Trade, you can be sure your trading skills are
              matched
            </p>
            <h3 className="mb-3">
              <Image src="/check.png" alt="Check" width={20} height={20} /> Buy,
              Sell, And Trade On The Go
            </h3>
            <p className="small mb-4 ps-4">
              Managa your holdings from your mobile decive
            </p>
            <h3 className="mb-3">
              <Image src="/check.png" alt="Check" width={20} height={20} /> Take
              Control Of Your Wealth
            </h3>
            <p className="small mb-4 ps-4">
              Rest assured you (and only you) have access to your funds
            </p>
            <Image src="/apps.png" alt="Apps" width={271} height={40} />
          </div>
          <div className="col-12 col-lg-6 ps-5">
            <Image
              src="/free-your-money.png"
              alt="Free Your Money & Invest With Confident"
              width={618}
              height={512}
            />
          </div>
        </div>
      </Container>
      <Container className="bg-white py-5 dark-black">
        <div className="row py-5">
          <div className="col-12 col-lg-6">
            <h2 className="mb-3">Our Customers Love What We Do</h2>
            <h3 className="mb-3">
              Transform your idea into reality with finsweet
            </h3>
            <p className="mb-4">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
            <Image src="/members.png" alt="Members" width={168} height={84} />
          </div>
          <div className="col-12 col-lg-6 ps-5">
            <Image
              src="/testimonial.png"
              alt="Testimonial"
              width={682}
              height={340}
            />
          </div>
        </div>
      </Container>
      <Marquee />
    </main>
  );
}
