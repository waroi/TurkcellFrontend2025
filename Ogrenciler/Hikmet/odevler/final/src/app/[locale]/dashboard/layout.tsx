"use client";

import DashboardNavBar from "@/components/dashboard/DashboardNavbar";
import Sidebar from "@/components/dashboard/Sidebar";
import React from "react";
import { SSRProvider } from "react-bootstrap";
import "./dashboard.scss";

export default function DashboardLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<SSRProvider>
			<main className="dashboard-container">
				<Sidebar />
				<section className="main-content">
					<DashboardNavBar />
					<div className="content-wrapper">{children}</div>
				</section>
			</main>
		</SSRProvider>
	);
}
