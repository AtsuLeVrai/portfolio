"use client";

import { useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import type { Points } from "three";
import * as THREE from "three";
import { useAnimationStore } from "@/stores/animationStore";

export function EnergyExplosions() {
	const pointsRef = useRef<Points>(null);
	const materialRef = useRef<THREE.PointsMaterial>(null);
	const energyExplosionsState = useAnimationStore(
		(state) => state.energyExplosions,
	);

	const { geometry, material } = useMemo(() => {
		const count = 1000;
		const positions = new Float32Array(count * 3);
		const velocities = new Float32Array(count * 3);

		for (let i = 0; i < count; i++) {
			const i3 = i * 3;

			const radius = Math.random() * 3;
			const angle = Math.random() * Math.PI * 2;
			const elevation = (Math.random() - 0.5) * Math.PI;

			positions[i3] = Math.cos(angle) * Math.cos(elevation) * radius;
			positions[i3 + 1] = Math.sin(elevation) * radius;
			positions[i3 + 2] = Math.sin(angle) * Math.cos(elevation) * radius;

			velocities[i3] = (Math.random() - 0.5) * 0.02;
			velocities[i3 + 1] = (Math.random() - 0.5) * 0.02;
			velocities[i3 + 2] = (Math.random() - 0.5) * 0.02;
		}

		const geo = new THREE.BufferGeometry();
		geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
		geo.setAttribute("velocity", new THREE.BufferAttribute(velocities, 3));

		const mat = new THREE.PointsMaterial({
			color: "#ff9999",
			size: 0.05,
			transparent: true,
			opacity: 0.8,
			blending: THREE.AdditiveBlending,
		});

		materialRef.current = mat;
		return { geometry: geo, material: mat };
	}, []);

	// Apply animation state to points system
	useEffect(() => {
		if (pointsRef.current) {
			const points = pointsRef.current;

			// Apply position
			points.position.set(
				energyExplosionsState.position.x,
				energyExplosionsState.position.y,
				energyExplosionsState.position.z,
			);

			// Apply rotation
			points.rotation.set(
				energyExplosionsState.rotation.x,
				energyExplosionsState.rotation.y,
				energyExplosionsState.rotation.z,
			);

			// Apply scale
			points.scale.setScalar(energyExplosionsState.scale);

			// Apply visibility
			points.visible = energyExplosionsState.visible;
		}

		if (materialRef.current) {
			// Apply opacity and intensity from animation store
			materialRef.current.opacity = energyExplosionsState.opacity;
			materialRef.current.size = 0.05 * (energyExplosionsState.intensity || 1);
		}
	}, [energyExplosionsState]);

	useFrame((state) => {
		if (pointsRef.current && energyExplosionsState.visible) {
			const positions = pointsRef.current.geometry.attributes.position;
			const velocities = pointsRef.current.geometry.attributes.velocity;

			// Animate particles with intensity-based speed
			const speedMultiplier = (energyExplosionsState.intensity || 1) * 0.5;

			for (let i = 0; i < positions.count; i++) {
				const i3 = i * 3;

				positions.array[i3] += velocities.array[i3] * speedMultiplier;
				positions.array[i3 + 1] += velocities.array[i3 + 1] * speedMultiplier;
				positions.array[i3 + 2] += velocities.array[i3 + 2] * speedMultiplier;

				const distance = Math.sqrt(
					positions.array[i3] ** 2 +
						positions.array[i3 + 1] ** 2 +
						positions.array[i3 + 2] ** 2,
				);

				if (distance > 5) {
					positions.array[i3] *= 0.1;
					positions.array[i3 + 1] *= 0.1;
					positions.array[i3 + 2] *= 0.1;
				}
			}

			positions.needsUpdate = true;

			// Add some rotation based on time
			pointsRef.current.rotation.y =
				state.clock.elapsedTime * 0.2 * speedMultiplier;
		}
	});

	return <points ref={pointsRef} geometry={geometry} material={material} />;
}
