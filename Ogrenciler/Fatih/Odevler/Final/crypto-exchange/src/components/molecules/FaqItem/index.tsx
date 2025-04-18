"use client";

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Button from "@/components/atoms/Button";
import type { FaqItemProps } from "@/types/global";
import styles from "./FaqItem.module.css";

const FaqItem = ({ question, answer, defaultOpen = false }: FaqItemProps) => {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-bottom py-4">
      <div
        className="d-flex justify-content-between align-items-center cursor-pointer"
        onClick={() => setOpen(!open)}
        style={{ cursor: "pointer" }}
      >
        <h6 className={`${styles.title} fw-semibold mb-0`}>{question}</h6>
        {open ? <FaChevronUp /> : <FaChevronDown />}
      </div>

      {open && (
        <div className={`${styles.text} mt-3`}>
          <p>
            {answer ||
              `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus
            aliquam parturient erat id vel.`}
          </p>
          <div className="w-25">
            <Button variant="outline">Learn more</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FaqItem;
