import { useCallback, useEffect, useState } from "react";

const DEFAULT_BREAKPOINT = 768;

export function useIsMobile(breakpoint: number = DEFAULT_BREAKPOINT): boolean {
	const [isMobile, setIsMobile] = useState(false);

	const checkMobile = useCallback(() => {
		if (typeof window === "undefined") return;
		setIsMobile(window.innerWidth < breakpoint);
	}, [breakpoint]);

	useEffect(() => {
		checkMobile();

		const debouncedResize = (() => {
			let timeoutId: NodeJS.Timeout;
			return () => {
				clearTimeout(timeoutId);
				timeoutId = setTimeout(checkMobile, 150);
			};
		})();

		window.addEventListener("resize", debouncedResize, { passive: true });
		return () => {
			window.removeEventListener("resize", debouncedResize);
		};
	}, [checkMobile]);

	return isMobile;
}
