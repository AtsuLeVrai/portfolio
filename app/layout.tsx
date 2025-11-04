import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import type { ReactNode } from "react";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	display: "swap",
	preload: true,
});

export const metadata: Metadata = {
	title: {
		default: "Tom B. - Backend Engineer Portfolio",
		template: "%s | Tom B. Portfolio",
	},
};

export default function RootLayout({
	children,
}: Readonly<{ children: ReactNode }>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${poppins.className} antialiased`}>{children}</body>
		</html>
	);
}
