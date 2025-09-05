"use client";

import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import * as THREE from "three";
import { usePortfolioStore } from "@/stores/portfolioStore";
import ActI_Loading from "./ActI_Loading";
import ActII_Revelation from "./ActII_Revelation";
import ActIII_Environment from "./ActIII_Environment";
import ActIV_ProjectShowcase from "./ActIV_ProjectShowcase";
import DynamicLighting from "./DynamicLighting";
import PostProcessing from "./PostProcessing";

export default function Scene() {
	const currentAct = usePortfolioStore((state) => state.currentAct);
	const cameraPosition = usePortfolioStore((state) => state.cameraPosition);

	return (
		<div className="fixed inset-0 z-0 bg-black">
			<Canvas
				camera={{
					position: cameraPosition,
					fov: 45,
					near: 0.1,
					far: 1000,
				}}
				gl={{
					antialias: true,
					alpha: false,
					powerPreference: "high-performance",
					toneMapping: THREE.ACESFilmicToneMapping,
					toneMappingExposure: 1.2,
				}}
				style={{ background: "#000000" }}
				dpr={[1, 2]}
			>
				<Suspense fallback={null}>
					<Environment preset="night" />

					{/* Dynamic lighting system */}
					<DynamicLighting />

					{/* Render acts based on current state */}
					{currentAct === "loading" && <ActI_Loading />}
					{currentAct === "revelation" && <ActII_Revelation />}
					{currentAct === "immersion" && <ActIII_Environment />}
					{currentAct === "showcase" && <ActIV_ProjectShowcase />}

					<OrbitControls
						enablePan={false}
						enableZoom={false}
						enableRotate={false}
					/>

					{/* Post-processing effects */}
					<PostProcessing />
				</Suspense>
			</Canvas>
		</div>
	);
}
