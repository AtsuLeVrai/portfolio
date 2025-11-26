"use client";

import { Mail, Send } from "lucide-react";
import { motion } from "motion/react";
import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { CONTACT_INFO, FORM_LIMITS, SOCIAL_LINKS } from "@/data/constants";
import type { ContactFormData, FormStatus } from "@/types";

interface FormErrors {
	name?: string;
	email?: string;
	message?: string;
}

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

export function Contact() {
	const { t } = useTranslation();
	const [formData, setFormData] = useState<ContactFormData>({
		name: "",
		email: "",
		message: "",
	});
	const [errors, setErrors] = useState<FormErrors>({});
	const [status, setStatus] = useState<FormStatus>("idle");
	const [touched, setTouched] = useState<Record<string, boolean>>({});

	const validateField = useCallback((name: keyof ContactFormData, value: string): string | undefined => {
		switch (name) {
			case "name":
				if (!value.trim()) return t("contact.form.errors.nameRequired");
				if (value.length > FORM_LIMITS.NAME_MAX) return t("contact.form.errors.nameTooLong");
				break;
			case "email":
				if (!value.trim()) return t("contact.form.errors.emailRequired");
				if (value.length > FORM_LIMITS.EMAIL_MAX) return t("contact.form.errors.emailTooLong");
				if (!EMAIL_REGEX.test(value)) return t("contact.form.errors.emailInvalid");
				break;
			case "message":
				if (!value.trim()) return t("contact.form.errors.messageRequired");
				if (value.length > FORM_LIMITS.MESSAGE_MAX) return t("contact.form.errors.messageTooLong");
				break;
		}
		return undefined;
	}, [t]);

	const validateForm = useCallback((): boolean => {
		const newErrors: FormErrors = {};
		let isValid = true;

		(Object.keys(formData) as Array<keyof ContactFormData>).forEach((key) => {
			const error = validateField(key, formData[key]);
			if (error) {
				newErrors[key] = error;
				isValid = false;
			}
		});

		setErrors(newErrors);
		return isValid;
	}, [formData, validateField]);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));

		// Validate on change if field was touched
		if (touched[name]) {
			const error = validateField(name as keyof ContactFormData, value);
			setErrors((prev) => ({ ...prev, [name]: error }));
		}
	};

	const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		const { name, value } = e.target;
		setTouched((prev) => ({ ...prev, [name]: true }));
		const error = validateField(name as keyof ContactFormData, value);
		setErrors((prev) => ({ ...prev, [name]: error }));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!validateForm()) return;

		setStatus("submitting");

		try {
			const response = await fetch("/api/send-email", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
			});

			const data = await response.json();

			if (!response.ok) {
				throw new Error(data.error || "Failed to send email");
			}

			setStatus("success");
			setFormData({ name: "", email: "", message: "" });
			setTouched({});
			setTimeout(() => setStatus("idle"), 5000);
		} catch (error) {
			setStatus("error");
			setTimeout(() => setStatus("idle"), 5000);
		}
	};

	const getInputClassName = (fieldName: keyof ContactFormData) => {
		const baseClass = "w-full rounded-2xl border-2 bg-white px-4 py-3 font-medium text-gray-900 text-sm transition-all focus:outline-none focus:ring-2 sm:text-base xl:px-5 xl:py-4 xl:text-lg 2xl:px-6 2xl:py-5 2xl:text-xl";
		const errorClass = errors[fieldName] && touched[fieldName]
			? "border-red-500 focus:border-red-500 focus:ring-red-500"
			: "border-gray-900 focus:border-cyan-600 focus:ring-cyan-600";
		return `${baseClass} ${errorClass}`;
	};

	return (
		<section
			id="contact"
			className="relative bg-gradient-to-br from-cyan-50 via-white to-rose-50 py-12 sm:py-16 md:py-20 xl:py-24 2xl:py-28"
		>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 xl:max-w-[1400px] 2xl:max-w-[1600px]">
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
						{t("contact.title")}{" "}
						<span className="bg-gradient-to-r from-cyan-600 to-rose-600 bg-clip-text text-transparent">
							{t("contact.subtitle")}
						</span>
					</motion.h2>
					<motion.p
						className="mx-auto max-w-2xl font-medium text-base text-gray-700 sm:text-lg md:text-xl xl:text-2xl"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						{t("contact.description")}
					</motion.p>
				</motion.div>

				<div className="grid gap-8 sm:gap-10 md:gap-12 lg:grid-cols-2 xl:gap-14">
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
								<div>
									<label
										htmlFor="name"
										className="mb-2 block font-bold text-gray-900 text-sm sm:text-base xl:text-lg"
									>
										{t("contact.form.name")}
									</label>
									<input
										type="text"
										id="name"
										name="name"
										value={formData.name}
										onChange={handleChange}
										onBlur={handleBlur}
										className={getInputClassName("name")}
										placeholder={t("contact.form.namePlaceholder")}
									/>
									{errors.name && touched.name && (
										<p className="mt-1 text-red-600 text-sm">{errors.name}</p>
									)}
								</div>

								<div>
									<label
										htmlFor="email"
										className="mb-2 block font-bold text-gray-900 text-sm sm:text-base xl:text-lg"
									>
										{t("contact.form.email")}
									</label>
									<input
										type="email"
										id="email"
										name="email"
										value={formData.email}
										onChange={handleChange}
										onBlur={handleBlur}
										className={getInputClassName("email")}
										placeholder={t("contact.form.emailPlaceholder")}
									/>
									{errors.email && touched.email && (
										<p className="mt-1 text-red-600 text-sm">{errors.email}</p>
									)}
								</div>

								<div>
									<label
										htmlFor="message"
										className="mb-2 block font-bold text-gray-900 text-sm sm:text-base xl:text-lg"
									>
										{t("contact.form.message")}
									</label>
									<textarea
										id="message"
										name="message"
										value={formData.message}
										onChange={handleChange}
										onBlur={handleBlur}
										rows={5}
										className={`${getInputClassName("message")} resize-none`}
										placeholder={t("contact.form.messagePlaceholder")}
									/>
									{errors.message && touched.message && (
										<p className="mt-1 text-red-600 text-sm">{errors.message}</p>
									)}
								</div>

								<motion.button
									type="submit"
									disabled={status === "submitting"}
									className="flex w-full items-center justify-center gap-2 rounded-full border-2 border-gray-900 bg-cyan-400 px-6 py-3 font-black text-base text-gray-900 shadow-[6px_6px_0px_0px_rgba(17,24,39,1)] transition-all hover:shadow-[8px_8px_0px_0px_rgba(17,24,39,1)] disabled:cursor-not-allowed disabled:opacity-50 sm:px-8 sm:py-4 sm:text-lg md:border-3 xl:border-4 xl:px-10 xl:py-5 xl:text-xl 2xl:px-12 2xl:py-6 2xl:text-2xl"
									whileHover={status !== "submitting" ? { y: -3 } : {}}
									whileTap={
										status !== "submitting"
											? { y: 0, boxShadow: "3px 3px 0px 0px rgba(17,24,39,1)" }
											: {}
									}
								>
									{status === "submitting" ? (
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
											{t("contact.form.sending").toUpperCase()}
										</>
									) : (
										<>
											<Send size={20} className="xl:h-6 xl:w-6" />
											{t("contact.form.send").toUpperCase()}
										</>
									)}
								</motion.button>

								{status === "success" && (
									<motion.p
										className="rounded-2xl border-2 border-green-600 bg-green-50 p-3 text-center font-bold text-green-900 text-sm sm:p-4 sm:text-base xl:p-5 xl:text-lg"
										initial={{ opacity: 0, y: -10 }}
										animate={{ opacity: 1, y: 0 }}
									>
										{t("contact.form.success")}
									</motion.p>
								)}

								{status === "error" && (
									<motion.p
										className="rounded-2xl border-2 border-red-600 bg-red-50 p-3 text-center font-bold text-red-900 text-sm sm:p-4 sm:text-base xl:p-5 xl:text-lg"
										initial={{ opacity: 0, y: -10 }}
										animate={{ opacity: 1, y: 0 }}
									>
										{t("contact.form.error")}
									</motion.p>
								)}
							</form>
						</div>
					</motion.div>

					<motion.div
						className="space-y-6 sm:space-y-8 xl:space-y-10"
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
					>
						<div className="rounded-2xl border-2 border-gray-900 bg-gradient-to-br from-cyan-400 to-rose-400 p-6 shadow-[8px_8px_0px_0px_rgba(17,24,39,1)] sm:p-8 md:border-3 xl:rounded-3xl xl:border-4 xl:p-10 2xl:p-12">
							<h3 className="mb-3 font-black text-2xl text-white sm:mb-4 sm:text-3xl xl:mb-5 xl:text-4xl 2xl:text-5xl">
								{t("contact.social.title")}
							</h3>
							<p className="mb-5 font-medium text-base text-white leading-relaxed sm:mb-6 sm:text-lg xl:mb-8 xl:text-xl 2xl:text-2xl">
								{t("contact.description")}
							</p>
							<div className="space-y-3 xl:space-y-4">
								<div className="flex items-center gap-3 xl:gap-4">
									<div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white bg-white/20 xl:h-12 xl:w-12">
										<Mail size={20} className="text-white xl:h-6 xl:w-6" />
									</div>
									<a
										href={`mailto:${CONTACT_INFO.email}`}
										className="font-bold text-base text-white hover:underline sm:text-lg xl:text-xl 2xl:text-2xl"
									>
										{CONTACT_INFO.email}
									</a>
								</div>
							</div>
						</div>

						<motion.div
							className="rounded-2xl border-2 border-gray-900 bg-white p-6 shadow-[8px_8px_0px_0px_rgba(17,24,39,1)] sm:p-8 md:border-3 xl:rounded-3xl xl:border-4 xl:p-10 2xl:p-12"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.6, delay: 0.2 }}
						>
							<h3 className="mb-5 font-black text-gray-900 text-xl sm:mb-6 sm:text-2xl xl:mb-8 xl:text-3xl 2xl:text-4xl">
								{t("contact.quickLinks.title")}
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
											className={`flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-gray-900 p-4 text-white transition-all sm:p-5 xl:gap-3 xl:rounded-2xl xl:p-6 2xl:p-8 ${social.bgColor}`}
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
}
