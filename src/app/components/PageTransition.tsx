"use client";

import { useEffect, useState } from "react";
import whale1 from "public/whale/whale1.png";
import whale2 from "public/whale/whale2.png";
import Image from "next/image";

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const handleTransitionStart = () => {
      setIsTransitioning(true);
    };

    const handleTransitionEnd = () => {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 1000);

      return () => clearTimeout(timer);
    };

    const handleRouteChangeComplete = () => {
      handleTransitionEnd();
    };

    window.addEventListener("transitionStart", handleTransitionStart);
    window.addEventListener("routeChangeComplete", handleRouteChangeComplete);

    return () => {
      window.removeEventListener("transitionStart", handleTransitionStart);
      window.removeEventListener(
        "routeChangeComplete",
        handleRouteChangeComplete
      );
    };
  }, []);

  return (
    <>
      <div
        className={`page-transition-loader ${
          isTransitioning ? "loader--active" : ""
        }`}
      >
        <div className="loader__tile loader__tile--1">
          <Image src={whale2} alt="whale-2" className="size-10 tile-emoji" />
          <span className="tile-text">W</span>
        </div>
        <div className="loader__tile loader__tile--2">
          <Image src={whale1} alt="whale-1" className="size-10 tile-emoji" />
          <span className="tile-text">H</span>
        </div>
        <div className="loader__tile loader__tile--3">
          <Image src={whale2} alt="whale-2" className="size-10 tile-emoji" />
          <span className="tile-text">A</span>
        </div>
        <div className="loader__tile loader__tile--4">
          <Image src={whale1} alt="whale-1" className="size-10 tile-emoji" />
          <span className="tile-text">L</span>
        </div>
        <div className="loader__tile loader__tile--5">
          <Image src={whale2} alt="whale-2" className="size-10 tile-emoji" />
          <span className="tile-text">E</span>
        </div>
      </div>
      <div
        className={`page-content ${
          isTransitioning ? "page-content--hidden" : ""
        }`}
      >
        {children}
      </div>
    </>
  );
}
