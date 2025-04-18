import { Search } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button, Card, CardBody, Col, Row } from "react-bootstrap";
import BalanceCoinPrice from "./BalanceCoinPrice";

export default function BalanceContainer({
	t,
}: {
	t: (key: string) => string;
}) {
	const [coins, setCoins] = useState<any>({});

	useEffect(() => {
		fetch("/api/coin")
			.then((res) => res.json())
			.then((data) => setCoins(data.data));
	}, []);

	console.log(coins);
	return (
		<Card className="p-4 border-0">
			<div className="border-0 text-center">
				<p className="mb-0 text-muted">{t("yourBalance")}</p>
				<h1 className="fw-medium">$132,832.89</h1>
				<Button variant="outline-dark rounded-pill w-100">
					+ {t("topUpBalance")}
				</Button>
			</div>
			<CardBody>
				<Col className="d-flex flex-row align-items-center justify-content-between mb-4">
					<h4>{t("yourAssets")}</h4>
					<Search />
				</Col>
				<div className="d-flex flex-column gap-3">
					{Object.values(coins).map((coin: any) => (
						<div className="d-flex align-items-center" key={coin.id}>
							<Image
								src={coin.logo}
								alt={coin.name}
								width={48}
								height={48}
								className="me-3 rounded-circle"
							/>
							<Row className="d-flex align-items-center justify-content-between w-100">
								<Col className="d-flex flex-column">
									<h5 className="mb-0 fs-4">{coin.name}</h5>
									<small className="mb-0 text-muted">{coin.symbol}</small>
								</Col>
								<Col className="d-flex flex-column align-items-end">
									<BalanceCoinPrice coin={coin.symbol} />
								</Col>
							</Row>
						</div>
					))}
				</div>
			</CardBody>
		</Card>
	);
}
