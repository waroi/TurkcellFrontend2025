import CoinCard from "@/components/coins/CoinCard";
import { fetchTopCoins } from "@/lib/api";

import Image from "next/image";

import HomeImage from '../../public/Home.svg'
import Frame from '../../public/Frame.svg'
import { Button } from "@/components/atoms/Button";



export default async function HomePage() {
  const coins = await fetchTopCoins();

  return (
    <main className="container py-5">


      <section>
        <div className="container">
          <div className="row">
            <div className="col ">
              <h1 className="fw-semibold">Buy & Sell <br /> Digital Assets In The Rocket</h1>
              <p>Coin rocket is the easiest, safest, and fastest way to buy & sell crypto asset exchange.</p>
              <Button className="btn btn-primary rounded-pill px-4 py-2 my-5">Get started now</Button>
              <h5 className="fw-bold mb-4">Our Partners</h5>
              <Image src={Frame} alt={"Site sponsorlarının logoları"} />
            </div>

            <div className="col">
              <Image src={HomeImage} alt={"Ana sayfa fotografı"} />
            </div>
          </div>
        </div>
      </section>


      <h2 className="mb-4">🚀 Popüler Kripto Paralar</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {coins.map((coin: any) => (
          <div key={coin.id} className="col">
            <CoinCard coin={coin} />
          </div>
        ))}
      </div>
    </main>
  );
}
