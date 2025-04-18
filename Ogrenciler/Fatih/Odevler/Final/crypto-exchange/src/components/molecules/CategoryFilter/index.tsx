"use client";

import React from "react";
import styles from "./CategoryFilter.module.css";

const CategoryFilter = ({
  categories,
  activeIndex,
  onSelect,
}: {
  categories: string[];
  activeIndex: number;
  onSelect: (index: number) => void;
}) => {
  return (
    <div className="d-flex gap-3 flex-wrap">
      {categories.map((cat, idx) => (
        <button
          key={cat}
          className={`${styles.categoryButton} ${
            idx === activeIndex ? styles.categoryActive : ""
          }`}
          onClick={() => onSelect(idx)}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
