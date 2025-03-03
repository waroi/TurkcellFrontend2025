import { useParams } from "react-router";
import { useState, useEffect } from "react";
const LanguageView = () => {
  const { id } = useParams();

  const [news, setNews] = useState([]);
  const [country, setCountry] = useState(id);
  const [topic, setTopic] = useState("general");

  useEffect(() => {
    fetchNews(country, topic);
    console.log(country);
  }, []);

  useEffect(() => {
    setCountry(id);
    console.log(id);
  }, [id]);

  useEffect(() => {
    fetchNews(country, topic);
  }, [country, topic]);

  const fetchNews = (country, topic) => {
    fetch(
      `https://api.collectapi.com/news/getNews?country=${country}&tag=${topic}`,
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: "apikey 3v5NN9t6MJdnyc03bxe3sl:52MlUT5x0QEWCCA3PiURTZ",
        },
      }
    )
      .then((response) => response.json()) // response.json() return edilmeli
      .then((result) => {
        console.log("API Response:", result);
        setNews(result.result); // Eğer veri "result" içinde geliyorsa
      })
      .catch((error) => {
        console.error("API Hatası:", error);
      });
  };
  return (
    <>
      LANGUAGE {id}
      {/* <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          {news.map((_, index) => (
            <button
              key={index}
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to={index}
              className={index === 0 ? "active" : ""}
              aria-current={index === 0 ? "true" : undefined}
              aria-label={`Slide ${index + 1}`}
            ></button>
          ))}
        </div>

        <div className="carousel-inner">
          {news.map((item, index) => (
            <div
              className={`${
                item.key == 0 ? "carousel-item active" : "carousel-item"
              }`}
              key={item.key}
            >
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={item?.image}
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{item?.name}</h5>
                      <p className="card-text">{item?.description}</p>
                      <p className="card-text">
                        <small className="text-body-secondary">
                          Kaynak: {item?.source}
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
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
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div> */}
    </>
  );
};

export default LanguageView;
