import React from "react";
import Typography from "../../Atoms/Typography";
import './GameCatalog.css';
import Button from "@/app/Atoms/Button";

const images = [
  { className: "bgimg1" },
  { className: "bgimg2" },
  { className: "bgimg3" },
];

function GameCatalog() {
  return (
    <section className="overflow-hidden">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center gap-3 px-5">
          <Typography variant="h2" className="text-lime-500" after={true}>
            Oyun Kataloğu
          </Typography>
          <Typography variant="p" className="text-[20px] font-normal">
            En Popüler ve Yeni Oyunlar GeForce NOW'da Seni Bekliyor!
          </Typography>
        </div>
        <div className="flex flex-col justify-between gap-2 p-3 mb-5 overflow-hidden">
          {images.map((image, index) => (
            <div key={index} className="block overflow-hidden w-[80vw] md:w-[60vw] lg:w-[70vw] xl:w-[80vw]">
              <div className="block h-[160px] w-[3000px] overflow-hidden">
                <div
                  alt={`Afiş ${index + 1}`}
                  className={image.className}
                />
              </div>
            </div>
          ))}
        </div>
        <Button variant="outlined">Tüm Oyunları Gör</Button>
      </div>
    </section>
  );
}

export default GameCatalog;
