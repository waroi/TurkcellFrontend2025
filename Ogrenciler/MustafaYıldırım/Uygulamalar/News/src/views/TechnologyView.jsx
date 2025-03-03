import React, { useEffect, useState } from "react";
import NewsClient from "../service/newsService";
import styles from "./TechnologyView.module.css";

function TechnologyView() {
	const [news, setNews] = useState([]);
	const fallbackImage = "https://placehold.co/600x400?text=Teknoloji+Haberi";

	useEffect(() => {
		const fetchTechnologyNews = async () => {
			const data = await NewsClient.getNews("technology");
			setNews(data.result || []);
		};

		fetchTechnologyNews();
	}, []);

	const handleImageError = (e) => {
		e.target.src = fallbackImage;
	};

	return (
		<>
			<h2>Teknoloji Haberleri</h2>
			<div className="row">
				{news.map((item, index) => (
					<div key={index} className="col-md-4 mb-4">
						<div className={`card h-100 ${styles.newsCard}`}>
							<img
								src={item.image || fallbackImage}
								className={`card-img-top ${styles.newsImage}`}
								alt={item.name}
								onError={handleImageError}
							/>
							<div className="card-body">
								<h5 className={`card-title ${styles.newsTitle}`}>
									{item.name}
								</h5>
								<p className={`card-text ${styles.newsDescription}`}>
									{item.description}
								</p>
								<a
									href={item.url}
									target="_blank"
									rel="noopener noreferrer"
									className={`btn btn-info ${styles.newsLink}`}>
									Habere Git
								</a>
							</div>
						</div>
					</div>
				))}
			</div>
		</>
	);
}

export default TechnologyView;
