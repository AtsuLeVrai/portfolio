import { useMotionValue, useTransform } from "motion/react";
import { useCallback, useEffect } from "react";

const SCROLL_THRESHOLDS = {
	FRAME_MAX: 1500,
	CONTENT_START: 1500,
	CONTENT_END: 2800,
};

const TRANSFORM_RANGES = {
	frameScale: [1, 2.2],
	rotation: [0, -2],
	contentY: [0, -800],
	contentScale: [1, 1 / 2.2],
	contentRotation: [0, 2],
};

export function useScrollEffects() {
	const scrollY = useMotionValue(0);

	const frameScale = useTransform(
		scrollY,
		[0, SCROLL_THRESHOLDS.FRAME_MAX],
		TRANSFORM_RANGES.frameScale,
	);

	const rotation = useTransform(
		scrollY,
		[0, SCROLL_THRESHOLDS.FRAME_MAX],
		TRANSFORM_RANGES.rotation,
	);

	const contentY = useTransform(
		scrollY,
		[SCROLL_THRESHOLDS.CONTENT_START, SCROLL_THRESHOLDS.CONTENT_END],
		TRANSFORM_RANGES.contentY,
	);

	const contentScale = useTransform(
		scrollY,
		[0, SCROLL_THRESHOLDS.FRAME_MAX],
		TRANSFORM_RANGES.contentScale,
	);

	const contentRotation = useTransform(
		scrollY,
		[0, SCROLL_THRESHOLDS.FRAME_MAX],
		TRANSFORM_RANGES.contentRotation,
	);

	const updateScrollY = useCallback(() => {
		scrollY.set(window.scrollY);
	}, [scrollY]);

	useEffect(() => {
		let rafId: number;
		let lastScrollY = 0;

		const handleScroll = () => {
			if (rafId) {
				cancelAnimationFrame(rafId);
			}

			rafId = requestAnimationFrame(() => {
				const currentScrollY = window.scrollY;
				if (currentScrollY !== lastScrollY) {
					scrollY.set(currentScrollY);
					lastScrollY = currentScrollY;
				}
			});
		};

		updateScrollY();
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => {
			window.removeEventListener("scroll", handleScroll);
			if (rafId) {
				cancelAnimationFrame(rafId);
			}
		};
	}, [updateScrollY, scrollY]);

	return {
		frameScale,
		rotation,
		contentY,
		contentScale,
		contentRotation,
	};
}
