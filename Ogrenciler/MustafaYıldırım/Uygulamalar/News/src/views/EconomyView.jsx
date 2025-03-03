import React, { useEffect, useState } from "react";
import Kur from "../components/Kur";
import NewsClient from "../service/newsService";
import styles from "./EconomyView.module.css";

function EconomyView() {
	const [news, setNews] = useState([]);
	const fallbackImage = "https://placehold.co/600x400?text=Ekonomi+Haberi";

	useEffect(() => {
		const fetchEconomyNews = async () => {
			const data = await NewsClient.getNews("economy");
			setNews(data.result || []);
		};

		fetchEconomyNews();
	}, []);

	const handleImageError = (e) => {
		e.target.src = fallbackImage;
	};

	return (
		<>
			<h2 className={styles.sectionTitle}>Ekonomi Haberleri</h2>

			{/* Döviz Kurları Bölümü */}
			<Kur />

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
									className={`btn btn-warning ${styles.newsLink}`}>
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

export default EconomyView;
