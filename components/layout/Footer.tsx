"use client";

import { motion } from "motion/react";
import { NAV_LINKS, PERSONAL_INFO, SOCIAL_LINKS } from "@/data/constants";

const NAV_SECTIONS = [
	{
		title: "Navigation",
		links: NAV_LINKS.slice(0, 2), // About, Projects
	},
	{
		title: "More",
		links: NAV_LINKS.slice(2), // Experience, Contact
	},
];

export function Footer() {
	const handleNavClick = (href: string) => {
		const element = document.querySelector(href);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<footer className="relative border-gray-900 border-t-2 bg-gradient-to-br from-gray-50 to-gray-100 md:border-t-3 xl:border-t-4">
			<div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8 xl:max-w-[1400px] xl:py-12 2xl:max-w-[1600px] 2xl:py-16">
				<div className="grid gap-6 sm:gap-8 md:grid-cols-3 xl:gap-10">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
					>
						<h3 className="mb-3 font-black text-2xl text-gray-900 sm:mb-4 sm:text-3xl xl:text-4xl 2xl:text-5xl">
							{PERSONAL_INFO.fullName}
							<span className="text-cyan-600">.</span>
						</h3>
						<p className="mb-3 font-medium text-gray-600 text-sm leading-relaxed sm:mb-4 sm:text-base xl:text-lg">
							{PERSONAL_INFO.description}
						</p>
						<p className="font-bold text-gray-900 text-xs italic sm:text-sm xl:text-base">
							{PERSONAL_INFO.tagline}
						</p>
					</motion.div>

					{NAV_SECTIONS.map((section, idx) => (
						<motion.div
							key={section.title}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: 0.1 * (idx + 1) }}
						>
							<h4 className="mb-3 font-black text-base text-gray-900 sm:mb-4 sm:text-lg xl:text-xl 2xl:text-2xl">
								{section.title}
							</h4>
							<ul className="space-y-2 xl:space-y-3">
								{section.links.map((link) => (
									<li key={link.href}>
										<button
											type="button"
											onClick={() => handleNavClick(link.href)}
											className="font-medium text-gray-600 text-sm transition-colors hover:text-cyan-600 sm:text-base xl:text-lg"
										>
											{link.label}
										</button>
									</li>
								))}
							</ul>
						</motion.div>
					))}
				</div>

				<motion.div
					className="my-6 h-1 rounded-full bg-gradient-to-r from-cyan-400 via-rose-400 to-cyan-400 sm:my-8 xl:my-10"
					initial={{ scaleX: 0 }}
					whileInView={{ scaleX: 1 }}
					viewport={{ once: true }}
					transition={{ duration: 0.8, delay: 0.3 }}
				/>

				<div className="flex flex-col items-center justify-between gap-5 sm:gap-6 md:flex-row xl:gap-8">
					<motion.div
						className="flex gap-3 sm:gap-4 xl:gap-5"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.4 }}
					>
						{SOCIAL_LINKS.map((social) => {
							const Icon = social.icon;
							return (
								<motion.a
									key={social.name}
									href={social.href}
									target="_blank"
									rel="noopener noreferrer"
									className={`rounded-full border-2 border-gray-900 bg-white p-2.5 text-gray-900 transition-all sm:p-3 xl:p-4 ${social.color}`}
									whileHover={{ y: -4, rotate: 5 }}
									whileTap={{ scale: 0.95 }}
									aria-label={social.name}
								>
									<Icon size={20} className="xl:h-6 xl:w-6" />
								</motion.a>
							);
						})}
					</motion.div>

					<motion.p
						className="font-medium text-gray-600 text-xs sm:text-sm xl:text-base"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: 0.5 }}
					>
						© {new Date().getFullYear()} {PERSONAL_INFO.name} All rights
						reserved.
					</motion.p>
				</div>
			</div>
		</footer>
	);
}
