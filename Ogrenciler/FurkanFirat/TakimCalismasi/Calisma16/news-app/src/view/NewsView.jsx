import { useEffect, useState } from 'react';
import { fetchNews } from '../service/api';
import Sidebar from '../components/Sidebar';

export default function NewsView() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const getNews = async () => {
      const data = await fetchNews('general');
      setNews(data.articles || []);
    };
    getNews();
  }, []);

  return (
    <div>
      <div className='row'>
        <div className='col-lg-3'>
          <Sidebar />
        </div>
        <div className='col-lg-9'>
          {news.map((article, index) => (
            <div key={index} className='col-md-4'>
              <div className='card mb-3'>
                <img
                  src={article.urlToImage}
                  className='card-img-top'
                  alt={article.title}
                />
                <div className='card-body'>
                  <a href={article.url} target='_blank'>
                    <h5 className='card-title'>{article.title}</h5>
                  </a>

                  <p className='card-text'>{article.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
