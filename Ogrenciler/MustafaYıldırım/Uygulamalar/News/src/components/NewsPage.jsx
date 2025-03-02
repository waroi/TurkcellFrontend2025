import { useEffect, useState } from "react";
import { Outlet, useParams, NavLink } from "react-router";
import NewsClient from "../service/newsService";

const NewsPage = () => {
  const { category } = useParams();
  const [news, setNews] = useState([]);

  const categoryNames = {
    general: "Genel",
    sport: "Spor",
    economy: "Ekonomi",
    technology: "Teknoloji",
  };

  useEffect(() => {
    const fetchNews = async () => {
      const data = await NewsClient.getNews(category || "general");
      setNews(data.result || []);
    };

    fetchNews();
  }, [category]); // category değiştiğinde tekrar çalıştır

  return (
    <div className="container mt-4">
      <h2>{categoryNames[category] || "Genel"} Haberleri</h2>
      <div className="btn-group my-3">
        <NavLink to="/news/general" className="btn btn-outline-primary">
          Genel
        </NavLink>
        <NavLink to="/news/sport" className="btn btn-outline-success">
          Spor
        </NavLink>
        <NavLink to="/news/economy" className="btn btn-outline-warning">
          Ekonomi
        </NavLink>
        <NavLink to="/news/technology" className="btn btn-outline-info">
          Teknoloji
        </NavLink>
      </div>
      <Outlet context={{ news }} />
    </div>
  );
};

export default NewsPage;
