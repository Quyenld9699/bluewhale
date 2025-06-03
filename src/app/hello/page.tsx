import TransitionLink from "../components/TransitionLink";

export default function HelloWorld() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-400 via-blue-600 to-blue-900">
      <div className="relative z-10 container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-6xl font-bold text-white mb-4 drop-shadow-2xl animate-bounce">
            🐋 Blue Whales 🐋
          </h1>
          <div className="text-2xl text-cyan-100 mb-8 leading-relaxed drop-shadow-lg">
            <p className="mb-2">🐋 Ẩn mình để lớn mạnh 🐋</p>
            <p>🐋 Đổi mới để dẫn đầu 🐋</p>
          </div>
        </header>
        <section className="bg-white/5 rounded-3xl p-8 mb-12 shadow-2xl">
          <h2 className="text-4xl font-bold text-blue-800 mb-6 text-center">
            🌊 Chúng tôi là ai 🌊
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed text-center max-w-4xl mx-auto">
            Blue Whales - một nhóm gồm 11 thành viên tài năng và nhiệt huyết!
            Giống như những chú cá voi xanh khổng lồ trong đại dương, chúng tôi
            tin vào sức mạnh của sự đoàn kết và khả năng thích ứng. Chúng tôi
            &quot;ẩn mình để lớn mạnh&quot; - không ngừng học hỏi và phát triển
            bản thân, đồng thời &quot;đổi mới để dẫn đầu&quot; - luôn tìm kiếm
            những ý tưởng sáng tạo để vượt qua thử thách và đạt được những mục
            tiêu cao nhất!
          </p>
        </section>
        <section className="text-center mb-8">
          <h2 className="text-5xl font-bold text-white drop-shadow-2xl animate-pulse">
            🐋 Đội ngũ Blue Whales 🐋
          </h2>
          <p className="text-xl text-cyan-100 mt-4 drop-shadow-lg">
            11 thành viên tài năng đang bơi lội trong đại dương tri thức
          </p>
        </section>
        <section className="bg-white/5 rounded-3xl p-8 mb-12 shadow-2xl">
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
              <div className="text-8xl mb-4">💎</div>
              <h3 className="text-xl font-bold text-blue-700 mb-2">
                Giá trị bền vững
              </h3>
              <p className="text-gray-600">
                Tạo ra những giá trị quý giá và bền vững cho tổ chức
              </p>
            </div>
          </div>
        </section>
        <div className="mt-8">
          <TransitionLink
            href="/"
            className="inline-block px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors duration-300 transform hover:scale-105"
          >
            Back to Blue Whales Team
          </TransitionLink>
        </div>
      </div>
    </div>
  );
}
