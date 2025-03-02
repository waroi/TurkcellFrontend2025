import { useEffect, useState } from "react";
import { getNews } from "../services/api";
import Card from "../components/Card";
import Banner from "../components/Banner";
const HomeView = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    (async () => {
      const fetchNews = await getNews();
      setNews(fetchNews);
    })();
  }, []);

  return (
    <>
      <h1>Trend News</h1>
      <Banner news={news}/>
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

export default HomeView;
