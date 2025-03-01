import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NewsClient from "../service/service";
import NewsList from "./NewsList";

const NewsPage = () => {
    const { category } = useParams();
    const [news, setNews] = useState([]);

    const categoryNames = {
        general: "Genel",
        sport: "Spor",
        economy: "Ekonomi",
        politics: "Politika",
        technology: "Teknoloji",
    };

    useEffect(() => {
        const fetchNews = async () => {
            const data = await NewsClient.getNews(category || "general");
            setNews(data.result || []);
        }
        fetchNews();
    }, [category]);

    return (
        <div className="container mt-4">
            <h2>{categoryNames[category] || "Genel"} Haberleri</h2>
            <div className="btn-group my-3">
                <a href="/news/general" className="btn btn-outline-primary">Genel</a>
                <a href="/news/sport" className="btn btn-outline-success">Spor</a>
                <a href="/news/economy" className="btn btn-outline-warning">Ekonomi</a>
                <a href="/news/politics" className="btn btn-outline-danger">Politika</a>
                <a href="/news/technology" className="btn btn-outline-info">Teknoloji</a>
            </div>
            <NewsList news={news} />
        </div>
    );
}

export default NewsPage;
