import {useState, useEffect} from "react";
import {getNews, getNewsCategory} from "../api/getNews";
import NewsCard from "../components/NewsCard";
import {Row} from "react-bootstrap";

const HomeNewsView = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    getNews().then((data) => {
      setNews(data.result);
    });
  }, []);

  return <Row md={4}>{news.map((item) => NewsCard(item))}</Row>;
};

export default HomeNewsView;
