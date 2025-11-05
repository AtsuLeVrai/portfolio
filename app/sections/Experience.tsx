"use client";

import { Briefcase, Calendar } from "lucide-react";
import { motion } from "motion/react";

interface ExperienceItem {
	title: string;
	company: string;
	period: string;
	description: string[];
	technologies: string[];
}

const experiences: ExperienceItem[] = [
	{
		title: "Backend Engineer",
		company: "Freelance",
		period: "2019 - Present",
		description: [
			"Specialized in Discord bot development and real-time communication platforms",
			"Built high-performance Rust-based Discord bots handling millions of requests",
			"Developed WebSocket-driven real-time systems with type-safe APIs",
			"Created developer-friendly tools and frameworks for Discord ecosystem",
		],
		technologies: [
			"Rust",
			"TypeScript",
			"Discord API",
			"WebSocket",
			"PostgreSQL",
			"Redis",
		],
	},
	{
		title: "Infrastructure Developer",
		company: "Open Source Projects",
		period: "2020 - Present",
		description: [
			"Maintained and contributed to various open-source Discord bot frameworks",
			"Optimized performance and scalability of backend systems",
			"Implemented CI/CD pipelines and automated testing workflows",
			"Collaborated with developers worldwide on Discord tooling projects",
		],
		technologies: [
			"Docker",
			"GitHub Actions",
			"Node.js",
			"Python",
			"MongoDB",
			"Kubernetes",
		],
	},
];

function ExperienceCard({
	experience,
	index,
}: { experience: ExperienceItem; index: number }) {
	return (
		<motion.div
			className="relative rounded-2xl border-3 border-gray-900 bg-white p-6 shadow-[8px_8px_0px_0px_rgba(17,24,39,1)] transition-all dark:border-gray-100 dark:bg-gray-800 dark:shadow-[8px_8px_0px_0px_rgba(243,244,246,1)] sm:p-8 md:border-4 xl:p-10 2xl:p-12"
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-100px" }}
			transition={{ duration: 0.6, delay: index * 0.2 }}
			whileHover={{
				y: -4,
				boxShadow: "12px 12px 0px 0px rgba(17,24,39,1)",
				transition: { duration: 0.2 },
			}}
		>
			{/* Company Badge */}
			<motion.div
				className="-top-4 -right-4 absolute rounded-full border-3 border-gray-900 bg-gradient-to-br from-cyan-400 to-rose-400 p-3 dark:border-gray-100 dark:from-cyan-600 dark:to-rose-600 md:border-4"
				whileHover={{ rotate: 360, scale: 1.1 }}
				transition={{ duration: 0.6 }}
			>
				<Briefcase className="h-6 w-6 text-white" />
			</motion.div>

			{/* Header */}
			<div className="mb-5 sm:mb-6 xl:mb-8">
				<h3 className="mb-2 font-black text-2xl text-gray-900 dark:text-gray-100 sm:text-3xl xl:text-4xl">
					{experience.title}
				</h3>
				<p className="mb-3 font-bold text-cyan-600 text-lg dark:text-cyan-400 sm:text-xl xl:text-2xl">
					{experience.company}
				</p>
				<div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
					<Calendar className="h-4 w-4" />
					<span className="font-semibold text-sm sm:text-base">
						{experience.period}
					</span>
				</div>
			</div>

			{/* Description */}
			<ul className="mb-5 space-y-2 sm:mb-6 sm:space-y-3 xl:mb-8">
				{experience.description.map((item, i) => (
					<motion.li
						key={i}
						className="flex items-start gap-3 font-medium text-gray-700 text-sm leading-relaxed dark:text-gray-300 sm:text-base xl:text-lg"
						initial={{ opacity: 0, x: -20 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.4, delay: index * 0.2 + i * 0.1 }}
					>
						<span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-gradient-to-r from-cyan-600 to-rose-600" />
						<span>{item}</span>
					</motion.li>
				))}
			</ul>

			{/* Technologies */}
			<div className="flex flex-wrap gap-2 sm:gap-3">
				{experience.technologies.map((tech, i) => (
					<motion.span
						key={tech}
						className="rounded-full border-2 border-gray-900 bg-gradient-to-r from-cyan-50 to-rose-50 px-3 py-1.5 font-bold text-gray-900 text-xs dark:border-gray-100 dark:from-cyan-900/30 dark:to-rose-900/30 dark:text-gray-100 sm:px-4 sm:py-2 sm:text-sm xl:text-base"
						initial={{ opacity: 0, scale: 0.8 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.3, delay: index * 0.2 + i * 0.05 }}
						whileHover={{
							scale: 1.1,
							rotate: 5,
							transition: { duration: 0.2 },
						}}
					>
						{tech}
					</motion.span>
				))}
			</div>
		</motion.div>
	);
}

export function Experience() {
	return (
		<section
			id="experience"
			className="relative bg-white py-12 dark:bg-gray-900 sm:py-16 md:py-20 xl:py-24 2xl:py-28"
		>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:max-w-[1400px] 2xl:max-w-[1600px]">
				{/* Section Header */}
				<motion.div
					className="mb-12 text-center sm:mb-14 md:mb-16 xl:mb-20 2xl:mb-24"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<motion.h2
						className="mb-4 font-black text-3xl text-gray-900 leading-tight dark:text-gray-100 sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.1 }}
					>
						MY{" "}
						<span className="bg-gradient-to-r from-cyan-600 to-rose-600 bg-clip-text text-transparent">
							EXPERIENCE
						</span>
					</motion.h2>
					<motion.p
						className="mx-auto max-w-2xl font-medium text-base text-gray-700 dark:text-gray-300 sm:text-lg md:text-xl xl:text-2xl"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						Building scalable systems and developer tools for over 5 years
					</motion.p>
				</motion.div>

				{/* Experience Cards */}
				<div className="grid gap-8 sm:gap-10 md:gap-12 xl:gap-14">
					{experiences.map((experience, index) => (
						<ExperienceCard
							key={index}
							experience={experience}
							index={index}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
