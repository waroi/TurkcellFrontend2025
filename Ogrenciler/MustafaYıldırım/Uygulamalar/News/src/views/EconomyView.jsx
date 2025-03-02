import React, { useEffect, useState } from "react";
import NewsClient from "../service/newsService";

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
			<h2>Ekonomi Haberleri</h2>
			<div className="row">
				{news.map((item, index) => (
					<div key={index} className="col-md-4 mb-4">
						<div className="card h-100">
							<img
								src={item.image || fallbackImage}
								className="card-img-top"
								alt={item.name}
								onError={handleImageError}
								style={{ height: "200px", objectFit: "cover" }}
							/>
							<div className="card-body">
								<h5 className="card-title">{item.name}</h5>
								<p className="card-text">{item.description}</p>
								<a
									href={item.url}
									target="_blank"
									rel="noopener noreferrer"
									className="btn btn-warning">
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
