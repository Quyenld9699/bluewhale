"use client";

import './ocean-animations.scss';

interface TeamMember {
    id: number;
    name: string;
    role: string;
    avatar: string;
}

export default function Home() {
    const teamMembers: TeamMember[] = [
        { id: 1, name: "Nguyễn Văn A", role: "Team Leader", avatar: "👨‍💼" },
        { id: 2, name: "Trần Thị B", role: "Developer", avatar: "👩‍💻" },
        { id: 3, name: "Lê Văn C", role: "Designer", avatar: "👨‍🎨" },
        { id: 4, name: "Phạm Thị D", role: "Tester", avatar: "👩‍🔬" },
        { id: 5, name: "Hoàng Văn E", role: "DevOps", avatar: "👨‍🔧" },
        { id: 6, name: "Vũ Thị F", role: "BA", avatar: "👩‍📊" },
        { id: 7, name: "Đỗ Văn G", role: "Developer", avatar: "👨‍💻" },
        { id: 8, name: "Bùi Thị H", role: "Designer", avatar: "👩‍🎨" },
        { id: 9, name: "Lý Văn I", role: "Developer", avatar: "👨‍💻" },
        { id: 10, name: "Cao Thị J", role: "Scrum Master", avatar: "👩‍💼" },
        { id: 11, name: "Trương Văn K", role: "QA Lead", avatar: "👨‍🔬" },
    ];

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
                        {i % 4 === 0 ? '🫧' : i % 3 === 0 ? '💧' : '○'}
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
            </div>

            {/* Swimming whales */}
            <div className="absolute inset-0">
                <div className="whale whale-1 active">🐋</div>
                <div className="whale whale-2">🐋</div>
                <div className="whale whale-3">🐋</div>
            </div>

            {/* Team member whales swimming freely in the ocean */}
            <div className="absolute inset-0 z-5">
                {teamMembers.map((member, index) => (
                    <div
                        key={member.id}
                        className="team-whale-swimming"
                        style={{
                            top: `${10 + (index * 7) % 70}%`,
                            animationDelay: `${index * 2}s`,
                            animationDuration: `${20 + (index % 4) * 5}s`,
                        }}
                    >
                        {/* Whale body */}
                        <div className="relative inline-block">
                            <span className="text-5xl drop-shadow-xl">🐋</span>
                            {/* Member avatar on whale */}
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg bg-white/90 rounded-full p-1 border-2 border-blue-300 shadow-lg">{member.avatar}</div>
                            
                            {/* Bubble trail */}
                            <div className="absolute -right-6 top-1/2 transform -translate-y-1/2">
                                <span className="bubble-trail">💭</span>
                            </div>
                        </div>

                        {/* Member info tooltip */}
                        <div className="whale-tooltip absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white/95 rounded-lg px-3 py-2 text-sm shadow-xl border border-blue-200 opacity-0 transition-all duration-300 whitespace-nowrap z-30">
                            <div className="font-bold text-blue-800">{member.name}</div>
                            <div className="text-blue-600">{member.role}</div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Main content */}
            <div className="relative z-10 container mx-auto px-4 py-8">
                {/* Header */}
                <header className="text-center mb-12">
                    <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-2xl animate-bounce">🐋 Blue Whales 🐋</h1>
                    <div className="text-2xl text-cyan-100 mb-8 leading-relaxed drop-shadow-lg">
                        <p className="mb-2">🐋 Ẩn mình để lớn mạnh 🐋</p>
                        <p>🐋 Đổi mới để dẫn đầu 🐋</p>
                    </div>
                </header>

                {/* Team introduction */}
                <section className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 mb-12 shadow-2xl">
                    <h2 className="text-4xl font-bold text-blue-800 mb-6 text-center">🌊 Giới thiệu về Team Blue Whales 🌊</h2>
                    <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
                        Chúng tôi là đội Blue Whales - một nhóm gồm 11 thành viên tài năng và nhiệt huyết! Giống như những chú cá voi xanh khổng lồ trong đại dương, chúng tôi tin vào sức mạnh của sự
                        đoàn kết và khả năng thích ứng. Chúng tôi "ẩn mình để lớn mạnh" - không ngừng học hỏi và phát triển bản thân, đồng thời "đổi mới để dẫn đầu" - luôn tìm kiếm những ý tưởng sáng
                        tạo để vượt qua thử thách và đạt được những mục tiêu cao nhất!
                    </p>
                </section>

                {/* Team members title */}
                <section className="text-center mb-8">
                    <h2 className="text-5xl font-bold text-white drop-shadow-2xl animate-pulse">🐋 Đội ngũ Blue Whales 🐋</h2>
                    <p className="text-xl text-cyan-100 mt-4 drop-shadow-lg">11 thành viên tài năng đang bơi lội trong đại dương tri thức</p>
                </section>

                {/* Illustrations section */}
                <section className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 mb-12 shadow-2xl">
                    <h2 className="text-4xl font-bold text-blue-800 mb-8 text-center">🎨 Hình ảnh minh họa 🎨</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="text-8xl mb-4 animate-bounce">🐋</div>
                            <h3 className="text-xl font-bold text-blue-700 mb-2">Sức mạnh đoàn kết</h3>
                            <p className="text-gray-600">Như những chú cá voi bơi thành đàn, chúng tôi luôn hỗ trợ lẫn nhau</p>
                        </div>
                        <div className="text-center">
                            <div className="text-8xl mb-4 animate-pulse">🌊</div>
                            <h3 className="text-xl font-bold text-blue-700 mb-2">Thích ứng linh hoạt</h3>
                            <p className="text-gray-600">Linh hoạt như dòng nước, chúng tôi thích ứng với mọi thay đổi</p>
                        </div>
                        <div className="text-center">
                            <div className="text-8xl mb-4 animate-spin">💎</div>
                            <h3 className="text-xl font-bold text-blue-700 mb-2">Giá trị bền vững</h3>
                            <p className="text-gray-600">Tạo ra những giá trị quý giá và bền vững cho tổ chức</p>
                        </div>
                    </div>
                </section>

                {/* Slogan section */}
                <section className="text-center">
                    <div className="bg-gradient-to-r from-blue-700 via-blue-800 to-slate-800 rounded-3xl p-12 shadow-2xl border border-blue-600/30">
                        <h2 className="text-5xl font-bold text-white mb-8">✨ Slogan của chúng tôi ✨</h2>
                        <div className="text-3xl text-cyan-100 leading-relaxed">
                            <p className="mb-4 animate-pulse">🐋 Ẩn mình để lớn mạnh 🐋</p>
                            <p className="animate-pulse animation-delay-1000">🐋 Đổi mới để dẫn đầu 🐋</p>
                        </div>
                    </div>
                </section>
            </div>

            <style jsx>{`
                .light-ray {
                    position: absolute;
                    top: 0;
                    width: 80px;
                    height: 100%;
                    background: linear-gradient(to bottom, rgba(135, 206, 235, 0.4), transparent);
                    animation: lightRay 8s ease-in-out infinite;
                    transform-origin: top;
                }

                .light-ray-1 {
                    left: 20%;
                    animation-delay: 0s;
                    transform: skew(-10deg);
                }

                .light-ray-2 {
                    left: 50%;
                    animation-delay: 2s;
                    transform: skew(5deg);
                }

                .light-ray-3 {
                    left: 75%;
                    animation-delay: 4s;
                    transform: skew(-5deg);
                }

                @keyframes lightRay {
                    0%,
                    100% {
                        opacity: 0.2;
                        transform: scaleY(1) skew(-10deg);
                    }
                    50% {
                        opacity: 0.6;
                        transform: scaleY(1.2) skew(-15deg);
                    }
                }

                .wave {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(45deg, transparent, rgba(135, 206, 235, 0.15), transparent);
                    animation: wave 6s linear infinite;
                }

                .wave1 {
                    animation-delay: 0s;
                }
                .wave2 {
                    animation-delay: 2s;
                }
                .wave3 {
                    animation-delay: 4s;
                }

                @keyframes wave {
                    0% {
                        transform: translateX(-100%) rotate(45deg);
                    }
                    100% {
                        transform: translateX(100vw) rotate(45deg);
                    }
                }

                .bubble {
                    position: absolute;
                    animation: bubble 4s infinite ease-in-out;
                    font-size: 1.5rem;
                    filter: drop-shadow(0 0 8px rgba(135, 206, 235, 0.6));
                }

                @keyframes bubble {
                    0% {
                        transform: translateY(100vh) scale(0);
                        opacity: 0;
                    }
                    50% {
                        opacity: 1;
                    }
                    100% {
                        transform: translateY(-100px) scale(1);
                        opacity: 0;
                    }
                }

                .whale {
                    position: absolute;
                    font-size: 4rem;
                    animation: swim 8s infinite ease-in-out;
                    opacity: 0.3;
                    transition: opacity 0.5s;
                }

                .whale.active {
                    opacity: 1;
                }

                .whale-1 {
                    top: 20%;
                    animation-delay: 0s;
                }

                .whale-2 {
                    top: 50%;
                    animation-delay: 2s;
                }

                .whale-3 {
                    top: 70%;
                    animation-delay: 4s;
                }

                @keyframes swim {
                    0% {
                        transform: translateX(-200px) scaleX(1);
                    }
                    50% {
                        transform: translateX(50vw) scaleX(1);
                    }
                    100% {
                        transform: translateX(calc(100vw + 200px)) scaleX(-1);
                    }
                }

                /* Team whale swimming freely in ocean */
                .team-whale-swimming {
                    position: absolute;
                    animation: freeSwimming 20s infinite linear;
                    cursor: pointer;
                    z-index: 5;
                    transition: transform 0.3s ease;
                }

                .team-whale-swimming:hover {
                    transform: scale(1.2);
                    filter: drop-shadow(0 0 25px rgba(59, 130, 246, 1));
                    z-index: 30;
                }

                .team-whale-swimming:hover .whale-tooltip {
                    opacity: 1;
                    transform: translateX(-50%) translateY(0) scale(1.1);
                }

                @keyframes freeSwimming {
                    0% {
                        transform: translateX(-150px) translateY(0) scaleX(1) rotate(0deg);
                        opacity: 0;
                    }
                    3% {
                        opacity: 1;
                    }
                    15% {
                        transform: translateX(15vw) translateY(-30px) scaleX(1) rotate(-3deg);
                    }
                    25% {
                        transform: translateX(30vw) translateY(20px) scaleX(1) rotate(2deg);
                    }
                    35% {
                        transform: translateX(45vw) translateY(-15px) scaleX(1) rotate(-1deg);
                    }
                    50% {
                        transform: translateX(60vw) translateY(25px) scaleX(1) rotate(3deg);
                    }
                    65% {
                        transform: translateX(75vw) translateY(-20px) scaleX(-1) rotate(-2deg);
                    }
                    80% {
                        transform: translateX(90vw) translateY(10px) scaleX(-1) rotate(1deg);
                    }
                    97% {
                        opacity: 1;
                    }
                    100% {
                        transform: translateX(calc(100vw + 150px)) translateY(0) scaleX(-1) rotate(0deg);
                        opacity: 0;
                    }
                }

                /* Swimming team member whales */
                .swimming-whale {
                    position: absolute;
                    animation: memberSwim 15s infinite linear;
                    cursor: pointer;
                    z-index: 20;
                    transition: transform 0.3s ease;
                }

                .swimming-whale:hover {
                    transform: scale(1.1);
                    filter: drop-shadow(0 0 20px rgba(59, 130, 246, 0.8));
                }

                .swimming-whale::before {
                    content: "💧";
                    position: absolute;
                    top: -20px;
                    left: -10px;
                    font-size: 1rem;
                    animation: splash 2s infinite ease-in-out;
                    opacity: 0.6;
                }

                .swimming-whale::after {
                    content: "〰️";
                    position: absolute;
                    top: 50%;
                    left: -30px;
                    transform: translateY(-50%) rotate(90deg);
                    font-size: 1.5rem;
                    opacity: 0.4;
                    animation: tail 1.5s infinite ease-in-out;
                }

                @keyframes splash {
                    0%,
                    100% {
                        transform: translateY(0) scale(0.8);
                        opacity: 0;
                    }
                    50% {
                        transform: translateY(-15px) scale(1.2);
                        opacity: 0.8;
                    }
                }

                @keyframes tail {
                    0%,
                    100% {
                        transform: translateY(-50%) rotate(85deg) scale(1);
                    }
                    50% {
                        transform: translateY(-50%) rotate(95deg) scale(1.1);
                    }
                }

                /* Ocean current lines */
                .ocean-current {
                    position: absolute;
                    width: 200px;
                    height: 2px;
                    background: linear-gradient(90deg, transparent, rgba(135, 206, 235, 0.4), transparent);
                    animation: current 6s infinite ease-in-out;
                    left: -200px;
                }

                /* Global ocean currents throughout the screen */
                .ocean-current-global {
                    position: absolute;
                    width: 300px;
                    height: 1px;
                    background: linear-gradient(90deg, transparent, rgba(135, 206, 250, 0.3), rgba(99, 179, 237, 0.5), transparent);
                    animation: globalCurrent 10s infinite ease-in-out;
                    left: -300px;
                }

                @keyframes globalCurrent {
                    0% {
                        transform: translateX(0) scaleX(0.5);
                        opacity: 0;
                    }
                    20% {
                        opacity: 0.6;
                        transform: translateX(20vw) scaleX(1);
                    }
                    80% {
                        opacity: 0.6;
                        transform: translateX(80vw) scaleX(1);
                    }
                    100% {
                        transform: translateX(calc(100vw + 300px)) scaleX(0.5);
                        opacity: 0;
                    }
                }

                @keyframes current {
                    0% {
                        transform: translateX(0);
                        opacity: 0;
                    }
                    50% {
                        opacity: 1;
                    }
                    100% {
                        transform: translateX(calc(100vw + 200px));
                        opacity: 0;
                    }
                }

                /* Individual whale member animations with different speeds */
                ${[...Array(11)]
                    .map(
                        (_, i) => `
                .whale-member-${i + 1} {
                    animation-duration: ${10 + (i % 3) * 2}s;
                    animation-delay: ${i * 1.1}s;
                }
                `
                    )
                    .join("")}

                ${[...Array(30)]
                    .map(
                        (_, i) => `
          .bubble-${i + 1} {
            left: ${Math.random() * 100}%;
            animation-delay: ${Math.random() * 6}s;
            animation-duration: ${3 + Math.random() * 5}s;
            font-size: ${0.8 + Math.random() * 1}rem;
            opacity: ${0.4 + Math.random() * 0.4};
          }
        `
                    )
                    .join("")}

                .bubble-trail {
                    animation: bubbleFloat 3s infinite ease-in-out;
                    display: inline-block;
                    opacity: 0.7;
                }

                @keyframes bubbleFloat {
                    0%,
                    100% {
                        transform: translateY(0) scale(0.8);
                        opacity: 0.3;
                    }
                    50% {
                        transform: translateY(-20px) scale(1.2);
                        opacity: 0.8;
                    }
                }
            `}</style>
        </div>
    );
}
