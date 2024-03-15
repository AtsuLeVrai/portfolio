import "@/styles/globals.scss";
import type { Metadata } from "next";
import React from "react";
import { montserrat } from "@/utils/fonts";

export const metadata: Metadata = {
	title: "AtsumiFlex | Portfolio",
	description: "Showcasing my best work and projects in this professional portfolio",
	openGraph: {
		title: "AtsumiFlex | Portfolio",
		description: "Showcasing my best work and projects in this professional portfolio",
		type: "website",
		url: "atsumiflex.dev",
		siteName: "AtsumiFlex | Portfolio",
	},
	authors: {
		name: "AtsumiFlex",
		url: "https://github.com/AtsumiFlex",
	},
	twitter: {
		title: "AtsumiFlex | Portfolio",
		description: "Showcasing my best work and projects in this professional portfolio",
		card: "summary",
	},
};

export default function RootLayout({ children }: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' className={montserrat.className}>
			<body className='bg-background-black text-white'>{children}</body>
		</html>
	);
}
