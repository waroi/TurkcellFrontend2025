import { useEffect, useState } from "react";
import { getNews } from "../services/api";
import Card from "../components/Card";

const HealthNewView = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    (async () => {
      const fetchNews = await getNews("health");
      setNews(fetchNews);
    })();
  }, []);
  console.log("aa", news);

  return (
    <>
      <h1>Health News</h1>
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

export default HealthNewView;
