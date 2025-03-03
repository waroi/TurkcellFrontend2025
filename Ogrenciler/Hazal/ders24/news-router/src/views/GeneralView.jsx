import React, { useState, useEffect } from 'react';
import { fetchNews} from '../api/getNews';
import Card from '../components/Cards/Card';

const GeneralView = () => {
  const [news, setNews] = useState([]);

 useEffect(() => {
    const getNews = async () => {
      const generalNews = await fetchNews('general');
      setNews(generalNews);
    };

    getNews();
  }, []);

  return (
    <>
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
export default GeneralView;