"use client";

import { CubeCamera, Environment } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { usePortfolioStore } from "@/stores/portfolioStore";
import { createGlassMaterial } from "../Shaders/GlassMaterial";

function GlassPanel({
	position,
	rotation,
	scale = 1,
}: {
	position: [number, number, number];
	rotation: [number, number, number];
	scale?: number;
}) {
	const meshRef = useRef<THREE.Mesh>(null);
	const materialRef = useRef<THREE.ShaderMaterial>(null);

	const actIntensities = usePortfolioStore((state) => state.actIntensities);
	const material = useMemo(() => createGlassMaterial(), []);

	useFrame(({ clock }) => {
		if (!materialRef.current || !meshRef.current) return;

		const time = clock.getElapsedTime();
		const intensity = actIntensities.revelation;

		// Update shader uniforms
		materialRef.current.uniforms.time.value = time;
		materialRef.current.uniforms.opacity.value = intensity * 0.8;

		// Gentle floating animation
		meshRef.current.position.y =
			position[1] + Math.sin(time + position[0]) * 0.1;
		meshRef.current.rotation.y = rotation[1] + Math.sin(time * 0.5) * 0.1;

		// Scale based on intensity
		const currentScale = scale * (0.5 + intensity * 0.5);
		meshRef.current.scale.setScalar(currentScale);
	});

	return (
		<mesh
			ref={meshRef}
			position={position}
			rotation={rotation}
			geometry={new THREE.PlaneGeometry(2, 3, 32, 32)}
			material={material}
		>
			<primitive object={material} ref={materialRef} />
		</mesh>
	);
}

function CodeFragments() {
	const groupRef = useRef<THREE.Group>(null);
	const actIntensities = usePortfolioStore((state) => state.actIntensities);

	// Code snippets to display
	const codeTexts = [
		"const portfolio = {\n  vision: 'extraordinary',\n  tech: ['Three.js', 'React']\n}",
		"function createMagic() {\n  return innovation\n    .blend(creativity)\n    .render();\n}",
		"// Breaking through\n// perfectionism\nwhile (dreaming) {\n  ship();\n}",
	];

	useFrame(({ clock }) => {
		if (!groupRef.current) return;

		const time = clock.getElapsedTime();
		const intensity = actIntensities.revelation;

		// Orbit around center
		groupRef.current.rotation.y = time * 0.2;
		groupRef.current.position.y = Math.sin(time * 0.3) * 0.5;

		// Scale based on revelation intensity
		groupRef.current.scale.setScalar(intensity);
	});

	return (
		<group ref={groupRef}>
			{codeTexts.map((_text, index) => {
				const angle = (index / codeTexts.length) * Math.PI * 2;
				const radius = 4;
				const x = Math.cos(angle) * radius;
				const z = Math.sin(angle) * radius;

				return (
					<mesh key={index} position={[x, 0, z]} rotation={[0, -angle, 0]}>
						<planeGeometry args={[1.5, 1, 1]} />
						<meshBasicMaterial
							color="#ffb3d9"
							transparent
							opacity={0.8}
							side={THREE.DoubleSide}
						/>
					</mesh>
				);
			})}
		</group>
	);
}

function GlassStructure() {
	const actIntensities = usePortfolioStore((state) => state.actIntensities);

	if (actIntensities.revelation < 0.1) return null;

	return (
		<group>
			{/* Main glass walls */}
			<GlassPanel position={[0, 0, -2]} rotation={[0, 0, 0]} scale={1.5} />
			<GlassPanel
				position={[-3, 1, 0]}
				rotation={[0, Math.PI / 2, 0]}
				scale={1.2}
			/>
			<GlassPanel
				position={[3, -0.5, 1]}
				rotation={[0, -Math.PI / 3, 0]}
				scale={1}
			/>

			{/* Floating glass shards */}
			<GlassPanel
				position={[-1, 2, 1]}
				rotation={[Math.PI / 6, Math.PI / 4, 0]}
				scale={0.6}
			/>
			<GlassPanel
				position={[2, 1.5, -1]}
				rotation={[-Math.PI / 8, -Math.PI / 6, Math.PI / 12]}
				scale={0.4}
			/>
			<GlassPanel
				position={[0, 3, 2]}
				rotation={[Math.PI / 4, 0, Math.PI / 8]}
				scale={0.8}
			/>
		</group>
	);
}

export default function ActII_Revelation() {
	const groupRef = useRef<THREE.Group>(null);
	const actIntensities = usePortfolioStore((state) => state.actIntensities);

	useFrame(({ clock }) => {
		if (!groupRef.current) return;

		const time = clock.getElapsedTime();
		const intensity = actIntensities.revelation;

		// Main group gentle rotation
		groupRef.current.rotation.y = time * 0.05;

		// Scale entire scene based on revelation intensity
		groupRef.current.scale.setScalar(intensity);

		// Position adjustment for cinematic effect
		groupRef.current.position.z = (1 - intensity) * -5;
	});

	return (
		<group ref={groupRef}>
			{/* Environment for reflections */}
			<CubeCamera resolution={256} frames={1}>
				{(texture) => <Environment map={texture} />}
			</CubeCamera>

			{/* Enhanced lighting for glass */}
			<ambientLight intensity={0.4} color="#f5e6d3" />
			<directionalLight
				position={[5, 5, 5]}
				intensity={0.8}
				color="#fff8e1"
				castShadow
			/>
			<pointLight position={[-3, 2, 3]} intensity={0.6} color="#ffd6cc" />

			{/* Main glass structure */}
			<GlassStructure />

			{/* Code fragments */}
			<CodeFragments />

			{/* Particle effects for the transition */}
			<group>
				{Array.from({ length: 50 }).map((_, i) => {
					const angle = (i / 50) * Math.PI * 2;
					const radius = 3 + Math.random() * 2;
					const x = Math.cos(angle) * radius;
					const z = Math.sin(angle) * radius;
					const y = (Math.random() - 0.5) * 4;

					return (
						<mesh key={i} position={[x, y, z]}>
							<sphereGeometry args={[0.02, 8, 8]} />
							<meshBasicMaterial
								color="#ffb3d9"
								transparent
								opacity={actIntensities.revelation * 0.6}
							/>
						</mesh>
					);
				})}
			</group>
		</group>
	);
}
