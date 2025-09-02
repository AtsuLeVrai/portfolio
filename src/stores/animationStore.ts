import { create } from "zustand";

export type AnimationPhase =
	| "loading"
	| "revelation"
	| "immersion"
	| "showcase"
	| "outro";

export interface ThreeJSObjectState {
	opacity: number;
	scale: number;
	rotation: { x: number; y: number; z: number };
	position: { x: number; y: number; z: number };
	intensity?: number;
	visible: boolean;
}

interface AnimationState {
	currentPhase: AnimationPhase;
	progress: number;
	isPlaying: boolean;

	// Three.js object states
	luminousFlower: ThreeJSObjectState;
	energyExplosions: ThreeJSObjectState;
	buildupSphere: ThreeJSObjectState;

	// Actions
	setPhase: (phase: AnimationPhase) => void;
	setProgress: (progress: number) => void;
	play: () => void;
	pause: () => void;
	updateObject: (
		objectName: keyof Pick<
			AnimationState,
			"luminousFlower" | "energyExplosions" | "buildupSphere"
		>,
		state: Partial<ThreeJSObjectState>,
	) => void;
	resetObjects: () => void;
}

const defaultObjectState: ThreeJSObjectState = {
	opacity: 0,
	scale: 1,
	rotation: { x: 0, y: 0, z: 0 },
	position: { x: 0, y: 0, z: 0 },
	intensity: 1,
	visible: false,
};

export const useAnimationStore = create<AnimationState>((set, get) => ({
	currentPhase: "loading",
	progress: 0,
	isPlaying: true,

	// Initialize Three.js objects
	luminousFlower: { ...defaultObjectState, visible: true },
	energyExplosions: { ...defaultObjectState },
	buildupSphere: { ...defaultObjectState },

	setPhase: (phase) => set({ currentPhase: phase }),
	setProgress: (progress) => set({ progress }),
	play: () => set({ isPlaying: true }),
	pause: () => set({ isPlaying: false }),

	updateObject: (objectName, newState) => {
		const current = get()[objectName];
		set({
			[objectName]: { ...current, ...newState },
		});
	},

	resetObjects: () =>
		set({
			luminousFlower: { ...defaultObjectState, visible: true },
			energyExplosions: { ...defaultObjectState },
			buildupSphere: { ...defaultObjectState },
		}),
}));
