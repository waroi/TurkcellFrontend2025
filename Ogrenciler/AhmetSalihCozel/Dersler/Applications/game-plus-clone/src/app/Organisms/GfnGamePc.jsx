import React from "react";
import Typography from "../Atoms/Typography";
import Button from "../Atoms/Button";
import Image from "next/image";

function GfnGamePc() {
  return (
    <section className="relative w-full h-[310] gap-3 p-6 bg-black text-white">
      <Image
        width={656}
        height={656}
        className="absolute right-0 bg-no-repeat bg-cover"
        src={"/img/banner-GfnGamePc.webp"}
        alt="Available in multiple platorms"
      />
      <div className="flex flex-col gap-5 relative z-10">
        <Typography variant="h3" className="text-[32px] text-white opacity-75">
          GeForce NOW ile artık her bilgisayar oyun bilgisayarı!
        </Typography>
        <Button variant="outlined" className="mt-4 w-50 text-center">
          İndir ve Oyna
        </Button>
      </div>
    </section>
  );
}

export default GfnGamePc;
