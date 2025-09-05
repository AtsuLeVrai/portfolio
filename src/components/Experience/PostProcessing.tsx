"use client";

import { useFrame } from "@react-three/fiber";
import {
	Bloom,
	ChromaticAberration,
	EffectComposer,
	Vignette,
} from "@react-three/postprocessing";
import { useRef } from "react";
import * as THREE from "three";
import { usePortfolioStore } from "@/stores/portfolioStore";

export default function PostProcessing() {
	const _composerRef = useRef(null);
	const actIntensities = usePortfolioStore((state) => state.actIntensities);
	const currentAct = usePortfolioStore((state) => state.currentAct);

	useFrame(() => {
		// Dynamically adjust effects based on current act
	});

	// Calculate effect intensities based on current act
	const getBloomIntensity = () => {
		switch (currentAct) {
			case "loading":
				return 0.4 + actIntensities.loading * 0.6;
			case "revelation":
				return 0.8 + actIntensities.revelation * 1.2;
			case "showcase":
				return 1.5 + actIntensities.showcase * 0.5;
			default:
				return 0.3;
		}
	};

	const getChromaticAberrationOffset = () => {
		switch (currentAct) {
			case "loading":
				return [0.001, 0.001] as [number, number];
			case "revelation":
				return [
					0.003 * actIntensities.revelation,
					0.002 * actIntensities.revelation,
				] as [number, number];
			case "showcase":
				return [
					0.005 * actIntensities.showcase,
					0.003 * actIntensities.showcase,
				] as [number, number];
			default:
				return [0.0005, 0.0005] as [number, number];
		}
	};

	const getVignetteIntensity = () => {
		switch (currentAct) {
			case "loading":
				return 0.3;
			case "revelation":
				return 0.1; // Less vignette for clarity
			case "immersion":
				return 0.4;
			case "showcase":
				return 0.5;
			case "outro":
				return 0.7;
			default:
				return 0.3;
		}
	};

	return (
		<EffectComposer>
			{/* Bloom effect for luminous elements */}
			<Bloom
				intensity={getBloomIntensity()}
				kernelSize={3}
				luminanceThreshold={0.1}
				luminanceSmoothing={0.9}
				mipmapBlur={false}
				resolutionX={256}
				resolutionY={256}
			/>

			{/* Chromatic aberration for dramatic effect */}
			<ChromaticAberration
				offset={new THREE.Vector2(...getChromaticAberrationOffset())}
			/>

			{/* Vignette for cinematic feel */}
			<Vignette offset={0.1} darkness={getVignetteIntensity()} eskil={false} />
		</EffectComposer>
	);
}
