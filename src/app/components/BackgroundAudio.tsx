"use client";

import { useEffect, useRef, useState } from "react";
import { useAudio } from "../contexts/AudioContext";

export default function BackgroundAudio() {
  const bubbleAudioRef = useRef<HTMLAudioElement | null>(null);
  const whaleAudioRef = useRef<HTMLAudioElement | null>(null);
  const tropicalMelodyRef = useRef<HTMLAudioElement | null>(null);
  const whaleIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const [audioInitialized, setAudioInitialized] = useState(false);
  const [showAudioPrompt, setShowAudioPrompt] = useState(false);
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

    // Try to play background audio, but handle autoplay prevention gracefully
    const initializeAudio = async () => {
      try {
        await bubbleAudio.play();
        await tropicalMelody.play();
        setAudioInitialized(true);
        console.log("Background audio initialized successfully");
      } catch (error) {
        console.log(
          "Autoplay prevented - waiting for user interaction:",
          error
        );
        setShowAudioPrompt(true);
      }
    };

    // Add user interaction listener to enable audio
    const enableAudio = async () => {
      try {
        if (!audioInitialized) {
          await bubbleAudio.play();
          await tropicalMelody.play();
          setAudioInitialized(true);
          setShowAudioPrompt(false);
          console.log("Audio enabled after user interaction");
        }
      } catch (error) {
        console.log("Failed to enable audio:", error);
      }
    };

    // Listen for any user interaction
    const handleUserInteraction = () => {
      enableAudio();
      // Remove listeners after first interaction
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("keydown", handleUserInteraction);
      document.removeEventListener("touchstart", handleUserInteraction);
    };

    document.addEventListener("click", handleUserInteraction);
    document.addEventListener("keydown", handleUserInteraction);
    document.addEventListener("touchstart", handleUserInteraction);

    // Try initial autoplay
    initializeAudio();
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
      // Remove event listeners
      document.removeEventListener("click", handleUserInteraction);
      document.removeEventListener("keydown", handleUserInteraction);
      document.removeEventListener("touchstart", handleUserInteraction);
    };
  }, [audioInitialized]);
  useEffect(() => {
    const playWhaleSound = async () => {
      try {
        if (whaleAudioRef.current && !isVideoPlaying && audioInitialized) {
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
      tropicalMelodyRef.current &&
      audioInitialized
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

    // Start whale sound interval when audio is initialized and not during video
    if (audioInitialized && !isVideoPlaying && !whaleIntervalRef.current) {
      whaleIntervalRef.current = setInterval(() => {
        playWhaleSound();
      }, 5000);
    }
  }, [isVideoPlaying, audioInitialized]);
  return (
    <>
      {showAudioPrompt && (
        <div className="fixed top-4 right-4 z-50 bg-blue-500/90 backdrop-blur-sm text-white p-4 rounded-lg shadow-lg border border-blue-300/50 animate-pulse">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🔊</span>
            <div>
              <p className="font-semibold">Enable Ocean Sounds</p>
              <p className="text-sm opacity-90">
                Click anywhere to start audio
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
