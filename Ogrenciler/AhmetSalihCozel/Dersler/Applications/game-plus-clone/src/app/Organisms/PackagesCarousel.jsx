"use client";
import React, { useState, useEffect } from "react";
import CarouselBullets from "../Atoms/CarouselBullets";
import PackagesCarouselData from "../Hooks/PackagesCarouselData";

function PackagesCarousel() {
  const carouselData = PackagesCarouselData();
  const [activeElement, setActiveElement] = useState(0);
  const [visibleCardCount, setvisibleCardCount] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveElement((prev) =>
        prev < carouselData.length - visibleCardCount ? prev + 1 : 0
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [carouselData.length, visibleCardCount]);

  useEffect(() => {
    const handleResize = () => {
      if (document.body.offsetWidth < 1444) {
        setvisibleCardCount(1);
      } else {
        setvisibleCardCount(3);
      }
    };

    handleResize(); // ilk renderda çalışması için
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative w-full overflow-hidden p-5">
      <div
        className="grid grid-cols-5 transition-transform duration-1000"
        style={{
          transform: `translateX(-${activeElement * (100 / carouselData.length)}%)`,
          width: `${(carouselData.length * 100) / visibleCardCount}%`,
        }}
      >
        {carouselData.map((carouselItem, index) => (
                <div key={index} className="card flex flex-col justify-between flex-col min-h-[600px] bg-neutral-900 rounded-lg mx-5 p-5 gap-5 border border-neutral-700">
                <div className="flex flex-col min-h-[100px]">
                  {carouselItem.header}
                  {carouselItem.headerBottom}
                </div>
                <div className="flex h-full flex-col">
                {carouselItem.body}
                </div>
                <div className="flex flex-col">
                  {carouselItem.viewFeatures}
                  {carouselItem.button}
                </div>
              </div>
        ))}
      </div>

      <CarouselBullets
        carouselData={carouselData}
        activeElement={activeElement}
        setActiveElement={setActiveElement}
        visibleCardCount={visibleCardCount}
      />
    </section>
  );
}

export default PackagesCarousel;
