"use client";

import Nav from "react-bootstrap/Nav";

import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";

import Image from "next/image";

import { logout } from "@/components/auth/actions";
import { useSidebarStore } from "@/store/sidebar-store";
import { useThemeStore } from "@/store/themeStore";
import { createClient } from "@/utils/supabase/client";
import { Menu, Moon, Search, Sun } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";

export default function DashboardNavBar() {
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
	}, []);
	const toggleSidebar = useSidebarStore((state) => state.toggle);

	const handleLogout = async () => {
		await logout();
	};
	return (
		<Navbar expand="lg" className="sticky-top bg-body" bg="light">
			<Container fluid>
				<Button
					variant="link"
					className="sidebar-toggle"
					onClick={toggleSidebar}>
					<Menu size={24} />
				</Button>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ms-auto">
						<div className="position-relative me-3 nav-search-container">
							<InputGroup>
								<Form.Control
									className="py-2 ps-3 pe-5 rounded-pill"
									placeholder="Search"
									aria-label="Search"
								/>
								<Button
									variant="link"
									className="top-0 z-10 position-absolute d-flex align-items-center pe-3 h-100 end-0">
									<Search />
								</Button>
							</InputGroup>
						</div>
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
									id="user-dropdown">
									<NavDropdown.Item>
										{user.user_metadata?.nickname || user.email}
									</NavDropdown.Item>
									<NavDropdown.Divider />
									<NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
									<NavDropdown.Item href="/settings">Settings</NavDropdown.Item>
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
