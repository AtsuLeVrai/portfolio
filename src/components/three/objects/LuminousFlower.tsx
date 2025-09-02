"use client";

import { useFrame } from "@react-three/fiber";
import { useEffect, useMemo, useRef } from "react";
import type { Mesh } from "three";
import * as THREE from "three";
import { useAnimationStore } from "@/stores/animationStore";

export function LuminousFlower() {
	const meshRef = useRef<Mesh>(null);
	const materialRef = useRef<THREE.ShaderMaterial | null>(null);
	const luminousFlowerState = useAnimationStore(
		(state) => state.luminousFlower,
	);

	const material = useMemo(() => {
		const mat = new THREE.ShaderMaterial({
			uniforms: {
				time: { value: 0 },
				intensity: { value: 1.0 },
				colorA: { value: new THREE.Color("#ffb3d9") },
				colorB: { value: new THREE.Color("#ffd6cc") },
				opacity: { value: 0.8 },
			},
			vertexShader: `
				uniform float time;
				varying vec2 vUv;
				varying vec3 vPosition;
				varying vec3 vNormal;
				
				void main() {
					vUv = uv;
					vPosition = position;
					vNormal = normal;
					
					vec3 pos = position;
					pos.z += sin(pos.x * 4.0 + time) * 0.1;
					pos.y += cos(pos.z * 3.0 + time * 1.5) * 0.05;
					
					gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
				}
			`,
			fragmentShader: `
				uniform float time;
				uniform float intensity;
				uniform vec3 colorA;
				uniform vec3 colorB;
				uniform float opacity;
				
				varying vec2 vUv;
				varying vec3 vPosition;
				varying vec3 vNormal;
				
				void main() {
					vec2 uv = vUv;
					
					float noise = sin(uv.x * 10.0 + time) * cos(uv.y * 8.0 + time * 1.2) * 0.5 + 0.5;
					float pulse = sin(time * 2.0) * 0.5 + 0.5;
					
					vec3 color = mix(colorA, colorB, noise * pulse);
					float alpha = noise * intensity * opacity;
					
					float fresnel = pow(1.0 - dot(normalize(vNormal), vec3(0.0, 0.0, 1.0)), 2.0);
					alpha *= fresnel;
					
					gl_FragColor = vec4(color, alpha);
				}
			`,
			transparent: true,
			side: THREE.DoubleSide,
		});

		materialRef.current = mat;
		return mat;
	}, []);

	const geometry = useMemo(() => {
		const geo = new THREE.PlaneGeometry(2, 2, 32, 32);
		const positions = geo.attributes.position;

		for (let i = 0; i < positions.count; i++) {
			const x = positions.getX(i);
			const y = positions.getY(i);

			const distance = Math.sqrt(x * x + y * y);
			const angle = Math.atan2(y, x);

			const petalShape = Math.sin(angle * 5) * 0.3 + 0.7;
			const z = Math.sin(distance * 2) * petalShape * 0.2;

			positions.setZ(i, z);
		}

		geo.attributes.position.needsUpdate = true;
		geo.computeVertexNormals();

		return geo;
	}, []);

	// Apply animation state to mesh
	useEffect(() => {
		if (meshRef.current) {
			const mesh = meshRef.current;

			// Apply position
			mesh.position.set(
				luminousFlowerState.position.x,
				luminousFlowerState.position.y,
				luminousFlowerState.position.z,
			);

			// Apply rotation
			mesh.rotation.set(
				luminousFlowerState.rotation.x,
				luminousFlowerState.rotation.y,
				luminousFlowerState.rotation.z,
			);

			// Apply scale
			mesh.scale.setScalar(luminousFlowerState.scale);

			// Apply visibility
			mesh.visible = luminousFlowerState.visible;
		}

		if (materialRef.current) {
			// Apply intensity and opacity from animation store
			materialRef.current.uniforms.intensity.value =
				luminousFlowerState.intensity || 1;
			materialRef.current.uniforms.opacity.value = luminousFlowerState.opacity;
		}
	}, [luminousFlowerState]);

	useFrame((state) => {
		if (meshRef.current && materialRef.current) {
			// Update time uniform for animated effects
			materialRef.current.uniforms.time.value = state.clock.elapsedTime;

			// Add subtle base rotation (independent of animation system)
			const baseRotation = state.clock.elapsedTime * 0.05;
			meshRef.current.rotation.z =
				luminousFlowerState.rotation.z + baseRotation;
		}
	});

	return <mesh ref={meshRef} geometry={geometry} material={material} />;
}
