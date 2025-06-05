import MorphingText from "../components/MorphingText";
import TypewriterText from "../components/TypewriterText";
import { Video } from "../components/Video";
import "../components/typewriter.scss";

export default function WeAre() {
  const morphingTexts = [
    "🐋 Blue Whale 🐋",
    "Ẩn mình để lớn mạnh",
    "Đổi mới để dẫn đầu",
    "11 thành viên tài năng",
    "Đại dương là sân nhà",
    "Sáng tạo không giới hạn",
    "Blue Whale Team!",
  ];

  const descriptionText =
    "Blue Whale - một nhóm gồm 11 thành viên tài năng và nhiệt huyết! " +
    "Giống như những chú cá voi xanh bơi trong đại dương tri thức, chúng tôi " +
    "tin vào sức mạnh của sự đoàn kết và khả năng thích ứng. Chúng tôi " +
    '"ẩn mình để lớn mạnh" - không ngừng học hỏi và phát triển ' +
    'bản thân, đồng thời "đổi mới để dẫn đầu" - luôn tìm kiếm ' +
    "những ý tưởng sáng tạo để vượt qua thử thách và vươn đến những mục " +
    "tiêu mới!";

  return (
    <div className="min-h-screen overflow-hidden flex items-center justify-center bg-gradient-to-b from-blue-400 via-blue-600 to-blue-900">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-200 to-slate-900"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500 to-transparent opacity-60"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-800 to-slate-900 opacity-80"></div>
      <div className="relative z-10 container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <div className="mb-8">
            <MorphingText
              delayTime={1}
              texts={morphingTexts}
              className="text-white drop-shadow-2xl mt-4"
            />
          </div>
        </header>
        <section className="bg-white/5 rounded-3xl p-8 mb-12 shadow-2xl">
          <h2 className="text-5xl font-bold text-blue-800 mb-6 text-center">
            🌊 Chúng tôi là ai 🌊
          </h2>
          <div className="text-2xl text-amber-50 leading-relaxed text-center max-w-4xl mx-auto">
            <TypewriterText
              text={descriptionText}
              speed={10}
              delay={1500}
              className="typewriter-text"
              showCursor={true}
              cursorChar="🐋"
              highlightPhrases={[
                "Blue Whale",
                "bơi trong đại dương tri thức",
                "ẩn mình để lớn mạnh",
                "đổi mới để dẫn đầu",
                "11 thành viên",
                "cá voi xanh khổng lồ",
                "đoàn kết",
                "thích ứng",
              ]}
            />
          </div>
        </section>
        <Video />
      </div>
    </div>
  );
}
