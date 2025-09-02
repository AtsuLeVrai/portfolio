"use client";

import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Group } from "three";
import { BuildupSphere } from "./objects/BuildupSphere";
import { EnergyExplosions } from "./objects/EnergyExplosions";
import { LuminousFlower } from "./objects/LuminousFlower";
import { PostProcessing } from "./PostProcessing";

export function SceneManager() {
	const sceneRef = useRef<Group>(null);

	useFrame(() => {
		if (sceneRef.current) {
			sceneRef.current.rotation.y += 0.001;
		}
	});

	return (
		<>
			<PerspectiveCamera makeDefault position={[0, 0, 5]} fov={75} />
			<OrbitControls enablePan={false} enableZoom={false} enableRotate={true} />

			<ambientLight intensity={0.5} />
			<directionalLight position={[10, 10, 5]} intensity={1} />

			<group ref={sceneRef}>
				<LuminousFlower />
				<EnergyExplosions />
				<BuildupSphere />
			</group>

			<PostProcessing />
		</>
	);
}
