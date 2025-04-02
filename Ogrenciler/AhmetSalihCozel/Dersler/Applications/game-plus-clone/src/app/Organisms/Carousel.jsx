"use client";
import React, { useState, useEffect } from "react";
import CarouselBullets from "../Atoms/CarouselBullets";
import Image from "next/image";
import Button from "../Atoms/Button";
import Typography from "../Atoms/Typography";
import CarouselData from "../Hooks/CarouselData";

function Carousel() {
  const [activeElement, setActiveElement] = useState(0);
  const carouselData = CarouselData();

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
        {carouselData.map((carouselItem, index) => {
          return (
            <div key={index} className="flex-shrink-0 w-full relative">
              <div className="flex items-center justify-center w-full">
                <div className="relative">
                  <Image
                    height={800}
                    width={1200}
                    src={carouselItem.url}
                    alt={`carousel-image-${index}`}
                    className="w-full h-auto"
                  />
                  <div className="absolute bottom-15 left-10 text-white pl-4">
                    <Typography variant="h2" className="mb-3">{carouselItem.header}</Typography>
                    <Typography variant="p" className="mb-10">{carouselItem.desc}</Typography>
                    <Button className="relative">{carouselItem.buttonText}</Button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
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
