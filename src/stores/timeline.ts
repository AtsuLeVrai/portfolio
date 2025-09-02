import { animate, createTimeline } from "animejs";
import type {
	AnimationPhase,
	ThreeJSObjectState,
} from "@/stores/animationStore";
import { useAnimationStore } from "@/stores/animationStore";

export interface ThreeJSAnimationConfig {
	phase: AnimationPhase;
	duration: number;
	objects: ThreeJSObjectAnimation[];
}

export interface ThreeJSObjectAnimation {
	objectName: "luminousFlower" | "energyExplosions" | "buildupSphere";
	duration: number;
	delay?: number;
	ease?: string;
	properties: Partial<ThreeJSObjectState>;
	onComplete?: () => void;
}

export const THREEJS_TIMELINE_CONFIG: ThreeJSAnimationConfig[] = [
	{
		phase: "loading",
		duration: 8000,
		objects: [
			{
				objectName: "luminousFlower",
				duration: 3000,
				delay: 0,
				ease: "out(3)",
				properties: {
					opacity: 1,
					scale: 1,
					rotation: { x: 0, y: 0, z: 0 },
					visible: true,
					intensity: 1.2,
				},
			},
			{
				objectName: "energyExplosions",
				duration: 2000,
				delay: 1000,
				ease: "outExpo",
				properties: {
					opacity: 0.8,
					scale: 1.5,
					visible: true,
					intensity: 1.0,
				},
			},
			{
				objectName: "buildupSphere",
				duration: 4000,
				delay: 2000,
				ease: "inOutSine",
				properties: {
					opacity: 0.6,
					scale: 1.2,
					visible: true,
					intensity: 0.8,
				},
			},
		],
	},
	{
		phase: "revelation",
		duration: 6000,
		objects: [
			{
				objectName: "luminousFlower",
				duration: 2000,
				delay: 0,
				ease: "out(4)",
				properties: {
					opacity: 0.5,
					scale: 0.8,
					rotation: { x: 0, y: Math.PI, z: 0 },
				},
			},
		],
	},
	{
		phase: "immersion",
		duration: 10000,
		objects: [
			{
				objectName: "energyExplosions",
				duration: 2000,
				delay: 0,
				ease: "inOut(3)",
				properties: {
					scale: 0,
					opacity: 0,
					visible: false,
				},
			},
		],
	},
	{
		phase: "showcase",
		duration: 12000,
		objects: [
			{
				objectName: "buildupSphere",
				duration: 4000,
				delay: 0,
				ease: "outBounce",
				properties: {
					position: { x: -2, y: 0, z: 0 },
					opacity: 1,
					scale: 2,
				},
			},
		],
	},
	{
		phase: "outro",
		duration: 4000,
		objects: [
			{
				objectName: "luminousFlower",
				duration: 2000,
				delay: 0,
				ease: "outSine",
				properties: {
					opacity: 0,
					scale: 0.5,
					visible: false,
				},
			},
		],
	},
];

export class CoreAnimationTimeline {
	#timeline: ReturnType<typeof createTimeline> | null = null;
	#currentPhase: AnimationPhase = "loading";
	#onPhaseChange?: (phase: AnimationPhase) => void;
	#animationStore: ReturnType<typeof useAnimationStore>;

	constructor(onPhaseChange?: (phase: AnimationPhase) => void) {
		this.#onPhaseChange = onPhaseChange;
		this.#animationStore = useAnimationStore.getState();
	}

	playPhase(phase: AnimationPhase): Promise<void> {
		return new Promise((resolve) => {
			const config = THREEJS_TIMELINE_CONFIG.find((c) => c.phase === phase);
			if (!config) {
				resolve();
				return;
			}

			this.#currentPhase = phase;
			this.#onPhaseChange?.(phase);

			// Pause previous timeline
			if (this.#timeline) {
				this.#timeline.pause();
			}

			// Create new timeline
			this.#timeline = createTimeline({
				onComplete: () => resolve()
			});

			// Add animations for each Three.js object to timeline
			config.objects.forEach((objectAnimation) => {
				const currentState = this.#animationStore[objectAnimation.objectName];
				const targetState = {
					...currentState,
					...objectAnimation.properties,
				};

				// Animate each property individually for smooth transitions
				const animatedValues = {
					opacity: currentState.opacity,
					scale: currentState.scale,
					rotationX: currentState.rotation.x,
					rotationY: currentState.rotation.y,
					rotationZ: currentState.rotation.z,
					positionX: currentState.position.x,
					positionY: currentState.position.y,
					positionZ: currentState.position.z,
					intensity: currentState.intensity || 1,
					visible: currentState.visible ? 1 : 0,
				};

				this.#timeline?.add(animate({
					targets: animatedValues,
					opacity: targetState.opacity,
					scale: targetState.scale,
					rotationX: targetState.rotation.x,
					rotationY: targetState.rotation.y,
					rotationZ: targetState.rotation.z,
					positionX: targetState.position.x,
					positionY: targetState.position.y,
					positionZ: targetState.position.z,
					intensity: targetState.intensity || 1,
					visible: targetState.visible ? 1 : 0,
					duration: objectAnimation.duration,
					delay: objectAnimation.delay || 0,
					ease: objectAnimation.ease || "out(3)",
					onUpdate: () => {
						// Update store in real-time during animation
						this.#animationStore.updateObject(objectAnimation.objectName, {
							opacity: animatedValues.opacity,
							scale: animatedValues.scale,
							rotation: {
								x: animatedValues.rotationX,
								y: animatedValues.rotationY,
								z: animatedValues.rotationZ,
							},
							position: {
								x: animatedValues.positionX,
								y: animatedValues.positionY,
								z: animatedValues.positionZ,
							},
							intensity: animatedValues.intensity,
							visible: animatedValues.visible > 0.5,
						});
					},
					onComplete: objectAnimation.onComplete,
				}));
			});
		});
	}

	pause(): void {
		this.#timeline?.pause();
	}

	play(): void {
		this.#timeline?.play();
	}

	restart(): void {
		this.#timeline?.restart();
	}

	seek(progress: number): void {
		if (this.#timeline) {
			const duration = this.#timeline.duration;
			this.#timeline.seek(duration * progress);
		}
	}

	getCurrentPhase(): AnimationPhase {
		return this.#currentPhase;
	}
}

export const createAnimationTimeline = (
	onPhaseChange?: (phase: AnimationPhase) => void,
) => {
	return new CoreAnimationTimeline(onPhaseChange);
};
