import { Button } from "react-bootstrap";

export default function ButtonsRow({ t }: { t: (key: string) => string }) {
	return (
		<div className="d-flex align-items-center justify-content-center gap-2 mt-3">
			<Button className="rounded-pill">
				<small>{t("limit")}</small>
			</Button>
			<Button
				variant="link"
				className="rounded-pill text-muted text-decoration-none">
				<small>{t("market")}</small>
			</Button>
			<Button
				variant="link"
				className="rounded-pill text-muted text-decoration-none">
				<small>{t("stopLimit")}</small>
			</Button>
			<Button
				variant="link"
				className="rounded-pill text-muted text-decoration-none">
				<small>{t("stopMarket")}</small>
			</Button>
		</div>
	);
}
