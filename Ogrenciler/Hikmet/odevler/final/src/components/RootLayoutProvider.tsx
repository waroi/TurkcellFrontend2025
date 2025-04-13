"use client";
import React from "react";
import { SSRProvider } from "react-bootstrap";
import BottomBanner from "./landing-page/bottom-banner/BottomBanner";
import Footer from "./landing-page/footer/Footer";
import NavBar from "./landing-page/navbar/NavBar";

export default function RootLayoutProvider({
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
