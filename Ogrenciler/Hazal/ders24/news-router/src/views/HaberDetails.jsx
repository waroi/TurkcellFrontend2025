import { useEffect, useState} from "react";
import { useParams } from "react-router";
import { getNewsById } from "../api/getNews";

const NewsDetails = () => {
    const [news, setNews] = useState();
    const { newsId } = useParams();
    useEffect(() => {
        setNews(getNewsById(newsId))
            .then((data) => {
                console.log(data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, [newsId]);

    return(
    <>
    <h1>Haber Detayları</h1>
    <img src={news.urlToImage} alt={news.title} />
    <h2>{news.title}</h2>
    <p>{news.description}</p>
    </>
    );
}

export default NewsDetails;