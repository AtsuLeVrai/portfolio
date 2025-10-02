"use client";

import { Menu, X } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { memo, useState } from "react";

interface NavLink {
	label: string;
	href: string;
}

const NAV_LINKS: NavLink[] = [
	{ label: "About", href: "#about" },
	{ label: "Skills", href: "#skills" },
	{ label: "Projects", href: "#projects" },
	{ label: "Experience", href: "#experience" },
	{ label: "Contact", href: "#contact" },
];

export const Header = memo(() => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const { scrollY } = useScroll();

	// Header appears after scrolling past hero animation (around 2600px)
	const headerOpacity = useTransform(scrollY, [2400, 2600], [0, 1]);
	const headerY = useTransform(scrollY, [2400, 2600], [-20, 0]);

	const headerBackground = useTransform(
		scrollY,
		[2600, 2900],
		["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.95)"],
	);

	const headerShadow = useTransform(
		scrollY,
		[2600, 2900],
		["0px 0px 0px 0px rgba(17,24,39,0)", "0px 4px 12px 0px rgba(17,24,39,0.1)"],
	);

	const handleNavClick = (href: string) => {
		const element = document.querySelector(href);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
			setIsMenuOpen(false);
		}
	};

	return (
		<motion.header
			className="fixed top-0 z-50 w-full border-gray-900 border-b-2 backdrop-blur-md"
			style={{
				backgroundColor: headerBackground,
				boxShadow: headerShadow,
				opacity: headerOpacity,
				y: headerY,
			}}
		>
			<nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4 lg:px-8 xl:max-w-[1400px] 2xl:max-w-[1600px]">
				{/* Logo */}
				<motion.div
					className="flex items-center"
					initial={{ opacity: 0, x: -20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5 }}
				>
					<button
						type="button"
						onClick={() => handleNavClick("#hero")}
						className="font-black text-gray-900 text-xl transition-colors hover:text-cyan-600 sm:text-2xl xl:text-3xl"
						aria-label="Go to top"
					>
						TOM<span className="text-cyan-600">.</span>
					</button>
				</motion.div>

				{/* Desktop Navigation */}
				<motion.div
					className="hidden items-center gap-6 md:flex xl:gap-8 2xl:gap-10"
					initial={{ opacity: 0, y: -10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.1 }}
				>
					{NAV_LINKS.map((link, index) => (
						<motion.button
							key={link.href}
							onClick={() => handleNavClick(link.href)}
							className="group relative font-bold text-gray-700 text-sm transition-colors hover:text-gray-900 sm:text-base xl:text-lg"
							initial={{ opacity: 0, y: -10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
							whileHover={{ y: -2 }}
							whileTap={{ scale: 0.95 }}
						>
							{link.label}
							<span className="-bottom-1 absolute left-0 h-0.5 w-0 bg-cyan-600 transition-all duration-300 group-hover:w-full" />
						</motion.button>
					))}
				</motion.div>

				{/* Mobile Menu Button */}
				<motion.button
					className="rounded-lg border-2 border-gray-900 bg-white p-2 text-gray-900 sm:p-2.5 md:hidden"
					onClick={() => setIsMenuOpen(!isMenuOpen)}
					initial={{ opacity: 0, x: 20 }}
					animate={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.5 }}
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					aria-label={isMenuOpen ? "Close menu" : "Open menu"}
				>
					{isMenuOpen ? (
						<X size={24} className="sm:h-6 sm:w-6" />
					) : (
						<Menu size={24} className="sm:h-6 sm:w-6" />
					)}
				</motion.button>
			</nav>

			{/* Mobile Navigation */}
			<motion.div
				className="md:hidden"
				initial={false}
				animate={{
					height: isMenuOpen ? "auto" : 0,
					opacity: isMenuOpen ? 1 : 0,
				}}
				transition={{ duration: 0.3, ease: "easeInOut" }}
				style={{ overflow: "hidden" }}
			>
				<div className="space-y-2 border-gray-900 border-t-2 bg-white px-4 py-4 sm:px-6">
					{NAV_LINKS.map((link, index) => (
						<motion.button
							key={link.href}
							onClick={() => handleNavClick(link.href)}
							className="block w-full rounded-lg border-2 border-gray-900 bg-cyan-50 px-4 py-3 text-left font-bold text-gray-900 text-sm transition-colors hover:bg-cyan-100 sm:text-base"
							initial={{ opacity: 0, x: -20 }}
							animate={{
								opacity: isMenuOpen ? 1 : 0,
								x: isMenuOpen ? 0 : -20,
							}}
							transition={{
								duration: 0.3,
								delay: isMenuOpen ? index * 0.05 : 0,
							}}
							whileHover={{ x: 4 }}
							whileTap={{ scale: 0.98 }}
						>
							{link.label}
						</motion.button>
					))}
				</div>
			</motion.div>
		</motion.header>
	);
});

Header.displayName = "Header";
