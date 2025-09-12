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

export default function SmoothScroll({
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
				lerp: 0.1,
				duration: 1.2,
				orientation: "vertical",
				gestureOrientation: "vertical",
				smoothWheel: true,
				wheelMultiplier: 1,
				touchMultiplier: 2,
				autoRaf: true,
				syncTouch: false,
				infinite: false,
				overscroll: true,
				autoResize: true,
			}}
		>
			{children}
		</Lenis>
	);
}
