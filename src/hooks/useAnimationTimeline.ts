"use client";

import { useCallback, useEffect, useRef } from "react";
import { useAnimationStore } from "@/stores/animationStore";
import {
	type CoreAnimationTimeline,
	createAnimationTimeline,
} from "@/stores/timeline";

export function useAnimationTimeline() {
	const timelineRef = useRef<CoreAnimationTimeline | null>(null);
	const { currentPhase, setPhase, setProgress, isPlaying } =
		useAnimationStore();

	const handlePhaseChange = useCallback(
		(phase: typeof currentPhase) => {
			setPhase(phase);
		},
		[setPhase],
	);

	useEffect(() => {
		if (!timelineRef.current) {
			timelineRef.current = createAnimationTimeline(handlePhaseChange);
		}
	}, [handlePhaseChange]);

	const playPhase = useCallback(async (phase: typeof currentPhase) => {
		if (timelineRef.current) {
			await timelineRef.current.playPhase(phase);
		}
	}, []);

	const pause = useCallback(() => {
		timelineRef.current?.pause();
	}, []);

	const play = useCallback(() => {
		timelineRef.current?.play();
	}, []);

	const restart = useCallback(() => {
		timelineRef.current?.restart();
	}, []);

	const seek = useCallback(
		(progress: number) => {
			timelineRef.current?.seek(progress);
			setProgress(progress);
		},
		[setProgress],
	);

	useEffect(() => {
		if (isPlaying) {
			play();
		} else {
			pause();
		}
	}, [isPlaying, play, pause]);

	return {
		playPhase,
		pause,
		play,
		restart,
		seek,
		currentPhase,
	};
}
