import Link from "next/link";

export default function HelloWorld() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-400 via-blue-600 to-blue-900">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-white mb-8 animate-bounce">
          HelloWorld
        </h1>
        <p className="text-2xl text-blue-100 opacity-80">
          Welcome to the Blue Whales Hello World page! 🐋
        </p>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-block px-8 py-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors duration-300 transform hover:scale-105"
          >
            Back to Blue Whales Team
          </Link>
        </div>
      </div>
    </div>
  );
}
