import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Twitter } from "lucide-react";
import { type FormEvent, useEffect, useRef, useState } from "react";

export default function ContactSection() {
	const sectionRef = useRef<HTMLElement>(null);
	const [isVisible, setIsVisible] = useState(false);
	const [email, setEmail] = useState("");

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setIsVisible(true);
					}
				});
			},
			{ threshold: 0.2 },
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => observer.disconnect();
	}, []);

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		console.log("Email submitted:", email);
		setEmail("");
	};

	const containerVariants = {
		hidden: { opacity: 0 },
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.2,
				delayChildren: 0.3,
			},
		},
	} as const;

	const itemVariants = {
		hidden: { opacity: 0, y: 30 },
		visible: {
			opacity: 1,
			y: 0,
			transition: {
				duration: 0.8,
				ease: [0.23, 1, 0.32, 1],
			},
		},
	} as const;

	const socialLinks = [
		{ name: "GitHub", href: "https://github.com", icon: Github },
		{ name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
		{ name: "Twitter", href: "https://twitter.com", icon: Twitter },
		{ name: "Email", href: "mailto:contact@example.com", icon: Mail },
	];

	return (
		<section ref={sectionRef} className="relative min-h-screen bg-black py-20">
			<div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900/30 to-black" />

			<div className="absolute inset-0">
				{[...Array(6)].map((_, i) => (
					<motion.div
						// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
						key={i}
						className="absolute rounded-full bg-gradient-to-br from-indigo-500/10 to-purple-500/10 blur-3xl"
						style={{
							left: `${Math.random() * 100}%`,
							top: `${Math.random() * 100}%`,
							width: `${Math.random() * 200 + 100}px`,
							height: `${Math.random() * 200 + 100}px`,
						}}
						animate={{
							scale: [1, 1.2, 1],
							opacity: [0.3, 0.6, 0.3],
							x: [0, Math.random() * 50 - 25],
							y: [0, Math.random() * 50 - 25],
						}}
						transition={{
							duration: 8 + Math.random() * 4,
							repeat: Number.POSITIVE_INFINITY,
							delay: Math.random() * 2,
							ease: "easeInOut",
						}}
					/>
				))}
			</div>

			<motion.div
				className="relative z-10 mx-auto max-w-4xl px-8 text-center"
				variants={containerVariants}
				initial="hidden"
				animate={isVisible ? "visible" : "hidden"}
			>
				<motion.h2
					className="mb-8 bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text font-bold text-6xl text-transparent lg:text-7xl"
					variants={itemVariants}
				>
					Let's Connect
				</motion.h2>

				<motion.p
					className="mb-16 text-gray-400 text-xl leading-relaxed lg:text-2xl"
					variants={itemVariants}
				>
					Ready to build something exceptional together? Let's discuss your next
					project.
				</motion.p>

				<motion.div
					className="mb-16 grid gap-8 md:grid-cols-2"
					variants={itemVariants}
				>
					<div className="rounded-2xl border border-gray-800 bg-gray-900/30 p-8 backdrop-blur-sm">
						<h3 className="mb-4 font-semibold text-2xl text-white">
							Start a Project
						</h3>
						<p className="mb-6 text-gray-400 leading-relaxed">
							Have an idea for a scalable backend system, trading algorithm, or
							game infrastructure? Let's bring it to life.
						</p>
						<motion.button
							className="flex items-center gap-3 rounded-xl bg-indigo-600 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-indigo-700"
							whileHover={{ scale: 1.02, x: 5 }}
							whileTap={{ scale: 0.98 }}
						>
							Get Started
							<ArrowRight className="h-4 w-4" />
						</motion.button>
					</div>

					<div className="rounded-2xl border border-gray-800 bg-gray-900/30 p-8 backdrop-blur-sm">
						<h3 className="mb-4 font-semibold text-2xl text-white">
							Join Forces
						</h3>
						<p className="mb-6 text-gray-400 leading-relaxed">
							Looking for technical expertise or collaboration on innovative
							projects? Let's explore possibilities together.
						</p>
						<motion.button
							className="flex items-center gap-3 rounded-xl border border-gray-600 bg-gray-800/50 px-6 py-3 font-semibold text-white transition-all duration-300 hover:border-gray-500 hover:bg-gray-700/50"
							whileHover={{ scale: 1.02, x: 5 }}
							whileTap={{ scale: 0.98 }}
						>
							Collaborate
							<ArrowRight className="h-4 w-4" />
						</motion.button>
					</div>
				</motion.div>

				<motion.form
					onSubmit={handleSubmit}
					className="mx-auto mb-12 max-w-md"
					variants={itemVariants}
				>
					<div className="mb-4 flex gap-4">
						<input
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							placeholder="your.email@example.com"
							className="flex-1 rounded-xl border border-gray-800 bg-gray-900/50 px-6 py-4 text-white placeholder-gray-400 backdrop-blur-sm transition-all duration-300 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/20"
							required
						/>
						<motion.button
							type="submit"
							className="rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:from-indigo-700 hover:to-purple-700"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							Send
						</motion.button>
					</div>
				</motion.form>

				<motion.div
					className="mb-12 flex justify-center gap-6"
					variants={itemVariants}
				>
					{socialLinks.map((link) => {
						const IconComponent = link.icon;
						return (
							<motion.a
								key={link.name}
								href={link.href}
								className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-800 bg-gray-900/30 text-gray-400 backdrop-blur-sm transition-all duration-300 hover:border-gray-700 hover:bg-gray-800/50 hover:text-white"
								whileHover={{ scale: 1.1, y: -2 }}
								whileTap={{ scale: 0.95 }}
								target="_blank"
								rel="noopener noreferrer"
							>
								<IconComponent className="h-5 w-5" />
							</motion.a>
						);
					})}
				</motion.div>

				<motion.div
					className="rounded-2xl border border-gray-800 bg-gray-900/20 p-8 backdrop-blur-sm"
					variants={itemVariants}
				>
					<p className="mb-4 text-gray-500 text-sm">
						"Talk to yourself but don't listen to yourself"
					</p>
					<p className="text-gray-600 text-xs">
						Built with passion, inspired by innovation, and driven by the
						pursuit of excellence.
					</p>
				</motion.div>
			</motion.div>
		</section>
	);
}
