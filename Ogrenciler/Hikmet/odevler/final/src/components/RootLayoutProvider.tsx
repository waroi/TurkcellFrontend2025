"use client";
import React from "react";
import { SSRProvider } from "react-bootstrap";
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
		</SSRProvider>
	);
}
