import "../index.css";
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
	metadataBase: new URL("https://tom-portfolio.com"),
	title: {
		default: "Tom B. - Backend Engineer Portfolio",
		template: "%s | Tom B. Portfolio",
	},
	description:
		"Backend Engineer specializing in high-frequency trading systems, multiplayer game backends, and scalable APIs. 7+ years building systems that process millions of requests with microsecond precision.",
	keywords: [
		"Backend Engineer",
		"High-Frequency Trading",
		"Trading Systems",
		"Game Backends",
		"Multiplayer Architecture",
		"Scalable APIs",
		"Rust",
		"Go",
		"Node.js",
		"Microservices",
		"Distributed Systems",
		"Performance Optimization",
		"Low Latency",
		"Real-time Systems",
	],
	authors: [{ name: "Tom B." }],
	creator: "Tom B.",
	publisher: "Tom B.",
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://tom-portfolio.com",
		siteName: "Tom B. Portfolio",
		title: "Tom B. - Backend Engineer Portfolio",
		description:
			"Backend Engineer specializing in high-frequency trading systems, multiplayer game backends, and scalable APIs.",
		images: [
			{
				url: "/og-image.jpg",
				width: 1200,
				height: 630,
				alt: "Tom B. - Backend Engineer Portfolio",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		site: "@tombdev",
		creator: "@tombdev",
		title: "Tom B. - Backend Engineer Portfolio",
		description:
			"Building high-performance systems that scale. Trading platforms, game backends, and scalable APIs.",
		images: ["/og-image.jpg"],
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
	verification: {
		google: "your-google-verification-code",
	},
};

interface RootLayoutProps {
	readonly children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${poppins.className} antialiased`}>{children}</body>
		</html>
	);
}
