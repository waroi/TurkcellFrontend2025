import React from "react";

function CarouselBullets({ carouselData, activeElement, setActiveElement }) {
  return (
    <div className="flex justify-center gap-3">
      {carouselData.map((carouselItem, index) => {
        return (
          <div
            className={`w-4 h-4 rounded-xl mt-5 cursor-pointer ${index===activeElement?"bg-white":"bg-neutral-500"}`}
            onClick={() => setActiveElement(index)}
            key={index}
          ></div>
        );
      })}
    </div>
  );
}

export default CarouselBullets;
