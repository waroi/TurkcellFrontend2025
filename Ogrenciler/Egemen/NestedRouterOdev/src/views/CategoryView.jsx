import { useParams } from "react-router";
import { useState, useEffect } from "react";
import fetchArticles from "../services/services";
import NewCard from "../components/NewCard";

const CategoryView = () => {
  const { categoryName } = useParams();
  const [articles, setArticles] = useState([]);
  const currentCategory = categoryName || "general";

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
    <div className="container">
      <div className="mt-5 d-flex align-items-center gap-3">
        <h1 className="fs-2 fw-semibold">{currentCategory.toUpperCase()} NEWS</h1>
        <p className="mb-0 fs-5">{articles.length} results found</p>
      </div>
      <div className="row pt-5 g-5 min-vh-100">
        {articles?.map((article) => (
         <NewCard article={article} key={article.key}/>
        ))}
      </div>
    </div>
  );
};

export default CategoryView;
