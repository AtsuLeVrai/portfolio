import "../index.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import type { ReactNode } from "react";
import { SmoothScroll } from "@/components/SmoothScroll";

const poppins = Poppins({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
	title: "Tom B. - Portfolio",
	description:
		"Backend Engineer. Trading Aspirant. Future Game Maker. A cinematic journey inspired by Beat Saber's legendary maps.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${poppins.className} antialiased`}>
				<SmoothScroll>{children}</SmoothScroll>
			</body>
		</html>
	);
}
