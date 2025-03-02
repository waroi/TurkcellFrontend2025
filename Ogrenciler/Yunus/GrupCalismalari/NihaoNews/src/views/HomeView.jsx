import { useEffect, useState } from "react";
import { newsService } from "../api/newService";
import { NavLink } from "react-router";
import Card from "../components/Card";
function HomeView() {
	const [news, setNews] = useState();
	const defaultImgUrl =
		"https://img.freepik.com/free-psd/3d-rendering-news-sales-background_23-2150732563.jpg?t=st=1740909615~exp=1740913215~hmac=e24e8489fcda35d4d46b0bab5e7e7c30b3b2975224599f03f94e00f11eddf16c&w=2000";
	useEffect(() => {
		const getnews = async () => {
			const response = await newsService.getNews();
			setNews(response.articles);
		};
		getnews();
	}, []);
	return (
		<>
			{news ? (
				<div className="container-fluid px-lg-5 ">
					<div className="row news-wrapper mx-lg-2 d-flex justify-content-center ">
						{news.map((item, index) => {
							return (
								<div
									key={index}
									className="news-card mx-2 col-lg-3 new-item my-4 rounded col-md-4 col-sm-6 col-12"
								>
								<Card item={item}/> 
								</div>
							);
						})}
					</div>
				</div>
			) : (
				<h1>Bulunamadı</h1>
			)}
		</>
	);
}
export default HomeView;
