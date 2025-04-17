"use client";

import { useWindowSize } from "@/hooks/useWindowSize";
import { useSidebarStore } from "@/store/sidebar-store";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useState } from "react";
import { Button, Nav } from "react-bootstrap";

export default function Sidebar() {
	const t = useTranslations("Dashboard");
	const { isOpen, close } = useSidebarStore();
	const { width } = useWindowSize();
	const isMobile = width < 768;
	const [activeItem, setActiveItem] = useState("home");

	return (
		<div
			className={`sidebar ${isOpen ? "open" : ""} ${
				!isMobile && !isOpen ? "collapsed" : ""
			}`}>
			{isOpen || isMobile ? (
				<Image
					src="/logo.svg"
					alt="Logo"
					width={isMobile ? 40 : 100}
					height={isMobile ? 40 : 100}
					className="ms-4"
					onClick={() => {
						if (isMobile) {
							close();
						}
					}}
				/>
			) : (
				<Image
					src="/logo.svg"
					alt="Logo"
					width={40}
					height={40}
					className="ms-4"
					onClick={() => {
						if (isMobile) {
							close();
						}
					}}
				/>
			)}

			<Nav className="flex-column sidebar-nav">
				<Nav.Item className="w-100">
					<Button
						href="/"
						variant={activeItem === "home" ? "primary" : "link"}
						className="d-flex align-items-center px-3 py-2 rounded-pill w-100 fs-6"
						onClick={() => setActiveItem("home")}>
						<Image
							src={t("sidebar.home.icon")}
							alt={t("sidebar.home.title")}
							width={16}
							height={16}
							className="me-2"
						/>
						{isOpen && t("sidebar.home.title")}
					</Button>
				</Nav.Item>

				<Nav.Item>
					<Button
						variant={activeItem === "buyCrypto" ? "primary" : ""}
						className="d-flex align-items-center px-3 py-2 rounded-pill w-100 fs-6"
						onClick={() => setActiveItem("buyCrypto")}>
						<Image
							src={t("sidebar.buyCrypto.icon")}
							alt={t("sidebar.buyCrypto.title")}
							width={16}
							height={16}
							className="me-2"
						/>
						{isOpen && t("sidebar.buyCrypto.title")}
					</Button>
				</Nav.Item>

				<Nav.Item>
					<Button
						variant={activeItem === "market" ? "primary" : ""}
						className="d-flex align-items-center px-3 py-2 rounded-pill w-100 fs-6"
						onClick={() => setActiveItem("market")}>
						<Image
							src={t("sidebar.market.icon")}
							alt={t("sidebar.market.title")}
							width={16}
							height={16}
							className="me-2"
						/>
						{isOpen && t("sidebar.market.title")}
					</Button>
				</Nav.Item>

				<Nav.Item>
					<Button
						variant={activeItem === "exchange" ? "primary" : ""}
						className="d-flex align-items-center px-3 py-2 rounded-pill w-100 fs-6"
						onClick={() => setActiveItem("exchange")}>
						<Image
							src={t("sidebar.exchange.icon")}
							alt={t("sidebar.exchange.title")}
							width={16}
							height={16}
							className="me-2"
						/>
						{isOpen && t("sidebar.exchange.title")}
					</Button>
				</Nav.Item>

				<Nav.Item>
					<Button
						variant={activeItem === "spot" ? "primary" : ""}
						className="d-flex align-items-center px-3 py-2 rounded-pill w-100 fs-6"
						onClick={() => setActiveItem("spot")}>
						<Image
							src={t("sidebar.spot.icon")}
							alt={t("sidebar.spot.title")}
							width={16}
							height={16}
							className="me-2"
						/>
						{isOpen && t("sidebar.spot.title")}
					</Button>
				</Nav.Item>

				<Nav.Item>
					<Button
						variant={activeItem === "byfiCenter" ? "primary" : ""}
						className="d-flex align-items-center px-3 py-2 rounded-pill w-100 fs-6"
						onClick={() => setActiveItem("byfiCenter")}>
						<Image
							src={t("sidebar.byfiCenter.icon")}
							alt={t("sidebar.byfiCenter.title")}
							width={16}
							height={16}
							className="me-2"
						/>
						{isOpen && t("sidebar.byfiCenter.title")}
					</Button>
				</Nav.Item>

				<Nav.Item>
					<Button
						variant={activeItem === "more" ? "primary" : ""}
						className="d-flex align-items-center px-3 py-2 rounded-pill w-100 fs-6"
						onClick={() => setActiveItem("more")}>
						<Image
							src={t("sidebar.more.icon")}
							alt={t("sidebar.more.title")}
							width={16}
							height={16}
							className="me-2"
						/>
						{isOpen && t("sidebar.more.title")}
					</Button>
				</Nav.Item>

				<Nav.Item>
					<Button
						variant={activeItem === "asset" ? "primary" : ""}
						className="d-flex align-items-center px-3 py-2 rounded-pill w-100 fs-6"
						onClick={() => setActiveItem("asset")}>
						<Image
							src={t("sidebar.asset.icon")}
							alt={t("sidebar.asset.title")}
							width={16}
							height={16}
							className="me-2"
						/>
						{isOpen && t("sidebar.asset.title")}
					</Button>
				</Nav.Item>

				<Nav.Item>
					<Button
						variant={activeItem === "orderTrades" ? "primary" : ""}
						className="d-flex align-items-center px-3 py-2 rounded-pill w-100 fs-6"
						onClick={() => setActiveItem("orderTrades")}>
						<Image
							src={t("sidebar.orderTrades.icon")}
							alt={t("sidebar.orderTrades.title")}
							width={16}
							height={16}
							className="me-2"
						/>
						{isOpen && t("sidebar.orderTrades.title")}
					</Button>
				</Nav.Item>

				{/* Wallet */}
				<Nav.Item>
					<Button
						variant={activeItem === "wallet" ? "primary" : ""}
						className="d-flex align-items-center px-3 py-2 rounded-pill w-100 fs-6"
						onClick={() => setActiveItem("wallet")}>
						<Image
							src={t("sidebar.wallet.icon")}
							alt={t("sidebar.wallet.title")}
							width={16}
							height={16}
							className="me-2"
						/>
						{isOpen && t("sidebar.wallet.title")}
					</Button>
				</Nav.Item>

				<Nav.Item>
					<Button
						variant={activeItem === "logout" ? "primary" : ""}
						className="d-flex align-items-center px-3 py-2 rounded-pill w-100 fs-6"
						onClick={() => setActiveItem("logout")}>
						<Image
							src={t("sidebar.logout.icon")}
							alt={t("sidebar.logout.title")}
							width={16}
							height={16}
							className="me-2"
						/>
						{isOpen && t("sidebar.logout.title")}
					</Button>
				</Nav.Item>
			</Nav>
		</div>
	);
}
