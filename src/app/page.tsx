"use client";

import { useEffect } from "react";
import { usePortfolioStore } from "@/stores/portfolioStore";
import Scene from "../components/Experience/Scene";

export default function Home() {
	const initializeAnimation = usePortfolioStore(
		(state) => state.initializeAnimation,
	);
	const currentAct = usePortfolioStore((state) => state.currentAct);
	const scrollProgress = usePortfolioStore((state) => state.scrollProgress);

	useEffect(() => {
		initializeAnimation();
	}, [initializeAnimation]);

	return (
		<main className="relative text-white">
			{/* Three.js Scene */}
			<Scene />

			{/* Scrollable Content */}
			<div className="relative z-10 bg-transparent">
				{/* Act I: Loading */}
				<section className="flex min-h-screen items-center justify-center">
					<div className="space-y-4 text-center">
						<h1 className="animate-pulse bg-gradient-to-r from-[#ffb3d9] to-[#ffd6cc] bg-clip-text font-bold text-6xl text-transparent">
							AtsuLeVrai
						</h1>
						<p className="mx-auto max-w-2xl text-gray-300 text-xl">
							Backend Engineer. Trading Aspirant. Future Game Maker.
						</p>
						<p className="text-gray-500 text-sm italic">
							"Talk to yourself but don't listen to yourself"
						</p>
					</div>
				</section>

				{/* Act II: Glass Revelation */}
				<section className="flex min-h-screen items-center justify-center">
					<div className="mx-auto max-w-4xl space-y-8 px-8 text-center">
						<h2 className="bg-gradient-to-r from-[#ffd6cc] to-[#f5e6d3] bg-clip-text font-bold text-4xl text-transparent">
							The Journey Begins
						</h2>
						<p className="text-gray-300 text-xl leading-relaxed">
							From <strong>CM2 Scratch experiments</strong> to{" "}
							<strong>backend mastery</strong> — a narrative of perfectionism,
							self-doubt, and finally breaking through to create something
							extraordinary.
						</p>
						<div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
							<div className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
								<h3 className="mb-3 font-semibold text-[#ffb3d9] text-xl">
									Backend Development
								</h3>
								<p className="text-gray-400">
									Scalable APIs and infrastructure design
								</p>
							</div>
							<div className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
								<h3 className="mb-3 font-semibold text-[#ffd6cc] text-xl">
									Trading Technology
								</h3>
								<p className="text-gray-400">
									Financial tools and trading systems
								</p>
							</div>
							<div className="rounded-lg border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
								<h3 className="mb-3 font-semibold text-[#ff9999] text-xl">
									Game Development
								</h3>
								<p className="text-gray-400">
									Backend services for multiplayer experiences
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Act III: Immersion */}
				<section className="flex min-h-screen items-center justify-center">
					<div className="mx-auto max-w-4xl space-y-8 px-8 text-center">
						<h2 className="bg-gradient-to-r from-[#f5e6d3] to-[#fff8e1] bg-clip-text font-bold text-4xl text-transparent">
							Technical Excellence
						</h2>
						<p className="text-gray-300 text-xl leading-relaxed">
							Building with modern technologies and pushing the boundaries of
							what's possible.
						</p>
						<div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
							{[
								"TypeScript",
								"Node.js",
								"Three.js",
								"React",
								"Rust",
								"PostgreSQL",
								"Docker",
								"AWS",
							].map((tech) => (
								<div
									key={tech}
									className="rounded-lg border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
								>
									<p className="font-semibold text-white">{tech}</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Act IV: Project Showcase */}
				<section className="flex min-h-screen items-center justify-center">
					<div className="mx-auto max-w-4xl space-y-8 px-8 text-center">
						<h2 className="bg-gradient-to-r from-[#ff9999] to-[#ffb3d9] bg-clip-text font-bold text-4xl text-transparent">
							Featured Projects
						</h2>
						<p className="text-gray-300 text-xl leading-relaxed">
							Each project represents a breakthrough moment in my development
							journey.
						</p>
						<div className="mt-12 space-y-8">
							<div className="rounded-lg border border-white/10 bg-white/5 p-8 text-left backdrop-blur-sm">
								<h3 className="mb-4 font-bold text-2xl text-[#ffb3d9]">
									Visual Portfolio Experience
								</h3>
								<p className="mb-4 text-gray-300">
									An immersive 3D portfolio inspired by Beat Saber's legendary
									maps, combining Three.js, custom shaders, and narrative-driven
									animations to create an unforgettable user experience.
								</p>
								<div className="flex flex-wrap gap-2">
									{[
										"Three.js",
										"React",
										"GLSL",
										"TypeScript",
										"Framer Motion",
									].map((tag) => (
										<span
											key={tag}
											className="rounded-full bg-[#ffb3d9]/20 px-3 py-1 text-[#ffb3d9] text-sm"
										>
											{tag}
										</span>
									))}
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Act V: Outro */}
				<section className="flex min-h-screen items-center justify-center">
					<div className="mx-auto max-w-4xl space-y-8 px-8 text-center">
						<h2 className="bg-gradient-to-r from-[#fff8e1] to-[#f5e6d3] bg-clip-text font-bold text-4xl text-transparent">
							Let's Build Something Extraordinary
						</h2>
						<p className="text-2xl text-gray-300 italic leading-relaxed">
							"Talk to yourself but don't listen to yourself"
						</p>
						<div className="mt-12 space-y-6">
							<p className="text-gray-300 text-xl">
								Ready to collaborate on your next project?
							</p>
							<div className="flex justify-center gap-6">
								<a
									href="mailto:contact@example.com"
									className="rounded-lg bg-gradient-to-r from-[#ffb3d9] to-[#ffd6cc] px-8 py-3 font-semibold text-black transition-transform hover:scale-105"
								>
									Get In Touch
								</a>
								<a
									href="https://github.com"
									className="rounded-lg border border-white/20 px-8 py-3 font-semibold text-white transition-colors hover:bg-white/10"
								>
									View GitHub
								</a>
							</div>
						</div>
					</div>
				</section>
			</div>

			{/* Debug Info */}
			{process.env.NODE_ENV === "development" && (
				<div className="fixed bottom-4 left-4 z-50 rounded bg-black/80 p-2 text-sm text-white">
					<div>Act: {currentAct}</div>
					<div>Progress: {Math.round(scrollProgress * 100)}%</div>
				</div>
			)}
		</main>
	);
}
