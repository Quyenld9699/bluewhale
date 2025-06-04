"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

interface PageTransitionProps {
  children: React.ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    setIsTransitioning(true);

    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 1000); // Increased from 1000ms to 2000ms to see the content better

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      <div
        className={`page-transition-loader ${
          isTransitioning ? "loader--active" : ""
        }`}
      >
        <div className="loader__tile loader__tile--1">
          <span className="tile-emoji">🐳</span>
          <span className="tile-text">W</span>
        </div>
        <div className="loader__tile loader__tile--2">
          <span className="tile-emoji">🐋</span>
          <span className="tile-text">H</span>
        </div>
        <div className="loader__tile loader__tile--3">
          <span className="tile-emoji">🐳</span>
          <span className="tile-text">A</span>
        </div>
        <div className="loader__tile loader__tile--4">
          <span className="tile-emoji">🐋</span>
          <span className="tile-text">L</span>
        </div>
        <div className="loader__tile loader__tile--5">
          <span className="tile-emoji">🐳</span>
          <span className="tile-text">E</span>
        </div>
      </div>
      {/* Page Content */}
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
