import { useEffect, useState } from "react";
import NewsClient from "../service/newsService";
import NewsList from "../components/NewsList";
import Carousel from "../components/home/Carousel";

const HomeView = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    NewsClient.getNews().then((data) => {
      setNews(data.result);
    });
  }, []);

  return (
    <>
      <Carousel news={news} />
      <div className="container mt-4">
        <h2>Güncel Haberler</h2>
        <NewsList news={news} />
      </div>
    </>
  );
};
export default HomeView;
