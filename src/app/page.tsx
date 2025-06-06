"use client";

import Image from "next/image";
import TransitionLink from "./components/TransitionLink";
import { teamMembers } from "src/team-member";
import "./ocean-animations.scss";
import whale1 from "public/whale/whale1.png";
// import whale2 from "public/whale/whale2.png";
import liveWhale from "public/whale/remove.gif";
import { motion } from "framer-motion";
import { useAudio } from "./contexts/AudioContext";

export default function Home() {
  const { isAudioEnabled, enableAudio } = useAudio();
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
          <span style={{ "--i": 1 } as React.CSSProperties}>B</span>
          <span style={{ "--i": 2 } as React.CSSProperties}>l</span>
          <span style={{ "--i": 3 } as React.CSSProperties}>u</span>
          <span style={{ "--i": 4 } as React.CSSProperties}>e</span>
          <span style={{ "--i": 5 } as React.CSSProperties}>&nbsp;</span>
          <span style={{ "--i": 6 } as React.CSSProperties}>W</span>
          <span style={{ "--i": 7 } as React.CSSProperties}>h</span>
          <span style={{ "--i": 8 } as React.CSSProperties}>a</span>
          <span style={{ "--i": 9 } as React.CSSProperties}>l</span>
          <span style={{ "--i": 10 } as React.CSSProperties}>e</span>
          <span style={{ "--i": 11 } as React.CSSProperties}>&nbsp;</span>
          <span style={{ "--i": 12 } as React.CSSProperties}>t</span>
          <span style={{ "--i": 13 } as React.CSSProperties}>e</span>
          <span style={{ "--i": 14 } as React.CSSProperties}>a</span>
          <span style={{ "--i": 15 } as React.CSSProperties}>m</span>
        </div>
      </motion.div>
      <div className="absolute inset-0">
        <div className="whale whale-1">
          <Image src={whale1} alt="whale-1" className="size-15 rotate-y-180" />
        </div>
        <div className="whale whale-2">
          <Image src={whale1} alt="whale-1" className="size-20 rotate-y-180" />
        </div>
        <div className="whale whale-3">
          <Image src={whale1} alt="whale-1" className="size-15 rotate-y-180" />
        </div>
      </div>
      <div className="absolute inset-0 z-5">
        {teamMembers.map((member, index) => {
          const topPosition = 10 + ((index * 7) % 70);
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
                animationDelay: `${index * 2}s`,
                animationDuration: `${20 + (index % 4) * 5}s`,
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
                <motion.div
                  className="absolute top-1/3 left-1/2.5 transform -translate-x-1/2 -translate-y-1/2 text-lg bg-white/10 rounded-full p-1 shadow-lg"
                  variants={{
                    initial: {
                      x: "-50%",
                      y: "-50%",
                      scale: 1,
                    },
                    hover: {
                      x: "calc(70px)",
                      y: "calc(-70px)",
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                      },
                    },
                  }}
                >
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    className="rounded-full object-cover w-[40px] h-[40px] shadow-lg"
                  />
                </motion.div>
              </div>
              <div className="whale-tooltip absolute bg-white/95 rounded-xl px-2 py-2 text-lg shadow-2xl border border-blue-200 opacity-0 transition-all duration-300 z-30">
                <div className="font-bold text-blue-800 text-center text-xl whitespace-nowrap">
                  {member.name}
                </div>
                <div className="text-blue-600 text-center relative text-lg whitespace-nowrap">
                  {member.role}
                </div>
                <div className="flex justify-center">
                  <Image
                    src={member.image}
                    alt={member.name}
                    className="object-cover rounded-lg w-[160px] h-[160px] shadow-lg"
                  />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex flex-row gap-4 items-center">
        {!isAudioEnabled && (
          <button
            onClick={enableAudio}
            className="inline-block px-8 py-4 bg-green-500/20 backdrop-blur-sm hover:bg-green-600/30 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border border-green-400/50 animate-pulse"
          >
            🔊
          </button>
        )}

        <TransitionLink
          href="/we-are"
          className="inline-block opacity-30 px-8 py-4 bg-blue-500/10 backdrop-blur-sm hover:bg-blue-600/10 hover:opacity-100 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border border-blue-400/50"
        >
          🌊 Visit Blue Whale Page 🐋
        </TransitionLink>
      </div>
    </div>
  );
}
