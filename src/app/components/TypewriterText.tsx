"use client";

import { useState, useEffect } from "react";

interface TypewriterTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  showCursor?: boolean;
  cursorChar?: string;
  onComplete?: () => void;
  highlightPhrases?: string[];
}

export default function TypewriterText({
  text,
  speed = 50,
  delay = 0,
  className = "",
  showCursor = true,
  cursorChar = "|",
  onComplete,
  highlightPhrases = [],
}: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showBlinkingCursor, setShowBlinkingCursor] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    if (delay > 0) {
      const delayTimer = setTimeout(() => {
        setHasStarted(true);
      }, delay);
      return () => clearTimeout(delayTimer);
    } else {
      setHasStarted(true);
    }
  }, [delay]);

  useEffect(() => {
    if (!hasStarted) return;

    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    } else if (!isCompleted) {
      setIsCompleted(true);
      if (onComplete) {
        onComplete();
      }
      const cursorTimer = setTimeout(() => {
        setShowBlinkingCursor(false);
      }, 3000);
      return () => clearTimeout(cursorTimer);
    }
  }, [currentIndex, text, speed, hasStarted, onComplete, isCompleted]);

  const renderTextWithHighlights = (text: string) => {
    if (highlightPhrases.length === 0) return text;

    let result = text;
    highlightPhrases.forEach((phrase) => {
      const regex = new RegExp(`(${phrase})`, "gi");
      result = result.replace(
        regex,
        '<span class="text-cyan-300 font-bold drop-shadow-lg">$1</span>'
      );
    });

    return <span dangerouslySetInnerHTML={{ __html: result }} />;
  };

  return (
    <span
      className={`typewriter-container ${className} ${
        isCompleted ? "typewriter-complete" : ""
      }`}
    >
      {renderTextWithHighlights(displayedText)}
      {showCursor && showBlinkingCursor && (
        <span className="typewriter-cursor typewriter-cursor--glow ml-1">
          {cursorChar}
        </span>
      )}
    </span>
  );
}
