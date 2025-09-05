"use client";

import { useFrame } from "@react-three/fiber";
import { type Ref, useMemo, useRef } from "react";
import { createNoise3D } from "simplex-noise";
import * as THREE from "three";
import { usePortfolioStore } from "@/stores/portfolioStore";

const noise3D = createNoise3D();

function createVeinGeometry(segments = 100) {
	const geometry = new THREE.BufferGeometry();
	const positions = new Float32Array(segments * 3);
	const colors = new Float32Array(segments * 3);

	// Create a curved path using noise
	for (let i = 0; i < segments; i++) {
		const t = i / (segments - 1);
		const baseRadius = 3;
		const angle = t * Math.PI * 4; // Multiple spirals

		// Base spiral position
		const x = Math.cos(angle) * baseRadius * (1 - t * 0.5);
		const y = Math.sin(angle) * baseRadius * (1 - t * 0.5);
		const z = (t - 0.5) * 4;

		// Add organic variation with noise
		const noiseScale = 0.5;
		const noiseX = noise3D(x * 0.1, y * 0.1, t * 2) * noiseScale;
		const noiseY = noise3D(x * 0.1 + 100, y * 0.1, t * 2) * noiseScale;
		const noiseZ = noise3D(x * 0.1, y * 0.1 + 100, t * 2) * noiseScale * 0.5;

		positions[i * 3] = x + noiseX;
		positions[i * 3 + 1] = y + noiseY;
		positions[i * 3 + 2] = z + noiseZ;

		// Color gradient from pink to coral
		const color = new THREE.Color();
		color.lerpColors(new THREE.Color("#ffb3d9"), new THREE.Color("#ff9999"), t);

		colors[i * 3] = color.r;
		colors[i * 3 + 1] = color.g;
		colors[i * 3 + 2] = color.b;
	}

	geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
	geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

	return geometry;
}

function LightVein({
	delay = 0,
	scale = 1,
}: {
	delay?: number;
	rotationAxis?: [number, number, number];
	scale?: number;
}) {
	const lineRef = useRef<THREE.Line>(null);
	const materialRef = useRef<THREE.LineBasicMaterial>(null);

	const actIntensities = usePortfolioStore((state) => state.actIntensities);
	const geometry = useMemo(() => createVeinGeometry(), []);

	useFrame(({ clock }) => {
		if (!lineRef.current || !materialRef.current) return;

		const time = clock.getElapsedTime() + delay;
		const intensity = actIntensities.loading;

		// Animate the line growth
		const growthProgress = (Math.sin(time * 0.8) + 1) / 2;
		const visibleSegments = Math.floor(100 * growthProgress);

		// Update geometry to show growth
		const positions = geometry.attributes.position.array as Float32Array;
		const newGeometry = new THREE.BufferGeometry();
		const visiblePositions = new Float32Array(visibleSegments * 3);
		const visibleColors = new Float32Array(visibleSegments * 3);

		for (let i = 0; i < visibleSegments * 3; i++) {
			visiblePositions[i] = positions[i];
		}

		const colors = geometry.attributes.color.array as Float32Array;
		for (let i = 0; i < visibleSegments * 3; i++) {
			visibleColors[i] = colors[i];
		}

		newGeometry.setAttribute(
			"position",
			new THREE.BufferAttribute(visiblePositions, 3),
		);
		newGeometry.setAttribute(
			"color",
			new THREE.BufferAttribute(visibleColors, 3),
		);

		lineRef.current.geometry = newGeometry;

		// Rotation animation
		lineRef.current.rotation.x += 0.005;
		lineRef.current.rotation.y += 0.003;

		// Opacity based on intensity
		materialRef.current.opacity = 0.3 + intensity * 0.5;

		// Pulsing effect
		const pulse = (Math.sin(time * 2) + 1) / 2;
		lineRef.current.scale.setScalar(scale * (0.8 + pulse * 0.2));
	});

	return (
		<line ref={lineRef as Ref<SVGLineElement>}>
			<primitive object={geometry} />
			<lineBasicMaterial
				ref={materialRef}
				vertexColors
				transparent
				opacity={0.6}
				linewidth={2}
			/>
		</line>
	);
}

export default function LightVeins() {
	return (
		<group>
			{/* Multiple veins with different delays and orientations */}
			<LightVein delay={0} rotationAxis={[1, 0, 0]} scale={1} />
			<LightVein delay={1} rotationAxis={[0, 1, 0]} scale={0.8} />
			<LightVein delay={2} rotationAxis={[0, 0, 1]} scale={0.6} />
			<LightVein delay={1.5} rotationAxis={[1, 1, 0]} scale={0.9} />
			<LightVein delay={0.5} rotationAxis={[1, 0, 1]} scale={0.7} />

			{/* Additional connecting veins */}
			<group rotation={[Math.PI / 3, 0, 0]}>
				<LightVein delay={3} rotationAxis={[0, 1, 1]} scale={0.5} />
			</group>

			<group rotation={[0, Math.PI / 4, Math.PI / 6]}>
				<LightVein delay={2.5} rotationAxis={[1, 1, 1]} scale={0.6} />
			</group>
		</group>
	);
}
