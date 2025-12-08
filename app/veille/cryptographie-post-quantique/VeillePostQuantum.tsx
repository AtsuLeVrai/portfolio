"use client";

import {
	AlertTriangle,
	ArrowRight,
	Binary,
	BookOpen,
	Calendar,
	CheckCircle,
	Clock,
	Code,
	Cpu,
	ExternalLink,
	FileText,
	Github,
	Globe,
	Key,
	Layers,
	LineChart,
	Lock,
	Server,
	Shield,
	Tag,
	TrendingUp,
	Unlock,
	Wallet,
	Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import { useReducedMotion } from "@/hooks/useReducedMotion";

const fadeInUp = {
	initial: { opacity: 0, y: 30 },
	whileInView: { opacity: 1, y: 0 },
	viewport: { once: true, margin: "-50px" },
	transition: { duration: 0.6 },
};

const _staggerContainer = {
	initial: {},
	whileInView: {
		transition: {
			staggerChildren: 0.1,
		},
	},
};

export function VeillePostQuantum() {
	const { t } = useTranslation();
	const prefersReducedMotion = useReducedMotion();

	const motionProps = prefersReducedMotion
		? {}
		: {
				initial: fadeInUp.initial,
				whileInView: fadeInUp.whileInView,
				viewport: fadeInUp.viewport,
				transition: fadeInUp.transition,
			};

	return (
		<article className="relative">
			{/* Hero Section */}
			<HeroSection motionProps={motionProps} t={t} />

			{/* Introduction & Context */}
			<IntroductionSection motionProps={motionProps} t={t} />

			{/* The Quantum Threat */}
			<QuantumThreatSection motionProps={motionProps} t={t} />

			{/* Post-Quantum Solutions */}
			<SolutionsSection motionProps={motionProps} t={t} />

			{/* Tech Ecosystem Impact */}
			<EcosystemSection motionProps={motionProps} t={t} />

			{/* Practical Demo */}
			<PracticalSection motionProps={motionProps} t={t} />

			{/* Project Links */}
			<ProjectLinksSection motionProps={motionProps} t={t} />

			{/* Resources & Watch */}
			<ResourcesSection motionProps={motionProps} t={t} />

			{/* Conclusion */}
			<ConclusionSection motionProps={motionProps} t={t} />
		</article>
	);
}

interface SectionProps {
	motionProps: object;
	t: (key: string) => string;
}

function HeroSection({ motionProps, t }: SectionProps) {
	const tags = [
		{ label: t("veille.tags.crypto"), color: "bg-cyan-100 text-cyan-700" },
		{ label: t("veille.tags.quantum"), color: "bg-purple-100 text-purple-700" },
		{ label: t("veille.tags.security"), color: "bg-rose-100 text-rose-700" },
		{ label: t("veille.tags.btssio"), color: "bg-amber-100 text-amber-700" },
	];

	return (
		<section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 py-20 sm:py-28 md:py-32 xl:py-40">
			{/* Background Pattern */}
			<div className="absolute inset-0 opacity-10">
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(120,119,198,0.3),_transparent_50%)]" />
				<div className="absolute top-0 left-0 h-full w-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSIjZmZmIiBzdHJva2Utd2lkdGg9IjIiLz48L2c+PC9zdmc+')] opacity-20" />
			</div>

			<div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:max-w-[1400px] 2xl:max-w-[1600px]">
				<motion.div {...motionProps} className="text-center">
					{/* Tags */}
					<div className="mb-6 flex flex-wrap justify-center gap-2">
						{tags.map((tag) => (
							<span
								key={tag.label}
								className={`inline-flex items-center gap-1 rounded-full px-3 py-1 font-medium text-sm ${tag.color}`}
							>
								<Tag className="h-3 w-3" />
								{tag.label}
							</span>
						))}
					</div>

					{/* Date */}
					<div className="mb-8 flex items-center justify-center gap-2 text-purple-300">
						<Calendar className="h-4 w-4" />
						<span className="font-medium text-sm">{t("veille.hero.date")}</span>
					</div>

					{/* Title */}
					<h1 className="mb-6 font-black text-4xl text-white leading-tight sm:text-5xl md:text-6xl lg:text-7xl">
						{t("veille.hero.title")}
						<span className="mt-2 block bg-gradient-to-r from-cyan-400 via-purple-400 to-rose-400 bg-clip-text text-transparent">
							{t("veille.hero.titleHighlight")}
						</span>
					</h1>

					{/* Subtitle */}
					<p className="mx-auto mb-10 max-w-3xl text-lg text-purple-200 sm:text-xl md:text-2xl">
						{t("veille.hero.subtitle")}
					</p>

					{/* Scroll Indicator */}
					<motion.div
						animate={{ y: [0, 10, 0] }}
						transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
						className="flex justify-center"
					>
						<div className="flex h-12 w-8 items-start justify-center rounded-full border-2 border-purple-400/50 p-2">
							<motion.div
								animate={{ y: [0, 12, 0] }}
								transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
								className="h-2 w-1 rounded-full bg-purple-400"
							/>
						</div>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}

function IntroductionSection({ motionProps, t }: SectionProps) {
	const contextPoints = [
		{
			icon: Lock,
			text: t("veille.intro.context1"),
		},
		{
			icon: AlertTriangle,
			text: t("veille.intro.context2"),
		},
		{
			icon: CheckCircle,
			text: t("veille.intro.context3"),
		},
	];

	return (
		<section className="relative bg-gradient-to-br from-rose-50 via-white to-cyan-50 py-16 sm:py-20 md:py-24 xl:py-28">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:max-w-[1400px] 2xl:max-w-[1600px]">
				<motion.div {...motionProps} className="mb-12 text-center">
					<span className="mb-4 inline-block rounded-full bg-cyan-100 px-4 py-2 font-semibold text-cyan-700 text-sm">
						01 — {t("veille.intro.label")}
					</span>
					<h2 className="mb-4 font-black text-3xl text-gray-900 sm:text-4xl md:text-5xl">
						{t("veille.intro.title")}
					</h2>
				</motion.div>

				{/* Problématique */}
				<motion.div
					{...motionProps}
					className="mb-12 rounded-3xl border-4 border-gray-900 bg-gradient-to-r from-purple-600 to-cyan-600 p-8 shadow-[8px_8px_0px_0px_rgba(17,24,39,1)] sm:p-10"
				>
					<div className="flex items-start gap-4">
						<div className="rounded-2xl bg-white/20 p-3">
							<FileText className="h-8 w-8 text-white" />
						</div>
						<div>
							<h3 className="mb-3 font-bold text-white text-xl sm:text-2xl">
								{t("veille.intro.problemTitle")}
							</h3>
							<p className="text-lg text-white/90 leading-relaxed">
								{t("veille.intro.problem")}
							</p>
						</div>
					</div>
				</motion.div>

				{/* Context Points */}
				<div className="grid gap-6 md:grid-cols-3">
					{contextPoints.map((point, index) => (
						<motion.div
							key={point.text}
							{...motionProps}
							transition={{ delay: index * 0.1, duration: 0.6 }}
							className="hover:-translate-y-1 rounded-2xl border-3 border-gray-900 bg-white p-6 shadow-[6px_6px_0px_0px_rgba(17,24,39,1)] transition-all hover:shadow-[8px_8px_0px_0px_rgba(17,24,39,1)]"
						>
							<div className="mb-4 inline-flex rounded-xl bg-gradient-to-br from-cyan-100 to-purple-100 p-3">
								<point.icon className="h-6 w-6 text-purple-600" />
							</div>
							<p className="text-gray-700 leading-relaxed">{point.text}</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}

function QuantumThreatSection({ motionProps, t }: SectionProps) {
	const quantumFacts = [
		{
			label: t("veille.threat.fact1Label"),
			value: t("veille.threat.fact1Value"),
		},
		{
			label: t("veille.threat.fact2Label"),
			value: t("veille.threat.fact2Value"),
		},
		{
			label: t("veille.threat.fact3Label"),
			value: t("veille.threat.fact3Value"),
		},
	];

	const timeline = [
		{
			year: "2024",
			event: t("veille.threat.timeline1"),
			status: "current",
		},
		{
			year: "2030-2035",
			event: t("veille.threat.timeline2"),
			status: "warning",
		},
		{
			year: t("veille.threat.timelineNow"),
			event: t("veille.threat.timeline3"),
			status: "danger",
		},
	];

	return (
		<section className="relative bg-gradient-to-br from-gray-900 via-red-900/20 to-gray-900 py-16 sm:py-20 md:py-24 xl:py-28">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:max-w-[1400px] 2xl:max-w-[1600px]">
				<motion.div {...motionProps} className="mb-12 text-center">
					<span className="mb-4 inline-block rounded-full bg-red-500/20 px-4 py-2 font-semibold text-red-400 text-sm">
						02 — {t("veille.threat.label")}
					</span>
					<h2 className="mb-4 font-black text-3xl text-white sm:text-4xl md:text-5xl">
						{t("veille.threat.title")}
					</h2>
				</motion.div>

				{/* What is Quantum */}
				<motion.div
					{...motionProps}
					className="mb-12 rounded-3xl border-2 border-purple-500/30 bg-gradient-to-br from-purple-900/50 to-gray-900 p-8 sm:p-10"
				>
					<div className="flex flex-col items-start gap-6 lg:flex-row">
						<div className="flex-shrink-0 rounded-2xl bg-purple-500/20 p-4">
							<Cpu className="h-12 w-12 text-purple-400" />
						</div>
						<div>
							<h3 className="mb-4 font-bold text-2xl text-white">
								{t("veille.threat.quantumTitle")}
							</h3>
							<p className="mb-6 text-gray-300 leading-relaxed">
								{t("veille.threat.quantumDesc")}
							</p>
							<div className="grid gap-4 sm:grid-cols-3">
								{quantumFacts.map((fact) => (
									<div
										key={fact.label}
										className="rounded-xl border border-purple-500/30 bg-purple-900/30 p-4"
									>
										<div className="mb-1 font-bold text-2xl text-purple-400">
											{fact.value}
										</div>
										<div className="text-gray-400 text-sm">{fact.label}</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</motion.div>

				{/* Shor's Algorithm */}
				<motion.div
					{...motionProps}
					className="mb-12 rounded-3xl border-2 border-red-500/30 bg-gradient-to-br from-red-900/30 to-gray-900 p-8 sm:p-10"
				>
					<div className="flex flex-col items-start gap-6 lg:flex-row">
						<div className="flex-shrink-0 rounded-2xl bg-red-500/20 p-4">
							<Unlock className="h-12 w-12 text-red-400" />
						</div>
						<div>
							<h3 className="mb-4 font-bold text-2xl text-white">
								{t("veille.threat.shorTitle")}
							</h3>
							<ul className="space-y-3 text-gray-300">
								<li className="flex items-start gap-3">
									<Binary className="mt-1 h-5 w-5 flex-shrink-0 text-red-400" />
									<span>{t("veille.threat.shor1")}</span>
								</li>
								<li className="flex items-start gap-3">
									<Clock className="mt-1 h-5 w-5 flex-shrink-0 text-red-400" />
									<span>{t("veille.threat.shor2")}</span>
								</li>
								<li className="flex items-start gap-3">
									<AlertTriangle className="mt-1 h-5 w-5 flex-shrink-0 text-red-400" />
									<span>{t("veille.threat.shor3")}</span>
								</li>
							</ul>
						</div>
					</div>
				</motion.div>

				{/* Timeline */}
				<motion.div {...motionProps}>
					<h3 className="mb-8 text-center font-bold text-white text-xl">
						{t("veille.threat.timelineTitle")}
					</h3>
					<div className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-0">
						{timeline.map((item, index) => (
							<div key={item.year} className="flex items-center">
								<div
									className={`rounded-2xl border-2 p-6 text-center ${
										item.status === "current"
											? "border-cyan-500/50 bg-cyan-900/30"
											: item.status === "warning"
												? "border-amber-500/50 bg-amber-900/30"
												: "border-red-500/50 bg-red-900/30"
									}`}
								>
									<div
										className={`mb-2 font-bold text-xl ${
											item.status === "current"
												? "text-cyan-400"
												: item.status === "warning"
													? "text-amber-400"
													: "text-red-400"
										}`}
									>
										{item.year}
									</div>
									<div className="max-w-[200px] text-gray-300 text-sm">
										{item.event}
									</div>
								</div>
								{index < timeline.length - 1 && (
									<ArrowRight className="mx-4 hidden h-6 w-6 text-gray-600 md:block" />
								)}
							</div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
}

function SolutionsSection({ motionProps, t }: SectionProps) {
	const nistStandards = [
		{
			name: "CRYSTALS-Kyber",
			type: t("veille.solutions.encryption"),
			description: t("veille.solutions.kyberDesc"),
			features: [
				t("veille.solutions.kyber1"),
				t("veille.solutions.kyber2"),
				t("veille.solutions.kyber3"),
			],
			color: "cyan",
		},
		{
			name: "CRYSTALS-Dilithium",
			type: t("veille.solutions.signature"),
			description: t("veille.solutions.dilithiumDesc"),
			features: [
				t("veille.solutions.dilithium1"),
				t("veille.solutions.dilithium2"),
				t("veille.solutions.dilithium3"),
			],
			color: "purple",
		},
	];

	const otherApproaches = [
		{ name: "SPHINCS+", desc: t("veille.solutions.sphincs") },
		{
			name: t("veille.solutions.codeBased"),
			desc: t("veille.solutions.codeBasedDesc"),
		},
		{
			name: t("veille.solutions.isogeny"),
			desc: t("veille.solutions.isogenyDesc"),
		},
	];

	return (
		<section className="relative bg-gradient-to-br from-cyan-50 via-white to-purple-50 py-16 sm:py-20 md:py-24 xl:py-28">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:max-w-[1400px] 2xl:max-w-[1600px]">
				<motion.div {...motionProps} className="mb-12 text-center">
					<span className="mb-4 inline-block rounded-full bg-green-100 px-4 py-2 font-semibold text-green-700 text-sm">
						03 — {t("veille.solutions.label")}
					</span>
					<h2 className="mb-4 font-black text-3xl text-gray-900 sm:text-4xl md:text-5xl">
						{t("veille.solutions.title")}
					</h2>
					<p className="mx-auto max-w-2xl text-gray-600 text-lg">
						{t("veille.solutions.subtitle")}
					</p>
				</motion.div>

				{/* NIST Standards */}
				<div className="mb-12 grid gap-8 lg:grid-cols-2">
					{nistStandards.map((standard, index) => (
						<motion.div
							key={standard.name}
							{...motionProps}
							transition={{ delay: index * 0.15, duration: 0.6 }}
							className={
								"hover:-translate-y-1 rounded-3xl border-4 border-gray-900 bg-white p-8 shadow-[8px_8px_0px_0px_rgba(17,24,39,1)] transition-all hover:shadow-[10px_10px_0px_0px_rgba(17,24,39,1)]"
							}
						>
							<div className="mb-4 flex items-center justify-between">
								<div
									className={`rounded-xl ${standard.color === "cyan" ? "bg-cyan-100" : "bg-purple-100"} p-3`}
								>
									{standard.color === "cyan" ? (
										<Key className="h-8 w-8 text-cyan-600" />
									) : (
										<Shield className="h-8 w-8 text-purple-600" />
									)}
								</div>
								<span
									className={`rounded-full px-3 py-1 font-medium text-sm ${standard.color === "cyan" ? "bg-cyan-100 text-cyan-700" : "bg-purple-100 text-purple-700"}`}
								>
									{standard.type}
								</span>
							</div>
							<h3 className="mb-3 font-black text-2xl text-gray-900">
								{standard.name}
							</h3>
							<p className="mb-6 text-gray-600">{standard.description}</p>
							<ul className="space-y-2">
								{standard.features.map((feature) => (
									<li
										key={feature}
										className="flex items-center gap-2 text-gray-700"
									>
										<CheckCircle
											className={`h-5 w-5 ${standard.color === "cyan" ? "text-cyan-500" : "text-purple-500"}`}
										/>
										{feature}
									</li>
								))}
							</ul>
						</motion.div>
					))}
				</div>

				{/* Other Approaches */}
				<motion.div
					{...motionProps}
					className="rounded-2xl border-3 border-gray-900 bg-gradient-to-r from-gray-50 to-white p-6 shadow-[6px_6px_0px_0px_rgba(17,24,39,1)] sm:p-8"
				>
					<h3 className="mb-6 font-bold text-gray-900 text-xl">
						{t("veille.solutions.otherTitle")}
					</h3>
					<div className="grid gap-4 sm:grid-cols-3">
						{otherApproaches.map((approach) => (
							<div
								key={approach.name}
								className="rounded-xl border-2 border-gray-200 bg-white p-4"
							>
								<div className="mb-2 font-semibold text-gray-900">
									{approach.name}
								</div>
								<div className="text-gray-600 text-sm">{approach.desc}</div>
							</div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
}

function EcosystemSection({ motionProps, t }: SectionProps) {
	const impacts = [
		{
			icon: Wallet,
			title: t("veille.ecosystem.blockchainTitle"),
			points: [
				t("veille.ecosystem.blockchain1"),
				t("veille.ecosystem.blockchain2"),
				t("veille.ecosystem.blockchain3"),
			],
			color: "amber",
		},
		{
			icon: LineChart,
			title: t("veille.ecosystem.financeTitle"),
			points: [
				t("veille.ecosystem.finance1"),
				t("veille.ecosystem.finance2"),
				t("veille.ecosystem.finance3"),
			],
			color: "green",
		},
		{
			icon: Server,
			title: t("veille.ecosystem.backendTitle"),
			points: [
				t("veille.ecosystem.backend1"),
				t("veille.ecosystem.backend2"),
				t("veille.ecosystem.backend3"),
			],
			color: "blue",
		},
	];

	return (
		<section className="relative bg-gradient-to-br from-gray-900 via-blue-900/20 to-gray-900 py-16 sm:py-20 md:py-24 xl:py-28">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:max-w-[1400px] 2xl:max-w-[1600px]">
				<motion.div {...motionProps} className="mb-12 text-center">
					<span className="mb-4 inline-block rounded-full bg-blue-500/20 px-4 py-2 font-semibold text-blue-400 text-sm">
						04 — {t("veille.ecosystem.label")}
					</span>
					<h2 className="mb-4 font-black text-3xl text-white sm:text-4xl md:text-5xl">
						{t("veille.ecosystem.title")}
					</h2>
				</motion.div>

				<div className="grid gap-8 lg:grid-cols-3">
					{impacts.map((impact, index) => (
						<motion.div
							key={impact.title}
							{...motionProps}
							transition={{ delay: index * 0.1, duration: 0.6 }}
							className="rounded-2xl border-2 border-gray-700 bg-gray-800/50 p-6 backdrop-blur-sm transition-all hover:border-gray-600"
						>
							<div
								className={`mb-4 inline-flex rounded-xl p-3 ${
									impact.color === "amber"
										? "bg-amber-500/20"
										: impact.color === "green"
											? "bg-green-500/20"
											: "bg-blue-500/20"
								}`}
							>
								<impact.icon
									className={`h-8 w-8 ${
										impact.color === "amber"
											? "text-amber-400"
											: impact.color === "green"
												? "text-green-400"
												: "text-blue-400"
									}`}
								/>
							</div>
							<h3 className="mb-4 font-bold text-white text-xl">
								{impact.title}
							</h3>
							<ul className="space-y-3">
								{impact.points.map((point) => (
									<li
										key={point}
										className="flex items-start gap-2 text-gray-300"
									>
										<ArrowRight
											className={`mt-1 h-4 w-4 flex-shrink-0 ${
												impact.color === "amber"
													? "text-amber-400"
													: impact.color === "green"
														? "text-green-400"
														: "text-blue-400"
											}`}
										/>
										{point}
									</li>
								))}
							</ul>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}

function PracticalSection({ motionProps, t }: SectionProps) {
	const codeExample = `// ${t("veille.practical.comment1")}
import { kyber } from 'pqc-library';

// ${t("veille.practical.comment2")}
const rsaKeys = generateRSAKeys(2048);

// ${t("veille.practical.comment3")}
const kyberKeys = kyber.generateKeys();
const encapsulated = kyber.encapsulate(kyberKeys.public);
const sharedSecret = kyber.decapsulate(
  encapsulated,
  kyberKeys.private
);`;

	const comparisons = [
		{
			metric: t("veille.practical.keyGen"),
			rsa: "~100ms",
			kyber: "~0.1ms",
			winner: "kyber",
		},
		{
			metric: t("veille.practical.keySize"),
			rsa: "2048 bits",
			kyber: "800 bytes",
			winner: "rsa",
		},
		{
			metric: t("veille.practical.encSpeed"),
			rsa: "~10ms",
			kyber: "~0.05ms",
			winner: "kyber",
		},
		{
			metric: t("veille.practical.quantumSafe"),
			rsa: "❌",
			kyber: "✅",
			winner: "kyber",
		},
	];

	return (
		<section className="relative bg-gradient-to-br from-purple-50 via-white to-rose-50 py-16 sm:py-20 md:py-24 xl:py-28">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:max-w-[1400px] 2xl:max-w-[1600px]">
				<motion.div {...motionProps} className="mb-12 text-center">
					<span className="mb-4 inline-block rounded-full bg-purple-100 px-4 py-2 font-semibold text-purple-700 text-sm">
						05 — {t("veille.practical.label")}
					</span>
					<h2 className="mb-4 font-black text-3xl text-gray-900 sm:text-4xl md:text-5xl">
						{t("veille.practical.title")}
					</h2>
				</motion.div>

				<div className="grid gap-8 lg:grid-cols-2">
					{/* Code Example */}
					<motion.div
						{...motionProps}
						className="rounded-3xl border-4 border-gray-900 bg-gray-900 p-6 shadow-[8px_8px_0px_0px_rgba(17,24,39,1)] sm:p-8"
					>
						<div className="mb-4 flex items-center gap-2">
							<Code className="h-5 w-5 text-cyan-400" />
							<span className="font-semibold text-white">
								{t("veille.practical.codeTitle")}
							</span>
						</div>
						<pre className="overflow-x-auto rounded-xl bg-gray-800 p-4 font-mono text-sm">
							<code className="text-gray-300">{codeExample}</code>
						</pre>
					</motion.div>

					{/* Comparison Table */}
					<motion.div
						{...motionProps}
						className="rounded-3xl border-4 border-gray-900 bg-white p-6 shadow-[8px_8px_0px_0px_rgba(17,24,39,1)] sm:p-8"
					>
						<div className="mb-4 flex items-center gap-2">
							<TrendingUp className="h-5 w-5 text-purple-600" />
							<span className="font-semibold text-gray-900">
								{t("veille.practical.comparisonTitle")}
							</span>
						</div>
						<div className="overflow-x-auto">
							<table className="w-full">
								<thead>
									<tr className="border-gray-200 border-b-2">
										<th className="py-3 text-left font-semibold text-gray-600">
											{t("veille.practical.metric")}
										</th>
										<th className="py-3 text-center font-semibold text-red-600">
											RSA-2048
										</th>
										<th className="py-3 text-center font-semibold text-cyan-600">
											Kyber
										</th>
									</tr>
								</thead>
								<tbody>
									{comparisons.map((row) => (
										<tr key={row.metric} className="border-gray-100 border-b">
											<td className="py-3 text-gray-700">{row.metric}</td>
											<td
												className={`py-3 text-center ${row.winner === "rsa" ? "font-semibold text-green-600" : "text-gray-500"}`}
											>
												{row.rsa}
											</td>
											<td
												className={`py-3 text-center ${row.winner === "kyber" ? "font-semibold text-green-600" : "text-gray-500"}`}
											>
												{row.kyber}
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}

function ProjectLinksSection({ motionProps, t }: SectionProps) {
	const projects = [
		{
			name: "ARES",
			subtitle: t("veille.projects.aresSubtitle"),
			points: [
				t("veille.projects.ares1"),
				t("veille.projects.ares2"),
				t("veille.projects.ares3"),
			],
			icon: Zap,
			color: "cyan",
		},
		{
			name: "CHRONOS",
			subtitle: t("veille.projects.chronosSubtitle"),
			points: [
				t("veille.projects.chronos1"),
				t("veille.projects.chronos2"),
				t("veille.projects.chronos3"),
			],
			icon: Clock,
			color: "rose",
		},
	];

	return (
		<section className="relative bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 py-16 sm:py-20 md:py-24 xl:py-28">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:max-w-[1400px] 2xl:max-w-[1600px]">
				<motion.div {...motionProps} className="mb-12 text-center">
					<span className="mb-4 inline-block rounded-full bg-purple-500/20 px-4 py-2 font-semibold text-purple-400 text-sm">
						06 — {t("veille.projects.label")}
					</span>
					<h2 className="mb-4 font-black text-3xl text-white sm:text-4xl md:text-5xl">
						{t("veille.projects.title")}
					</h2>
				</motion.div>

				<div className="grid gap-8 lg:grid-cols-2">
					{projects.map((project, index) => (
						<motion.div
							key={project.name}
							{...motionProps}
							transition={{ delay: index * 0.15, duration: 0.6 }}
							className={`rounded-3xl border-2 p-8 ${
								project.color === "cyan"
									? "border-cyan-500/30 bg-gradient-to-br from-cyan-900/30 to-gray-900"
									: "border-rose-500/30 bg-gradient-to-br from-rose-900/30 to-gray-900"
							}`}
						>
							<div className="mb-4 flex items-center gap-4">
								<div
									className={`rounded-xl p-3 ${
										project.color === "cyan"
											? "bg-cyan-500/20"
											: "bg-rose-500/20"
									}`}
								>
									<project.icon
										className={`h-8 w-8 ${
											project.color === "cyan"
												? "text-cyan-400"
												: "text-rose-400"
										}`}
									/>
								</div>
								<div>
									<h3 className="font-black text-2xl text-white">
										{project.name}
									</h3>
									<p className="text-gray-400">{project.subtitle}</p>
								</div>
							</div>
							<ul className="space-y-3">
								{project.points.map((point) => (
									<li
										key={point}
										className="flex items-start gap-2 text-gray-300"
									>
										<CheckCircle
											className={`mt-1 h-5 w-5 flex-shrink-0 ${
												project.color === "cyan"
													? "text-cyan-400"
													: "text-rose-400"
											}`}
										/>
										{point}
									</li>
								))}
							</ul>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}

function ResourcesSection({ motionProps, t }: SectionProps) {
	const officialSources = [
		{
			name: "NIST PQC Project",
			url: "https://csrc.nist.gov/projects/post-quantum-cryptography",
			icon: Globe,
		},
		{
			name: "ANSSI",
			url: "https://www.ssi.gouv.fr/",
			icon: Shield,
		},
		{
			name: "pq-crystals.org",
			url: "https://pq-crystals.org/",
			icon: Layers,
		},
	];

	const tools = [
		{ name: "liboqs", desc: t("veille.resources.liboqs"), icon: Github },
		{ name: "pqcrypto", desc: t("veille.resources.pqcrypto"), icon: Code },
		{
			name: t("veille.resources.newsletters"),
			desc: t("veille.resources.newslettersDesc"),
			icon: BookOpen,
		},
	];

	return (
		<section className="relative bg-gradient-to-br from-rose-50 via-white to-cyan-50 py-16 sm:py-20 md:py-24 xl:py-28">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:max-w-[1400px] 2xl:max-w-[1600px]">
				<motion.div {...motionProps} className="mb-12 text-center">
					<span className="mb-4 inline-block rounded-full bg-rose-100 px-4 py-2 font-semibold text-rose-700 text-sm">
						07 — {t("veille.resources.label")}
					</span>
					<h2 className="mb-4 font-black text-3xl text-gray-900 sm:text-4xl md:text-5xl">
						{t("veille.resources.title")}
					</h2>
				</motion.div>

				<div className="grid gap-8 lg:grid-cols-2">
					{/* Official Sources */}
					<motion.div
						{...motionProps}
						className="rounded-3xl border-4 border-gray-900 bg-white p-6 shadow-[8px_8px_0px_0px_rgba(17,24,39,1)] sm:p-8"
					>
						<h3 className="mb-6 flex items-center gap-2 font-bold text-gray-900 text-xl">
							<Globe className="h-6 w-6 text-cyan-600" />
							{t("veille.resources.officialTitle")}
						</h3>
						<div className="space-y-4">
							{officialSources.map((source) => (
								<a
									key={source.name}
									href={source.url}
									target="_blank"
									rel="noopener noreferrer"
									className="group flex items-center justify-between rounded-xl border-2 border-gray-200 p-4 transition-all hover:border-cyan-400 hover:bg-cyan-50"
								>
									<div className="flex items-center gap-3">
										<source.icon className="h-5 w-5 text-gray-500 group-hover:text-cyan-600" />
										<span className="font-medium text-gray-700 group-hover:text-cyan-600">
											{source.name}
										</span>
									</div>
									<ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-cyan-600" />
								</a>
							))}
						</div>
					</motion.div>

					{/* Tools */}
					<motion.div
						{...motionProps}
						className="rounded-3xl border-4 border-gray-900 bg-white p-6 shadow-[8px_8px_0px_0px_rgba(17,24,39,1)] sm:p-8"
					>
						<h3 className="mb-6 flex items-center gap-2 font-bold text-gray-900 text-xl">
							<Code className="h-6 w-6 text-purple-600" />
							{t("veille.resources.toolsTitle")}
						</h3>
						<div className="space-y-4">
							{tools.map((tool) => (
								<div
									key={tool.name}
									className="rounded-xl border-2 border-gray-200 p-4"
								>
									<div className="mb-2 flex items-center gap-2">
										<tool.icon className="h-5 w-5 text-purple-600" />
										<span className="font-semibold text-gray-900">
											{tool.name}
										</span>
									</div>
									<p className="text-gray-600 text-sm">{tool.desc}</p>
								</div>
							))}
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}

function ConclusionSection({ motionProps, t }: SectionProps) {
	const challenges = [
		t("veille.conclusion.challenge1"),
		t("veille.conclusion.challenge2"),
		t("veille.conclusion.challenge3"),
	];

	const nextSteps = [
		t("veille.conclusion.step1"),
		t("veille.conclusion.step2"),
		t("veille.conclusion.step3"),
	];

	return (
		<section className="relative bg-gradient-to-br from-gray-900 via-cyan-900/20 to-gray-900 py-16 sm:py-20 md:py-24 xl:py-28">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:max-w-[1400px] 2xl:max-w-[1600px]">
				<motion.div {...motionProps} className="mb-12 text-center">
					<span className="mb-4 inline-block rounded-full bg-cyan-500/20 px-4 py-2 font-semibold text-cyan-400 text-sm">
						08 — {t("veille.conclusion.label")}
					</span>
					<h2 className="mb-4 font-black text-3xl text-white sm:text-4xl md:text-5xl">
						{t("veille.conclusion.title")}
					</h2>
				</motion.div>

				<div className="grid gap-8 lg:grid-cols-2">
					{/* Challenges */}
					<motion.div
						{...motionProps}
						className="rounded-2xl border-2 border-cyan-500/30 bg-cyan-900/20 p-8"
					>
						<h3 className="mb-6 flex items-center gap-2 font-bold text-white text-xl">
							<TrendingUp className="h-6 w-6 text-cyan-400" />
							{t("veille.conclusion.challengesTitle")}
						</h3>
						<ul className="space-y-4">
							{challenges.map((challenge) => (
								<li
									key={challenge}
									className="flex items-start gap-3 text-gray-300"
								>
									<CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-cyan-400" />
									{challenge}
								</li>
							))}
						</ul>
					</motion.div>

					{/* Next Steps */}
					<motion.div
						{...motionProps}
						className="rounded-2xl border-2 border-purple-500/30 bg-purple-900/20 p-8"
					>
						<h3 className="mb-6 flex items-center gap-2 font-bold text-white text-xl">
							<ArrowRight className="h-6 w-6 text-purple-400" />
							{t("veille.conclusion.nextTitle")}
						</h3>
						<ul className="space-y-4">
							{nextSteps.map((step) => (
								<li key={step} className="flex items-start gap-3 text-gray-300">
									<ArrowRight className="mt-1 h-5 w-5 flex-shrink-0 text-purple-400" />
									{step}
								</li>
							))}
						</ul>
					</motion.div>
				</div>

				{/* Back to Portfolio */}
				<motion.div {...motionProps} className="mt-12 text-center">
					<a
						href="/"
						className="hover:-translate-y-1 inline-flex items-center gap-2 rounded-full border-3 border-gray-900 bg-gradient-to-r from-cyan-500 to-purple-500 px-8 py-4 font-bold text-white shadow-[6px_6px_0px_0px_rgba(17,24,39,1)] transition-all hover:shadow-[8px_8px_0px_0px_rgba(17,24,39,1)]"
					>
						<ArrowRight className="h-5 w-5 rotate-180" />
						{t("veille.conclusion.backToPortfolio")}
					</a>
				</motion.div>
			</div>
		</section>
	);
}
