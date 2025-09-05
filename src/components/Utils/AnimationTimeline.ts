type AnimationValue = number | [number, number, number] | string;

export interface TimelineKeyframe<T = AnimationValue> {
	time: number; // 0-1 progress value
	value: T;
	easing?: (t: number) => number;
}

export interface AnimationTrack<T = AnimationValue> {
	keyframes: TimelineKeyframe<T>[];
	interpolate?: (from: T, to: T, t: number) => T;
}

// Easing functions
const easings = {
	linear: (t: number) => t,
	easeInOut: (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t),
	easeOut: (t: number) => t * (2 - t),
	easeIn: (t: number) => t * t,
	easeInCubic: (t: number) => t * t * t,
	easeOutCubic: (t: number) => {
		const modified = t - 1;
		return modified * modified * modified + 1;
	},
	easeInOutCubic: (t: number) =>
		t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,
} as const;

// Default interpolation functions
const interpolators = {
	number: (from: number, to: number, t: number): number =>
		from + (to - from) * t,
	vector3: (
		from: [number, number, number],
		to: [number, number, number],
		t: number,
	): [number, number, number] => [
		from[0] + (to[0] - from[0]) * t,
		from[1] + (to[1] - from[1]) * t,
		from[2] + (to[2] - from[2]) * t,
	],
	color: (from: string, to: string, t: number): string => {
		// Simple color interpolation (hex colors)
		if (from.startsWith("#") && to.startsWith("#")) {
			const fromRgb = [
				Number.parseInt(from.slice(1, 3), 16),
				Number.parseInt(from.slice(3, 5), 16),
				Number.parseInt(from.slice(5, 7), 16),
			];
			const toRgb = [
				Number.parseInt(to.slice(1, 3), 16),
				Number.parseInt(to.slice(3, 5), 16),
				Number.parseInt(to.slice(5, 7), 16),
			];

			const r = Math.round(fromRgb[0] + (toRgb[0] - fromRgb[0]) * t);
			const g = Math.round(fromRgb[1] + (toRgb[1] - fromRgb[1]) * t);
			const b = Math.round(fromRgb[2] + (toRgb[2] - fromRgb[2]) * t);

			return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
		}
		return t < 0.5 ? from : to;
	},
} as const;

export class AnimationTimeline {
	readonly #tracks = new Map<string, AnimationTrack>();
	readonly #callbacks = new Map<string, (value: AnimationValue) => void>();
	#currentProgress = 0;

	addTrack<T extends AnimationValue>(
		name: string,
		keyframes: TimelineKeyframe<T>[],
		interpolate?: (from: T, to: T, t: number) => T,
	) {
		// Sort keyframes by time
		keyframes.sort((a, b) => a.time - b.time);

		this.#tracks.set(name, {
			keyframes,
			// @ts-expect-error - TypeScript can't infer the type here
			interpolate:
				interpolate ||
				(interpolators.number as unknown as (from: T, to: T, t: number) => T),
		});
	}

	addCallback(trackName: string, callback: (value: AnimationValue) => void) {
		this.#callbacks.set(trackName, callback);
	}

	removeCallback(trackName: string) {
		this.#callbacks.delete(trackName);
	}

	setProgress(progress: number) {
		const currentProgress = Math.max(0, Math.min(1, progress));
		this.#currentProgress = currentProgress;

		this.#tracks.forEach((track, trackName) => {
			const value = this.evaluateTrack(track, currentProgress);
			const callback = this.#callbacks.get(trackName);
			if (callback && value !== null) {
				callback(value);
			}
		});
	}

	getProgress(): number {
		return this.#currentProgress;
	}

	clear() {
		this.#tracks.clear();
		this.#callbacks.clear();
	}

	private evaluateTrack(
		track: AnimationTrack,
		progress: number,
	): AnimationValue | null {
		const { keyframes, interpolate } = track;

		if (keyframes.length === 0) return null;
		if (keyframes.length === 1) return keyframes[0].value;

		// Find the current keyframe range
		let fromIndex = 0;
		let toIndex = 1;

		for (let i = 0; i < keyframes.length - 1; i++) {
			if (progress >= keyframes[i].time && progress <= keyframes[i + 1].time) {
				fromIndex = i;
				toIndex = i + 1;
				break;
			}
		}

		// Handle edge cases
		if (progress <= keyframes[0].time) {
			return keyframes[0].value;
		}
		if (progress >= keyframes[keyframes.length - 1].time) {
			return keyframes[keyframes.length - 1].value;
		}

		const fromKeyframe = keyframes[fromIndex];
		const toKeyframe = keyframes[toIndex];

		// Calculate local progress between keyframes
		const localProgress =
			(progress - fromKeyframe.time) / (toKeyframe.time - fromKeyframe.time);

		// Apply easing
		const easing = toKeyframe.easing || easings.linear;
		const easedProgress = easing(localProgress);

		// Interpolate
		if (interpolate) {
			return interpolate(fromKeyframe.value, toKeyframe.value, easedProgress);
		}

		return fromKeyframe.value;
	}
}

// Portfolio-specific timeline configurations
export const createPortfolioTimeline = (): AnimationTimeline => {
	const timeline = new AnimationTimeline();

	// Act I: Loading (0-0.2)
	timeline.addTrack("actI_intensity", [
		{ time: 0, value: 0, easing: easings.easeOut },
		{ time: 0.1, value: 1, easing: easings.easeInOut },
		{ time: 0.2, value: 0.8, easing: easings.easeOut },
	]);

	timeline.addTrack(
		"camera_position",
		[
			{
				time: 0,
				value: [0, 0, 10] as [number, number, number],
				easing: easings.easeInOut,
			},
			{
				time: 0.2,
				value: [0, 2, 8] as [number, number, number],
				easing: easings.easeInOut,
			},
			{
				time: 0.4,
				value: [-2, 3, 6] as [number, number, number],
				easing: easings.easeInOut,
			},
			{
				time: 0.6,
				value: [3, 1, 5] as [number, number, number],
				easing: easings.easeInOut,
			},
			{
				time: 0.8,
				value: [0, -1, 4] as [number, number, number],
				easing: easings.easeInOut,
			},
			{
				time: 1,
				value: [0, 0, 3] as [number, number, number],
				easing: easings.easeOut,
			},
		],
		interpolators.vector3,
	);

	// Act II: Glass Revelation (0.2-0.4)
	timeline.addTrack("glass_opacity", [
		{ time: 0.2, value: 0, easing: easings.easeIn },
		{ time: 0.3, value: 0.8, easing: easings.easeOut },
		{ time: 0.4, value: 0.6, easing: easings.linear },
	]);

	// Act III: Environment (0.4-0.6)
	timeline.addTrack("environment_brightness", [
		{ time: 0.4, value: 0.2, easing: easings.easeIn },
		{ time: 0.5, value: 0.8, easing: easings.easeInOut },
		{ time: 0.6, value: 0.5, easing: easings.easeOut },
	]);

	// Act IV: Project Showcase (0.6-0.8)
	timeline.addTrack("explosion_intensity", [
		{ time: 0.6, value: 0, easing: easings.easeIn },
		{ time: 0.7, value: 1.5, easing: easings.easeOut },
		{ time: 0.8, value: 0.3, easing: easings.easeInOut },
	]);

	// Act V: Outro (0.8-1.0)
	timeline.addTrack("outro_fade", [
		{ time: 0.8, value: 0, easing: easings.easeIn },
		{ time: 0.9, value: 0.8, easing: easings.easeInOut },
		{ time: 1, value: 1, easing: easings.easeOut },
	]);

	return timeline;
};

// Export les constantes pour usage externe
export { easings, interpolators };
