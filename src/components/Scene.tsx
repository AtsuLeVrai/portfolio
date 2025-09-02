"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Loading } from "./Loading";
import { SceneManager } from "./three/SceneManager";

export function Scene() {
	return (
		<div className="-z-10 fixed inset-0">
			<Canvas
				camera={{
					position: [0, 0, 5],
					fov: 75,
					near: 0.1,
					far: 1000,
				}}
				gl={{
					antialias: true,
					alpha: true,
					powerPreference: "high-performance",
				}}
				dpr={[1, 2]}
			>
				<Suspense fallback={null}>
					<SceneManager />
				</Suspense>
			</Canvas>
			<Suspense fallback={<Loading />}>{null}</Suspense>
		</div>
	);
}
