import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';
import Banner from '../components/Banner/Banner';
import NewsCard from '../components/Cards/Card';
import { fetchNews } from '../api/getNews';

const StyledContainer = styled(Container)`
  margin-top: 30px;
`;

function HomeView() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      const generalNews = await fetchNews();
      setNews(generalNews);
    };
    getNews();
  }, []);

  return (
    <StyledContainer>
      <Banner news={news} />
      <Row>
        {news.map((newsItem, index) => (
          <Col key={index} md={4} className='mb-4'>
            <NewsCard newsItem={newsItem} />
          </Col>
        ))}
      </Row>
    </StyledContainer>
  );
}

export default HomeView;