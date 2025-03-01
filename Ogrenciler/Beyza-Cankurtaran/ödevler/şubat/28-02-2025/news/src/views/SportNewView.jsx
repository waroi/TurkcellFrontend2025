import { useEffect, useState } from "react";
import { getNews } from "../services/api";
import Card from "../components/Card";

const SportNewView = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    (async () => {
      const fetchNews = await getNews("sports");
      setNews(fetchNews);
    })();
  }, []);
  console.log("aa", news);

  return (
    <>
      <h1>Sports News</h1>
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

export default SportNewView;
