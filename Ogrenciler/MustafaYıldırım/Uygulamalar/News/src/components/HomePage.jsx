import { useEffect, useState } from "react";
import NewsClient from "../service/service";
import NewsList from "./NewsList";

const HomePage = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    NewsClient.getNews().then((data) => {
      setNews(data.result);
    });
  }, []);

  return (
    <div className="container mt-4">
      <h2>Güncel Haberler</h2>
      <NewsList news={news} />
    </div>
  );
}
export default HomePage;