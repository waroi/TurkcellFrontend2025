"use client";
import {useRouter} from "next/navigation";
import React from "react";
import {useState} from "react";

const Searchbar = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/blog?search=${encodeURIComponent(searchTerm)}`);
    setSearchTerm("");
  };
  return (
    <>
      <form className="d-flex" role="search" onSubmit={handleSubmit}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Ara.."
          aria-label="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn btn-outline-dark" type="submit">
          Ara
        </button>
      </form>
    </>
  );
};

export default Searchbar;
