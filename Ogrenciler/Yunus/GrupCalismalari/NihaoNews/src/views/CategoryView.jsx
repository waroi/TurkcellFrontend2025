import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { newsService } from '../api/newService';
import Card from '../components/Card';

const CategoryView = () => {
  const [news, setNews] = useState();
  const { categoryName } = useParams();
  
  useEffect(() => {
    const getnews = async () => {
      const response = await newsService.getNews(categoryName.toString());
      setNews(response.articles);
    };
    getnews();
  }, [categoryName]);
  return (
    <>
      {news ? (
        <div className="container-fluid px-lg-5">
          <div className="row news-wrapper mx-lg-5">
            {news.map((item, index) => {
              return (
                <div
                  key={index}
                  className="col-lg-3 new-item my-4 rounded col-md-4 col-sm-6 col-12"
                >
                  <Card item={item}/>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <h1>Yükleniyor...</h1>
      )}
    </>
  )
}

export default CategoryView