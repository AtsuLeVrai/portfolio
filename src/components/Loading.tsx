"use client";

export function Loading() {
	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
			<div className="animate-pulse text-white text-xl">Loading...</div>
		</div>
	);
}
