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
    }, 1000);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      <div
        className={`page-transition-loader ${
          isTransitioning ? "loader--active" : ""
        }`}
      >
        <div className="loader__tile loader__tile--1"></div>
        <div className="loader__tile loader__tile--2"></div>
        <div className="loader__tile loader__tile--3"></div>
        <div className="loader__tile loader__tile--4"></div>
        <div className="loader__tile loader__tile--5"></div>
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
