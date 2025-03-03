import { useEffect, useState } from "react";
import { newsService } from "../../api/newsService";
import TopHeadLinesCard from "./TopHeadLinesCard";

function TopHeadlinesComponent() {
    const [news, setNews] = useState();
  
    useEffect(() => {
        const getnews = async () => {
            const response = await newsService.getTopHeadlines();
            setNews(response.articles);
        };
        getnews();
    }, []);

    return (
        <>
        <hr />
        <h4 className="text-muted px-3"> Top Headlines </h4>
            {news ? (
                <div className="container-fluid px-lg-5">
					<div className="justify-row mx-lg-2 d-flex justify-content-center overflow-hidden">
                    {news.map((item, index) => {
                            return (
                                <div
                                    key={index}
									className="top-headlines-card mx-2 new-item my-4 rounded overflow-hidden"
                                >
                                   <TopHeadLinesCard item={item} />
                                </div>
                            );
                        })}
                    </div>
                </div>
            ) : (
                <h1>Loading...</h1>
            )}
        </>
    );
}
export default TopHeadlinesComponent;
