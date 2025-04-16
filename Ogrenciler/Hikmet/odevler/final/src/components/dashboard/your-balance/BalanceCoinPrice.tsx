"use client";
import { useEffect, useState } from "react";

export default function BalanceCoinPrice({ coin }: { coin: string }) {
	const [price, setPrice] = useState<number>(0);
	useEffect(() => {
		const fetchPrice = async () => {
			try {
				const res = await fetch(
					`https://api.binance.com/api/v3/ticker/price?symbol=${coin}USDT`
				);
				const data = await res.json();
				console.log(data);
				setPrice(Number(data.price));
			} catch (error) {
				console.error("Error fetching price:", error);
			}
		};

		fetchPrice();
	}, []);

	return (
		<div>
			<h5 className="mb-0">
				$
				{price >= 1000
					? price.toLocaleString(undefined, { maximumFractionDigits: 2 })
					: price.toLocaleString(undefined, {
							minimumFractionDigits: 2,
							maximumFractionDigits: 8,
					  })}
			</h5>
			<p className="mb-0 text-muted text-end">+1.45%</p>
		</div>
	);
}
