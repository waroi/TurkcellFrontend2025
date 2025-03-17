import Link from "next/link";
import React from "react";
import styles from "./card.module.css";
import formatDate from "@/utils/FormatDate";
import H6 from "./atoms/h6_title";
import CardImage from "./atoms/card_image";

const Card = ({ blog }) => {
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-12 d-flex align-items-stretch">
      <Link
        href={`/blog/${blog.id}`}
        className="text-decoration-none w-100 mb-4"
      >
        <div className="card shadow-sm border-0 rounded mb-4 rounded-4 h-100 ">
          <CardImage img={blog?.image} title={blog?.title} />
          <div className="card-body ">
            <div className="card-info d-flex flex-column flex-xl-row justify-content-between mb-2">
              <H6 child={formatDate(blog?.releaseDate)} />
              <H6 child={blog?.author} />
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
