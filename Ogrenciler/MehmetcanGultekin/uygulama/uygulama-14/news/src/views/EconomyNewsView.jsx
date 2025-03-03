import React from "react";
import {Container, Row} from "react-bootstrap";
import {useState, useEffect} from "react";
import {getNewsCategory} from "../api/getNews";
import NewsCard from "../components/NewsCard";

const EconomyNewsView = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    getNewsCategory("economy").then((data) => {
      setNews(data.result);
    });
  }, []);
  return (
    <div className="bg-img">
      <h1 className="py-3 text-light">Ekonomi Haberleri</h1>
      <Container>
        <Row md={4}>{news.map((item) => NewsCard(item))}</Row>
      </Container>
    </div>
  );
};

export default EconomyNewsView;
