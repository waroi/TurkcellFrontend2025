"use client";

import Nav from "react-bootstrap/Nav";

import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";

import Image from "next/image";

import { useTranslations } from "next-intl";
import { Button } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";

export default function NavBar() {
	const t = useTranslations("Navbar");
	return (
		<Navbar expand="lg" className="bg-body-light">
			<Container fluid>
				<Navbar.Brand href="#">
					<Image
						src="/logo.svg"
						alt="React Bootstrap logo"
						width={100}
						height={50}
						className="align-top"
					/>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<NavDropdown title={t("links.homePage")} id="basic-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">Homepage</NavDropdown.Item>
						</NavDropdown>

						<Nav.Link href="#link">{t("links.buyCrypto")}</Nav.Link>
						<Nav.Link href="#link">{t("links.markets")}</Nav.Link>
						<Nav.Link href="#link">{t("links.exchange")}</Nav.Link>
						<Nav.Link href="#link">{t("links.spot")}</Nav.Link>
						<Nav.Link href="#link">BITUSDT</Nav.Link>
						<NavDropdown title={t("links.pages.title")} id="basic-nav-dropdown">
							<NavDropdown.Item href="#action/3.2">
								{t("links.pages.home")}
							</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">
								{t("links.pages.portfolio")}
							</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.4">
								{t("links.pages.wallet")}
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>

					<Nav className="ms-auto">
						<NavDropdown
							title={t("links.assets.title")}
							id="basic-nav-dropdown">
							<NavDropdown.Item href="#">
								{t("links.assets.assetsAndMarkets")}
							</NavDropdown.Item>
							<NavDropdown.Item href="#">
								{t("links.assets.assetsAndMarketsAndExchange")}
							</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown
							title={t("links.ordersTrades.title")}
							id="basic-nav-dropdown">
							<NavDropdown.Item href="#">
								{t("links.ordersTrades.orders")}
							</NavDropdown.Item>
							<NavDropdown.Item href="#">
								{t("links.ordersTrades.trades")}
							</NavDropdown.Item>
							<NavDropdown.Item href="#">
								{t("links.ordersTrades.orderHistory")}
							</NavDropdown.Item>
							<NavDropdown.Item href="#">
								{t("links.ordersTrades.tradeHistory")}
							</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown title="EN" id="basic-nav-dropdown">
							<NavDropdown.Item href="#">TR</NavDropdown.Item>
							<NavDropdown.Item href="#">EN</NavDropdown.Item>
						</NavDropdown>
						<div className="d-lg-block mx-2 vr d-none"></div>
						<Nav.Link href="#link">
							<Image
								src="/sun.svg"
								alt="User"
								width={16}
								height={16}
								className="align-center"
							/>
						</Nav.Link>
						<div className="d-lg-block mx-2 vr d-none"></div>
						<Nav.Link href="#link">
							<Image
								src="/notification.svg"
								alt="User"
								width={16}
								height={16}
								className="align-center"
							/>
						</Nav.Link>
						<Button variant="outline-primary" className="rounded-5">
							{t("links.wallet")}
						</Button>

						<Image
							src="/ben.webp"
							alt="User Avatar"
							width={40}
							height={40}
							className="mx-2 border rounded-circle"
						/>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
