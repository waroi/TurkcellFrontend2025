import React from "react";
import {Container, Row} from "react-bootstrap";
import {useState, useEffect} from "react";
import {getNewsCategory} from "../api/getNews";
import NewsCard from "../components/NewsCard";

const MagazineNewsView = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    getNewsCategory("magazine").then((data) => {
      setNews(data.result);
    });
  }, []);
  return (
    <div className="bg-img">
      <h1 className="py-3 text-light">Magazin Haberleri</h1>
      <Container>
        <Row md={4}>{news.map((item) => NewsCard(item))}</Row>
      </Container>
    </div>
  );
};

export default MagazineNewsView;
