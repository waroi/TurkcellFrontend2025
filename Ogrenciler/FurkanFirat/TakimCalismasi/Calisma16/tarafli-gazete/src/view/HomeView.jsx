import { useEffect, useState } from 'react';
import Header from '../components/Header';
import NewsSlider from '../components/NewsSlider';
import NewsCard from '../components/NewsCard';
import SliderPlaceholder from '../components/Placeholders/SliderPlaceholder';
import CardPlaceholder from '../components/Placeholders/CardPlaceholder';
import { fetchNews } from '../service/api';

export default function HomeView() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getNews = async () => {
      setLoading(true);
      const generalNews = await fetchNews('general');
      const sortedNews = generalNews
        .sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
        .slice(0, 5);

      setNews(sortedNews);
      setLoading(false);
    };

    getNews();
  }, []);

  const newsCards = news.map((article, index) => (
    <NewsCard key={index} article={article} />
  ));

  return (
    <>
      <Header />
      <div className='container'>
        {loading ? <SliderPlaceholder /> : <NewsSlider news={news} />}
        <h2 className='fw-bold mb-4 text-center'>Öne Çıkan Haberler</h2>
        {loading ? <CardPlaceholder /> : newsCards}
      </div>
    </>
  );
}
