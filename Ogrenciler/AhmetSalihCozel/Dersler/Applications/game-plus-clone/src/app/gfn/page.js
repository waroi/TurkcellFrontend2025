import React from "react";
import Carousel from "../Organisms/Carousel";
import Gift from "../Organisms/Gift";
import GfnGamePc from "../Organisms/GfnGamePc";
import Information from "../Organisms/Information";
import GfnDesc from "../Organisms/GfnDesc";
import GameCatalog from "../Organisms/GameCatalog/GameCatalog";
import PackagesCarousel from "../Organisms/PackagesCarousel";
import GiftingGeForce from "../Organisms/GiftingGeForce";

export default function Home() {
  return (
      <div className="flex flex-col gap-2 overflow-hidden">
        <Carousel/>
        <Gift/>
        <GfnGamePc/>
        <Information/>
        <GfnDesc/>
        <GameCatalog/>
        <PackagesCarousel/>
        <GiftingGeForce/>
      </div>
  );
}