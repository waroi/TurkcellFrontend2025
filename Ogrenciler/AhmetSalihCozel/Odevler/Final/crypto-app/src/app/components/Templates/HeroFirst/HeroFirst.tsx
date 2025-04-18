import React from 'react'
import Image from "next/image";
import "./HeroFirst.scss"
import Typography from '../../Atoms/Typography/Typography';
import Button from '../../Atoms/Button/Button';


function HeroFirst() {
    const images = ["profitwell", "shipbob", "subbly", "demio"];

  return (
    <section className="container flex justify-between hero-wrap theme-bg-smooth">
    <div className="flex flex-col gap-48 items-start hero-left-wrap">
      <div className="flex flex-col gap-24">
        <Typography variant="head-1" className="flex-start">Buy & Sell Digital Assets In The Rocket</Typography>
        <Typography variant="body-1">Coin rocket is the easiest, safest, and fastest way to buy & sell crypto asset exchange.</Typography>
      </div>
      <Button variant="primary-button" height={48} className="px-40">Get started now</Button>
      <div className="flex flex-col items-start">
        <Typography variant="head-5" className="mb-20">Our Partners</Typography>
        <div className="flex gap-60">
          {images.map((imageName, index) => (
            <Image
              height={28}
              width={131}
              key={index}
              src={`/svg/${imageName}.svg`}
              alt={`brand ${imageName}`}
            />
          ))}
        </div>
      </div>
    </div>
    <div>
    <Image
              height={570}
              width={448}
              layout="responsive"
              src={`/img/telephone.png`}
              alt="telephone"
            />
    </div>
  </section>
  )
}

export default HeroFirst