"use client";

import { useEffect } from "react";
import { Scene } from "@/components/Scene";
import { useAnimationTimeline } from "@/hooks/useAnimationTimeline";

export default function Home() {
	const { playPhase } = useAnimationTimeline();

	useEffect(() => {
		playPhase("loading");
	}, [playPhase]);

	return (
		<main className="relative min-h-screen overflow-hidden bg-black text-white">
			<Scene />

			<div className="relative z-10 flex min-h-screen items-center justify-center">
				<div className="space-y-4 text-center">
					<h1 className="bg-gradient-to-r from-[#ffb3d9] to-[#ffd6cc] bg-clip-text font-bold text-6xl text-transparent">
						AtsuLeVrai
					</h1>
					<p className="mx-auto max-w-2xl text-gray-300 text-xl">
						Backend Engineer. Trading Aspirant. Future Game Maker.
					</p>
					<p className="text-gray-500 text-sm italic">
						"Talk to yourself but don't listen to yourself"
					</p>
				</div>
			</div>
		</main>
	);
}
