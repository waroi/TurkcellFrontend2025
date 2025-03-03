import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const CategoryView = ({ news, setCategory, category }) => {
  const { categoryName } = useParams();
  const [categoryNews, setCategoryNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadCategoryNews = async () => {
      if (!categoryName) return;

      setLoading(true);
      try {
        const newsData = await fetchNews(categoryName);
        setCategoryNews(newsData);
        setError(null);
      } catch (err) {
        console.error("Error loading category news:", err);
        setError("Haberler yüklenirken bir hata oluştu.");
        setCategoryNews([]);
      } finally {
        setLoading(false);
      }
    };

    loadCategoryNews();
  }, [categoryName, fetchNews]);

  if (loading) {
    return <div className="container py-5">Yükleniyor...</div>;
  }

  if (error) {
    return <div className="container py-5 text-danger">{error}</div>;
  }
  return (
    <div className="container py-5">
      <h2>
        Türkiye {categoryName?.charAt(0).toUpperCase() + categoryName?.slice(1)}{" "}
        Haberleri
      </h2>
      {filteredNews?.length > 0 ? (
        filteredNews.map((item) => (
          <div key={item.id || index} className="card mb-3">
            <img src={item.image} className="card-img-top" alt={item.name} />
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <p className="card-text">{item.description}</p>
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Haberi Oku
              </a>
            </div>
          </div>
        ))
      ) : (
        <p>Bu kategoriye ait haber bulunamadı.</p>
      )}
    </div>
  );
};

export default CategoryView;
