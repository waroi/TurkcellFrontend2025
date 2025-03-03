import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { newsService } from "../api/newsService";

const NewsDetailView = () => {
	const [news, setNews] = useState(null);
	const { newsId, categoryName } = useParams();
	const defaultImgUrl = "/src/assets/default.jpg";

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

	return (

        <>
       { news ? (
       
		<div className="container news-detail">
			<h2 className="my-4">{news.title}</h2>
			<img
				src={news.urlToImage || defaultImgUrl}
				onError={({ currentTarget }) => {
					currentTarget.src = defaultImgUrl;
				}}
				className="img-fluid w-100 object-fit-cover"
				alt={categoryName + " Category"}
			/>

			<small className="text-muted">{news.author || news.source?.name}</small>
			<p className="text-muted mt-2">
				{news.publishedAt
					? new Date(news.publishedAt).toLocaleDateString("tr-TR")
					: ""}
			</p>
			<hr />
			<p>{news.content}</p>
		</div>): <p> Loading...</p>}
        </>
	);
};

export default NewsDetailView;
