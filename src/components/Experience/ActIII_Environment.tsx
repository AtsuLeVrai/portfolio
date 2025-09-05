"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import { createNoise3D } from "simplex-noise";
import * as THREE from "three";
import { usePortfolioStore } from "@/stores/portfolioStore";

const _noise3D = createNoise3D();

function BreakingEnvironment() {
	const groupRef = useRef<THREE.Group>(null);
	const fragmentsRef = useRef<THREE.Group>(null);
	const actIntensities = usePortfolioStore((state) => state.actIntensities);

	// Create fragments for breaking effect
	const fragments = useMemo(() => {
		const frags = [];
		for (let i = 0; i < 20; i++) {
			const size = Math.random() * 0.5 + 0.2;
			const position = [
				(Math.random() - 0.5) * 10,
				(Math.random() - 0.5) * 8,
				(Math.random() - 0.5) * 6,
			] as [number, number, number];

			const velocity = [
				(Math.random() - 0.5) * 2,
				(Math.random() - 0.5) * 2,
				(Math.random() - 0.5) * 2,
			] as [number, number, number];

			frags.push({
				size,
				position,
				velocity,
				initialPosition: [...position] as [number, number, number],
			});
		}
		return frags;
	}, []);

	useFrame(({ clock }) => {
		if (!groupRef.current || !fragmentsRef.current) return;

		const time = clock.getElapsedTime();
		const intensity = actIntensities.immersion;

		// Breaking animation based on intensity
		const breakProgress = Math.min(intensity * 2, 1); // Break when intensity increases
		const rebuildProgress = Math.max(0, (intensity - 0.5) * 2); // Rebuild in second half

		fragmentsRef.current.children.forEach((fragment, index) => {
			const mesh = fragment as THREE.Mesh;
			const fragData = fragments[index];

			if (breakProgress > 0) {
				// Breaking phase - fragments fly apart
				const t = breakProgress;
				mesh.position.set(
					fragData.initialPosition[0] + fragData.velocity[0] * t * 3,
					fragData.initialPosition[1] + fragData.velocity[1] * t * 3,
					fragData.initialPosition[2] + fragData.velocity[2] * t * 3,
				);

				// Add rotation during break
				mesh.rotation.x = time * fragData.velocity[0];
				mesh.rotation.y = time * fragData.velocity[1];
				mesh.rotation.z = time * fragData.velocity[2];
			}

			if (rebuildProgress > 0) {
				// Rebuilding phase - fragments come back together
				const t = rebuildProgress;
				const targetX = fragData.initialPosition[0] * (1 - t);
				const targetY = fragData.initialPosition[1] * (1 - t);
				const targetZ = fragData.initialPosition[2] * (1 - t);

				mesh.position.x = THREE.MathUtils.lerp(
					mesh.position.x,
					targetX,
					t * 0.1,
				);
				mesh.position.y = THREE.MathUtils.lerp(
					mesh.position.y,
					targetY,
					t * 0.1,
				);
				mesh.position.z = THREE.MathUtils.lerp(
					mesh.position.z,
					targetZ,
					t * 0.1,
				);

				// Slow down rotation
				mesh.rotation.x *= 1 - t * 0.1;
				mesh.rotation.y *= 1 - t * 0.1;
				mesh.rotation.z *= 1 - t * 0.1;
			}

			// Opacity based on intensity
			const material = mesh.material as THREE.MeshBasicMaterial;
			material.opacity = intensity * 0.8;
		});

		// Main group gentle movement
		groupRef.current.rotation.y = time * 0.02;
		groupRef.current.position.y = Math.sin(time * 0.3) * 0.2;
	});

	return (
		<group ref={groupRef}>
			<group ref={fragmentsRef}>
				{fragments.map((fragment, index) => (
					<mesh
						key={index}
						position={fragment.initialPosition}
						scale={fragment.size}
					>
						<boxGeometry args={[0.5, 0.5, 0.5]} />
						<meshBasicMaterial
							color={new THREE.Color().setHSL(0.1 + index * 0.02, 0.7, 0.6)}
							transparent
							opacity={0.7}
							wireframe
						/>
					</mesh>
				))}
			</group>
		</group>
	);
}

function ReconstructedEnvironment() {
	const groupRef = useRef<THREE.Group>(null);
	const actIntensities = usePortfolioStore((state) => state.actIntensities);

	useFrame(({ clock }) => {
		if (!groupRef.current) return;

		const time = clock.getElapsedTime();
		const intensity = actIntensities.immersion;

		// Only show when intensity is high (rebuilding phase)
		const rebuildProgress = Math.max(0, (intensity - 0.5) * 2);
		groupRef.current.scale.setScalar(rebuildProgress);
		groupRef.current.position.y = (1 - rebuildProgress) * -2;

		// Gentle animations
		groupRef.current.rotation.y = time * 0.05;
	});

	return (
		<group ref={groupRef}>
			{/* Floor */}
			<mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
				<planeGeometry args={[20, 20, 32, 32]} />
				<meshBasicMaterial
					color="#2a1810"
					transparent
					opacity={0.3}
					wireframe
				/>
			</mesh>

			{/* Walls */}
			<mesh position={[0, 0, -5]}>
				<planeGeometry args={[12, 8, 16, 16]} />
				<meshBasicMaterial
					color="#f5e6d3"
					transparent
					opacity={0.2}
					wireframe
				/>
			</mesh>

			{/* Pillars */}
			{[-4, 0, 4].map((x, index) => (
				<mesh key={index} position={[x, 1, -3]}>
					<cylinderGeometry args={[0.2, 0.2, 4, 8]} />
					<meshBasicMaterial
						color="#fff8e1"
						transparent
						opacity={0.4}
						wireframe
					/>
				</mesh>
			))}

			{/* Floating architectural elements */}
			<group>
				{Array.from({ length: 8 }).map((_, i) => {
					const angle = (i / 8) * Math.PI * 2;
					const radius = 3;
					const x = Math.cos(angle) * radius;
					const z = Math.sin(angle) * radius;
					const y = Math.sin(i * 0.5) * 2;

					return (
						<mesh key={i} position={[x, y, z]} rotation={[angle, 0, 0]}>
							<octahedronGeometry args={[0.3]} />
							<meshBasicMaterial
								color="#ffd6cc"
								transparent
								opacity={0.5}
								wireframe
							/>
						</mesh>
					);
				})}
			</group>
		</group>
	);
}

function ParticleField() {
	const pointsRef = useRef<THREE.Points>(null);
	const actIntensities = usePortfolioStore((state) => state.actIntensities);

	const particleCount = 200;
	const positions = useMemo(() => {
		const pos = new Float32Array(particleCount * 3);
		for (let i = 0; i < particleCount; i++) {
			pos[i * 3] = (Math.random() - 0.5) * 15;
			pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
			pos[i * 3 + 2] = (Math.random() - 0.5) * 12;
		}
		return pos;
	}, []);

	useFrame(({ clock }) => {
		if (!pointsRef.current) return;

		const time = clock.getElapsedTime();
		const intensity = actIntensities.immersion;

		const posArray = pointsRef.current.geometry.attributes.position
			.array as Float32Array;

		for (let i = 0; i < particleCount; i++) {
			const i3 = i * 3;
			const x = positions[i3];
			const y = positions[i3 + 1];
			const z = positions[i3 + 2];

			// Swirling motion
			const swirl = time * 0.2 + i * 0.1;
			posArray[i3] = x + Math.sin(swirl) * intensity;
			posArray[i3 + 1] = y + Math.cos(swirl * 1.1) * intensity * 0.5;
			posArray[i3 + 2] = z + Math.sin(swirl * 0.8) * intensity * 0.3;
		}

		pointsRef.current.geometry.attributes.position.needsUpdate = true;

		// Material opacity
		const material = pointsRef.current.material as THREE.PointsMaterial;
		material.opacity = intensity * 0.8;
	});

	return (
		<points ref={pointsRef}>
			<bufferGeometry>
				<bufferAttribute
					attach="attributes-position"
					count={particleCount}
					array={positions}
					itemSize={3}
					args={[positions, 3]}
				/>
			</bufferGeometry>
			<pointsMaterial
				size={0.03}
				color="#fff8e1"
				transparent
				opacity={0.6}
				sizeAttenuation
			/>
		</points>
	);
}

export default function ActIII_Environment() {
	const actIntensities = usePortfolioStore((state) => state.actIntensities);

	if (actIntensities.immersion < 0.1) return null;

	return (
		<group>
			{/* Enhanced lighting for the environment */}
			<ambientLight intensity={0.3} color="#f5e6d3" />
			<directionalLight
				position={[10, 10, 5]}
				intensity={0.6 * actIntensities.immersion}
				color="#fff8e1"
			/>
			<pointLight
				position={[-5, 3, -2]}
				intensity={0.4 * actIntensities.immersion}
				color="#ffd6cc"
			/>

			{/* Breaking environment effect */}
			<BreakingEnvironment />

			{/* Reconstructed environment */}
			<ReconstructedEnvironment />

			{/* Particle field for atmosphere */}
			<ParticleField />
		</group>
	);
}
