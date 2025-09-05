"use client";

import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { usePortfolioStore } from "@/stores/portfolioStore";
import { createLuminousFlowerMaterial } from "../Shaders/LuminousFlower";

function createFlowerGeometry() {
	const geometry = new THREE.PlaneGeometry(2, 2, 32, 32);
	const positions = geometry.attributes.position.array as Float32Array;
	const uvs = geometry.attributes.uv.array as Float32Array;

	// Transform plane into flower-like shape
	for (let i = 0; i < positions.length; i += 3) {
		// Get UV coordinates for this vertex
		const uvIndex = (i / 3) * 2;
		const u = uvs[uvIndex] - 0.5; // Center around 0
		const v = uvs[uvIndex + 1] - 0.5; // Center around 0

		// Create petal pattern using polar coordinates
		const angle = Math.atan2(v, u);
		const radius = Math.sqrt(u * u + v * v);

		// Create 5 petals
		const petalCount = 5;
		const petalShape = Math.cos(angle * petalCount) * 0.3 + 0.7;

		// Apply petal shape and add some depth variation
		const finalRadius = radius * petalShape;
		const depth = Math.sin(finalRadius * Math.PI) * 0.2;

		positions[i] = u * 2 * petalShape;
		positions[i + 1] = v * 2 * petalShape;
		positions[i + 2] = depth;
	}

	geometry.attributes.position.needsUpdate = true;
	geometry.computeVertexNormals();

	return geometry;
}

export default function LuminousFlower() {
	const meshRef = useRef<THREE.Mesh>(null);
	const materialRef = useRef<THREE.ShaderMaterial>(null);

	const actIntensities = usePortfolioStore((state) => state.actIntensities);

	const material = useMemo(() => createLuminousFlowerMaterial(), []);
	const geometry = useMemo(() => createFlowerGeometry(), []);

	useFrame(({ clock }) => {
		if (!materialRef.current) return;

		const time = clock.getElapsedTime();
		const intensity = actIntensities.loading;

		// Update shader uniforms
		materialRef.current.uniforms.time.value = time;
		materialRef.current.uniforms.intensity.value = intensity;

		// Gentle rotation
		if (meshRef.current) {
			meshRef.current.rotation.z = time * 0.1;
			meshRef.current.rotation.y = Math.sin(time * 0.2) * 0.1;

			// Scale based on intensity
			const scale = 0.5 + intensity * 0.5;
			meshRef.current.scale.setScalar(scale);

			// Position slightly forward when more intense
			meshRef.current.position.z = intensity * 0.5;
		}
	});

	return (
		<group position={[0, 0, -1]}>
			{/* Main flower */}
			<mesh ref={meshRef} geometry={geometry} material={material}>
				<primitive object={material} ref={materialRef} />
			</mesh>

			{/* Additional flower layers for depth */}
			<mesh
				geometry={geometry}
				material={material}
				position={[0, 0, -0.2]}
				rotation={[0, 0, Math.PI / 5]}
				scale={0.8}
			>
				<primitive object={material.clone()} />
			</mesh>

			<mesh
				geometry={geometry}
				material={material}
				position={[0, 0, -0.4]}
				rotation={[0, 0, -Math.PI / 5]}
				scale={0.6}
			>
				<primitive object={material.clone()} />
			</mesh>
		</group>
	);
}
