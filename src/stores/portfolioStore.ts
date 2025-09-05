import { create } from "zustand";
import {
	type AnimationTimeline,
	createPortfolioTimeline,
} from "@/components/Utils/AnimationTimeline";
import { getScrollManager } from "@/components/Utils/ScrollManager";

export interface PortfolioState {
	// Animation state
	currentAct: "loading" | "revelation" | "immersion" | "showcase" | "outro";
	scrollProgress: number;
	animationTimeline: AnimationTimeline;

	// Scene parameters
	cameraPosition: [number, number, number];
	actIntensities: {
		loading: number;
		revelation: number;
		immersion: number;
		showcase: number;
		outro: number;
	};

	// Performance settings
	quality: "low" | "medium" | "high";
	reducedMotion: boolean;

	// Actions
	setScrollProgress: (progress: number) => void;
	setCurrentAct: (act: PortfolioState["currentAct"]) => void;
	updateCameraPosition: (position: [number, number, number]) => void;
	setQuality: (quality: PortfolioState["quality"]) => void;
	toggleReducedMotion: () => void;
	initializeAnimation: () => void;
}

export const usePortfolioStore = create<PortfolioState>((set, get) => ({
	currentAct: "loading",
	scrollProgress: 0,
	animationTimeline: createPortfolioTimeline(),

	cameraPosition: [0, 0, 10],
	actIntensities: {
		loading: 1,
		revelation: 0,
		immersion: 0,
		showcase: 0,
		outro: 0,
	},

	quality: "high",
	reducedMotion: false,

	setScrollProgress: (progress: number) => {
		const { animationTimeline } = get();

		// Update timeline
		animationTimeline.setProgress(progress);

		// Determine current act based on progress
		let currentAct: PortfolioState["currentAct"] = "loading";
		if (progress > 0.8) currentAct = "outro";
		else if (progress > 0.6) currentAct = "showcase";
		else if (progress > 0.4) currentAct = "immersion";
		else if (progress > 0.2) currentAct = "revelation";

		// Update intensities based on progress
		const actIntensities = {
			loading: Math.max(0, 1 - progress * 5), // Fades out quickly
			revelation:
				progress > 0.2 && progress < 0.4
					? 1 - Math.abs((progress - 0.3) * 10)
					: 0,
			immersion:
				progress > 0.4 && progress < 0.6
					? 1 - Math.abs((progress - 0.5) * 10)
					: 0,
			showcase:
				progress > 0.6 && progress < 0.8
					? 1 - Math.abs((progress - 0.7) * 10)
					: 0,
			outro: Math.max(0, (progress - 0.8) * 5),
		};

		set({
			scrollProgress: progress,
			currentAct,
			actIntensities,
		});
	},

	setCurrentAct: (act) => set({ currentAct: act }),

	updateCameraPosition: (position) => set({ cameraPosition: position }),

	setQuality: (quality) => set({ quality }),

	toggleReducedMotion: () =>
		set((state) => ({ reducedMotion: !state.reducedMotion })),

	initializeAnimation: () => {
		const { animationTimeline } = get();
		const scrollManager = getScrollManager();

		// Set up animation timeline callbacks
		animationTimeline.addCallback("camera_position", (position) => {
			if (Array.isArray(position) && position.length === 3) {
				get().updateCameraPosition(position as [number, number, number]);
			}
		});

		animationTimeline.addCallback("actI_intensity", (intensity) => {
			if (typeof intensity === "number") {
				set((state) => ({
					actIntensities: {
						...state.actIntensities,
						loading: intensity,
					},
				}));
			}
		});

		animationTimeline.addCallback("glass_opacity", (opacity) => {
			if (typeof opacity === "number") {
				set((state) => ({
					actIntensities: {
						...state.actIntensities,
						revelation: opacity,
					},
				}));
			}
		});

		animationTimeline.addCallback("environment_brightness", (brightness) => {
			if (typeof brightness === "number") {
				set((state) => ({
					actIntensities: {
						...state.actIntensities,
						immersion: brightness,
					},
				}));
			}
		});

		animationTimeline.addCallback("explosion_intensity", (intensity) => {
			if (typeof intensity === "number") {
				set((state) => ({
					actIntensities: {
						...state.actIntensities,
						showcase: intensity,
					},
				}));
			}
		});

		animationTimeline.addCallback("outro_fade", (fade) => {
			if (typeof fade === "number") {
				set((state) => ({
					actIntensities: {
						...state.actIntensities,
						outro: fade,
					},
				}));
			}
		});

		// Connect scroll manager to store
		scrollManager.onScroll("portfolio", (progress) => {
			get().setScrollProgress(progress);
		});
	},
}));

// Initialize on client side
if (typeof window !== "undefined") {
	// Auto-detect quality based on device capabilities
	const detectQuality = (): PortfolioState["quality"] => {
		const canvas = document.createElement("canvas");
		const gl =
			canvas.getContext("webgl") ||
			(canvas.getContext("experimental-webgl") as WebGLRenderingContext | null);

		if (!gl) return "low";

		const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
		const renderer = debugInfo
			? gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL)
			: "";

		// Simple heuristic for quality detection
		if (
			renderer.includes("Intel") ||
			/mobile|android|iphone|ipad/i.test(navigator.userAgent)
		) {
			return "medium";
		}

		return "high";
	};

	// Auto-detect reduced motion preference
	const prefersReducedMotion = window.matchMedia(
		"(prefers-reduced-motion: reduce)",
	).matches;

	// Set initial quality and motion preferences
	usePortfolioStore.setState({
		quality: detectQuality(),
		reducedMotion: prefersReducedMotion,
	});
}
