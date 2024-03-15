import "@/styles/globals.scss";
import type { Metadata } from "next";
import React from "react";
import { montserrat } from "@/utils";

export const metadata: Metadata = {
	title: "Atsu. | Portfolio",
	description: "Generated by create next app",
};

export default function RootLayout({ children }: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' className={montserrat.className}>
			<body>{children}</body>
		</html>
	);
}
