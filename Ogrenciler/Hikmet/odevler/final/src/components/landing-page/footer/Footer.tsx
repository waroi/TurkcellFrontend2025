import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { Col, Container, Nav, NavItem, Row } from "react-bootstrap";

export default function Footer() {
	const t = useTranslations("Footer");

	return (
		<>
			<Container>
				<footer className="py-5">
					<Row className="g-4">
						<Col xs={12} md={6} lg={3}>
							<Image
								src="/logo.svg"
								alt="Logo"
								width={100}
								height={50}
								className="mb-4"
								loading="lazy"
							/>
							<h5 className="mb-3 fw-bold">{t("firstGrid.title")}</h5>
							<p className="mb-1">{t("firstGrid.phoneNumber")}</p>
							<p className="mb-3">{t("firstGrid.email")}</p>
							<p className="text-muted small">{t("firstGrid.copyright")}</p>
						</Col>

						<Col xs={6} md={3} lg={2}>
							<h6 className="mb-3 text-uppercase fw-bold">
								{t("secondGrid.title")}
							</h6>
							<Nav className="flex-column">
								{(t.raw("secondGrid.links") as string[]).map(
									(link: string, index: number) => (
										<NavItem key={index} className="mb-2">
											<Link href="#" className="p-0 text-muted nav-link">
												{link}
											</Link>
										</NavItem>
									)
								)}
							</Nav>
						</Col>

						<Col xs={6} md={3} lg={2}>
							<h6 className="mb-3 text-uppercase fw-bold">
								{t("thirdGrid.title")}
							</h6>
							<Nav className="flex-column">
								{(t.raw("thirdGrid.links") as string[]).map((link, index) => (
									<NavItem key={index} className="mb-2">
										<Link href="#" className="p-0 text-muted nav-link">
											{link}
										</Link>
									</NavItem>
								))}
							</Nav>
						</Col>

						<Col xs={6} md={3} lg={2}>
							<h6 className="mb-3 text-uppercase fw-bold">
								{t("fourthGrid.title")}
							</h6>
							<Nav className="flex-column">
								{(t.raw("fourthGrid.links") as string[]).map((link, index) => (
									<NavItem key={index} className="mb-2">
										<Link href="#" className="p-0 text-muted nav-link">
											{link}
										</Link>
									</NavItem>
								))}
							</Nav>
						</Col>

						<Col xs={6} md={3} lg={3}>
							<h6 className="mb-3 text-uppercase fw-bold">
								{t("fifthGrid.title")}
							</h6>
							<Nav className="flex-column">
								{(t.raw("fifthGrid.links") as string[]).map((link, index) => (
									<NavItem key={index} className="mb-2">
										<Link href="#" className="p-0 text-muted nav-link">
											{link}
										</Link>
									</NavItem>
								))}
							</Nav>
						</Col>
					</Row>
				</footer>
			</Container>
			<div className="bg-body-tertiary">
				<Container>
					<Row className="d-flex flex-row align-items-center justify-content-between py-2">
						<Col className="text-muted small">{t("firstGrid.copyright")}</Col>

						<Col xs="auto">
							<div className="d-flex gap-3">
								<Link href="#" aria-label="Facebook" className="text-muted">
									<Facebook />
								</Link>
								<Link href="#" aria-label="Twitter/X" className="text-muted">
									<Twitter />
								</Link>
								<Link href="#" aria-label="Instagram" className="text-muted">
									<Instagram />
								</Link>
								<Link href="#" aria-label="LinkedIn" className="text-muted">
									<Linkedin />
								</Link>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	);
}
