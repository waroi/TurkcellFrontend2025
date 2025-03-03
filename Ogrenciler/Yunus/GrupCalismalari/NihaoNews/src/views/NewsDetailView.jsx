import { useEffect, useState } from "react";
import { useParams, Link } from "react-router"; 
import { newsService } from "../api/newService";


const NewsDetailView = () => {
    const [news, setNews] = useState(null);
    const { newsId, categoryName } = useParams(); 
    const defaultImgUrl =
        "https://img.freepik.com/free-psd/3d-rendering-news-sales-background_23-2150732563.jpg?t=st=1740909615~exp=1740913215~hmac=e24e8489fcda35d4d46b0bab5e7e7c30b3b2975224599f03f94e00f11eddf16c&w=2000";

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const data = await newsService.getNewsById(newsId);
                setNews(data);
            } catch (error) {
                console.error("Haber verisi alınırken hata oluştu:", error);
            }
        };
        fetchNews();
    }, [newsId]);

    if (!news) {
        return <p>Loading...</p>;
    }

    return (
        <div className="container news-detail">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item"><Link to="/news">News</Link></li>
                    {categoryName && (
                        <li className="breadcrumb-item active" aria-current="page">{categoryName}</li>
                    )}
                </ol>
            </nav>

            <h2>{categoryName || "Category Unknown"}</h2>

            <img
                src={news.urlToImage || defaultImgUrl}
                onError={({ currentTarget }) => {
                    currentTarget.src = defaultImgUrl;
                }}
                className="img-fluid w-100 object-fit-cover"
                alt={categoryName + ' Category'}
            />
            <p>{news.content}</p>
            <small>{news.author || news.source?.name}</small>
            <p>{news.publishedAt ? new Date(news.publishedAt).toLocaleDateString('tr-TR') : ''}</p>
        </div>
    );
};

export default NewsDetailView;



