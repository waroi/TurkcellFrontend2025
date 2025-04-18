"use client";

import React from "react";

const categories = [
  "View All",
  "Learn & Earn",
  "Metaverse",
  "Energy",
  "NFT",
  "Gaming",
  "Music",
];

const BlogFilterTabs = () => {
  return (
    <div className="d-flex flex-wrap align-items-center gap-4 mb-4">
      {categories.map((cat) => (
        <button
          key={cat}
          className={`btn text-decoration-none rounded-5 ${
            cat === "View All" ? "btn-primary" : "btn-link text-dark"
          }`}
        >
          {cat}
        </button>
      ))}
      <input
        type="search"
        className="form-control ms-auto"
        placeholder="Search Post"
        style={{ maxWidth: 200 }}
      />
    </div>
  );
};

export default BlogFilterTabs;
