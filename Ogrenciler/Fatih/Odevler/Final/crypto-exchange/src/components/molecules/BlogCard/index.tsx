"use client";

import Image from "next/image";
import React from "react";

const BlogCard = () => {
  return (
    <div className="col-md-4 mb-4">
      <div className="rounded-4 overflow-hidden">
        <div
          className="d-flex justify-content-center align-items-center rounded-4"
          style={{ backgroundColor: "#D9D9D9", height: 250 }}
        >
          <Image
            src="/global/play-button.svg"
            width={55}
            height={55}
            alt="Play"
          />
        </div>

        <div className="mt-3">
          <span className="badge bg-primary mb-2">LEARN & EARN</span>
          <h6 className="fw-bold">
            Learn about UI8 coin and earn an All-Access Pass
          </h6>

          <div className="d-flex justify-content-between align-items-center text-muted small mt-2">
            <div className="d-flex align-items-center gap-2">
              <span
                className="rounded-circle"
                style={{
                  width: 10,
                  height: 10,
                  backgroundColor: "#00C566",
                }}
              ></span>
              <span className="fw-semibold text-dark">Floyd Buckridge</span>
            </div>
            <span className="text-muted">Feb 03, 2021</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
