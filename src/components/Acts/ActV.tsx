"use client";

import { animate, createScope, stagger, type Scope } from "animejs";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function ActV() {
	const sectionRef = useRef<HTMLElement>(null);
	const [email, setEmail] = useState("");

	const scope = useRef<Scope | null>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						scope.current = createScope({ root: sectionRef }).add((_self) => {
							// Gentle contact elements animation
							animate(".contact-element", {
								opacity: [0, 1],
								translateY: [30, 0],
								duration: 1000,
								delay: stagger(200),
								ease: "outSine",
							});

							// Floating hearts
							setTimeout(() => {
								animate(".floating-heart", {
									scale: [0, 1],
									opacity: [0, 0.6],
									duration: 800,
									ease: "outBack(1.7)",
								});
							}, 500);

							// Ambient particle effect (continuous)
							const animateParticles = () => {
								animate(".ambient-particle", {
									translateY: [0, -100],
									opacity: [0, 0.8, 0],
									duration: 4000,
									delay: stagger(300),
									ease: "inOutSine",
									complete: animateParticles,
								});
							};
							animateParticles();
						});
					}
				});
			},
			{ threshold: 0.3 },
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => {
			observer.disconnect();
			scope.current?.revert();
		};
	}, []);

	const handleEmailSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Handle email submission
		console.log("Email submitted:", email);
		setEmail("");

		// Success animation
		animate(".submit-btn", {
			scale: [1, 1.2, 1],
			duration: 600,
			ease: "outBack(1.7)",
		});
	};

	const socialLinks = [
		{ name: "GitHub", href: "https://github.com", icon: "🐙" },
		{ name: "LinkedIn", href: "https://linkedin.com", icon: "💼" },
		{ name: "Twitter", href: "https://twitter.com", icon: "🐦" },
		{ name: "Email", href: "mailto:contact@example.com", icon: "📧" },
	];

	return (
		<section
			ref={sectionRef}
			className="relative flex min-h-screen items-center justify-center overflow-hidden py-20"
		>
			{/* Calm, ambient background */}
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900/20 to-black" />

				{/* Floating ambient particles */}
				<div className="absolute inset-0">
					{[...Array(12)].map((_, i) => (
						<motion.div
							key={`ambient-particle-${i}`}
							className="ambient-particle absolute h-1 w-1 rounded-full bg-[#fff8e1] opacity-0"
							style={{
								left: `${10 + i * 7}%`,
								top: `${70 + Math.sin(i) * 20}%`,
							}}
							animate={{
								y: [0, -200, 0],
								opacity: [0, 0.6, 0],
							}}
							transition={{
								duration: 6,
								repeat: Number.POSITIVE_INFINITY,
								delay: i * 0.5,
								ease: "easeInOut",
							}}
						/>
					))}
				</div>

				{/* Gentle gradient orbs */}
				{[...Array(4)].map((_, i) => (
					<motion.div
						key={`gradient-orb-${i}`}
						className="absolute rounded-full opacity-10"
						style={{
							left: `${20 + i * 20}%`,
							top: `${30 + i * 15}%`,
							width: `${100 + i * 50}px`,
							height: `${100 + i * 50}px`,
							background: "linear-gradient(135deg, #fff8e1, #f5e6d3)",
						}}
						animate={{
							scale: [1, 1.2, 1],
							opacity: [0.05, 0.15, 0.05],
						}}
						transition={{
							duration: 8,
							repeat: Number.POSITIVE_INFINITY,
							delay: i * 2,
						}}
					/>
				))}
			</div>

			<div className="relative z-10 mx-auto max-w-4xl px-8 text-center">
				{/* Floating hearts */}
				<div className="floating-heart -top-10 absolute left-1/4 text-2xl opacity-0">
					💙
				</div>
				<div className="floating-heart -top-5 absolute right-1/3 text-xl opacity-0">
					✨
				</div>
				<div className="floating-heart absolute top-20 right-1/4 text-lg opacity-0">
					🌟
				</div>

				<motion.h2 className="contact-element mb-8 bg-gradient-to-r from-[#fff8e1] to-[#f5e6d3] bg-clip-text font-bold text-5xl text-transparent opacity-0">
					Let's Build Something Extraordinary
				</motion.h2>

				<motion.p className="contact-element mb-12 text-2xl text-gray-300 italic leading-relaxed opacity-0">
					"Talk to yourself but don't listen to yourself"
				</motion.p>

				<motion.div className="contact-element mb-12 opacity-0">
					<p className="mx-auto mb-8 max-w-2xl text-gray-300 text-xl leading-relaxed">
						Ready to collaborate on your next project? Whether it's building
						scalable backends, creating trading systems, or crafting immersive
						experiences, let's make it happen.
					</p>
				</motion.div>

				{/* Contact form */}
				<motion.form
					onSubmit={handleEmailSubmit}
					className="contact-element mx-auto mb-12 max-w-md opacity-0"
				>
					<div className="flex flex-col gap-4 sm:flex-row">
						<input
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="your.email@example.com"
							className="flex-1 rounded-full border border-white/20 bg-white/10 px-6 py-4 text-white placeholder-gray-400 backdrop-blur-sm transition-colors focus:border-[#f5e6d3] focus:outline-none"
							required
						/>
						<motion.button
							type="submit"
							className="submit-btn rounded-full bg-gradient-to-r from-[#fff8e1] to-[#f5e6d3] px-8 py-4 font-semibold text-black transition-all duration-300 hover:shadow-lg"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							Let's Talk
						</motion.button>
					</div>
				</motion.form>

				{/* Social links */}
				<motion.div className="contact-element mb-12 opacity-0">
					<div className="flex justify-center gap-6">
						{socialLinks.map((link) => (
							<motion.a
								key={link.name}
								href={link.href}
								className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-white backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/10"
								whileHover={{
									y: -5,
									boxShadow: "0 10px 25px rgba(255, 248, 225, 0.1)",
								}}
								whileTap={{ scale: 0.95 }}
							>
								<span className="text-xl">{link.icon}</span>
								<span className="hidden sm:inline">{link.name}</span>
							</motion.a>
						))}
					</div>
				</motion.div>

				{/* Final message */}
				<motion.div
					className="contact-element opacity-0"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 1, delay: 1 }}
					viewport={{ once: true }}
				>
					<p className="mx-auto max-w-lg text-gray-400 text-sm leading-relaxed">
						This portfolio was crafted with passion, inspired by the legendary
						Beat Saber maps that push the boundaries of what's possible. Every
						animation, every transition, every moment is designed to tell a
						story.
					</p>

					<motion.div
						className="mt-8 text-gray-500 text-xs"
						animate={{ opacity: [0.5, 1, 0.5] }}
						transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
					>
						Built with React, Anime.js, Framer Motion & ❤️
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}
