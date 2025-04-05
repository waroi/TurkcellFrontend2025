"use client";
import React, { useState, useEffect } from "react";
import CarouselBullets from "../Atoms/CarouselBullets";
import PackagesCarouselData from "../Hooks/PackagesCarouselData";

function PackagesCarousel() {
  const { carouselData, carouselElement } = PackagesCarouselData();
  const [activeElement, setActiveElement] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveElement((prev) => (prev < carouselData.length - 1 ? prev + 1 : 0));
    }, 5000);

    return () => clearInterval(interval);
  }, [carouselData.length]);

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

export default PackagesCarousel;
