"use client";
import { useState } from "react";
import {
	Card,
	CardBody,
	CardHeader,
	Container,
	Nav,
	Tab,
} from "react-bootstrap";
import { useTranslations } from "use-intl";
import DerivativesNavs from "./derivatives/DerivativesNavs";
import MarketTable from "./derivatives/MarketTable";
import FavoritesPage from "./favorite-coins/FavoriteCoins";

export default function FavoritesTableContainer() {
	const t = useTranslations("Market");
	const [activeKey, setActiveKey] = useState<string>(t.raw("tabs")[0]);

	return (
		<Container className="mb-5 rounded-4">
			<Card className="shadow-sm">
				<Tab.Container
					activeKey={activeKey}
					onSelect={(k) => setActiveKey(k || t.raw("tabs")[0])}>
					<CardHeader className="bg-body-secondary">
						<Nav variant="tabs" className="border-bottom-0">
							{t.raw("tabs").map((item: string, id: number) => (
								<Nav.Item key={id}>
									<Nav.Link eventKey={item.toLowerCase()}>{item}</Nav.Link>
								</Nav.Item>
							))}
						</Nav>
					</CardHeader>
					<CardBody>
						<Tab.Content>
							<Tab.Pane eventKey="favorites">
								<FavoritesPage />
							</Tab.Pane>
							<Tab.Pane eventKey="derivatives">
								<DerivativesNavs t={t} />
								<MarketTable t={t} />
							</Tab.Pane>
							<Tab.Pane eventKey="sports">
								<h5>Sports Betting</h5>
								<p>Content for sports tab goes here</p>
							</Tab.Pane>
						</Tab.Content>
					</CardBody>
				</Tab.Container>
			</Card>
		</Container>
	);
}
