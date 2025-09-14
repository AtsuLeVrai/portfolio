"use client";

import Lenis from "lenis/react";
import { type ReactNode, useEffect, useState } from "react";

function useIsMobile(breakpoint = 768) {
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		if (typeof window === "undefined") return;

		const checkMobile = () => setIsMobile(window.innerWidth < breakpoint);

		checkMobile();
		window.addEventListener("resize", checkMobile);

		return () => window.removeEventListener("resize", checkMobile);
	}, [breakpoint]);

	return isMobile;
}

export function SmoothScroll({
	children,
}: Readonly<{
	children: ReactNode;
}>) {
	const isMobile = useIsMobile();
	if (isMobile) {
		return <>{children}</>;
	}

	return (
		<Lenis
			root
			options={{
				lerp: 0.08,
				duration: 1.6,
				orientation: "vertical",
				gestureOrientation: "vertical",
				smoothWheel: true,
				wheelMultiplier: 0.8,
				touchMultiplier: 1.5,
				autoRaf: true,
				syncTouch: true,
				infinite: false,
				overscroll: false,
				autoResize: true,
				easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
			}}
		>
			{children}
		</Lenis>
	);
}
