"use client";

import Nav from "react-bootstrap/Nav";

import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";

import Image from "next/image";

import { logout } from "@/components/auth/actions";
import { useThemeStore } from "@/store/themeStore";
import { createClient } from "@/utils/supabase/client";
import { Moon, Sun } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";

export default function NavBar() {
	const t = useTranslations("Navbar");
	const locale = useLocale();
	const router = useRouter();

	const pathname = usePathname();
	const [user, setUser] = useState<any>(null);
	const [loading, setLoading] = useState(true);

	const { theme, toggleTheme } = useThemeStore();

	useEffect(() => {
		async function getUser() {
			const supabase = createClient();
			const {
				data: { user },
			} = await supabase.auth.getUser();
			setUser(user);
			setLoading(false);
		}

		getUser();
	}, [pathname]);

	const handleLogout = async () => {
		await logout();
		router.refresh();
	};
	return (
		<Navbar expand="lg" className="sticky-top bg-body py-0" bg="light">
			<Container fluid>
				<Navbar.Brand href="/">
					<Image
						src="/logo.svg"
						alt="React Bootstrap logo"
						width={100}
						height={50}
						className="align-top"
					/>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbar" />
				<Navbar.Collapse id="navbar">
					<Nav className="me-auto">
						<NavDropdown title={t("links.homePage")} id="navbar-dropdown">
							<NavDropdown.Item href="/">Homepage</NavDropdown.Item>
						</NavDropdown>

						<Nav.Link href="/market">{t("links.buyCrypto")}</Nav.Link>
						<Nav.Link href="/market">{t("links.markets")}</Nav.Link>
						<Nav.Link href="/">{t("links.exchange")}</Nav.Link>
						<Nav.Link href="/">{t("links.spot")}</Nav.Link>
						<Nav.Link href="/dashboard">BITUSDT</Nav.Link>
						<NavDropdown title={t("links.pages.title")} id="navbar-dropdown">
							<NavDropdown.Item href="#action/3.2">
								{t("links.pages.home")}
							</NavDropdown.Item>
							<NavDropdown.Item href="/market">
								{t("links.pages.portfolio")}
							</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.4">
								{t("links.pages.wallet")}
							</NavDropdown.Item>
						</NavDropdown>
					</Nav>

					<Nav className="ms-auto">
						<NavDropdown title={t("links.assets.title")} id="navbar-dropdown">
							<NavDropdown.Item href="#">
								{t("links.assets.assetsAndMarkets")}
							</NavDropdown.Item>
							<NavDropdown.Item href="#">
								{t("links.assets.assetsAndMarketsAndExchange")}
							</NavDropdown.Item>
						</NavDropdown>
						<NavDropdown
							title={t("links.ordersTrades.title")}
							id="navbar-dropdown">
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
						<NavDropdown
							title={locale === "en" ? "English" : "Türkçe"}
							id="language-dropdown"
							className="me-2">
							<NavDropdown.Item
								onClick={() =>
									router.push(pathname.replace(`/${locale}`, `/en`))
								}
								active={locale === "en"}>
								English
							</NavDropdown.Item>
							<NavDropdown.Item
								onClick={() =>
									router.push(pathname.replace(`/${locale}`, `/tr`))
								}
								active={locale === "tr"}>
								Türkçe
							</NavDropdown.Item>
						</NavDropdown>
						<div className="d-lg-block mx-2 vr d-none"></div>
						<Button
              variant="link"
							onClick={toggleTheme} 
							className="me-2 p-0 nav-link" 
                            aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'} 
                        >
                            {theme === "light" ? (
                                <Sun size={18} /> 
                            ) : (
                                <Moon size={18} /> 
                            )}
                        </Button>
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
						<Button variant="outline-primary" className="rounded-pill">
							{t("links.wallet")}
						</Button>

						{!loading &&
							(user ? (
								<NavDropdown
									title={
										<Image
											src="/ben.webp"
											alt="User Avatar"
											width={30}
											height={30}
											className="rounded-circle object-fit-cover"
										/>
									}
									id="user-dropdown"
									align="end">
									<NavDropdown.Item>
										{user.user_metadata?.nickname || user.email}
									</NavDropdown.Item>
									<NavDropdown.Divider />
									<NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
									<NavDropdown.Item href="/profile">Settings</NavDropdown.Item>
									<NavDropdown.Divider />
									<NavDropdown.Item onClick={handleLogout}>
										Logout
									</NavDropdown.Item>
								</NavDropdown>
							) : (
								<Nav.Link href="/login" className="d-flex align-items-center">
									<Button variant="primary" className="rounded-pill">
										Login / Register
									</Button>
								</Nav.Link>
							))}
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}
