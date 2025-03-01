import { useEffect, useState } from "react";
import { getNews } from "../services/api";
import Card from "../components/Card";

const TechNewView = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    (async () => {
      const fetchNews = await getNews("technology");
      setNews(fetchNews);
    })();
  }, []);

  return (
    <>
      <h1>Tech News</h1>
      <div>
        {news.length === 0 ? (
          <p>Yükleniyor...</p>
        ) : (
          <div className="container">
            <div className="row">
              {news.map((newsItem, index) => (
                <Card key={index} newsItem={newsItem} />
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default TechNewView;
