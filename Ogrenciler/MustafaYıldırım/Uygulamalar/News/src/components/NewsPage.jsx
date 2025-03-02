import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router";
import NewsClient from "../service/newsService";

const NewsPage = () => {
	const [news, setNews] = useState([]);

	useEffect(() => {
		const fetchNews = async () => {
			const data = await NewsClient.getNews("general");
			setNews(data.result || []);
		};

		fetchNews();
	}, []);

	return (
		<div className="container mt-4">
			<h2>Haberler</h2>
			<div className="btn-group my-3">
				<NavLink to="/news/general" className="btn btn-outline-primary">
					Genel
				</NavLink>
				<NavLink to="/news/sport" className="btn btn-outline-success">
					Spor
				</NavLink>
				<NavLink to="/news/economy" className="btn btn-outline-warning">
					Ekonomi
				</NavLink>
				<NavLink to="/news/technology" className="btn btn-outline-info">
					Teknoloji
				</NavLink>
			</div>
			<Outlet context={{ news }} />
		</div>
	);
};

export default NewsPage;
