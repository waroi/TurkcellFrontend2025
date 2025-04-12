"use client";
import React from "react";
import { SSRProvider } from "react-bootstrap";
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
			<Footer />
		</SSRProvider>
	);
}
