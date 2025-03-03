import React, { useEffect, useState } from "react";
import { fetchNews } from "../service/api";

export default function HomeCards() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      const generalNews = await fetchNews("general");
      setNews(generalNews.slice(0, 5));
    };

    getNews();
  }, []);

  return (
    <div className="container my-5">
      <h2 className=" mb-4">Featured News</h2>
      <div className="row">
        {news.map((article, index) => (
          <div key={index} className="col-12">
            <div className="card mb-3 bg-light" >
              <div className="row g-0">
                <div className="col-md-4">
                  <img
                    src={article.urlToImage}
                    className="img-fluid rounded-start"
                    alt={article.title}
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{article.title}</h5>
                    <p className="card-text">{article.description}</p>
                    <p className="card-text">
                      <small className="text-body-secondary">{article.publishedAt}</small>
                    </p>
                    <a href={article.url} target="_blank" rel="noopener noreferrer" className="btn btn-info text-white ">
                      Read New
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
