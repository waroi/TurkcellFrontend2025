import { getAllNews } from "../api/getNews";
import { useEffect, useState } from "react";
import Card from "../components/Cards/Card";

const HomeView = () => {
    const [news, setNews] = useState();
    useEffect(() => {
        getAllNews()
            .then((data) => {
                setNews(data.articles);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);
    return (
        <>
            <h1>Anasayfa</h1>
            <div className="row">
                {news &&
                news.map((news, index) => {
                    return <Card key={index} news={news} />;
                })}
            </div>
        </>
      );
};

export default HomeView;