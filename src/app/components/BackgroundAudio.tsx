"use client";

import { useEffect, useRef } from "react";
import { useAudio } from "../contexts/AudioContext";

export default function BackgroundAudio() {
  const bubbleAudioRef = useRef<HTMLAudioElement | null>(null);
  const whaleAudioRef = useRef<HTMLAudioElement | null>(null);
  const tropicalMelodyRef = useRef<HTMLAudioElement | null>(null);
  const whaleIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const { isVideoPlaying } = useAudio();

  useEffect(() => {
    const bubbleAudio = new Audio("/sound/loop-air-bubbles.mp3");
    bubbleAudio.loop = true;
    bubbleAudio.volume = 0.5;
    bubbleAudioRef.current = bubbleAudio;

    const whaleAudio = new Audio("/sound/whale-sound.mp3");
    whaleAudio.volume = 0.3;
    whaleAudioRef.current = whaleAudio;

    const tropicalMelody = new Audio("/sound/tropical-house-melody.mp3");
    tropicalMelody.loop = true;
    tropicalMelody.volume = 0.7;
    tropicalMelodyRef.current = tropicalMelody;

    const playBackgroundAudio = async () => {
      try {
        await bubbleAudio.play();
        await tropicalMelody.play();
        console.log("Background bubble audio and tropical melody started");
      } catch (error) {
        console.log("Background audio autoplay was prevented:", error);
      }
    };

    // Cleanup audio when component unmounts
    playBackgroundAudio();
    return () => {
      bubbleAudio.pause();
      bubbleAudio.currentTime = 0;
      whaleAudio.pause();
      whaleAudio.currentTime = 0;
      tropicalMelody.pause();
      tropicalMelody.currentTime = 0;
      if (whaleIntervalRef.current) {
        clearInterval(whaleIntervalRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const playWhaleSound = async () => {
      try {
        if (whaleAudioRef.current && !isVideoPlaying) {
          whaleAudioRef.current.currentTime = 0;
          await whaleAudioRef.current.play();
        }
      } catch (error) {
        console.log("Whale sound playback failed:", error);
      }
    };
    if (
      bubbleAudioRef.current &&
      whaleAudioRef.current &&
      tropicalMelodyRef.current
    ) {
      if (isVideoPlaying) {
        console.log("Video started - pausing all audio");
        bubbleAudioRef.current.pause();
        whaleAudioRef.current.pause();
        tropicalMelodyRef.current.pause();

        if (whaleIntervalRef.current) {
          clearInterval(whaleIntervalRef.current);
          whaleIntervalRef.current = null;
        }
      } else {
        console.log("Video stopped - resuming audio");
        const resumeAudio = async () => {
          try {
            if (bubbleAudioRef.current) {
              await bubbleAudioRef.current.play();
            }
            if (tropicalMelodyRef.current) {
              await tropicalMelodyRef.current.play();
            }
          } catch (error) {
            console.log("Failed to resume background audio:", error);
          }
        };

        resumeAudio();

        if (!whaleIntervalRef.current) {
          whaleIntervalRef.current = setInterval(() => {
            playWhaleSound();
          }, 5000);
        }
      }
    }
  }, [isVideoPlaying]);

  return null;
}
