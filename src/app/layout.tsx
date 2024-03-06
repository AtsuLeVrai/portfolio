import type { Metadata } from "next";
import "@/assets/styles/globals.scss";

export const metadata: Metadata = {
	title: "AtsumiFlex | Portfolio",
	description: "My Portfolio",
	openGraph: {
		type: "website",
		title: "AtsumiFlex | Portfolio",
		url: "https://atsumiflex.dev",
		description: "Explore AtsumiFlex's portfolio: a journey through innovative web projects and TypeScript expertise.",
	},
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

