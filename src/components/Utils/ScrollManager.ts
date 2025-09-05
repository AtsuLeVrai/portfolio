"use client";

import Lenis from "@studio-freight/lenis";

export class ScrollManager {
	#lenis: Lenis | null = null;
	#callbacks: Map<string, (progress: number) => void> = new Map();
	#isInitialized = false;

	constructor() {
		if (typeof window !== "undefined") {
			this.#init();
		}
	}

	onScroll(id: string, callback: (progress: number) => void) {
		this.#callbacks.set(id, callback);
	}

	removeScrollListener(id: string) {
		this.#callbacks.delete(id);
	}

	scrollTo(
		target: number | string | HTMLElement,
		options?: {
			duration?: number;
			easing?: (t: number) => number;
			offset?: number;
		},
	) {
		if (this.#lenis) {
			this.#lenis.scrollTo(target, options);
		}
	}

	getScroll(): number {
		return this.#lenis?.scroll || 0;
	}

	getLimit(): number {
		return this.#lenis?.limit || 0;
	}

	getProgress(): number {
		return this.#lenis?.progress || 0;
	}

	destroy() {
		if (this.#lenis) {
			this.#lenis.destroy();
			this.#lenis = null;
		}
		this.#callbacks.clear();
		this.#isInitialized = false;
	}

	isReady(): boolean {
		return this.#isInitialized && this.#lenis !== null;
	}

	#init() {
		this.#lenis = new Lenis({
			duration: 1.2,
			easing: (t: number) => Math.min(1, 1.001 - 2 ** (-10 * t)),
			touchMultiplier: 2,
			infinite: false,
		});

		this.#lenis.on(
			"scroll",
			({
				progress,
			}: {
				scroll: number;
				limit: number;
				velocity: number;
				direction: number;
				progress: number;
			}) => {
				this.#callbacks.forEach((callback) => {
					callback(progress);
				});
			},
		);

		this.#isInitialized = true;
		this.#raf();
	}

	#raf() {
		if (this.#lenis) {
			this.#lenis.raf(performance.now());
		}
		requestAnimationFrame(() => this.#raf());
	}
}

// Singleton instance
let scrollManagerInstance: ScrollManager | null = null;

export const getScrollManager = (): ScrollManager => {
	if (!scrollManagerInstance) {
		scrollManagerInstance = new ScrollManager();
	}
	return scrollManagerInstance;
};
