"use client";
import React, { useState, useEffect } from "react";
import CarouselBullets from "../Atoms/CarouselBullets";
import CarouselData from "../Hooks/CarouselData";

function Carousel() {
  const [activeElement, setActiveElement] = useState(0);
  const {carouselData, carouselElement} = CarouselData();

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveElement((prev) => (prev < carouselData.length - 1 ? prev + 1 : 0));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-1000 m-auto"
        style={{ transform: `translateX(-${activeElement * 100}%)` }}
      >
        {carouselElement}
      </div>
      <CarouselBullets
        carouselData={carouselData}
        activeElement={activeElement}
        setActiveElement={setActiveElement}
      />
    </section>
  );
}

export default Carousel;
