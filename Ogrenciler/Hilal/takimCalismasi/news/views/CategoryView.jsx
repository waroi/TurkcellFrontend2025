import React, { useEffect } from "react";
import { useParams, useNavigate, Outlet } from "react-router";
import "../src/App.css";

const CategoryView = ({ news, handleCategory }) => {
  const { categoryName, id } = useParams(); // 🔥 ID varsa detay sayfasındayız demektir!
  const navigate = useNavigate();

  useEffect(() => {
    handleCategory(categoryName);
  }, [categoryName]);

  const handleReadMore = (key) => {
    navigate(`/${categoryName}/${key}`);
  };

  return (
    <div className="container py-5">
      <h2 className="display-6 text-center mb-4">
        Türkiye {categoryName?.charAt(0).toUpperCase() + categoryName?.slice(1)}{" "}
        Haberleri
      </h2>
      <Outlet /> {/* 🔥 Burada detay sayfası render edilecek */}
      {/* 🔥 Eğer `id` varsa (detay sayfasındaysak), aşağıdaki carousel'i gösterme */}
      {!id && (
        <div id="newsCarousel" className="carousel carousel-dark p-5 slide">
          <div className="carousel-indicators">
            {news?.map((_, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#newsCarousel"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-current={index === 0 ? "true" : undefined}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>

          <div className="carousel-inner px-5">
            {news?.map((item, index) => (
              <div
                className={`${
                  index === 0 ? "carousel-item active" : "carousel-item"
                }`}
                key={item.key}
              >
                <div className="card newCard mb-3 rounded-5 mx-5">
                  <div className="row g-0 h-100">
                    <div className="col-md-5">
                      <img
                        src={item?.image}
                        className="img-fluid rounded-start-5 h-100 object-fit-cover"
                        alt="..."
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src =
                            "https://img.freepik.com/free-photo/worker-reading-news-with-tablet_1162-83.jpg?t=st=1741002811~exp=1741006411~hmac=143d56d5aeb08d4c58f740a7b3d6b0e238331a7f66d53e9baf32affd29454558&w=1060"; // Yedek görsel
                        }}
                      />
                    </div>
                    <div className="col-md-7">
                      <div className="card-body p-4 h-100">
                        <a
                          href={item?.url}
                          className="text-decoration-none text-black"
                        >
                          <h2 className="card-title mb-5">{item?.name}</h2>
                        </a>
                        <p className="card-text fs-4 text-truncate">
                          {item?.description}
                        </p>
                        <p className="card-text fs-5">
                          <span className="badge px-3 py-2 rounded-pill text-bg-secondary">
                            Kaynak: {item?.source}
                          </span>
                        </p>
                        <button
                          className="btn btn-success rounded-pill"
                          onClick={() => handleReadMore(item.key)}
                        >
                          Devamını Oku
                        </button>
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
            data-bs-target="#newsCarousel"
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
            data-bs-target="#newsCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default CategoryView;
