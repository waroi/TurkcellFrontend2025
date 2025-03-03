import React, { useEffect, useState } from "react";
import KurClient from "../service/dovizSevice";
import styles from "./Kur.module.css";

function Kur() {
	const [gold, setGold] = useState([]);
	const [doviz, setDoviz] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchDoviz = async () => {
			try {
				const dovizData = await KurClient.getDovizKur();
				setDoviz(dovizData.result);
			} catch (error) {
				console.error("Döviz verileri alınamadı:", error);
			}
		};

		const fetchGold = async () => {
			try {
				const goldData = await KurClient.getGoldKur();
				setGold(goldData.result);
			} catch (error) {
				console.error("Altın verileri alınamadı:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchDoviz();
		fetchGold();
	}, []);

	const sortedDoviz = doviz
		.sort((a, b) => {
			const commonCurrencies = ["USD", "EUR", "GBP", "JPY", "CHF"];
			const indexA = commonCurrencies.indexOf(a.code);
			const indexB = commonCurrencies.indexOf(b.code);
			return indexA - indexB;
		})
		.slice(0, 5);

	const sortedGold = gold
		.sort((a, b) => {
			const commonCurrencies = ["USD", "EUR", "GBP", "JPY", "CHF"];
			const indexA = commonCurrencies.indexOf(a.code);
			const indexB = commonCurrencies.indexOf(b.code);
			return indexA - indexB;
		})
		.slice(0, 5);

	if (loading) {
		return <div className="text-center my-4">Döviz kurları yükleniyor...</div>;
	}

	return (
		<div className={styles.kurContainer}>
			<h2 className={styles.kurTitle}>Güncel Döviz ve Altın Kurları</h2>
			<div className="row">
				{sortedDoviz.map((doviz, index) => (
					<div key={index} className="col-md-4 mb-4">
						<div className={`card ${styles.kurCard}`}>
							<div className="card-body">
								<h5 className={`card-title ${styles.cardTitle}`}>
									<strong>{doviz.name}</strong> ({doviz.code})
								</h5>
								<div className={styles.rateContainer}>
									<span className={styles.buyRate}>
										Alış: {doviz.buying.toFixed(2)} TL
									</span>
									<span className={styles.sellRate}>
										Satış: {doviz.selling.toFixed(2)} TL
									</span>
								</div>
							</div>
						</div>
					</div>
				))}
				{sortedGold.map((doviz, index) => (
					<div key={index} className="col-md-4 mb-4">
						<div className={`card ${styles.kurCard}`}>
							<div className="card-body">
								<h5 className={`card-title ${styles.cardTitle}`}>
									<strong>{doviz.name}</strong>
								</h5>
								<div className={styles.rateContainer}>
									<span className={styles.buyRate}>
										Alış: {doviz.buying} TL
									</span>
									<span className={styles.sellRate}>
										Satış: {doviz.selling} TL
									</span>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}

export default Kur;
