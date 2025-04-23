import React from "react";
import Image from "next/image";
const SearchInput = ({ placeholder, rounded = false }) => {
  return (
    <div className="position-relative h-auto d-flex align-items-center justify-content-center">
      <input
        type="search"
        id="search"
        placeholder={placeholder}
        className={`form-control ${
          rounded ? "rounded" : "rounded-pill"
        } text-secondary fs-6 fw-normal ps-13`}
      />
      <Image
        src="/assets/search.svg"
        width={16}
        height={16}
        alt="search"
        className="searchIcon position-absolute"
      />
    </div>
  );
};

export default SearchInput;
