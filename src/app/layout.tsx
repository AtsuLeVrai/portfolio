import "@/styles/globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import type React from "react";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
	title: "portfolio",
	description: "My personal portfolio website",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${poppins.className} antialiased`}>{children}</body>
		</html>
	);
}
