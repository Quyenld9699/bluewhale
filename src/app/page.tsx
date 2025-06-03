"use client";

import Image from "next/image";
import Link from "next/link";
import { teamMembers } from "src/team-member";
import "./ocean-animations.scss";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Ocean depth background with realistic gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-200 to-slate-900"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-60"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-800 to-slate-900 opacity-80"></div>
      {/* Underwater light rays */}
      <div className="absolute inset-0 opacity-30">
        <div className="light-ray light-ray-1"></div>
        <div className="light-ray light-ray-2"></div>
        <div className="light-ray light-ray-3"></div>
      </div>
      {/* Ocean waves animation */}
      <div className="absolute inset-0 opacity-20">
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
      </div>
      {/* Enhanced floating bubbles */}
      <div className="bubbles">
        {[...Array(30)].map((_, i) => (
          <div key={i} className={`bubble bubble-${i + 1}`}>
            {i % 4 === 0 ? "🫧" : i % 3 === 0 ? "💧" : "○"}
          </div>
        ))}
      </div>
      {/* Ocean current lines throughout the screen */}
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
      </div>{" "}
      <motion.div
        className="absolute inset-0 flex items-center justify-center z-0"
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: 0, opacity: 0.09 }}
        transition={{
          duration: 5,
          ease: "easeOut",
        }}
      >
        {" "}
        <div className="waviy text-9xl font-bold text-white drop-shadow-2xl">
          {/* Blue Whale text with wavy animation */}
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
      {/* Swimming whales */}
      <div className="absolute inset-0">
        <div className="whale whale-1 active">🐋</div>
        <div className="whale whale-2">🐋</div>
        <div className="whale whale-3">🐋</div>
      </div>
      {/* Team member whales swimming freely in the ocean */}
      <div className="absolute inset-0 z-5">
        {" "}
        {teamMembers.map((member, index) => {
          // Calculate positioning to avoid tooltip overflow
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
              {/* Whale body */}
              <div className="relative inline-block">
                <div className="rotate-y-180">
                  <span className="text-6xl drop-shadow-xl">🐋</span>
                </div>

                {/* Member avatar with animation */}
                <motion.div
                  className="absolute top-1/2 left-1/2.5 transform -translate-x-1/2 -translate-y-1/2 text-lg bg-white/10 rounded-full p-1 shadow-lg"
                  variants={{
                    initial: {
                      x: "-50%",
                      y: "-50%",
                      scale: 1,
                    },
                    hover: {
                      x: "calc(80px)",
                      y: "calc(50px)",
                      scale: 1.2,
                      transition: {
                        type: "spring",
                        stiffness: 300,
                        damping: 25,
                      },
                    },
                  }}
                >
                  {member.avatar}
                </motion.div>
              </div>{" "}
              {/* Member info tooltip */}
              <div className="whale-tooltip absolute bg-white/95 rounded-xl px-8 py-5 text-lg shadow-2xl border border-blue-200 opacity-0 transition-all duration-300 z-30">
                <div className="font-bold text-blue-800 text-center text-xl mb-2 whitespace-nowrap">
                  {member.name}
                </div>
                <div className="text-blue-600 text-center relative text-lg mb-3 whitespace-nowrap">
                  {member.role}
                </div>
                <div className="flex justify-center">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={150}
                    height={150}
                    className="object-cover mt-2 rounded-lg"
                  />
                </div>{" "}
              </div>
            </motion.div>
          );
        })}
      </div>
      {/* Main content */}
      {/* <div className="relative z-10 container mx-auto px-4 py-8"> */}
      {/* Header */}
      {/* <header className="text-center mb-12">
          <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-2xl animate-bounce">
            🐋 Blue Whales 🐋
          </h1>
          <div className="text-2xl text-cyan-100 mb-8 leading-relaxed drop-shadow-lg">
            <p className="mb-2">🐋 Ẩn mình để lớn mạnh 🐋</p>
            <p>🐋 Đổi mới để dẫn đầu 🐋</p>
          </div>
        </header> */}
      {/* Team introduction */}
      {/* <section className="bg-white/5 rounded-3xl p-8 mb-12 shadow-2xl">
          <h2 className="text-4xl font-bold text-blue-800 mb-6 text-center">
            🌊 Giới thiệu về Team Blue Whales 🌊
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
            Chúng tôi là đội Blue Whales - một nhóm gồm 11 thành viên tài năng
            và nhiệt huyết! Giống như những chú cá voi xanh khổng lồ trong đại
            dương, chúng tôi tin vào sức mạnh của sự đoàn kết và khả năng thích
            ứng. Chúng tôi &quot;ẩn mình để lớn mạnh&quot; - không ngừng học hỏi
            và phát triển bản thân, đồng thời &quot;đổi mới để dẫn đầu&quot; -
            luôn tìm kiếm những ý tưởng sáng tạo để vượt qua thử thách và đạt
            được những mục tiêu cao nhất!
          </p>
        </section> */}
      {/* Team members title */}
      {/* <section className="text-center mb-8">
          <h2 className="text-5xl font-bold text-white drop-shadow-2xl animate-pulse">
            🐋 Đội ngũ Blue Whales 🐋
          </h2>
          <p className="text-xl text-cyan-100 mt-4 drop-shadow-lg">
            11 thành viên tài năng đang bơi lội trong đại dương tri thức
          </p>
        </section> */}
      {/* Illustrations section */}
      {/* <section className="bg-white/5 rounded-3xl p-8 mb-12 shadow-2xl">
          <h2 className="text-4xl font-bold text-blue-800 mb-8 text-center">
            🎨 Hình ảnh minh họa 🎨
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-8xl mb-4 animate-bounce">🐋</div>
              <h3 className="text-xl font-bold text-blue-700 mb-2">
                Sức mạnh đoàn kết
              </h3>
              <p className="text-gray-600">
                Như những chú cá voi bơi thành đàn, chúng tôi luôn hỗ trợ lẫn
                nhau
              </p>
            </div>
            <div className="text-center">
              <div className="text-8xl mb-4 animate-pulse">🌊</div>
              <h3 className="text-xl font-bold text-blue-700 mb-2">
                Thích ứng linh hoạt
              </h3>
              <p className="text-gray-600">
                Linh hoạt như dòng nước, chúng tôi thích ứng với mọi thay đổi
              </p>
            </div>
            <div className="text-center">
              <div className="text-8xl mb-4 animate-spin">💎</div>
              <h3 className="text-xl font-bold text-blue-700 mb-2">
                Giá trị bền vững
              </h3>
              <p className="text-gray-600">
                Tạo ra những giá trị quý giá và bền vững cho tổ chức
              </p>
            </div>
          </div>
        </section> */}
      {/* Slogan section */}
      {/* <section className="text-center">
          <div className="bg-gradient-to-r from-blue-700/30 via-blue-800/30 to-slate-800 rounded-3xl p-12 shadow-2xl">
            <h2 className="text-5xl font-bold text-white mb-8">
              ✨ Slogan của chúng tôi ✨
            </h2>
            <div className="text-3xl text-cyan-100 leading-relaxed">
              <p className="mb-4 animate-pulse">🐋 Ẩn mình để lớn mạnh 🐋</p>
              <p className="animate-pulse">🐋 Đổi mới để dẫn đầu 🐋</p>
            </div>
          </div>        </section> */}
      {/* </div> */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <Link
          href="/hello"
          className="inline-block opacity-30 px-8 py-4 bg-blue-500/10 backdrop-blur-sm hover:bg-blue-600/10 hover:opacity-100 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border border-blue-400/50"
        >
          🌊 Visit HelloWorld Page 🐋
        </Link>
      </div>
    </div>
  );
}
