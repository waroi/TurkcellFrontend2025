"use client";

import BottomBanner from "@/components/landing-page/bottom-banner/BottomBanner";
import Footer from "@/components/landing-page/footer/Footer";
import NavBar from "@/components/landing-page/navbar/NavBar";
import { SSRProvider } from "react-bootstrap";

export default function MainLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<SSRProvider>
			<NavBar />
			{children}
			<BottomBanner />
			<Footer />
		</SSRProvider>
	);
}
