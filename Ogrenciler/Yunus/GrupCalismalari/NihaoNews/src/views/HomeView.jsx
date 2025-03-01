import { useEffect, useState } from 'react'
import { newsService } from '../api/newService'
import { NavLink } from 'react-router'


function HomeView() {
    const [news, setNews] = useState()
    const [page, setPage] = useState(1)
    // let totalResults = 0

    useEffect(() => {
        const getnews = async () => {
            const response = await newsService.getNews(1);
            setNews(response.articles);
        }

        getnews()
    }, [])

    return (
        <>
            {
                news ?
                    (
                        <div className="container-fluid px-lg-5">
                            <div className="row news-wrapper mx-lg-5">
                                {news.map((item, index) => {
                                    return (
                                        <div key={index} className="col-lg-3 new-item my-4 rounded col-md-4 col-sm-6 col-12">
                                            <NavLink to={`/news/${item.title}`} className='h-100 d-flex flex-column'>
                                                <div className="new-image">
                                                    <img src={item.urlToImage} className='img-fluid h-100 w-100 object-fit-cover' alt={item.title} />
                                                </div>
                                                <h4 className='my-3'>{item.title}</h4>
                                                <p className='new-description'>{item.description.split('').slice(0, 40).join(' ')}</p>
                                            </NavLink>
                                        </div>

                                    )
                                }
                                )}
                            </div>
                        </div>
                    ) : (
                        <h1>Bulunamadı</h1>
                    )
            }
        </>
    )
}

export default HomeView
