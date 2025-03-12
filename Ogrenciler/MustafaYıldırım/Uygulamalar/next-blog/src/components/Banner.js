import Link from "next/link";
import styles from "./components.module.css";

const Banner = (blog) => {
  return (
    <section className="container py-5">
      <div className={`${styles.featuredPost}`}>
        <img
          src="https://media.licdn.com/dms/image/v2/D5612AQHk0x74CwsJ3g/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1731850740495?e=2147483647&v=beta&t=tR2gKn5YJ1e1-x4Sqm-1v7MyxxCxvL9-ve_S0JnQAAE"
          alt="Featured post"
          width={1200}
          height={600}
          className="img-fluid w-100"
          style={{ height: "500px", objectFit: "cover" }}
        />
        <div className={`${styles.featuredPostContent}`}>
          <div className="d-flex align-items-center gap-3 mb-2">
            <span className="category-badge">Teknoloji</span>
            <span className="text-white-50 small d-flex align-items-center">
              <i className="bi bi-clock me-1"></i> 5 dk
            </span>
          </div>
          <h2 className="display-6 fw-bold mb-3">
          2025'te Web Geliştirmenin Geleceği
          </h2>
          <p className="mb-4 text-white-50" style={{ maxWidth: "700px" }}>
          Web geliştirmenin geleceğini şekillendiren en son trendleri ve teknolojileri keşfedin.
          </p>
          <Link
            href="/blog"
            className="btn btn-dark"
          >
            Bloğu Oku
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
