"use client";
import React, { useEffect, useState } from "react";
import Typography from "../Atoms/Typography";
import BootIcon from "../Atoms/BootIcon";

function GameFilterSideBar() {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);
  const [isCategoriesClosed, setCategoriesClosed] = useState(false);
  const [isPlatformClosed, setPlatformClosed] = useState(false);

  const handleCategorieCheckboxChange = (category) => {
    setSelectedCategories((prevSelectedCategories) => {
      if (prevSelectedCategories.includes(category)) {
        return prevSelectedCategories.filter((item) => item !== category);
      } else {
        return [...prevSelectedCategories, category];
      }
    });
  };

  const handlePlatformCheckboxChange = (category) => {
    setSelectedPlatforms((prevSelectedPlatforms) => {
      if (prevSelectedPlatforms.includes(category)) {
        return prevSelectedPlatforms.filter((item) => item !== category);
      } else {
        return [...prevSelectedPlatforms, category];
      }
    });
  };

  useEffect(() => {}, [
    selectedCategories,
    selectedPlatforms,
    isCategoriesClosed,
    isPlatformClosed,
  ]);

  const platforms = [
    "Steam",
    "Ubisoft Connect",
    "Epic Games",
    "Xbox",
    "GOG",
    "EA App",
    "Diğer",
  ];

  const gameCategories = [
    "Basit Eğlence",
    "Bulmaca",
    "Strateji",
    "Macera",
    "Canlandırma",
    "Simülasyon",
    "Dövüş oyunu",
    "Yarış",
    "Aile Dostu",
    "Platform",
    "Spor",
    "Bağımsız",
    "Aksiyon",
    "Oynaması Ücretsiz",
    "MMO",
    "Demo",
    "FPS",
    "Arcade",
    "MOBA",
  ];

  return (
    <div className="min-w-[300px] w-[400px] bg-black flex flex-col gap-5 pl-10 py-5">
      <div
        onClick={() => setPlatformClosed(!isPlatformClosed)}
        className="flex justify-between"
      >
        <Typography variant="h4" className="">
          Platform
        </Typography>
        {isPlatformClosed ? (
          <BootIcon iconName={"chevron-up"} size={20} />
        ) : (
          <BootIcon iconName={"chevron-down"} size={20} />
        )}
      </div>

      <ul className="flex flex-col gap-5">
        {!isPlatformClosed &&
          platforms.map((gamePlatform) => (
            <li key={gamePlatform}>
              <label className="flex items-center gap-5 font-semibold">
                <div className="relative flex items-center">
                  <input
                    className="peer h-6 w-6 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-neutral-500 checked:bg-lime-600 checked:border-lime-600"
                    type="checkbox"
                    value={gamePlatform}
                    checked={selectedPlatforms.includes(gamePlatform)}
                    onChange={() => handlePlatformCheckboxChange(gamePlatform)}
                  />
                  {selectedPlatforms.includes(gamePlatform) && (
                    <BootIcon
                      iconName={"check-lg"}
                      size={"20"}
                      className="absolute left-0.5 bot-0"
                    />
                  )}
                </div>
                {gamePlatform}
              </label>
            </li>
          ))}
      </ul>

      <div
        onClick={() => setCategoriesClosed(!isCategoriesClosed)}
        className="flex justify-between"
      >
        {" "}
        <Typography variant="h4">Oyun Türü</Typography>
        {isCategoriesClosed ? (
          <BootIcon iconName={"chevron-up"} size={20} />
        ) : (
          <BootIcon iconName={"chevron-down"} size={20} />
        )}
      </div>
      <ul className="flex flex-col gap-5">
        {!isCategoriesClosed &&
          gameCategories.map((gameCategory) => (
            <li key={gameCategory}>
              <label className="flex items-center gap-5">
                <div className="relative flex items-center">
                  <input
                    className="peer h-6 w-6 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-neutral-500 checked:bg-lime-600 checked:border-lime-600"
                    type="checkbox"
                    value={gameCategory}
                    checked={selectedCategories.includes(gameCategory)}
                    onChange={() => handleCategorieCheckboxChange(gameCategory)}
                  />
                  {selectedCategories.includes(gameCategory) && (
                    <BootIcon
                      iconName={"check-lg"}
                      size={"20"}
                      className="absolute left-0.5 bot-0"
                    />
                  )}
                </div>
                {gameCategory}
              </label>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default GameFilterSideBar;
