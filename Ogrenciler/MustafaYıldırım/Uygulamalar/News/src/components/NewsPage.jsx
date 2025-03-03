import { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router";
import NewsClient from "../service/newsService";
import styles from "./NewsPage.module.css";

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
		<div className={`container mt-4 ${styles.container}`}>
			<h2 className={styles.title}>Haberler</h2>
			<div className={`btn-group my-3 ${styles.navButtons}`}>
				<NavLink
					to="/news/general"
					className={`btn btn-outline-primary ${styles.navLink}`}>
					Genel
				</NavLink>
				<NavLink
					to="/news/sport"
					className={`btn btn-outline-success ${styles.navLink}`}>
					Spor
				</NavLink>
				<NavLink
					to="/news/economy"
					className={`btn btn-outline-warning ${styles.navLink}`}>
					Ekonomi
				</NavLink>
				<NavLink
					to="/news/technology"
					className={`btn btn-outline-info ${styles.navLink}`}>
					Teknoloji
				</NavLink>
			</div>
			<Outlet context={{ news }} />
		</div>
	);
};

export default NewsPage;
