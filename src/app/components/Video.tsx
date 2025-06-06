"use client";

import { useState, useEffect } from "react";
import "./video-modal.scss";
import TransitionLink from "./TransitionLink";

export function Video() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const VIDEO_ID = "6EX7tyc7YTA";

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isModalOpen) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const handleModalClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };
  return (
    <>
      <div className="flex flex-row items-center justify-center gap-4 py-8">
        <button
          className="inline-block opacity-30 px-8 py-4 bg-blue-500/10 backdrop-blur-sm hover:bg-blue-600/10 hover:opacity-100 text-white font-semibold rounded-xl transition-all cursor-pointer duration-300 transform hover:scale-105 hover:shadow-2xl border border-blue-400/50"
          onClick={openModal}
        >
          🌊 Play 🐋
        </button>
        <TransitionLink
          href="/"
          className="inline-block opacity-30 px-8 py-4 bg-blue-500/10 backdrop-blur-sm hover:bg-blue-600/10 hover:opacity-100 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border border-blue-400/50"
        >
          🌊 Back To Team Member 🐋
        </TransitionLink>
      </div>

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm video-modal"
          onClick={handleModalClick}
        >
          <div className="relative max-w-7xl w-full mx-4 video-modal-content">
            <button
              onClick={closeModal}
              className="absolute -top-12 right-0 text-white hover:text-blue-300 transition-colors duration-200 z-10 modal-close-button"
              aria-label="Close video"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            {/* Video Player */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-blue-400/50">
              <iframe
                className="w-full aspect-video"
                src={`https://www.youtube.com/embed/${VIDEO_ID}?autoplay=1&rel=0`}
                title="Blue Whales Team Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <div className="absolute -bottom-8 left-0 text-white/70 text-sm">
              Press <kbd className="bg-white/20 px-1 rounded">Esc</kbd> to close
              or click outside
            </div>
          </div>
        </div>
      )}
    </>
  );
}
