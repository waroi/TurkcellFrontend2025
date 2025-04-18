import Image from "next/image";
import React from "react";

const LoadMoreButton = () => {
  return (
    <div className="text-center mt-4">
      <button className="btn btn-outline-dark rounded-pill px-4">
        <Image src="/global/load.svg" width={15} height={15} alt="Load" />
        <span className="ps-1">Load more</span>
      </button>
    </div>
  );
};

export default LoadMoreButton;
