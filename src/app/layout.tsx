import "@/styles/globals.scss";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
	title: "AtsumiFlex | Portfolio",
	description: "Description à faire car j'ai la flm",
};

export default function RootLayout({ children }: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	);
}
