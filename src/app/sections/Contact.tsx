"use client";

import { Github, Linkedin, Mail, Send, Twitter } from "lucide-react";
import { motion } from "motion/react";
import { memo, useId, useState } from "react";

interface FormData {
	name: string;
	email: string;
	message: string;
}

const SOCIAL_LINKS = [
	{
		name: "GitHub",
		icon: Github,
		href: "https://github.com/tombdev",
		color: "bg-gray-900 hover:bg-gray-800",
	},
	{
		name: "LinkedIn",
		icon: Linkedin,
		href: "https://linkedin.com/in/tombdev",
		color: "bg-blue-600 hover:bg-blue-700",
	},
	{
		name: "Twitter",
		icon: Twitter,
		href: "https://twitter.com/tombdev",
		color: "bg-cyan-500 hover:bg-cyan-600",
	},
	{
		name: "Email",
		icon: Mail,
		href: "mailto:tom@example.com",
		color: "bg-rose-500 hover:bg-rose-600",
	},
];

export const Contact = memo(() => {
	const [formData, setFormData] = useState<FormData>({
		name: "",
		email: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<
		"idle" | "success" | "error"
	>("idle");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		// Simulate form submission
		setTimeout(() => {
			console.log("Form submitted:", formData);
			setIsSubmitting(false);
			setSubmitStatus("success");
			setFormData({ name: "", email: "", message: "" });

			// Reset success message after 3 seconds
			setTimeout(() => setSubmitStatus("idle"), 3000);
		}, 1000);
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	) => {
		setFormData((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	return (
		<section
			id={useId()}
			className="relative bg-gradient-to-br from-cyan-50 via-white to-rose-50 py-12 sm:py-16 md:py-20 xl:py-24 2xl:py-28"
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
						className="mb-4 font-black text-3xl text-gray-900 leading-tight sm:text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.1 }}
					>
						LET'S{" "}
						<span className="bg-gradient-to-r from-cyan-600 to-rose-600 bg-clip-text text-transparent">
							BUILD SOMETHING AMAZING
						</span>
					</motion.h2>
					<motion.p
						className="mx-auto max-w-2xl font-medium text-base text-gray-700 sm:text-lg md:text-xl xl:text-2xl"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						Have a project in mind? Let's discuss how we can work together
					</motion.p>
				</motion.div>

				<div className="grid gap-8 sm:gap-10 md:gap-12 lg:grid-cols-2 xl:gap-14">
					{/* Contact Form */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<div className="rounded-2xl border-2 border-gray-900 bg-white p-6 shadow-[8px_8px_0px_0px_rgba(17,24,39,1)] sm:p-8 md:border-3 xl:rounded-3xl xl:border-4 xl:p-10 2xl:p-12">
							<form
								onSubmit={handleSubmit}
								className="space-y-5 sm:space-y-6 xl:space-y-7"
							>
								{/* Name Input */}
								<div>
									<label
										htmlFor="name"
										className="mb-2 block font-bold text-gray-900 text-sm sm:text-base xl:text-lg"
									>
										Your Name
									</label>
									<input
										type="text"
										id={useId()}
										name="name"
										value={formData.name}
										onChange={handleChange}
										required
										className="w-full rounded-2xl border-2 border-gray-900 bg-white px-4 py-3 font-medium text-gray-900 text-sm transition-all focus:border-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600 sm:text-base xl:px-5 xl:py-4 xl:text-lg 2xl:px-6 2xl:py-5 2xl:text-xl"
										placeholder="John Doe"
									/>
								</div>

								{/* Email Input */}
								<div>
									<label
										htmlFor="email"
										className="mb-2 block font-bold text-gray-900 text-sm sm:text-base xl:text-lg"
									>
										Your Email
									</label>
									<input
										type="email"
										id={useId()}
										name="email"
										value={formData.email}
										onChange={handleChange}
										required
										className="w-full rounded-2xl border-2 border-gray-900 bg-white px-4 py-3 font-medium text-gray-900 text-sm transition-all focus:border-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600 sm:text-base xl:px-5 xl:py-4 xl:text-lg 2xl:px-6 2xl:py-5 2xl:text-xl"
										placeholder="john@example.com"
									/>
								</div>

								{/* Message Textarea */}
								<div>
									<label
										htmlFor="message"
										className="mb-2 block font-bold text-gray-900 text-sm sm:text-base xl:text-lg"
									>
										Your Message
									</label>
									<textarea
										id={useId()}
										name="message"
										value={formData.message}
										onChange={handleChange}
										required
										rows={5}
										className="w-full resize-none rounded-2xl border-2 border-gray-900 bg-white px-4 py-3 font-medium text-gray-900 text-sm transition-all focus:border-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-600 sm:text-base xl:px-5 xl:py-4 xl:text-lg 2xl:px-6 2xl:py-5 2xl:text-xl"
										placeholder="Tell me about your project..."
									/>
								</div>

								{/* Submit Button */}
								<motion.button
									type="submit"
									disabled={isSubmitting}
									className="flex w-full items-center justify-center gap-2 rounded-full border-2 border-gray-900 bg-cyan-400 px-6 py-3 font-black text-base text-gray-900 shadow-[6px_6px_0px_0px_rgba(17,24,39,1)] transition-all hover:shadow-[8px_8px_0px_0px_rgba(17,24,39,1)] disabled:cursor-not-allowed disabled:opacity-50 sm:px-8 sm:py-4 sm:text-lg md:border-3 xl:border-4 xl:px-10 xl:py-5 xl:text-xl 2xl:px-12 2xl:py-6 2xl:text-2xl"
									whileHover={!isSubmitting ? { y: -3 } : {}}
									whileTap={
										!isSubmitting
											? { y: 0, boxShadow: "3px 3px 0px 0px rgba(17,24,39,1)" }
											: {}
									}
								>
									{isSubmitting ? (
										<>
											<motion.div
												className="h-5 w-5 rounded-full border-2 border-gray-900 border-t-transparent"
												animate={{ rotate: 360 }}
												transition={{
													duration: 1,
													repeat: Number.POSITIVE_INFINITY,
													ease: "linear",
												}}
											/>
											SENDING...
										</>
									) : (
										<>
											<Send size={20} className="xl:h-6 xl:w-6" />
											SEND MESSAGE
										</>
									)}
								</motion.button>

								{/* Success Message */}
								{submitStatus === "success" && (
									<motion.p
										className="rounded-2xl border-2 border-green-600 bg-green-50 p-3 text-center font-bold text-green-900 text-sm sm:p-4 sm:text-base xl:p-5 xl:text-lg"
										initial={{ opacity: 0, y: -10 }}
										animate={{ opacity: 1, y: 0 }}
									>
										Message sent successfully! I'll get back to you soon.
									</motion.p>
								)}
							</form>
						</div>
					</motion.div>

					{/* Contact Info & Social Links */}
					<motion.div
						className="space-y-6 sm:space-y-8 xl:space-y-10"
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						{/* Get in Touch */}
						<motion.div
							className="rounded-2xl border-2 border-gray-900 bg-gradient-to-br from-cyan-400 to-rose-400 p-6 shadow-[8px_8px_0px_0px_rgba(17,24,39,1)] sm:p-8 md:border-3 xl:rounded-3xl xl:border-4 xl:p-10 2xl:p-12"
							whileHover={{ rotate: 1 }}
						>
							<h3 className="mb-3 font-black text-2xl text-white sm:mb-4 sm:text-3xl xl:mb-5 xl:text-4xl 2xl:text-5xl">
								Get in Touch
							</h3>
							<p className="mb-5 font-medium text-base text-white leading-relaxed sm:mb-6 sm:text-lg xl:mb-8 xl:text-xl 2xl:text-2xl">
								I'm always open to discussing new projects, creative ideas, or
								opportunities to be part of your vision.
							</p>
							<div className="space-y-3 xl:space-y-4">
								<div className="flex items-center gap-3 xl:gap-4">
									<div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-white/20 xl:h-12 xl:w-12">
										<Mail size={20} className="text-white xl:h-6 xl:w-6" />
									</div>
									<a
										href="mailto:tom@example.com"
										className="font-bold text-base text-white hover:underline sm:text-lg xl:text-xl 2xl:text-2xl"
									>
										tom@example.com
									</a>
								</div>
							</div>
						</motion.div>

						{/* Social Links */}
						<motion.div
							className="rounded-2xl border-2 border-gray-900 bg-white p-6 shadow-[8px_8px_0px_0px_rgba(17,24,39,1)] sm:p-8 md:border-3 xl:rounded-3xl xl:border-4 xl:p-10 2xl:p-12"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.2 }}
						>
							<h3 className="mb-5 font-black text-gray-900 text-xl sm:mb-6 sm:text-2xl xl:mb-8 xl:text-3xl 2xl:text-4xl">
								Connect With Me
							</h3>
							<div className="grid grid-cols-2 gap-3 sm:gap-4 xl:grid-cols-4 xl:gap-5">
								{SOCIAL_LINKS.map((social, index) => {
									const Icon = social.icon;
									return (
										<motion.a
											key={social.name}
											href={social.href}
											target="_blank"
											rel="noopener noreferrer"
											className={`flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-gray-900 p-4 text-white transition-all sm:p-5 xl:gap-3 xl:rounded-2xl xl:p-6 2xl:p-8 ${social.color}`}
											initial={{ opacity: 0, scale: 0.9 }}
											whileInView={{ opacity: 1, scale: 1 }}
											viewport={{ once: true }}
											transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
											whileHover={{ y: -4, rotate: 3 }}
											whileTap={{ scale: 0.95 }}
										>
											<Icon
												size={32}
												className="xl:h-10 xl:w-10 2xl:h-12 2xl:w-12"
											/>
											<span className="font-bold text-xs sm:text-sm xl:text-base 2xl:text-lg">
												{social.name}
											</span>
										</motion.a>
									);
								})}
							</div>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
});

Contact.displayName = "Contact";
