import React from "react";
import Typography from "../Atoms/Typography";
import Button from "../Atoms/Button";

function GfnDesc() {
  return (
    <section className="flex flex-col items-center p-4 space-y-6">
      <div className="flex items-center justify-evenly w-full h-auto">
        <div className="relative w-full max-w-[800px] min-w-[400px]">
          <img
            src="/img/mac-laptop.png"
            className="w-full h-auto z-10"
            alt="Mac Laptop"
          />
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-2 left-0 w-full h-[85%] object-contain"
          >
            <source
              src="/video/gfn-product-video.5489a257.webm"
              type="video/webm"
            />
            Tarayıcınız bu videoyu desteklemiyor.
          </video>
        </div>
        <div className="p-5 flex flex-col gap-5">
          <Typography variant="h2" className="text-lime-500">
            GeForce NOW Nedir?
          </Typography>
          <Typography
            variant="p"
            className="text-[20px] font-normal max-w-[500px]"
          >
            NVIDIA GeForce NOW powered by GAME+, Türkiye'de ilk ve tek bulut
            tabanlı oyun stream hizmetidir. Doğrudan bulut üzerinden gerçek
            zamanlı oyun deneyimi sunar.
          </Typography>
          <Button variant="outlined" className="w-50 text-center">
            Ayrıntılı Bilgi
          </Button>
        </div>
      </div>
      <div className="w-full h-[1px] opacity-25 bg-gradient-to-r from-black via-white to-black"></div>
    </section>
  );
}

export default GfnDesc;
