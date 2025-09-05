"use client";

import { PointMaterial, Points } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { createNoise3D } from "simplex-noise";
import * as THREE from "three";
import EnergyExplosions from "./EnergyExplosions";
import LightVeins from "./LightVeins";
import LuminousFlower from "./LuminousFlower";

const noise3D = createNoise3D();

function FloatingParticles() {
	const pointsRef = useRef<THREE.Points>(null);
	const particleCount = 1000;

	// Generate particle positions
	const positions = new Float32Array(particleCount * 3);
	for (let i = 0; i < particleCount; i++) {
		positions[i * 3] = (Math.random() - 0.5) * 20;
		positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
		positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
	}

	useFrame(({ clock }) => {
		if (!pointsRef.current) return;

		const time = clock.getElapsedTime() * 0.5;
		const positions = pointsRef.current.geometry.attributes.position
			.array as Float32Array;

		for (let i = 0; i < particleCount; i++) {
			const i3 = i * 3;
			const x = positions[i3];
			const y = positions[i3 + 1];
			const z = positions[i3 + 2];

			positions[i3] = x + noise3D(x * 0.01, time, y * 0.01) * 0.005;
			positions[i3 + 1] = y + noise3D(x * 0.01, y * 0.01, time) * 0.01;
			positions[i3 + 2] = z + noise3D(time, z * 0.01, x * 0.01) * 0.008;
		}

		pointsRef.current.geometry.attributes.position.needsUpdate = true;
	});

	return (
		<Points ref={pointsRef}>
			<bufferGeometry>
				<bufferAttribute
					attach="attributes-position"
					count={particleCount}
					array={positions}
					itemSize={3}
					args={[positions, 3]}
				/>
			</bufferGeometry>
			<PointMaterial
				size={0.02}
				color="#ffb3d9"
				transparent
				opacity={0.6}
				sizeAttenuation
				blending={THREE.AdditiveBlending}
			/>
		</Points>
	);
}

function BuildupSphere() {
	const meshRef = useRef<THREE.Mesh>(null);
	const outerMeshRef = useRef<THREE.Mesh>(null);

	useFrame(({ clock }) => {
		if (!meshRef.current || !outerMeshRef.current) return;

		const time = clock.getElapsedTime();

		// Inner sphere rotation
		meshRef.current.rotation.x = time * 0.3;
		meshRef.current.rotation.y = time * 0.2;

		// Outer sphere counter-rotation
		outerMeshRef.current.rotation.x = -time * 0.2;
		outerMeshRef.current.rotation.z = time * 0.15;

		// Pulsing effect with different frequencies
		const innerScale = 1 + Math.sin(time * 2) * 0.15;
		const outerScale = 1.2 + Math.sin(time * 1.5 + Math.PI / 3) * 0.1;

		meshRef.current.scale.setScalar(innerScale);
		outerMeshRef.current.scale.setScalar(outerScale);

		// Energy buildup effect - opacity changes
		const energyBuildup = (Math.sin(time * 0.8) + 1) / 2;
		(meshRef.current.material as THREE.MeshBasicMaterial).opacity =
			0.4 + energyBuildup * 0.3;
		(outerMeshRef.current.material as THREE.MeshBasicMaterial).opacity =
			0.2 + energyBuildup * 0.2;
	});

	return (
		<group>
			{/* Inner core sphere */}
			<mesh ref={meshRef}>
				<sphereGeometry args={[0.8, 32, 32]} />
				<meshBasicMaterial
					color="#ff9999"
					wireframe
					transparent
					opacity={0.4}
				/>
			</mesh>

			{/* Outer energy shell */}
			<mesh ref={outerMeshRef}>
				<sphereGeometry args={[1.2, 16, 16]} />
				<meshBasicMaterial
					color="#ffb3d9"
					wireframe
					transparent
					opacity={0.2}
				/>
			</mesh>

			{/* Energy rings */}
			<mesh rotation={[Math.PI / 2, 0, 0]}>
				<torusGeometry args={[1.5, 0.05, 8, 32]} />
				<meshBasicMaterial color="#ffd6cc" transparent opacity={0.6} />
			</mesh>

			<mesh rotation={[0, Math.PI / 2, 0]}>
				<torusGeometry args={[1.3, 0.03, 6, 24]} />
				<meshBasicMaterial color="#ff9999" transparent opacity={0.4} />
			</mesh>
		</group>
	);
}

export default function ActI_Loading() {
	return (
		<group>
			<ambientLight intensity={0.2} />
			<pointLight position={[10, 10, 10]} intensity={0.5} color="#ffb3d9" />
			<pointLight position={[-10, -10, -10]} intensity={0.3} color="#ffd6cc" />

			{/* Background elements */}
			<FloatingParticles />
			<LightVeins />

			{/* Central focal point */}
			<BuildupSphere />
			<LuminousFlower />

			{/* Foreground effects */}
			<EnergyExplosions />
		</group>
	);
}
