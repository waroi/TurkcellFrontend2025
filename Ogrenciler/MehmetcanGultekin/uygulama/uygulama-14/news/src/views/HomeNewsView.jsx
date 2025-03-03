import {useState, useEffect} from "react";
import {getNews, getNewsCategory} from "../api/getNews";
import NewsCard from "../components/NewsCard";
import {Row, Container} from "react-bootstrap";

const HomeNewsView = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    getNews().then((data) => {
      setNews(data.result);
    });
  }, []);

  return (
    <div className="bg-img">
      <h1 className="py-3 text-light">Günün Haberleri</h1>
      <Container>
        <Row md={4}>{news.map((item) => NewsCard(item))}</Row>
      </Container>
    </div>
  );
};

export default HomeNewsView;
