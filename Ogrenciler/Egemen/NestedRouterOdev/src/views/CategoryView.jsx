import { useParams } from "react-router";
import { useState, useEffect } from "react";
import fetchArticles from "../services/services";

const CategoryView = ({ category = null }) => {
  const { categoryName } = useParams();
  const [articles, setArticles] = useState([]);
  const currentCategory = category || categoryName || "general"; // Varsayılan: "general"

  useEffect(() => {
    const getArticles = async () => {
      try {
        const fetchedArticles = await fetchArticles(currentCategory);
        setArticles(fetchedArticles);
      } catch (error) {
        console.error("Hata:", error);
      }
    };
    getArticles();
  }, [currentCategory]);

  return (
    <div className="cotainer">
      <div className="mt-4 d-flex justify-content-center">
        <h1>{currentCategory.toUpperCase()} NEWS</h1>
      </div>
      <div className="row p-5 g-5 mx-4">
        {articles?.map((article) => (
          <div key={article.id} className="card mb-3 col-6">
            <img
              src={article?.image}
              className="card-img-top"
              alt="News image"
            />
            <div className="card-body">
              <h5 className="card-title">{article?.name}</h5>
              <p className="card-text">{article?.description}</p>
              <p className="card-text">
                <small className="text-body-secondary">{article?.date}</small>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryView;
