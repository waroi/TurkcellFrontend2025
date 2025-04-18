"use client";

import React from "react";
import { FiSearch } from "react-icons/fi";
import styles from "./SearchBox.module.css";

const SearchBox = ({ value, onChange }) => (
  <div className={styles.searchBox}>
    <FiSearch className="me-2" />
    <input
      type="text"
      placeholder="Search Coin"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className={styles.searchInput}
    />
  </div>
);

export default SearchBox;
