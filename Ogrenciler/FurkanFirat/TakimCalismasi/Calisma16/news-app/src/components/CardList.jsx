import { useEffect, useState } from 'react'
import Sidebar from '../components/Sidebar';
import { fetchNews } from '../service/api';


const CardList = ({category}) => {
    const [news, setNews] = useState([]);

  useEffect(() => {
    fetchNews(category).then(setNews);
  }, [category]);


  return (
    <>
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
   
    </>

  );
}

export default CardList