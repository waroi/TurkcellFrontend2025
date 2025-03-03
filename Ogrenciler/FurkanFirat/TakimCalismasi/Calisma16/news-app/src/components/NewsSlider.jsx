import { useEffect, useState } from "react";
import { fetchNews } from "../service/api";

const NewsSlider = ({ category }) => {
  const [breakingNews, setBreakingNews] = useState([]);

  useEffect(() => {
    fetchNews(category).then((articles) => {
      const sortedNews = articles.sort(
        (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
      );
      setBreakingNews(sortedNews.slice(0, 5));
    });
  }, [category]);

  return (
    
    <div className="container">
        <h2 className="mt-5">Latest News</h2>
      <div
        id="carouselExampleCaptions"
        className="carousel slide "
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          {breakingNews.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : "false"}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <div className="carousel-inner">
          {breakingNews.map((news, index) => (
            <div
              key={index}
              className={`carousel-item ${index === 0 ? "active" : ""}`}
            >
              <a href={news.url} target="_blank">
                <img
                  src={news.urlToImage}
                  className="d-block w-100"
                  alt={news.title}
                />
              </a>
              <div className="carousel-caption d-none d-md-block">
                <h5>{news.title}</h5>
                <p>{news.author}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default NewsSlider;
