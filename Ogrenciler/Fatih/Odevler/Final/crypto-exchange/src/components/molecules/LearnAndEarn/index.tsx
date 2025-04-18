import React from "react";
import Image from "next/image";
import Button from "@/components/atoms/Button";
import styles from "./LearnAndEarn.module.css";

const LearnAndEarn = () => {
  const data = Array(3).fill({
    tag: "LEARN & EARN",
    title: "Learn about U18 coin and earn an All-Access Pass",
    author: "Floyd Buckridge",
    date: "Feb 03, 2021",
  });

  return (
    <div className="container py-5">
      <div className="text-center mb-5">
        <h2 className="fw-bold">Learn And Earn</h2>
        <p className="text-muted">
          Stacks is a production-ready library of stackable content blocks built
          in React Native.
        </p>
      </div>

      <div className="row g-4 justify-content-center">
        {data.map((item, i) => (
          <div className="col-md-6 col-lg-4" key={i}>
            <div className="bg-light rounded-4 overflow-hidden">
              <div className="position-relative">
                <div className="ratio ratio-16x9">
                  <div
                    className={`${styles.player} d-flex align-items-center justify-content-center`}
                  >
                    <Image
                      src="/global/play-button.svg"
                      alt="play"
                      width={40}
                      height={40}
                    />
                  </div>
                </div>
              </div>
              <div className="p-3">
                <span className="badge bg-primary mb-2 text-uppercase">
                  {item.tag}
                </span>
                <h6 className="fw-semibold">{item.title}</h6>
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <div className="d-flex align-items-center gap-2">
                    <span
                      className="bg-success rounded-circle"
                      style={{ width: 8, height: 8 }}
                    ></span>
                    <small className="text-muted">{item.author}</small>
                  </div>
                  <small className="text-muted">{item.date}</small>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-center mt-4">
        <div className="w-25">
          <Button variant="outline">Load more</Button>
        </div>
      </div>
    </div>
  );
};

export default LearnAndEarn;
