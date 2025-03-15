import Link from "next/link";
import React from "react";
import styles from "./card.module.css";
import formatDate from "@/utils/FormatDate";

const Card = ({ blog }) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-12 d-flex align-items-stretch">
      <Link
        href={`/blog/${blog.id}`}
        className="text-decoration-none w-100 mb-4"
      >
        <div className="card shadow-sm border-0 rounded mb-4 rounded-4 h-100 ">
          <img
            src={blog?.image}
            className={`card-img-top object-fit-cover rounded-top-4 img-fluid ${styles.image}`}
            alt={blog?.title}
          />
          <div className="card-body ">
            <div className="card-info d-flex flex-column flex-xl-row justify-content-between mb-2">
              <h6
                className={`card-author badge ${styles.bgGreen} text-dark  rounded-pill px-3 py-1`}
              >
                {formatDate(blog?.releaseDate)}
              </h6>
              <h6
                className={`card-author badge ${styles.bgGreen} text-dark  rounded-pill px-3 py-1`}
              >
                {blog?.author}
              </h6>
            </div>
            <h5 className="card-title">{blog?.title}</h5>
            <p className="card-text">
              {blog?.content?.split(".").slice(0, 1) + "."}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
