import Link from "next/link";
import styles from "./components.module.css";

const Banner = (blog) => {
  return (
    <section className="container py-5">
      <div className={`${styles.featuredPost}`}>
        <img
          src="https://placeholder.pics/svg/1200x600"
          alt="Featured post"
          width={1200}
          height={600}
          className="img-fluid w-100"
          style={{ height: "500px", objectFit: "cover" }}
        />
        <div className={`${styles.featuredPostContent}`}>
          <div className="d-flex align-items-center gap-3 mb-2">
            <span className="category-badge">Technology</span>
            <span className="text-white-50 small d-flex align-items-center">
              <i className="bi bi-clock me-1"></i> 5 min read
            </span>
          </div>
          <h2 className="display-6 fw-bold mb-3">
            The Future of Web Development in 2025
          </h2>
          <p className="mb-4 text-white-50" style={{ maxWidth: "700px" }}>
            Exploring the latest trends and technologies shaping the future of
            web development.
          </p>
          <Link
            href="/posts/the-future-of-web-development"
            className="btn btn-dark"
          >
            Read Article
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
