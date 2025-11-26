"use client";

import { motion } from "motion/react";
import { useEffect } from "react";

export default function PageError({ reset }: { reset: () => void }) {
	useEffect(() => {
		// Log error to monitoring service in production
		if (process.env.NODE_ENV === "production") {
			// Send to error tracking service
		}
	}, []);

	return (
		<div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-rose-50 via-white to-cyan-50 px-4">
			<motion.div
				className="text-center"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
			>
				<h1 className="mb-4 font-black text-6xl text-gray-900">Oops!</h1>
				<p className="mb-8 font-medium text-gray-600 text-xl">
					Something went wrong. Please try again.
				</p>
				<motion.button
					onClick={reset}
					className="rounded-full border-3 border-gray-900 bg-cyan-400 px-8 py-4 font-black text-gray-900 shadow-[6px_6px_0px_0px_rgba(17,24,39,1)] transition-all"
					whileHover={{ y: -4, boxShadow: "8px 8px 0px 0px rgba(17,24,39,1)" }}
					whileTap={{ y: 0, boxShadow: "3px 3px 0px 0px rgba(17,24,39,1)" }}
				>
					Try Again
				</motion.button>
			</motion.div>
		</div>
	);
}
