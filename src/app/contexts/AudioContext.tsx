"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface AudioContextType {
  isVideoPlaying: boolean;
  setIsVideoPlaying: (playing: boolean) => void;
}

const AudioContext = createContext<AudioContextType | undefined>(undefined);

export function AudioProvider({ children }: { children: ReactNode }) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <AudioContext.Provider
      value={{
        isVideoPlaying,
        setIsVideoPlaying,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const context = useContext(AudioContext);
  if (context === undefined) {
    throw new Error("useAudio must be used within an AudioProvider");
  }
  return context;
}
