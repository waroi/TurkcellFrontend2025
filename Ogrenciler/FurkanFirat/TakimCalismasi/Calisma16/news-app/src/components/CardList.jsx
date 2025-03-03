import { useEffect, useState } from 'react'
import { fetchNews } from '../service/api';
import Categories from './Categories';


const CardList = ({category}) => {
    const [news, setNews] = useState([]);

  useEffect(() => {
    fetchNews(category).then(setNews);
  }, [category]);


  return (
    <>
    <div className='container'>
      <div className='row'>
        <div className='mt-3'>
          <Categories />
        </div>
        <div className='col-lg-12 row mt-4'>
          {news.map((article, index) => (
            <div key={index} className='col-lg-4'>
              <div className='card mb-3'>
                <img
                  src={article.urlToImage}
                  className='card-img-top'
                  alt={article.title}
                />
                <div className='card-body'>
                  <a href={article.url} target='_blank' className='text-decoration-none'>
                    <h5 className='card-title fw-bold text-dark'>{article.title}</h5>
                  </a>
                  <p className='card-text'>{article.author}</p>
                  <small className='text-body-secondary'>{article.publishedAt}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
   
    </>

  );
}

export default CardList