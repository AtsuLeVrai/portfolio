import "./globals.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import type { ReactNode } from "react";
import { I18nProvider } from "@/components/I18nProvider";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	display: "swap",
	preload: true,
});

export const metadata: Metadata = {
	title: {
		default: "Tom B. - Backend Engineer Portfolio",
		template: "%s | Tom B.",
	},
	description:
		"Backend Engineer specializing in Discord tooling, real-time communication platforms, and developer infrastructure. 5+ years of experience building scalable systems.",
	keywords: [
		"Backend Engineer",
		"Discord Bots",
		"Real-time Systems",
		"TypeScript",
		"Rust",
		"WebSocket",
		"API Development",
		"Developer Tools",
		"BTS SIO",
		"Développeur Backend",
	],
	authors: [{ name: "Tom B.", url: "https://github.com/AtsuLeVrai" }],
	creator: "Tom B.",
	metadataBase: new URL("https://atsulevrai.vercel.app"),
	alternates: {
		languages: {
			en: "/",
			fr: "/",
		},
	},
	openGraph: {
		type: "website",
		locale: "fr_FR",
		alternateLocale: "en_US",
		url: "https://atsulevrai.vercel.app",
		title: "Tom B. - Backend Engineer Portfolio",
		description:
			"Backend Engineer specializing in Discord tooling, real-time communication platforms, and developer infrastructure.",
		siteName: "Tom B. Portfolio",
	},
	twitter: {
		card: "summary_large_image",
		title: "Tom B. - Backend Engineer Portfolio",
		description:
			"Backend Engineer specializing in Discord tooling, real-time communication platforms, and developer infrastructure.",
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
};

export default function RootLayout({
	children,
}: Readonly<{ children: ReactNode }>) {
	return (
		<html lang="fr" suppressHydrationWarning>
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin="anonymous"
				/>
			</head>
			<body className={`${poppins.className} antialiased`}>
				<I18nProvider>{children}</I18nProvider>
				<SpeedInsights />
				<Analytics />
			</body>
		</html>
	);
}
