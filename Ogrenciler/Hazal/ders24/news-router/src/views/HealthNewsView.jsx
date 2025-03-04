import React, { useState, useEffect } from 'react';
import { fetchNews } from '../api/getNews';
import Card from '../components/Cards/Card';

const HealthView = () => {
  const [news, setNews] = useState([]);

 useEffect(() => {
    const getNews = async () => {
      const generalNews = await fetchNews('health');

      setNews(generalNews);
    };

    getNews();
  }, []);

  return (
    <>
      <h1>Health News</h1>
      <div>
        {news.length === 0 ? (
          <p>Loading...</p>
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

export default HealthView;