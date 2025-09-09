"use client";

import Lenis from "lenis/react";
import { useEffect } from "react";

interface SmoothScrollProps {
	children: React.ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
	useEffect(() => {
		// Disable smooth scroll on mobile for better performance
		const isMobile = window.innerWidth < 768;

		if (isMobile) {
			document.body.style.overflow = "auto";
		}
	}, []);

	return (
		<Lenis
			root
			options={{
				lerp: 0.1,
				duration: 1.2,
				orientation: "vertical",
				gestureOrientation: "vertical",
				smoothWheel: true,
				wheelMultiplier: 1,
				touchMultiplier: 2,
			}}
		>
			{children}
		</Lenis>
	);
}
