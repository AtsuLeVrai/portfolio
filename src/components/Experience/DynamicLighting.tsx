"use client";

import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";
import { usePortfolioStore } from "@/stores/portfolioStore";

interface LightingState {
	sunPosition: THREE.Vector3;
	sunIntensity: number;
	sunColor: THREE.Color;
	ambientIntensity: number;
	ambientColor: THREE.Color;
	fogColor: THREE.Color;
	fogDensity: number;
}

function calculateLightingForTimeOfDay(timeOfDay: number): LightingState {
	// timeOfDay: 0 = midnight, 0.25 = dawn, 0.5 = noon, 0.75 = dusk, 1 = midnight
	const angle = timeOfDay * Math.PI * 2;

	// Sun position (circular path)
	const sunPosition = new THREE.Vector3(
		Math.cos(angle - Math.PI / 2) * 15,
		Math.sin(angle - Math.PI / 2) * 10,
		5,
	);

	// Calculate lighting based on sun height
	const sunHeight = sunPosition.y;
	const isDay = sunHeight > 0;
	const sunVisibility = Math.max(0, sunHeight / 10); // 0-1

	let sunIntensity: number;
	let sunColor: THREE.Color;
	let ambientIntensity: number;
	let ambientColor: THREE.Color;
	let fogColor: THREE.Color;

	if (isDay) {
		// Daytime lighting
		sunIntensity = 0.8 + sunVisibility * 1.2;
		sunColor = new THREE.Color().lerpColors(
			new THREE.Color("#ffaa44"), // Sunrise/sunset orange
			new THREE.Color("#ffffff"), // Midday white
			sunVisibility,
		);
		ambientIntensity = 0.4 + sunVisibility * 0.4;
		ambientColor = new THREE.Color().lerpColors(
			new THREE.Color("#4488ff"), // Blue sky
			new THREE.Color("#87ceeb"), // Light blue
			sunVisibility,
		);
		fogColor = new THREE.Color().lerpColors(
			new THREE.Color("#ffcc88"), // Warm fog
			new THREE.Color("#e6f3ff"), // Clear day
			sunVisibility,
		);
	} else {
		// Nighttime lighting
		const nightDepth = Math.abs(sunHeight) / 10;
		sunIntensity = 0.1; // Moon light
		sunColor = new THREE.Color("#4477aa"); // Cool moonlight
		ambientIntensity = 0.1 + nightDepth * 0.2;
		ambientColor = new THREE.Color().lerpColors(
			new THREE.Color("#223344"), // Deep night blue
			new THREE.Color("#112233"), // Darker night
			nightDepth,
		);
		fogColor = new THREE.Color().lerpColors(
			new THREE.Color("#334455"), // Night fog
			new THREE.Color("#111827"), // Deep night
			nightDepth,
		);
	}

	const fogDensity = 0.01 + Math.abs(Math.sin(angle)) * 0.02; // More fog at dawn/dusk

	return {
		sunPosition,
		sunIntensity,
		sunColor,
		ambientIntensity,
		ambientColor,
		fogColor,
		fogDensity,
	};
}

export default function DynamicLighting() {
	const directionalLightRef = useRef<THREE.DirectionalLight>(null);
	const ambientLightRef = useRef<THREE.AmbientLight>(null);
	const atmosphereRef = useRef<THREE.Mesh>(null);

	const actIntensities = usePortfolioStore((state) => state.actIntensities);
	const currentAct = usePortfolioStore((state) => state.currentAct);

	useFrame(({ clock, scene }) => {
		if (!directionalLightRef.current || !ambientLightRef.current) return;

		const time = clock.getElapsedTime();

		// Calculate time of day based on current act and elapsed time
		let timeOfDay: number;
		switch (currentAct) {
			case "loading":
				timeOfDay = 0.9; // Deep night
				break;
			case "revelation":
				timeOfDay = 0.05 + time * 0.001; // Very slow dawn
				break;
			case "immersion":
				timeOfDay = 0.25 + actIntensities.immersion * 0.25; // Dawn to morning
				break;
			case "showcase":
				timeOfDay = 0.5 + Math.sin(time * 0.1) * 0.1; // Dynamic midday
				break;
			case "outro":
				timeOfDay = 0.75 + actIntensities.outro * 0.2; // Sunset to dusk
				break;
			default:
				timeOfDay = 0.5; // Default to noon
		}

		// Keep timeOfDay in 0-1 range
		timeOfDay = timeOfDay % 1;

		const lighting = calculateLightingForTimeOfDay(timeOfDay);

		// Update directional light (sun/moon)
		directionalLightRef.current.position.copy(lighting.sunPosition);
		directionalLightRef.current.intensity = lighting.sunIntensity;
		directionalLightRef.current.color.copy(lighting.sunColor);

		// Update ambient light
		ambientLightRef.current.intensity = lighting.ambientIntensity;
		ambientLightRef.current.color.copy(lighting.ambientColor);

		// Update scene fog
		if (scene.fog) {
			if (scene.fog instanceof THREE.FogExp2) {
				scene.fog.color.copy(lighting.fogColor);
				scene.fog.density = lighting.fogDensity;
			}
		} else {
			scene.fog = new THREE.FogExp2(lighting.fogColor, lighting.fogDensity);
		}

		// Update atmosphere sphere
		if (atmosphereRef.current) {
			const material = atmosphereRef.current
				.material as THREE.MeshBasicMaterial;
			material.color.copy(lighting.fogColor);
			material.opacity = 0.1 + Math.abs(Math.sin(timeOfDay * Math.PI)) * 0.2;

			// Rotate atmosphere
			atmosphereRef.current.rotation.y = time * 0.01;
		}
	});

	return (
		<group>
			{/* Main directional light (Sun/Moon) */}
			<directionalLight
				ref={directionalLightRef}
				castShadow
				shadow-mapSize-width={2048}
				shadow-mapSize-height={2048}
				shadow-camera-far={50}
				shadow-camera-left={-10}
				shadow-camera-right={10}
				shadow-camera-top={10}
				shadow-camera-bottom={-10}
			/>

			{/* Ambient light */}
			<ambientLight ref={ambientLightRef} />

			{/* Atmospheric sphere for sky coloring */}
			<mesh ref={atmosphereRef} scale={100}>
				<sphereGeometry args={[1, 32, 16]} />
				<meshBasicMaterial
					color="#87ceeb"
					transparent
					opacity={0.1}
					side={THREE.BackSide}
				/>
			</mesh>

			{/* Additional accent lights for dramatic effect */}
			{currentAct === "showcase" && (
				<group>
					<pointLight
						position={[5, 3, 2]}
						intensity={0.8}
						color="#ffb3d9"
						distance={10}
						decay={2}
					/>
					<pointLight
						position={[-5, 2, -3]}
						intensity={0.6}
						color="#ffd6cc"
						distance={8}
						decay={2}
					/>
					<spotLight
						position={[0, 8, 0]}
						target-position={[0, 0, 0]}
						intensity={1.2}
						color="#fff8e1"
						angle={Math.PI / 6}
						penumbra={0.5}
						castShadow
					/>
				</group>
			)}
		</group>
	);
}
