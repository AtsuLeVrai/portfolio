"use client";

import { Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";
import { usePortfolioStore } from "@/stores/portfolioStore";
import { createEnergyExplosionMaterial } from "../Shaders/EnergyExplosion";

interface ProjectData {
	title: string;
	description: string;
	tech: string[];
	position: [number, number, number];
	color: string;
	scale: number;
}

const projects: ProjectData[] = [
	{
		title: "Visual Portfolio",
		description: "3D immersive experience with custom shaders",
		tech: ["Three.js", "React", "GLSL", "TypeScript"],
		position: [0, 0, 0],
		color: "#ffb3d9",
		scale: 1.5,
	},
	{
		title: "Trading Platform",
		description: "Real-time financial data visualization",
		tech: ["Node.js", "WebSocket", "PostgreSQL", "React"],
		position: [4, 1, -2],
		color: "#ffd6cc",
		scale: 1.2,
	},
	{
		title: "Game Backend",
		description: "Scalable multiplayer game infrastructure",
		tech: ["Rust", "Docker", "Redis", "gRPC"],
		position: [-4, -1, 1],
		color: "#ff9999",
		scale: 1.3,
	},
];

function ProjectPlatform({
	project,
	index,
}: {
	project: ProjectData;
	index: number;
}) {
	const groupRef = useRef<THREE.Group>(null);
	const platformRef = useRef<THREE.Mesh>(null);
	const particlesRef = useRef<THREE.Points>(null);

	const actIntensities = usePortfolioStore((state) => state.actIntensities);

	// Create explosion particles for each project
	const particleGeometry = useMemo(() => {
		const geometry = new THREE.BufferGeometry();
		const count = 100;
		const positions = new Float32Array(count * 3);
		const scales = new Float32Array(count);
		const delays = new Float32Array(count);

		for (let i = 0; i < count; i++) {
			const radius = Math.random() * 2 + 0.5;
			const theta = Math.random() * Math.PI * 2;
			const phi = Math.acos(2 * Math.random() - 1);

			positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
			positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
			positions[i * 3 + 2] = radius * Math.cos(phi);

			scales[i] = Math.random() * 0.3 + 0.1;
			delays[i] = Math.random() * 1.5 + index * 0.5;
		}

		geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
		geometry.setAttribute("scale", new THREE.BufferAttribute(scales, 1));
		geometry.setAttribute(
			"initialPosition",
			new THREE.BufferAttribute(positions.slice(), 3),
		);
		geometry.setAttribute("delay", new THREE.BufferAttribute(delays, 1));

		return geometry;
	}, [index]);

	const particleMaterial = useMemo(() => createEnergyExplosionMaterial(), []);

	useFrame(({ clock }) => {
		if (!groupRef.current || !platformRef.current) return;

		const time = clock.getElapsedTime();
		const intensity = actIntensities.showcase;

		// Platform emergence animation
		const emergenceDelay = index * 0.5;
		const emergenceTime = Math.max(0, time - emergenceDelay);
		const emergenceProgress = Math.min(emergenceTime * 0.5, 1);

		// Platform rise from ground
		groupRef.current.position.y =
			project.position[1] - 3 + emergenceProgress * 3;
		groupRef.current.scale.setScalar(emergenceProgress * project.scale);

		// Platform rotation
		platformRef.current.rotation.y = time * 0.1 + index;

		// Pulsing effect based on showcase intensity
		platformRef.current.scale.y =
			1 + Math.sin(time * 2 + index) * 0.1 * intensity;

		// Update particle system
		if (particlesRef.current?.material) {
			const material = particlesRef.current.material as THREE.ShaderMaterial;
			material.uniforms.time.value = time;
			material.uniforms.intensity.value = intensity;
			material.uniforms.explosionRadius.value = 2.0 + intensity;
		}
	});

	return (
		<group ref={groupRef} position={project.position}>
			{/* Main platform */}
			<mesh ref={platformRef}>
				<cylinderGeometry args={[1.5, 1.5, 0.3, 16]} />
				<meshStandardMaterial
					color={project.color}
					metalness={0.7}
					roughness={0.3}
					emissive={project.color}
					emissiveIntensity={0.2}
				/>
			</mesh>

			{/* Project title */}
			<Text
				position={[0, 1.5, 0]}
				fontSize={0.3}
				color={project.color}
				anchorX="center"
				anchorY="middle"
			>
				{project.title}
			</Text>

			{/* Tech stack indicators */}
			{project.tech.slice(0, 3).map((tech, techIndex) => {
				const angle = (techIndex / 3) * Math.PI * 2;
				const radius = 2;
				const x = Math.cos(angle) * radius;
				const z = Math.sin(angle) * radius;

				return (
					<group key={`${project.title}-${tech}`} position={[x, 0.5, z]}>
						<mesh>
							<sphereGeometry args={[0.1, 8, 8]} />
							<meshStandardMaterial
								color={project.color}
								emissive={project.color}
								emissiveIntensity={0.5}
							/>
						</mesh>
						<Text
							position={[0, 0.3, 0]}
							fontSize={0.1}
							color="white"
							anchorX="center"
							anchorY="middle"
						>
							{tech}
						</Text>
					</group>
				);
			})}

			{/* Particle explosion effect */}
			<points
				ref={particlesRef}
				geometry={particleGeometry}
				material={particleMaterial}
			/>

			{/* Connecting light beams */}
			<mesh position={[0, 0.15, 0]}>
				<cylinderGeometry args={[0.02, 0.02, 3, 8]} />
				<meshBasicMaterial color={project.color} transparent opacity={0.6} />
			</mesh>
		</group>
	);
}

function ShowcaseEnvironment() {
	const groupRef = useRef<THREE.Group>(null);
	const actIntensities = usePortfolioStore((state) => state.actIntensities);

	useFrame(({ clock }) => {
		if (!groupRef.current) return;

		const time = clock.getElapsedTime();
		const intensity = actIntensities.showcase;

		// Environment scaling and rotation
		groupRef.current.scale.setScalar(intensity);
		groupRef.current.rotation.y = time * 0.02;

		// Position adjustment
		groupRef.current.position.y = (1 - intensity) * -5;
	});

	return (
		<group ref={groupRef}>
			{/* Holographic grid floor */}
			<mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
				<planeGeometry args={[20, 20, 40, 40]} />
				<meshBasicMaterial
					color="#00ffff"
					wireframe
					transparent
					opacity={0.3}
				/>
			</mesh>

			{/* Energy rings */}
			{[2, 4, 6].map((radius, index) => (
				<mesh
					key={index}
					position={[0, -1.8, 0]}
					rotation={[-Math.PI / 2, 0, 0]}
				>
					<ringGeometry args={[radius, radius + 0.1, 32]} />
					<meshBasicMaterial
						color="#ffb3d9"
						transparent
						opacity={0.4 - index * 0.1}
					/>
				</mesh>
			))}

			{/* Floating data streams */}
			{Array.from({ length: 12 }).map((_, i) => {
				const angle = (i / 12) * Math.PI * 2;
				const radius = 8;
				const x = Math.cos(angle) * radius;
				const z = Math.sin(angle) * radius;
				const height = 3 + Math.sin(i * 0.5) * 2;

				return (
					<mesh key={i} position={[x, height, z]}>
						<boxGeometry args={[0.1, 4, 0.1]} />
						<meshBasicMaterial color="#ffd6cc" transparent opacity={0.7} />
					</mesh>
				);
			})}
		</group>
	);
}

export default function ActIV_ProjectShowcase() {
	const actIntensities = usePortfolioStore((state) => state.actIntensities);

	if (actIntensities.showcase < 0.1) return null;

	return (
		<group>
			{/* Showcase-specific lighting */}
			<ambientLight intensity={0.5} color="#f0f8ff" />
			<directionalLight
				position={[0, 10, 5]}
				intensity={1.2}
				color="#ffffff"
				castShadow
			/>

			{/* Multiple spotlights for drama */}
			{projects.map((project, index) => (
				<spotLight
					key={index}
					position={[
						project.position[0],
						project.position[1] + 5,
						project.position[2],
					]}
					target-position={project.position}
					intensity={0.8}
					color={project.color}
					angle={Math.PI / 6}
					penumbra={0.5}
					castShadow
				/>
			))}

			{/* Showcase environment */}
			<ShowcaseEnvironment />

			{/* Project platforms */}
			{projects.map((project, index) => (
				<ProjectPlatform key={project.title} project={project} index={index} />
			))}
		</group>
	);
}
