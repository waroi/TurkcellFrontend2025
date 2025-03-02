import { useEffect, useState } from "react"
import { useParams } from "react-router"
import { newsService } from "../api/newService"

const NewsDetailVİew = () => {
    const [news, setNews] = useState({})
    const { newsId } = useParams()
    const defaultImgUrl =
        "https://img.freepik.com/free-psd/3d-rendering-news-sales-background_23-2150732563.jpg?t=st=1740909615~exp=1740913215~hmac=e24e8489fcda35d4d46b0bab5e7e7c30b3b2975224599f03f94e00f11eddf16c&w=2000";

    useEffect(() => {
        setNews(newsService.getNewsById(newsId))
    }, [newsId])

    return (

        <div className="container news-detail">
            <h2>
                {news.title}
            </h2>
            <img
                src={news.urlToImage}
                onError={({ currentTarget }) => {
                    currentTarget.src = defaultImgUrl;
                }}
                className="img-fluid w-100 object-fit-cover"
                alt={news.title + 'Poster'}
            />
            <p>{news.content}</p>

            <small>{news.author || news.source?.name}</small>
            <p>{new Date(news.publishedAt).toLocaleDateString('tr-TR').toString()}</p>
        </div>
    )
}

export default NewsDetailVİew