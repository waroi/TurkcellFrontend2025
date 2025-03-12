import { useState } from "react";
import styles from "./components.module.css";
import Link from "next/link";
const HomeCard = ({ blog }) => {
  const [imgSrc, setImgSrc] = useState(
    blog.image || "https://placeholder.pics/svg/400x200"
  );
  return (
    <div>
      <div className="card mb-3">
        <Link
          href={`/blog/${blog.id}`}
          className="text-decoration-none text-dark"
        >
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={imgSrc}
                alt={blog.title}
                width={400}
                height={200}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
                onError={() =>
                  setImgSrc("https://placeholder.pics/svg/400x200")
                }
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <div className="d-flex align-items-center gap-2 meta-info mb-2">
                  <span>
                    <i className="bi bi-tag me-1"></i> {blog.category}
                  </span>
                  <span>•</span>
                  <span>
                    <i className="bi bi-clock me-1"></i> {blog.reading_time}
                  </span>
                </div>
                <h3 className="card-title h5 fw-bold">{blog.title}</h3>
                <p className={`card-text text-muted ${styles.content}`}>
                  {blog.content}
                </p>
                <div className="d-flex align-items-center gap-2 meta-info mt-3">
                  <img
                    src={blog.author.photo || "/placeholder.svg"}
                    alt={blog.author.name}
                    className={`${styles.avatar}`}
                  />
                  <span>{blog.author.name}</span>
                  <span>•</span>
                  <span>{blog.date}</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomeCard;
