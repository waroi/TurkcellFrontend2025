import { useState } from "react";
import { Button, Nav } from "react-bootstrap";
const derivativesBadgeLinks = ["Hot", "New", "DeFi", "NFT"];

export default function DerivativesNavs({
	t,
}: {
	t: {
		raw: (key: string) => string[];
	};
}) {
	const [activeDerivatives, setActiveDerivatives] = useState<string>("All");
	const [activeBadge, setActiveBadge] = useState<string>("Hot");

	const handleBadgeSelect = (item: string) => {
		setActiveBadge(item);
	};

	const handleDerivativeSelect = (item: string) => {
		setActiveDerivatives(item);
	};
	return (
		<>
			<Nav className="d-flex flex-row mb-2 overflow-x-auto">
				{t.raw("derivativesLinks").map((item, id) => (
					<Nav.Link
						key={id}
						onClick={() => handleDerivativeSelect(item)}
						className={`me-2 ${
							activeDerivatives === item
								? "active text-primary text-decoration-underline"
								: "text-muted"
						}`}>
						{item}
					</Nav.Link>
				))}
			</Nav>
			<Nav>
				{derivativesBadgeLinks.map((item, id) => (
					<Nav.Link key={id} onClick={() => handleBadgeSelect(item)}>
						<Button
							className={`rounded-pill px-4 ${
								activeBadge === item
									? "text-primary text-white"
									: "bg-white text-muted border-0"
							}`}>
							{item}
						</Button>
					</Nav.Link>
				))}
			</Nav>
		</>
	);
}
