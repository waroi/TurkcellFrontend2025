import Link from "next/link";
import React from "react";
import styles from "./card.module.css";
import formatDate from "@/utils/FormatDate";
import H6 from "./atoms/h6_title";
import CardImage from "./atoms/card_image";

const Card = ({ blog }) => {
  return (
    <Link href={`/blog/${blog.id}`} className="text-decoration-none w-100 mb-4">
      <div className="card shadow-sm border-0 rounded mb-4 rounded-4 h-100 ">
        <CardImage
          img={
            blog?.image ||
            "https://img.freepik.com/free-photo/online-message-blog-chat-communication-envelop-graphic-icon-concept_53876-139717.jpg?t=st=1742213183~exp=1742216783~hmac=100be5f2d27ded3acc28d5d4faf61d2a15ca1d0db600175456cf4bd343536174&w=1060"
          }
          title={blog?.title}
        />
        <div className="card-body ">
          <div className="card-info d-flex flex-column flex-xl-row justify-content-between mb-2">
            <H6 child={formatDate(blog?.releaseDate)} />
            <H6 child={blog?.author || "author"} />
          </div>
          <h5 className="card-title">{blog?.title}</h5>
          <p className="card-text">
            {(blog?.content || "content").split(".").slice(0, 1) + "."}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
