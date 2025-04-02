import React from "react";
import Button from "../Atoms/Button";
import Typography from "../Atoms/Typography";
import Badge from "../Atoms/Badge";
import Carousel from "../Organisms/Carousel";
import Gift from "../Organisms/Gift";
import GfnGamePc from "../Organisms/GfnGamePc";
import Information from "../Molecules/Information";
import GfnDesc from "../Organisms/GfnDesc";
import GameCatalog from "../Organisms/GameCatalog/GameCatalog";

export default function Home() {
  return (
      <div className="flex flex-col gap-2">
        <Carousel/>
        <Gift/>
        <GfnGamePc/>
        <Information/>
        <GfnDesc/>
        <GameCatalog/>
      </div>
  );
}