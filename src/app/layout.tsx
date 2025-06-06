import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./components/page-transition.scss";
import PageTransition from "./components/PageTransition";
import BackgroundAudio from "./components/BackgroundAudio";
import { AudioProvider } from "./contexts/AudioContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Blue Whales Team - Ẩn mình để lớn mạnh, Đổi mới để dẫn đầu",
  description:
    "Trang giới thiệu team Blue Whales - 10 thành viên tài năng với tinh thần đoàn kết như những chú cá voi xanh trong đại dương",
  keywords: "Blue Whales, team building, cá voi xanh, đoàn kết, sáng tạo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AudioProvider>
          <BackgroundAudio />
          <PageTransition>{children}</PageTransition>
        </AudioProvider>
      </body>
    </html>
  );
}
