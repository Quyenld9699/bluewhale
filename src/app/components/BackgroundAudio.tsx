"use client";

import { useEffect } from "react";

export default function BackgroundAudio() {
  useEffect(() => {
    // Background bubble sounds
    const bubbleAudio = new Audio("/sound/loop-air-bubbles.mp3");
    bubbleAudio.loop = true;
    bubbleAudio.volume = 0.5; // Set volume

    // Whale sound effects
    const whaleAudio = new Audio("/sound/whale-sound.mp3");
    whaleAudio.volume = 0.7; // Set volume

    const playBackgroundAudio = async () => {
      try {
        await bubbleAudio.play();
        console.log("Background bubble audio started");
      } catch (error) {
        console.log("Background audio autoplay was prevented:", error);
      }
    };

    // Play whale sound every 5 seconds
    const playWhaleSound = async () => {
      try {
        whaleAudio.currentTime = 0; // Reset to beginning
        await whaleAudio.play();
      } catch (error) {
        console.log("Whale sound playback failed:", error);
      }
    };

    playBackgroundAudio();

    // Set interval for whale sounds every 5 seconds
    const whaleInterval = setInterval(() => {
      playWhaleSound();
    }, 5000);

    // Cleanup audio when component unmounts
    return () => {
      bubbleAudio.pause();
      bubbleAudio.currentTime = 0;
      whaleAudio.pause();
      whaleAudio.currentTime = 0;
      clearInterval(whaleInterval);
    };
  }, []);

  return null;
}
