import "../index.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import type { ReactNode } from "react";
import { SmoothScroll } from "@/components/SmoothScroll";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	display: "swap",
	preload: true,
});

export const metadata: Metadata = {
	title: "Tom B. - Backend Engineer Portfolio",
	description:
		"Backend Engineer specializing in trading systems, game backends, and scalable APIs. Building high-performance systems with precision and creativity.",
	keywords: [
		"Backend Engineer",
		"Trading Systems",
		"Game Development",
		"Scalable APIs",
		"High Performance",
	],
	authors: [{ name: "Tom B." }],
	creator: "Tom B.",
	openGraph: {
		type: "website",
		locale: "en_US",
		title: "Tom B. - Backend Engineer Portfolio",
		description:
			"Backend Engineer specializing in trading systems, game backends, and scalable APIs.",
	},
	robots: {
		index: true,
		follow: true,
	},
};

interface RootLayoutProps {
	readonly children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${poppins.className} antialiased`}>
				<SmoothScroll>{children}</SmoothScroll>
			</body>
		</html>
	);
}
