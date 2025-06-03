"use client";

import { useRouter, usePathname } from "next/navigation";
import { useCallback } from "react";

export function usePageTransition() {
  const router = useRouter();
  const pathname = usePathname();

  const navigateWithTransition = useCallback(
    (href: string) => {
      // Don't navigate if we're already on the target page
      if (pathname === href) return;

      // Add transition class to trigger animation
      const loader = document.querySelector(".page-transition-loader");
      if (loader) {
        loader.classList.add("loader--active");
      }

      // Wait for transition to complete before navigating
      setTimeout(() => {
        router.push(href);
      }, 1000); // Navigate after tiles cover the screen
    },
    [router, pathname]
  );

  return { navigateWithTransition };
}
