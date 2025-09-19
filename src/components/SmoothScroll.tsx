"use client";

import Lenis from "lenis/react";
import { memo, type ReactNode } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";

interface SmoothScrollProps {
	readonly children: ReactNode;
	readonly breakpoint?: number;
}

const LENIS_OPTIONS = {
	lerp: 0.08,
	duration: 1.6,
	orientation: "vertical" as const,
	gestureOrientation: "vertical" as const,
	smoothWheel: true,
	wheelMultiplier: 0.8,
	touchMultiplier: 1.5,
	autoRaf: true,
	syncTouch: true,
	infinite: false,
	overscroll: false,
	autoResize: true,
} as const;

export const SmoothScroll = memo<SmoothScrollProps>(
	({ children, breakpoint = 768 }) => {
		const isMobile = useIsMobile(breakpoint);

		if (isMobile) {
			return <>{children}</>;
		}

		return (
			<Lenis root options={LENIS_OPTIONS}>
				{children}
			</Lenis>
		);
	},
);

SmoothScroll.displayName = "SmoothScroll";
