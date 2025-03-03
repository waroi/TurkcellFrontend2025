import { useEffect, useState } from 'react';
import { fetchNews } from '../service/api';
import CardPlaceholder from '../components/Placeholders/CardPlaceholder';
import NewsCard from '../components/NewsCard';

export default function SportsNewsView() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getNews = async () => {
      setLoading(true);
      const generalNews = await fetchNews('sports');

      setNews(generalNews);
      setLoading(false);
    };

    getNews();
  }, []);

  const newsCards = news.map((article, index) => (
    <NewsCard key={index} article={article} />
  ));

  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='mt-3'>
            <h2 className='fw-bold mb-4 text-center'>Spor Haberleri</h2>
            {loading ? <CardPlaceholder /> : newsCards}
          </div>
        </div>
      </div>
    </>
  );
}
