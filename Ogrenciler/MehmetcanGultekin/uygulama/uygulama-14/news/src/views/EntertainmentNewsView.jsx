import React from "react";
import {Row} from "react-bootstrap";
import {useState, useEffect} from "react";
import {getNewsCategory} from "../api/getNews";
import NewsCard from "../components/NewsCard";

const EntertainmentNewsView = () => {
  const [news, setNews] = useState([]);
  useEffect(() => {
    getNewsCategory("entertainment").then((data) => {
      setNews(data.result);
    });
  }, []);
  return (
    <div>
      <Row md={4}>{news.map((item) => NewsCard(item))}</Row>
    </div>
  );
};

export default EntertainmentNewsView;
