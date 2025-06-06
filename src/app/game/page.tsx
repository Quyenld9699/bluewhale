"use client";

import Image from "next/image";
import { fishes } from "src/team-member";
import "../ocean-animations.scss";
// import whale2 from "public/whale/whale2.png";
import liveWhale from "public/whale/remove.gif";
import { motion } from "framer-motion";
import TransitionLink from "../components/TransitionLink";

export default function Game() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-200 to-slate-900"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-60"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-800 to-slate-900 opacity-80"></div>
      <div className="absolute inset-0 opacity-30">
        <div className="light-ray light-ray-1"></div>
        <div className="light-ray light-ray-2"></div>
        <div className="light-ray light-ray-3"></div>
      </div>
      <div className="absolute inset-0 opacity-20">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
      </div>
      <div className="bubbles">
        {[...Array(30)].map((_, i) => (
          <div key={i} className={`bubble bubble-${i + 1}`}>
            {i % 4 === 0 ? "🫧" : i % 3 === 0 ? "💧" : "○"}
          </div>
        ))}
      </div>

      <div className="absolute inset-0 pointer-events-none z-1">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="ocean-current-global"
            style={{
              top: `${5 + i * 12}%`,
              animationDelay: `${i * 1.5}s`,
              animationDuration: `${8 + (i % 3) * 2}s`,
            }}
          ></div>
        ))}
      </div>
      <motion.div
        className="absolute inset-0 flex items-center justify-center z-0"
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: 0, opacity: 0.09 }}
        transition={{
          duration: 5,
          ease: "easeOut",
        }}
      >
        <div className="waviy text-9xl font-bold text-white drop-shadow-2xl">
          <span style={{ "--i": 1 } as React.CSSProperties}>h</span>
          <span style={{ "--i": 2 } as React.CSSProperties}>ã</span>
          <span style={{ "--i": 3 } as React.CSSProperties}>y</span>
          <span style={{ "--i": 4 } as React.CSSProperties}>&nbsp;</span>
          <span style={{ "--i": 5 } as React.CSSProperties}>c</span>
          <span style={{ "--i": 6 } as React.CSSProperties}>h</span>
          <span style={{ "--i": 7 } as React.CSSProperties}>ọ</span>
          <span style={{ "--i": 8 } as React.CSSProperties}>n</span>
          <span style={{ "--i": 9 } as React.CSSProperties}>&nbsp;</span>
          <span style={{ "--i": 10 } as React.CSSProperties}>c</span>
          <span style={{ "--i": 11 } as React.CSSProperties}>á</span>
          <span style={{ "--i": 12 } as React.CSSProperties}>&nbsp;</span>
          <span style={{ "--i": 13 } as React.CSSProperties}>đ</span>
          <span style={{ "--i": 14 } as React.CSSProperties}>ú</span>
          <span style={{ "--i": 15 } as React.CSSProperties}>n</span>
          <span style={{ "--i": 16 } as React.CSSProperties}>g</span>
        </div>{" "}
      </motion.div>
      <div className="absolute inset-0 z-5">
        {(() => {
          // Create randomized positions and timing before mapping
          const shuffledMembers = [...fishes].sort(() => Math.random() - 0.5);
          const randomPositions = shuffledMembers.map(() => ({
            top: 15 + Math.random() * 60, // Random between 15% and 75%
            delay: Math.random() * 10, // Random delay 0-10s
            duration: 18 + Math.random() * 12, // Random duration 18-30s
            direction: Math.random() > 0.5 ? 1 : -1, // Random swimming direction
          }));

          return shuffledMembers.map((member, index) => {
            const randomData = randomPositions[index];
            const topPosition = randomData.top;
            const isNearTop = topPosition < 25;
            const isNearBottom = topPosition > 65;

            return (
              <motion.div
                key={member.id}
                className={`team-whale-swimming group ${
                  isNearTop
                    ? "tooltip-below"
                    : isNearBottom
                    ? "tooltip-above"
                    : "tooltip-default"
                }`}
                style={{
                  top: `${topPosition}%`,
                  animationDelay: `${randomData.delay}s`,
                  animationDuration: `${randomData.duration}s`,
                  transform:
                    randomData.direction === -1 ? "scaleX(-1)" : "scaleX(1)",
                }}
                whileHover="hover"
                initial="initial"
              >
                <div className="relative inline-block">
                  <div className="relative">
                    <motion.div className="size-30 drop-shadow-xl">
                      <Image src={liveWhale} alt="whale-1" />
                    </motion.div>
                  </div>
                </div>
                <div className="whale-tooltip absolute bg-white/95 rounded-xl px-2 py-2 text-lg shadow-2xl border border-blue-200 opacity-0 transition-all duration-300 z-30">
                  <div className="font-bold text-blue-800 text-center text-xl whitespace-pre-line">
                    {member.name}
                  </div>
                </div>
              </motion.div>
            );
          });
        })()}
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-row gap-4 items-center">
        <TransitionLink
          href="/"
          className="inline-block opacity-30 px-8 py-4 bg-blue-500/10 backdrop-blur-sm hover:bg-blue-600/10 hover:opacity-100 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border border-blue-400/50"
        >
          🌊 Back to team page 🐋
        </TransitionLink>
      </div>
    </div>
  );
}
