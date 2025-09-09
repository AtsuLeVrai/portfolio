"use client";

import { useState } from "react";
import ActI from "@/components/Acts/ActI";
import ActII from "@/components/Acts/ActII";
import ActIII from "@/components/Acts/ActIII";
import ActIV from "@/components/Acts/ActIV";
import ActV from "@/components/Acts/ActV";

export default function Home() {
	const [currentAct, _setCurrentAct] = useState(1);

	return (
		<main className="relative min-h-screen overflow-hidden bg-black text-white">
			<ActI />
			<ActII />
			<ActIII />
			<ActIV />
			<ActV />

			{/* Debug Info */}
			{process.env.NODE_ENV === "development" && (
				<div className="fixed bottom-4 left-4 z-50 rounded bg-black/80 p-2 text-sm text-white">
					<div>Act: {currentAct}</div>
				</div>
			)}
		</main>
	);
}
