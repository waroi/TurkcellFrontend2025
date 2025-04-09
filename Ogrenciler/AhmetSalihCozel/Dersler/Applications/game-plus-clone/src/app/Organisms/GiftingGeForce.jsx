import React from "react";
import Typography from "../Atoms/Typography";
import Button from "../Atoms/Button";

function GiftingGeForce() {
  return (
<section className="flex items-center justify-center bg-[url(/img/nvidia-buy-now-bg.webp)] bg-cover min-h-[400px] w-full">
  <div className="flex flex-col gap-10 items-center justify-center max-w-[600px]">
    <Typography variant="h1" className="text-lime-500 text-center" after={true}>
      Sevdiklerinize GeForce NOW hediye edin!
    </Typography>
    <Typography variant="h4" className="text-center">
      Daha fazla seçeneği keşfedin! GeForce NOW Performance kodu satın
      alarak sevdiklerinize hediye edin.
    </Typography>
    <Button variant="outlined">Şimdi Satın Al</Button>
  </div>
</section>

  );
}

export default GiftingGeForce;
