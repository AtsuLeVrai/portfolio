"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { usePortfolioStore } from "@/stores/portfolioStore";
import { createEnergyExplosionMaterial } from "../Shaders/EnergyExplosion";

function createExplosionGeometry(count = 500) {
	const geometry = new THREE.BufferGeometry();

	const positions = new Float32Array(count * 3);
	const scales = new Float32Array(count);
	const initialPositions = new Float32Array(count * 3);
	const delays = new Float32Array(count);

	for (let i = 0; i < count; i++) {
		// Create particles in a sphere around the center
		const radius = Math.random() * 0.5 + 0.1;
		const theta = Math.random() * Math.PI * 2;
		const phi = Math.acos(2 * Math.random() - 1);

		const x = radius * Math.sin(phi) * Math.cos(theta);
		const y = radius * Math.sin(phi) * Math.sin(theta);
		const z = radius * Math.cos(phi);

		positions[i * 3] = x;
		positions[i * 3 + 1] = y;
		positions[i * 3 + 2] = z;

		initialPositions[i * 3] = x;
		initialPositions[i * 3 + 1] = y;
		initialPositions[i * 3 + 2] = z;

		scales[i] = Math.random() * 0.5 + 0.2;
		delays[i] = Math.random() * 2.0; // Stagger the explosions
	}

	geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
	geometry.setAttribute("scale", new THREE.BufferAttribute(scales, 1));
	geometry.setAttribute(
		"initialPosition",
		new THREE.BufferAttribute(initialPositions, 3),
	);
	geometry.setAttribute("delay", new THREE.BufferAttribute(delays, 1));

	return geometry;
}

export default function EnergyExplosions() {
	const pointsRef = useRef<THREE.Points>(null);
	const materialRef = useRef<THREE.ShaderMaterial>(null);

	const actIntensities = usePortfolioStore((state) => state.actIntensities);

	const material = useMemo(() => createEnergyExplosionMaterial(), []);
	const geometry = useMemo(() => createExplosionGeometry(), []);

	useFrame(({ clock }) => {
		if (!materialRef.current || !pointsRef.current) return;

		const time = clock.getElapsedTime();
		const intensity = actIntensities.loading;

		// Update shader uniforms
		materialRef.current.uniforms.time.value = time;
		materialRef.current.uniforms.explosionRadius.value = 3.0 + intensity * 2.0;
		materialRef.current.uniforms.intensity.value = intensity;

		// Continuous explosion effect
		const explosionCycle = (time * 0.5) % 3.0; // 3 second cycles
		materialRef.current.uniforms.time.value = explosionCycle;
	});

	return (
		<group position={[0, 0, 0]}>
			{/* Main explosion */}
			<points ref={pointsRef} geometry={geometry} material={material}>
				<primitive object={material} ref={materialRef} />
			</points>

			{/* Secondary smaller explosions */}
			<points
				geometry={geometry}
				material={material.clone()}
				position={[1, 0.5, 0]}
				scale={0.6}
			/>

			<points
				geometry={geometry}
				material={material.clone()}
				position={[-1, -0.5, 0.5]}
				scale={0.4}
			/>

			<points
				geometry={geometry}
				material={material.clone()}
				position={[0, 1, -0.5]}
				scale={0.7}
			/>
		</group>
	);
}
