"use client";

import { useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import type { Mesh } from "three";
import * as THREE from "three";
import { useAnimationStore } from "@/stores/animationStore";

export function BuildupSphere() {
	const sphereRef = useRef<Mesh>(null);
	const materialRef = useRef<THREE.ShaderMaterial | null>(null);
	const buildupSphereState = useAnimationStore((state) => state.buildupSphere);

	const material = useMemo(() => {
		const mat = new THREE.ShaderMaterial({
			uniforms: {
				time: { value: 0 },
				opacity: { value: 0.1 },
				reflection: { value: 0.4 },
				glassColor: { value: new THREE.Color("#ffffff") },
				intensity: { value: 1.0 },
			},
			vertexShader: `
				uniform float time;
				varying vec2 vUv;
				varying vec3 vNormal;
				varying vec3 vPosition;
				
				void main() {
					vUv = uv;
					vNormal = normalize(normalMatrix * normal);
					vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;
					
					// Add subtle vertex displacement for buildup effect
					vec3 pos = position;
					float displacement = sin(pos.x * 3.0 + time) * cos(pos.y * 3.0 + time) * 0.05;
					pos += normal * displacement;
					
					gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
				}
			`,
			fragmentShader: `
				uniform float time;
				uniform float opacity;
				uniform float reflection;
				uniform vec3 glassColor;
				uniform float intensity;
				
				varying vec2 vUv;
				varying vec3 vNormal;
				varying vec3 vPosition;
				
				void main() {
					float fresnel = pow(1.0 - dot(normalize(vNormal), normalize(-vPosition)), 3.0);
					
					// Add pulsing energy effect
					float pulse = sin(time * 3.0) * 0.5 + 0.5;
					vec3 energyColor = mix(glassColor, vec3(0.8, 0.4, 1.0), pulse * intensity);
					
					float alpha = opacity * intensity + fresnel * reflection;
					
					gl_FragColor = vec4(energyColor, alpha);
				}
			`,
			transparent: true,
		});

		materialRef.current = mat;
		return mat;
	}, []);

	// Apply animation state to sphere
	useEffect(() => {
		if (sphereRef.current) {
			const sphere = sphereRef.current;

			// Apply position
			sphere.position.set(
				buildupSphereState.position.x,
				buildupSphereState.position.y,
				buildupSphereState.position.z - 1, // Keep original Z offset
			);

			// Apply rotation
			sphere.rotation.set(
				buildupSphereState.rotation.x,
				buildupSphereState.rotation.y,
				buildupSphereState.rotation.z,
			);

			// Apply scale
			sphere.scale.setScalar(buildupSphereState.scale);

			// Apply visibility
			sphere.visible = buildupSphereState.visible;
		}

		if (materialRef.current) {
			// Apply opacity and intensity from animation store
			materialRef.current.uniforms.opacity.value = buildupSphereState.opacity;
			materialRef.current.uniforms.intensity.value =
				buildupSphereState.intensity || 1;
		}
	}, [buildupSphereState]);

	useFrame((state) => {
		if (
			sphereRef.current &&
			materialRef.current &&
			buildupSphereState.visible
		) {
			materialRef.current.uniforms.time.value = state.clock.elapsedTime;

			// Add animated pulsing scale effect based on intensity
			const intensityMultiplier = buildupSphereState.intensity || 1;
			const pulseScale =
				1 + Math.sin(state.clock.elapsedTime * 2) * 0.1 * intensityMultiplier;
			const baseScale = buildupSphereState.scale;

			sphereRef.current.scale.setScalar(baseScale * pulseScale);

			// Animated rotation (independent of store rotation)
			sphereRef.current.rotation.y =
				buildupSphereState.rotation.y + state.clock.elapsedTime * 0.2;
			sphereRef.current.rotation.x =
				buildupSphereState.rotation.x + state.clock.elapsedTime * 0.1;
		}
	});

	return (
		<mesh ref={sphereRef} material={material}>
			<sphereGeometry args={[1, 32, 32]} />
		</mesh>
	);
}
