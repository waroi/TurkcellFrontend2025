import { useEffect, useState } from 'react';
import CardPlaceholder from '../components/Placeholders/CardPlaceholder';
import { fetchNews } from '../service/api';
import NewsCard from '../components/NewsCard';

export default function GeneralNewsView() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getNews = async () => {
      setLoading(true);
      const generalNews = await fetchNews('general');

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
            <h2 className='fw-bold mb-4 text-center'>Genel Haberler</h2>
            {loading ? <CardPlaceholder /> : newsCards}
          </div>
        </div>
      </div>
    </>
  );
}
